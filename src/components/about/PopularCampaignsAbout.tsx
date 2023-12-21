import one from "../../../public/assets/about/collection.png";
import two from "../../../public/assets/about/checking.png";
import three from "../../../public/assets/about/camp.png";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

type PopularCampaignsAboutProps = {};

type IData = {
  id: string;
  title: string;
  des: string;
  image: StaticImageData;
  date?: string;
};

const PopularCampaignsAbout: React.FC<PopularCampaignsAboutProps> = () => {
  const data: IData[] = [
    {
      id: "1",
      title: "Blood Group Collection",
      des: "Lorem ipsum dolor sit elit consectetur adipiscing ipsum elit, sed do incididunt et dolore adipiscing magna aliqua ipsum dolor sit elit consectetur adipiscing ipsum elit, sed do magna aliqua ipsum dolor sit elit consectetur adipiscing.",
      image: one,
    },
    {
      id: "2",
      title: "Free Group Checking",
      des: "Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua consectetur.",
      image: two,
      date: "13 February, 2023",
    },
    {
      id: "3",
      title: "Blood Donation Camp",
      des: "Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua consectetur.",
      image: three,
      date: "13 February, 2023",
    },
  ];

  return (
    <section className="bg-[#f5f5f5]">
      <div className="common py-[116px] ">
        <div className="text-center mb-5 sm:mb-10">
          <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
            DONATE NOW
          </h3>
          <h1 className="text-[#111] font-bold text-2xl lg:text-5xl">
            Popular Campaigns
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
          {data.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === "1" ? "col-span-1 md:col-span-2" : "col-span-1"
              } bg-white p-5 rounded-lg shadow-[0px_9px_52px_0px_rgba(0,0,0,.07)]`}
            >
              <div>
                <Image
                  className="w-full h-full mb-7"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div>
                {item?.date && (
                  <div className="text-[#666] text-sm font-bold mb-2 flex items-center gap-5">
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      <span>{item?.date}</span>
                    </p>
                  </div>
                )}
                <h3
                  className={`${
                    item.id === "1" ? "text-3xl " : "text-[22px]"
                  } font-bold text-[#111] mb-4`}
                >
                  {item.title}
                </h3>
                <p className="text-lg text-[#666] leading-7">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularCampaignsAbout;
