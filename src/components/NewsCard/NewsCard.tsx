import { IOurNews } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type NewsCardProps = {
  news: IOurNews;
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div>
      <div>
        <Image className="w-full h-full" src={news.image} alt={news.title} />
        <div className="p-[25px] shadow-3xl bg-white">
          <div>
            <p className="flex flex-wrap text-[#ea062b] items-center text-xl gap-2 lg:gap-[25px] mb-[21px]">
              <FaClock />
              {news.date}
              <IoLogoWechat />
              {news.comment}
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-[#111111] font-bold mb-[9px]">
              {news.title}
            </h3>
            <p className="text-[#666]">{news.description}</p>
            <Link
              className="mb-[9px] flex gap-1 items-center font-bold"
              href={"/"}
            >
              Read More <MdKeyboardDoubleArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
