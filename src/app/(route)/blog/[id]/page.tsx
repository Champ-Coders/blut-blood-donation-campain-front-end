import React from "react";
import image from "../../../../../public/assets/our-news/activity.png";
import Image from "next/image";
import Breadcrumb from "@/components/UI/BreadCrumb";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import Button from "@/components/Button/Button";
import config from "@/config/config";
import Comments from "@/components/Comments/Comments";

type BlogDetailProps = {
  params: { id: string };
};

async function getData(id: string) {
  const res = await fetch(`${config.apiBaseUrl}/blog/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogDetail: React.FC<BlogDetailProps> = async ({
  params,
}: {
  params: { id: string };
}) => {
  const newData = await getData(params.id);
  const data = newData?.data;
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
                  {data.title}
                </h2>

                <div className="h-[400px] overflow-hidden mt-5 mb-10">
                  <Image
                    width={839}
                    height={438}
                    src={data.image}
                    alt={data.title}
                  />
                </div>
                <p className="text-base text-[#666] leading-7 font-roboto">
                  {data.description}
                </p>
              </div>
            </div>
            <div className="grid-cols-1 md:col-span-3 lg:col-span-4">
              <div className="bg-primary p-5 text-white ">
                <h5 className="text-3xl font-semibold mb-5 font-playfair">
                  Blood Excellence
                </h5>
                <h3 className="text-4xl font-semibold mb-5 font-playfair">
                  Expanded Blood Donate Services Here
                </h3>
                <p className="mb-5 font-roboto">
                  There are many variations of passages Lorem Ipsum available,
                  but the majority suffered of alteration in some form,
                </p>
                <Button
                  type="button"
                  className="!bg-[#111] text-white hover:bg-white hover:text-[#111] transition duration-300 "
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Comments */}

          <Comments />
        </div>
      </section>
    </main>
  );
};
export default BlogDetail;
