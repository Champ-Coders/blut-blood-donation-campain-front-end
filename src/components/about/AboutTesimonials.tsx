"use client";
import Image from "next/image";
import img from "../../../public/assets/about/jhon.png";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

type AboutTestimonialsProps = {};

const AboutTestimonials: React.FC<AboutTestimonialsProps> = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-5 sm:mb-10">
        <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
          Testimonials
        </h3>
        <h1 className="text-[#111] font-bold text-2xl lg:text-5xl">
          What Our Clients Say
        </h1>
      </div>

      <div className="bg-primary">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item}>
              <div className="common px-5 p-5 md:py-[60px] text-white">
                <div className="text-center max-w-[800px] mx-auto">
                  <span className="text-5xl italic">&quot;</span>
                  <h4 className="mb-[30px]  text-3xl font-semibold">
                    Professional services all the way
                  </h4>
                  <p className="mb-[31px] font-medium text-xl leading-7">
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best, every pleasure is to be welcomed and every pain
                    avoided simple and easy to.
                  </p>
                  <div className=" flex flex-col justify-center items-center">
                    <Image
                      width={70}
                      height={70}
                      src={img.src}
                      alt="image"
                      className="mb-[25px]"
                    />
                    <h6 className="text-2xl font-bold">Jhon Alexis</h6>
                    <p className="text-lg">Marketing Staff</p>
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
export default AboutTestimonials;
