import { IBlog } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type NewsCardProps = {
  news: IBlog;
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  // need just date
  const date = news?.createdAt?.split("T")[0];

  return (
    <article className="card border ">
      <figure className="card__header">
        <Image
          className="card__header__bg "
          src={news?.image}
          alt={news?.title}
          height={300}
          width={500}
          loading="lazy"
          draggable="false"
        />
      </figure>
      <div className=" card__body">
        <div>
          <p className="flex flex-wrap text-[#ea062b] items-center gap-2  mb-[21px]">
            <FaClock />
            {news?.createdAt ? date : "00-00-0000"}
            <IoLogoWechat />
            comment {news?.comments?.length ? news?.comments?.length : 0}
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#111111] font-bold mb-[9px]">
            {news?.title}
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: news?.description.slice(0, 150),
            }}
            className="text-[#666] text-[14px]"
          />
          {/* {news?.description.slice(0, 150)}
          </p> */}
          <Link
            className="mt-[16px] flex gap-1 items-center font-bold hover:text-[#ea062b] transition duration-300"
            href={`blog/${news?._id}`}
          >
            Read More <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default NewsCard;
