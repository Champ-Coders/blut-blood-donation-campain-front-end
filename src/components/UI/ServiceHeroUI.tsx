import React from "react";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

const ServiceHeroUI = ({
  data: { no = 0, title, description, link, align, banner },
}: {
  data: {
    no?: number;
    title: string;
    description: string;
    link: string;
    align?: string;
    banner: string;
  };
}) => {
  return (
    <div
      className={`px-7 mb-5 sm:mb-8 lg:flex gap-5 sm:gap-8 items-center justify-between  ${align}${align}`}
    >
      <div className="w-full p-2 lg:w-[50%] h-full">
        <div className="h-full w-full">
          <Image
            className="w-full h-[300px] sm:h-[400px]"
            src={banner}
            width={800}
            height={800}
            priority
            alt="help_people"
          />
        </div>
      </div>
      <div
        className={`w-full px-2 py-8 md:py-12 lg:py-[4rem] lg:w-[50%] flex flex-col gap-4 justify-between ${
          no % 2 === 0 && "items-end"
        }`}
      >
        <h1 className="text-4xl md:text-[4.5rem] font-[600] text-slate-300">
          0{no}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold font-poppins ">
          {title}
        </h2>
        <p className="text-[#666666] line-clamp-5 text-[16px]">{description}</p>
        <PrimaryButton data={{ text: "Read More", link }}></PrimaryButton>
      </div>
    </div>
  );
};

export default ServiceHeroUI;
