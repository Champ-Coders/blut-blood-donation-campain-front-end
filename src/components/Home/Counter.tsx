"use client";
import React from "react";
import Image from "next/image";
import experience from "../../../public/assets/counter/experience.png";
import donors from "../../../public/assets/counter/donors.png";
import awards from "../../../public/assets/counter/awards.png";
import recipient from "../../../public/assets/counter/recipient.png";
import counterBG from "../../../public/assets/banner/counter-bg.png";
import { Statistic } from "antd";
import CountUp from "react-countup";

const Counter = () => {
  const formatter = (value: number) => (
    <CountUp
      start={0}
      duration={2}
      redraw
      useEasing
      enableScrollSpy
      scrollSpyDelay={200}
      end={value}
      separator=","
    />
  );

  const companyStatistics = {
    banner: "/assets/counter-bg.png",
    counter: [
      {
        value: 25,
        unit: "YEARS EXPERIENCE",
        img: experience,
      },
      {
        value: 225,
        unit: "HAPPY DONORS",
        img: donors,
      },
      {
        value: 90,
        unit: "TOTAL AWARDS",
        img: awards,
      },
      {
        value: 3168,
        unit: "HAPPY RECIPIENTS",
        img: recipient,
      },
    ],
  };



  return (
    <div className=" mt-7 min-h-[22rem] text-center relative bg-fixe  lg:max-h-[30rem]">
      <div
        style={{
          backgroundImage: `url(${counterBG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 0,
        }}
        className="absolute w-full h-full -z-10 left-0 top-0 "
      >
        {/* <Image src={counterBG} className="" alt="blood-donor-bg" fill /> */}
      </div>
      {/* overlay start */}
      <div className="absolute w-full h-full left-0 top-0 -z-[5] bg-[#16181b] opacity-80"></div>
      {/* <div className="absolute inset-0 bg-black opacity-[0.9]"></div> */}
      <section className="container mx-auto text-center grid grid-cols-2 lg:grid-cols-4 py-[3vw] backdrop-blur-0 ">
        {companyStatistics?.counter?.map((item: any, index: number) => {
          return (
            <div
              className="flex flex-col gap-3 justify-between"
              key={index + 1}
            >
              <Image
                src={item.img}
                height={20}
                width={30}
                className="mx-auto mt-4"
                alt="counter"
              />
              {/* <h1 className="font-bold text-white text-5xl">{item.value}</h1> */}
              <Statistic
                valueStyle={{
                  fontWeight: 800,
                  color: "white",
                  fontSize: "3.5rem",
                }}
                value={item.value}
                precision={2}
                formatter={formatter as any}
              />

              <h2 className="text-white font-semibold text-xl uppercase">
                {item?.unit}
              </h2>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Counter;
