"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { useEventsQuery } from "@/redux/Api/eventApi";
import LoadingPage from "@/app/loading";
import { IPopularCamp } from "@/interfaces/common";

type PopularCampaignsAboutProps = {};

const PopularCampaignsAbout: React.FC<PopularCampaignsAboutProps> = () => {
  const { data: Events, isLoading } = useEventsQuery(undefined);

  if (isLoading) return <LoadingPage />;
  return (
    <section>
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
          {Events?.data?.map((item: IPopularCamp) => (
            <div
              key={item.id}
              className={`${
                item.id === "1" ? "col-span-1 md:col-span-2" : "col-span-1"
              } bg-white p-5 rounded-lg shadow-[0px_9px_52px_0px_rgba(0,0,0,.07)]`}
            >
              <div>
                {/* 238x225 */}
                
                <Image
                  className="w-full h-[300px] mb-7"
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                />
              </div>
              <div>
                {item?.event_date && (
                  <div className="text-[#666] text-sm font-bold mb-2 flex items-center gap-5">
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      <span>{item?.event_date}</span>
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
                <p className="text-lg text-[#666] leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularCampaignsAbout;
