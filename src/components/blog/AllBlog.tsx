import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { ourNews } from "@/constants/OurNews";
import { IOurNews } from "@/interfaces/common";

type AllBlogProps = {};

async function getData() {
  const res = await fetch("http://localhost:5000/api/v1/blog");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const AllBlog: React.FC<AllBlogProps> = async () => {
  const ourNews = await getData();

  return (
    <section className="bg-[#f5f5f5] pt-10 pb-40">
      <div className="py-10 common">
        <div className="mb-10">
          <div className="text-center">
            <h5 className="text-[#EA062B] text-[16px] uppercase mb-4">
              our news
            </h5>
            <h4 className="capitalize text-2xl lg:text-5xl font-bold text-[#111111] mb-7">
              checkout our latest & updates
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ourNews?.data?.slice(0, 3).map((news: IOurNews) => {
            return <NewsCard news={news} key={news._id} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default AllBlog;
