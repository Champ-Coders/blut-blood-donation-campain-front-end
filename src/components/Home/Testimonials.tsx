"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../app/styles/swiper.css";
import { Autoplay } from "swiper/modules";
import { Rate } from "antd";
import Image from "next/image";
import { useReviewsQuery } from "@/redux/Api/reviewApi";

import UserIcon from "../../../public/assets/icon/userIcon.png";

type Testimonial = {
  _id: string;
  review: string;
  rating: number;
  user?: any;
  service?: any;
};

const Testimonials = () => {
  const { data: reviews } = useReviewsQuery(undefined);

  return (
    <div className="container mx-auto max-w-7xl px-5 md:px-14 lg:px-24 py-10 mt-10 sm:py-16">
      <div className="text-center mb-5 sm:mb-10">
        <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
          TESTIMONIALS
        </h3>
        <h1 className="text-black font-[800] text-3xl sm:text-5xl">
          What Our Clients Say
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
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
        {reviews?.data?.map((test: Testimonial) => (
          <SwiperSlide key={test?._id}>
            <div className="min-h-[300px] text-start px-1">
              <div className="arrow relative border shadow-lg py-5 px-3 sm:py-8 sm:px-5 bg-white shadow-[rgba(0,0,0,.05)] h-[250px]">
                <p className="text-start mb-4">
                  <Rate disabled defaultValue={test?.rating} />
                </p>
                <p className="leading-relaxed text-sm lg:text-base mb-6">
                  {test?.review}
                </p>
              </div>

              <div className="inline-flex px-5 mt-7 items-center">
              
                  <Image
                    src={test?.user?.image ?? UserIcon}
                    width={70}
                    height={70}
                    priority
                    alt="text"
                    className="w-14 h-14 lg:w-[40px] lg:h-[40px]"
                  />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-xl font-roboto text-black font-bold">
                    {test?.user?.name}
                  </span>
                  <span className="text-[#666] text-base font-poppins ">
                    {test?.user?.role}
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
