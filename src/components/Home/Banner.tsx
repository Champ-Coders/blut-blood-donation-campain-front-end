import { bannerCarousel } from "@/constants/Banner";
import { Carousel } from "antd";
import { YoutubeFilled } from "@ant-design/icons";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative">
      <Carousel autoplay dotPosition="top">
        {bannerCarousel.map((item) => (
          <div key={item._id}>
            <div
              style={{
                backgroundImage: `url(${item.backgroundImageURL})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "cover",
              }}
              className="h-screen sm:px-20 px-10 py-20 sm:py-40 text-center sm:text-left"
            >
              <a href={item.videoURL} target="_blank">
                <YoutubeFilled className="text-primary text-5xl" />
              </a>
              <h3 className="text-primary text-lg sm:text-3xl mt-8 font-bold">
                {item.quotes}
              </h3>
              <h3 className="text-black text-2xl sm:text-6xl max-w-xl mt-2 sm:mt-5 font-extrabold">
                {item.quotes}
              </h3>
              <Link href={item.link}>
                <button className="btn bg-primary mt-16 hover:bg-black text-white text-xl px-5 py-2 rounded-lg">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex w-full md:w-5/6 mx-0 md:mx-auto sm:flex-row flex-col text-white cursor-pointer absolute -bottom-20 left-0 right-0">
        <div className="bg-black hover:bg-gray-600 px-10 w-full h-44">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Register Now
          </h3>
          <p className="text-sm">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain,
          </p>
        </div>
        <div className="bg-primary hover:bg-rose-600 px-10 w-full h-44 text-justify">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Donate Now
          </h3>
          <p className="text-sm">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
