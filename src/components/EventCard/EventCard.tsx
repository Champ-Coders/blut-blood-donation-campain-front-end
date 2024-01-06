import { FaRegClock } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IEvent } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

type EventCardProps = {
  item: IEvent;
};

const EventCard: React.FC<EventCardProps> = ({ item }) => {
  return (
    <div className="border border-gray-200 rounded-lg hover:scale-105 transition-all duration-500 ease-in-out ">
      <div className="rounded-md overflow-hidden">
        <div className="w-full h-[200px] ">
          <Image
            className="w-full h-full "
            src={item?.image}
            alt={item?.title}
            width={500}
            height={500}
          />
        </div>
        <div className="text-[14px]">
          <div className="flex ">
            <p className="px-5 w-full py-[10px] bg-[#ea062b] flex items-center gap-2 text-white opacity-50">
              <BsCalendarDate />
              {item?.date}
            </p>
            <p className="px-5 w-full py-[10px] bg-[#ea062b] flex items-center gap-2 text-white">
              <FaRegClock />
              {item?.time}
            </p>
          </div>
          <div>
            <p className="px-5 py-[10px] bg-[#ececec] text-black flex items-center gap-2 justify-center text-[14px]">
              <FaLocationDot className={"text-[#ea062b]"} />
              {item?.location}
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 px-[20px] flex flex-col justify-between  ">
        <div>
          <h3 className="my-[10px] text-[18px] font-semibold text-black">
            {item?.title}
          </h3>
          <p className="mb-[14px] leading-[30px] text-[14px]">
            {item?.description?.length > 100
              ? item?.description?.slice(0, 100) + "..."
              : item?.description}
          </p>
        </div>
        <Link
          className="
        text-[#ea062b]
        no-underline hover:underline
        

           "
          href={`/event/${item.id}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
export default EventCard;
