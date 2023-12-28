"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../app/styles/swiper.css";
import { Autoplay } from "swiper/modules";
import { Rate } from "antd";
import Image from "next/image";
import { popularCamps } from "@/constants/PopulerCam";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IPopularCamp } from "@/interfaces/common";
import { useEventsQuery } from "@/redux/Api/eventApi";

const PopularCampaigns = () => {
  const { data: Events, isLoading } = useEventsQuery(undefined);
  console.log(
    "🚀 ~ file: PopularCampaigns.tsx:17 ~ PopularCampaigns ~ Events:",
    Events
  );

  return (
    <div className="bg-[#f5f5f5]">
      <div className="container mx-auto max-w-7xl px-5 md:px-14 lg:px-24 py-10 sm:py-16">
        <div className="text-center mb-5 sm:mb-10">
          <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
            DONATE NOW
          </h3>
          <h1 className="text-black font-[800] text-3xl sm:text-5xl">
            Popular Campaigns
          </h1>
        </div>
        <Swiper
          slidesPerView={2}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Events?.data?.map((camp: IPopularCamp, i: number) => (
            <SwiperSlide key={i}>
              <div
                key={i}
                className="flex justify-between group relative min-h-[280px] group bg-white flex-col lg:flex-row gap-3"
              >
                <div className="lg:w-[45%] px-5 pt-5 lg:p-0 bg-cover bg-no-repeat">
                  <div className="overflow-hidden relative h-full">
                    <Image
                      className="h-80 w-full transition duration-300 ease-in-out  group-hover:scale-110"
                      src={camp?.image}
                      width={300}
                      height={500}
                      alt="image"
                    />
                    <div className="hidden group-hover:block transition duration-300 ease-in-out">
                      <div className="bg-[#222222a6] w-full h-full absolute inset-0 flex items-center justify-center ">
                        <a
                          href="/"
                          className=" text-white hover:text-primary text-sm font-bold"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[55%] text-start px-5 py-6 flex flex-col justify-between items-start">
                  {/* date */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary">
                      <FaCalendarDays />
                    </span>
                    <p className="text-gray-600 text-xs sm:text-sm font-bold font-roboto">
                      {new Date(camp?.event_date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  {/* content */}
                  <div>
                    <h2 className="text-xl sm:text-[22px] group-hover:text-primary font-bold font-roboto text-black my-2 line-clamp-1">
                      {camp?.title}
                    </h2>
                    <p className="text-base text-gray-700 leading-8 mb-5 max-h-[60px]">
                      {camp?.description?.length > 50
                        ? camp?.description?.slice(0, 50) + "..."
                        : camp?.description}
                    </p>
                  </div>
                  {/* time  slot */}
                  <div className="flex items-center gap-5">
                    <div className="flex  items-center gap-2">
                      <span className="text-xs sm:text-sm text-primary">
                        <FaClock />
                      </span>
                      <p className="text-gray-600 font-bold text-xs sm:text-sm font-roboto">
                        {camp?.event_time}
                      </p>
                    </div>
                    <div className="flex  items-center gap-2">
                      <span className="text-sm text-primary">
                        <FaLocationDot />
                      </span>
                      <p className="text-gray-600 font-bold text-xs sm:text-sm font-roboto">
                        {camp?.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCampaigns;
