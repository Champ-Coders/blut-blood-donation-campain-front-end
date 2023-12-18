import { DownloadOutlined, YoutubeFilled } from "@ant-design/icons";
import React from "react";
import Link from "next/link";

const VideoBanner = () => {
  return (
    <div className="md:relative">
      {/* video player ,auto play,no controller  with video link https://drive.google.com/file/d/13F1MbW1lbNDPKXLexo3Iv7ZWWY_J6DH8/view?usp=sharing */}

      <div className="">
        <div className="border-4">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            src={
              "https://res.cloudinary.com/dce4t5emk/video/upload/v1702898386/jtdswsajgic87bnqyclj.mp4"
            }
          >
            <div className="w-full flex-shrink-0">
              <div className=" sm:px-32 px-10 py-20 sm:py-40 text-center sm:text-left">
                <p>
                  <YoutubeFilled className="text-primary text-5xl" />
                </p>
                <h3 className="text-primary text-lg sm:text-3xl mt-8 font-bold">
                  Donate Blood Save Life
                </h3>
                <h3 className="text-black text-2xl sm:text-5xl max-w-xl mt-2 sm:mt-6 font-extrabold">
                  Donate Blood And Inspire Others To Donate
                </h3>
                <Link href={"/"}>
                  <button className="btn bg-primary mt-16 sm:mt-32 hover:bg-black text-white text-xl px-5 py-2 rounded-lg">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </video>
        </div>
      </div>

      {/* Register */}

      <div className="flex w-full md:w-5/6 mx-0 md:mx-auto sm:flex-row flex-col text-white cursor-pointer md:absolute sm:-bottom-20 -bottom-48 left-0 right-0 z-50">
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

export default VideoBanner;
