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
  // const date = new Date(news?.createdAt);

  // need just date
  const date = news?.createdAt?.split("T")[0];

  return (
    <article className="card !border-2">
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
            comment {news?.comment ? news?.comment : 0}
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#111111] font-bold mb-[9px]">
            {news?.title}
          </h3>
          <p className="text-[#666] text-[14px]">
            {news?.description.slice(0, 150)}
          </p>
          <Link
            className="mt-[16px] flex gap-1 items-center font-bold hover:text-[#ea062b] transition duration-300"
            href={`blog/${news?.id}`}
          >
            Read More <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
    </article>

    // <div className="group">
    //   <div>
    //     <div className="relative">
    //       <Image
    //         className="w-full h-[200px]"
    //         src={news?.image}
    //         alt={news?.title}
    //         height={300}
    //         width={500}
    //       />
    //       <div className="absolute  ease-in-out top-[50%] w-full h-full z-10"></div>
    //       <div className="hidden group-hover:block group-hover:transition group-hover:duration-500 group-hover:ease-in-out">
    //         <div className="bg-[#222222a6] w-full h-full absolute left-0 top-0 flex items-center justify-center ">
    //           <div className=" text-white text-3xl">
    //             <FaPlus />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="p-[25px] shadow-3xl bg-white">
    //       <div>
    //         <p className="flex flex-wrap text-[#ea062b] items-center gap-2  mb-[21px]">
    //           <FaClock />
    //           {news?.date ? news?.date : "00-00-0000"}
    //           <IoLogoWechat />
    //           comment {news?.comment ? news?.comment : 0}
    //         </p>
    //       </div>
    //       <div>
    //         <h3 className="text-2xl text-[#111111] font-bold mb-[9px]">
    //           {news?.title}
    //         </h3>
    //         <p className="text-[#666]">{news?.description.slice(0, 150)}</p>
    //         <Link
    //           className="mt-[16px] flex gap-1 items-center font-bold hover:text-[#ea062b] transition duration-300"
    //           href={`blog/${news?.id}`}
    //         >
    //           Read More <MdKeyboardDoubleArrowRight />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default NewsCard;
