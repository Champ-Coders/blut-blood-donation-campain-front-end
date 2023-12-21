import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../UI/PrimaryButton";
import Title1 from "../UI/Title1";
import SubTitle from "../UI/SubTitle";
import { DoubleRightOutlined } from "@ant-design/icons";
import image from "../../../public/assets/about/organization-two-illustration.png";
import Button from "../Button/Button";

const HelpThePeopleInNeedAbut = () => {
  const heroData = {
    title: "HELP THE PEOPLE IN NEED",
    subTitle: "Welcome to Blood  Donors Organization",
    description:
      "Help the people in need by donating blood. Your blood can save many lives.Our organization is working for the welfare of the people. We are providing the best services to the people.",
    features: [
      "Good Service",
      "Help People",
      "Hygiene Tools",
      "24h Service",
      "Health Check",
      "Blood Bank",
    ],
    cta: "Explore Now",
    img: "https://croptheme.com/blut/blut-ltr/assets/images/organization-illustration.png",
  };

  const { title, subTitle, description, features, cta, img } = heroData;

  return (
    <section className="">
      <div className="common flex lg:flex-row flex-col justify-between items-center gap-5 lg:gap-20">
        <div className="w-full p-2 ">
          <Image src={image.src} width={564} height={490} alt="help_people" />
        </div>
        <div className="w-full px-2 py-[4rem] text-start flex flex-col  gap-4 justify-between">
          <p className="text-xl text-primary uppercase font-medium">{title}</p>
          <h3 className="text-black font-bold le text-5xl leading-normal mb-5  ">
            {subTitle}
          </h3>
          <p className="text-[#666666] text-lg leading-7 mb-5">{description}</p>
          <ul className="font-[500] grid grid-cols-2 gap-3 pr-4 mb-3">
            {features?.map((feature: any, index: number) => {
              return (
                <li className="flex " key={index}>
                  <DoubleRightOutlined className="!text-primary" />
                  &nbsp;
                  <h3 className="text-[16px] font-semibold capitalize text-black">
                    {feature}
                  </h3>
                </li>
              );
            })}
          </ul>

          <Button type={"button"} className="w-2/5 font-bold">
            {cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HelpThePeopleInNeedAbut;
