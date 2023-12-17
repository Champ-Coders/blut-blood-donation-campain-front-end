import React from "react";
import Image from "next/image";
import experience from "@/assets/counter/experience.png";
import donors from "@/assets/counter/donors.png";
import awards from "@/assets/counter/awards.png";
import recipient from "@/assets/counter/recipient.png";

const Counter = () => {
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

  // console.log(companyStatistics);

  return (
    <div
      style={{
        backgroundImage: `url('/assets/banner/counter-bg.png')`,
        opacity: 0.9,
        textAlign: "center",
      }}
      className=" mt-7 min-h-[22rem] bg-cover bg-center bg-no-repeat bg-black opacity-[0.2] relative bg-fixe  lg:max-h-[30rem]"
    >
      <div className="absolute inset-0 bg-black opacity-[0.9]"></div>
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
              <h1 className="font-bold text-white text-5xl">{item.value}</h1>
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
