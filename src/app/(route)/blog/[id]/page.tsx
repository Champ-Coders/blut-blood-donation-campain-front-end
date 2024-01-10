"use client";
import React from "react";
import Image from "next/image";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";

import Comments from "@/components/Comments/Comments";

import userIcon from "../../../../../public/assets/icon/userIcon.png";
import Link from "next/link";
import { useBlogQuery, useBlogsQuery } from "@/redux/Api/blogApi";
import LoadingPage from "@/app/loading";

type BlogDetailProps = {
  params: { id: string };
};

const BlogDetail: React.FC<BlogDetailProps> = ({
  params,
}: {
  params: { id: string };
}) => {
  // const newData = await getData(params.id);
  const { data: newData, isLoading } = useBlogQuery(params.id);
  const data = newData?.data;

  // created at
  const createdTime: any = new Date(data?.createdAt).toDateString();

  // console.log(data);
  // const allBlog = await getAllBlog();
  const { data: allBlog } = useBlogsQuery(undefined);

  // filter data allBlog.data !=== data._id
  const filterData = allBlog?.data?.filter(
    (item: any) => item?._id !== data?._id
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <main>
      <section>
        <BannerBreadcrumb
          items={[
            {
              label: "Blog Detail",
            },
          ]}
          title="Blog Detail"
        />
      </section>
      <section>
        <div className="common">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-10">
            <div className="grid-cols-1 md:col-span-3 lg:col-span-8">
              <div>
                <h2 className="text-5xl text-[#111] font-bold mb-7 font-playfair">
                  {data?.title}
                </h2>

                <div className="h-[400px] overflow-hidden mt-5 mb-10">
                  <Image
                    width={839}
                    height={438}
                    src={data?.image}
                    alt={data?.title}
                  />
                </div>

                {/* author */}

                <div className="flex items-center mb-5">
                  <div className="mr-5">
                    <Image
                      src={data?.user?.image ?? userIcon}
                      width={50}
                      height={50}
                      alt={data?.author?.name}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                  <div>
                    <h5 className="text-[#111]  text-[14px]">
                      {data?.user?.name}
                    </h5>
                    <p className="text-[#666] font-roboto text-[12px]">
                      {createdTime}
                    </p>
                  </div>
                </div>

                <p
                  className="text-base text-[#666] leading-7 font-roboto"
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
                {/* {data.description}
                </p> */}
              </div>
            </div>
            <div
              className="grid-cols-1 md:col-span-3 lg:col-span-4
             h-screen sticky top-24"
            >
              <div className="hidden py-2 xl:col-span-3 lg:col-span-4  md:block">
                <div className="mb-8 space-x-5 border-b-2 border-opacity-10 ">
                  <button
                    type="button"
                    className="pb-5 text-xs font-bold uppercase border-b-2 border-primary "
                  >
                    Latest
                  </button>
                  <button
                    type="button"
                    className="pb-5 text-xs font-bold uppercase border-b-2  "
                  >
                    Popular
                  </button>
                </div>
                <div className="flex flex-col divide-y  ">
                  {/* Side Blog */}

                  {filterData?.map((item: any, i: number) => (
                    <Link
                      href={`/blog/${item?._id}`}
                      key={i}
                      className="flex px-1 py-4"
                    >
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        width={500}
                        height={500}
                        className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      />

                      <div className="flex flex-col flex-grow">
                        <p className="font-serif hover:underline">
                          {item?.title.slice(0, 30) + "..."}
                        </p>
                        {/* description */}

                        <p
                          dangerouslySetInnerHTML={{
                            __html: item?.description.slice(0, 50) + "...",
                          }}
                        />

                        <div className="mt-auto text-xs ">
                          {/*add 5 minutes ago  */}
                          {
                            <time dateTime="2020-03-16">
                              {new Date(item?.createdAt).toDateString()}
                            </time>
                          }
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}

          <Comments id={params.id} comment={data?.comments} />
        </div>
      </section>
    </main>
  );
};
export default BlogDetail;
