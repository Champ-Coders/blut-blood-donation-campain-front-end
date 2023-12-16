import React from "react";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
import Title1 from "./Title1";
import SubTitle from "./SubTitle";

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
      className={`container mx-auto block px-7 lg:flex items-center justify-between  ${align}${align}`}
    >
      <section className="w-full p-2 lg:w-[50%]">
        <Image src={banner} width={633} height={444} alt="help_people" />
      </section>
      <section
        className={`w-full px-2 py-[4rem] lg:w-[50%] flex flex-col gap-4 justify-between ${
          no % 2 === 0 && "items-end"
        }`}
      >
        <h1 className="text-[4.5rem] font-[600] text-slate-300">{no}</h1>
        <SubTitle data={{ subTitle: title, css: "mr:0  " }} />

        <p className="text-[#666666] text-[18px]">{description}</p>

        <PrimaryButton data={{ text: "Read More", link }}></PrimaryButton>
      </section>
    </div>
  );
};

export default ServiceHeroUI;
