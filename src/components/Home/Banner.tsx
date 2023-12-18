"use client";
import { bannerCarousel } from "@/constants/Banner";
import { useEffect, useState } from "react";
import {
  YoutubeFilled,
  LeftOutlined,
  RightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = bannerCarousel.length;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="relative">

      {/* banner */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {bannerCarousel.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div
                  style={{
                    backgroundImage: `url(${item.backgroundImageURL})`,
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    backgroundSize: "cover",
                  }}
                  className="h-screen sm:px-32 px-10 py-20 sm:py-40 text-center sm:text-left"
                >
                  <a href={item.videoURL} target="_blank">
                    <YoutubeFilled className="text-primary text-5xl" />
                  </a>
                  <h3 className="text-primary text-lg sm:text-3xl mt-8 font-bold">
                    {item.quotes}
                  </h3>
                  <h3 className="text-black text-2xl sm:text-5xl max-w-xl mt-2 sm:mt-6 font-extrabold">
                    {item.quotes}
                  </h3>
                  <Link href={item.link}>
                    <button className="btn bg-primary mt-16 sm:mt-32 hover:bg-black text-white text-xl px-5 py-2 rounded-lg">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute bottom-1/3 sm:bottom-1/2 left-8 text-primary hover:text-white hover:bg-primary font-bold px-3 py-2 border-primary border"
          onClick={previous}
        >
          <LeftOutlined />
        </button>

        <button
          className="absolute bottom-1/3 sm:bottom-1/2 right-8 text-primary hover:text-white hover:bg-primary font-bold px-3 py-2 border-primary border"
          onClick={next}
        >
          <RightOutlined />
        </button>
      </div>


      {/* Register */}




      <div className="flex w-full md:w-5/6 mx-0 md:mx-auto sm:flex-row flex-col text-white cursor-pointer absolute sm:-bottom-20 -bottom-48 left-0 right-0">
        <div className="bg-black hover:bg-primary px-10 w-full h-44">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Register Now
          </h3>
          <div className="grid grid-cols-5">
            <p className="text-sm col-span-4">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain,
            </p>
            <div className="sm:ml-10 ml-6 sm:-mt-10 -mt-8">
              <DownloadOutlined className="-rotate-90 font-bold text-4xl" />
            </div>
          </div>
        </div>
        <div className="bg-primary hover:bg-black px-10 w-full h-44 text-justify">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Donate Now
          </h3>
          <div className="grid grid-cols-5">
            <p className="text-sm col-span-4">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain,
            </p>
            <div className="sm:ml-10 ml-6 sm:-mt-10 -mt-8">
              <DownloadOutlined className="-rotate-90 font-bold text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
