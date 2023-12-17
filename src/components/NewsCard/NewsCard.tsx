import { IOurNews } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaPlus } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type NewsCardProps = {
  news: IOurNews;
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="group">
      <div>
        <div className="relative">
          <Image className="w-full h-full" src={news.image} alt={news.title} />
          <div className="absolute  ease-in-out top-[50%] w-full h-full z-10"></div>
          <div className="hidden group-hover:block transition duration-300">
            <div className="bg-[#222222a6] w-full h-full absolute left-0 top-0 flex items-center justify-center ">
              <div className=" text-white text-3xl">
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="p-[25px] shadow-3xl bg-white">
          <div>
            <p className="flex flex-wrap text-[#ea062b] items-center gap-2  mb-[21px]">
              <FaClock />
              {news.date}
              <IoLogoWechat />
              comment {news.comment}
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-[#111111] font-bold mb-[9px]">
              {news.title}
            </h3>
            <p className="text-[#666]">{news.description}</p>
            <Link
              className="mt-[16px] flex gap-1 items-center font-bold hover:text-[#ea062b] transition duration-300"
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
