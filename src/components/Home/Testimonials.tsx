"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../app/styles/swiper.css";
import { Autoplay } from "swiper/modules";
import { testimonial } from "@/constants/Testimonial";
import { Rate } from "antd";
import Image from "next/image";

const Testimonials = () => {
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
        {testimonial.map((test: any) => (
          <SwiperSlide key={test.title}>
            <div className="min-h-[300px] text-start px-1">
              <div className="arrow relative border shadow-lg py-5 px-3 sm:py-8 sm:px-5 bg-white shadow-[rgba(0,0,0,.05)]">
                <p className="text-start mb-4">
                  <Rate disabled defaultValue={5} />
                </p>
                <p className="leading-relaxed text-sm lg:text-base mb-6">
                  {test.des}
                </p>
              </div>

              <div className="inline-flex px-5 mt-7 items-center">
                <div className="w-14 h-14 lg:w-[70px] lg:h-[70px]">
                  <Image
                    src={test.image}
                    width={70}
                    height={70}
                    priority
                    alt="text"
                  />
                </div>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-xl lg:text-2xl font-roboto text-black font-bold">
                    {test.title}
                  </span>
                  <span className="text-[#666] text-base font-poppins ">
                    {test.designation}
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
