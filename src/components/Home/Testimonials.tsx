"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../app/styles/swiper.css";
import { Autoplay } from "swiper/modules";
import { Rate } from "antd";
import { useReviewsQuery } from "@/redux/Api/reviewApi";

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
    <div className="common">
      {/*  */}
      <div className="relative mx-auto ">
        <span className="hidden sm:block -z-10 absolute -left-5 opacity-20 -top-6 rounded-full  bg-primary/40 p-6 text-9xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
            />
          </svg>
        </span>
        <span className="hidden sm:block -z-10 absolute -right-[80px] opacity-20 -bottom-[120px] rounded-full  bg-primary/40 p-6 text-9xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
            />
          </svg>
        </span>

        {/* main */}
        <div className="flex flex-col gap-32">
          <div className="text-center sm:mb-10">
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
              <SwiperSlide
                key={test?._id}
                className="mx-[20px] h-[400px] z-10 "
              >
                <div className="flex flex-col rounded-xl h-[350px] border w-full border-primary/30 text-center shadow-xl shadow-primary/10">
                  <div className="relative flex flex-1 flex-col justify-between p-4  ">
                    <span className="absolute -left-5 -top-6 z-50 rounded-full border border-primary/30 bg-white p-3 text-5xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="">
                      <div className="text-center mb-4">
                        <Rate disabled defaultValue={test?.rating} />
                      </div>
                      <p className="border-primary/90 px-10 text-xl font-black">
                        {test?.service?.title}
                      </p>

                      <blockquote className="mt-8 flex-1">
                        <p className="leading-relaxed text-black italic">
                          “
                          {test?.review?.length > 150
                            ? test?.review?.slice(0, 150) + "..."
                            : test?.review}
                          ”
                        </p>
                      </blockquote>
                    </div>

                    <div className="-mx-5 mt-8 px-8 py-1">
                      <div className="">
                        <p className="text-base font-bold">
                          {" "}
                          {test?.user?.name}
                        </p>
                        <p className="mt-0.5 text-sm">{test?.user?.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Testimonials;
