import { DownloadOutlined } from "@ant-design/icons";
import React from "react";

const VideoBanner = () => {
  return (
    <div className="md:relative">
      {/* video player */}

      <div className="relative">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/dce4t5emk/video/upload/v1702898386/jtdswsajgic87bnqyclj.mp4"
        />

        <div className="relative z-10   flex items-center justify-start md:h-screen h-[500px] w-full md:w-5/6 mx-0 md:mx-auto p-5">
          <div className="text-start lg:w-3/6 font-poppins">
            <h1 className="text-primary md:text-5xl text-3xl font-bold">
              Donate Blood Save Life
            </h1>
            <h2 className="text-black md:text-6xl text-4xl font-semibold mt-4">
              Donate Blood And Inspire Others To Donate
            </h2>
            <button
              className="mt-8 px-4 py-2 bg-primary text-white rounded border p-2 border-primary hover:text-primary hover:bg-white
             translate-all
              duration-300
              ease-in-out
              "
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Register */}

      <div className="flex w-full md:w-5/6 mx-0 md:mx-auto sm:flex-row flex-col text-white cursor-pointer md:absolute sm:-bottom-20 -bottom-48 left-0 right-0 z-30">
        <div className="bg-black hover:bg-primary px-10 w-full h-44 border-r-2 border-black">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Register Now
          </h3>
          <div className="grid grid-cols-5">
            <p className="text-sm col-span-4">
              Register yourself as a donor and save life of others. You can also
              register as a volunteer.
            </p>
            <div className="sm:ml-10 ml-6  -mt-4">
              <DownloadOutlined className="-rotate-90 font-bold text-4xl" />
            </div>
          </div>
        </div>

        <div className="bg-primary hover:bg-black px-10 w-full h-44 text-justify border-l-2 border-primary">
          <h3 className="text-2xl mt-5 sm:mt-8 mb-4 font-extrabold">
            Donate Now
          </h3>
          <div className="grid grid-cols-5">
            <p className="text-sm col-span-4">
              If you are eligible for donating blood, you can donate blood to
              the needy people.Blood donation is a noble cause.

            </p>
            <div className="sm:ml-10 ml-6  -mt-4">
              <DownloadOutlined className="-rotate-90 font-bold text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
