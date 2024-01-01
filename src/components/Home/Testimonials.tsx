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
          <SwiperSlide key={test?._id} className="mx-[20px] z-10 ">
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
                    <p className="leading-relaxed text-black">
                      {test?.review?.length > 150
                        ? test?.review?.slice(0, 150) + "..."
                        : test?.review}
                    </p>
                  </blockquote>
                </div>

                <div className="-mx-5 mt-8 px-8 py-1">
                  <div className="">
                    <p className="text-base font-bold"> {test?.user?.name}</p>
                    <p className="mt-0.5 text-sm">{test?.user?.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* test */}

      {/* test end  */}
    </div>
  );
};

export default Testimonials;
