import { ourNews } from "@/constants/OurNews";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const News = () => {
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
          {ourNews.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
