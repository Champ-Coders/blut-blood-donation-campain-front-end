"use client";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { IBlog } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import { useBlogsQuery } from "@/redux/Api/blogApi";
import LoadingPage from "@/app/loading";

const AllBlog: React.FC = () => {
  const { data: ourNews, isLoading } = useBlogsQuery(undefined);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      {/* testing */}
      <div className="">
        <main className="common">
          {/* <!-- featured section --> */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            {/* <!-- main post --> */}
            <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
              <Image
                src={ourNews?.data?.[0]?.image}
                className="rounded-md object-cover w-full h-64"
                width={500}
                height={500}
                alt="Picture of the author"
              />

              <span className="text-primary text-sm hidden md:block mt-4">
                {" "}
                Blood Donation{" "}
              </span>
              <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                {ourNews?.data?.[0]?.title}
              </h1>
              <p
                className="text-gray-600 mb-4"
                dangerouslySetInnerHTML={{
                  __html:
                    ourNews?.data?.[0]?.description?.slice(0, 400) + "...",
                }}
              />
              <Link
                href={`/blog/${ourNews?.data?.[0]?._id}`}
                className="inline-block px-6 py-3 mt-2 rounded-md bg-primary hover:bg-black text-gray-100"
              >
                Read more
              </Link>
            </div>

            {/* <!-- sub-main posts --> */}
            <div className="w-full md:w-4/7">
              {/* <!-- post 1 --> */}

              {ourNews?.data?.slice(1, 5).map((news: IBlog, i: number) => {
                return (
                  <div
                    key={i}
                    className="rounded w-full flex flex-col md:flex-row mb-10 "
                  >
                    <Image
                      src={news?.image}
                      className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 md:w-[200px]"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />

                    <div className="bg-white rounded px-4">
                      <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                        {news?.title?.slice(0, 30) + "..."}
                      </div>
                      <p
                        className=" p-2 pl-0 pt-1 text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: news?.description?.slice(0, 150) + "...",
                        }}
                      />

                      <Link
                        href={`/blog/${news?._id}`}
                        className="text-[12px] hover:text-primary "
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <!-- end featured section --> */}

          {/* <!-- recent posts --> */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Latest Blogs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ourNews?.data?.map((news: IBlog, i: number) => (
              <NewsCard news={news} key={i} />
            ))}
          </div>
          {/* <!-- end recent posts --> */}
        </main>
        {/* <!-- main ends here --> */}
      </div>
    </>
  );
};
export default AllBlog;
