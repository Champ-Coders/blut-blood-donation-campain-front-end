import { bannerCarousel } from "@/constants/Banner";
import { Carousel } from "antd";
import { YoutubeFilled } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
const Banner = () => {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <div>
      <Carousel autoplay>
        {bannerCarousel.map((item) => (
          <div key={item._id}>
            <div
              style={{
                backgroundImage: `url(${item.backgroundImageURL})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "cover",
              }}
              className="sm:h-[70vh] h-96 px-20 py-10 sm:py-20 text-center sm:text-left"
            >
              <a href={item.videoURL} target="_blank">
                <YoutubeFilled className="text-primary text-5xl" />
              </a>
              <h3 className="text-primary text-lg sm:text-3xl mt-2 font-bold">
                {item.quotes}
              </h3>
              <h3 className="text-black text-2xl sm:text-6xl mt-2 sm:mt-5 font-extrabold">
                {item.quotes}
              </h3>
              <Link href={item.link}>
                <button className="btn bg-primary mt-8 hover:bg-black text-white text-xl px-5 py-2 rounded-lg">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
