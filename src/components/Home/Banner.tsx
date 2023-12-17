import { bannerCarousel } from "@/constants/Banner";
import { Carousel } from "antd";
import { YoutubeFilled } from "@ant-design/icons";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative">
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
      <div className="flex sm:flex-row flex-col top-20 text-white cursor-pointer">
        <div className="bg-black hover:bg-gray-600 px-10 w-full h-44 text-justify">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Register Now
          </h3>
          <p className="">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain,
          </p>
        </div>
        <div className="bg-primary hover:bg-rose-600 px-10 w-full h-44 text-justify">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Donate Now
          </h3>
          <p className="">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
