"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../app/styles/swiper.css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IPopularCamp } from "@/interfaces/common";
import { useEventsQuery } from "@/redux/Api/eventApi";

const PopularCampaigns = () => {
  const { data: Events } = useEventsQuery(undefined);


  return (
    <section className=" relative  overflow-hidden bg-gradient-to-r py-12 sm:py-16 lg:pt-20">
      <div className="pointer-events-none absolute left-20 top-1/2 h-36 w-36 -translate-y-1/2 text-primary/40 opacity-50">
        {/* <!-- prettier-ignore --> */}
        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="a"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="scale(1) rotate(0)"
            >
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path
                d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                stroke-width="1"
                stroke="none"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#a)"
          />
        </svg>
      </div>
      <svg
        className="scale-[5] text-primary/10 pointer-events-none absolute right-3 bottom-6 text-9xl"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
        />
      </svg>

      <div className="common">
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
          className="mySwiper  "
        >
          {Events?.data?.map((camp: IPopularCamp, i: number) => (
            <SwiperSlide key={i}>
              <div
                key={i}
                className="flex justify-between group relative min-h-[280px] group bg-white border-primary/30 flex-col lg:flex-row gap-3 border shadow-lg rounded-lg"
              >
                <div className="lg:w-[45%] px-5 pt-5 lg:p-0 bg-cover bg-no-repeat">
                  <div className="overflow-hidden relative h-full">
                    <Image
                      className="h-80 w-full transition duration-300 ease-in-out  group-hover:scale-110 rounded-l-lg"
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
                      {camp?.description?.length > 80
                        ? camp?.description?.slice(0, 80) + "..."
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
    </section>
  );
};

export default PopularCampaigns;
