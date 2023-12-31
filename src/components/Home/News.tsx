"use client";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { IBlog } from "@/interfaces/common";
import Link from "next/link";
import { useBlogsQuery } from "@/redux/Api/blogApi";

const News = () => {
  const { data: ourNews } = useBlogsQuery(undefined);

  return (
    <section className=" ">
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
          <div className="hidden md:flex justify-end -mt-[60px] ">
            <Link href="/blog">
              <span className="bg-[#EA062B] text-white py-3 px-5 rounded-full hover:bg-[#111111] transition duration-300">
                View All
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[100px]">
          {ourNews?.data?.slice(0, 3).map((news: IBlog) => {
            return <NewsCard news={news} key={news._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
