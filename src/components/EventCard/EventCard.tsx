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
    <div className="">
      <div className="rounded-md overflow-hidden">
        <div className="w-full h-[280px] ">
          <Image className="w-full h-full" src={item.image} alt={item.title} />
        </div>
        <div>
          <div className="flex ">
            <p className="px-5 w-full py-[10px] bg-[#ea062b] flex items-center gap-2 text-white opacity-50">
              <BsCalendarDate />
              {item.date}
            </p>
            <p className="px-5 w-full py-[10px] bg-[#ea062b] flex items-center gap-2 text-white">
              <FaRegClock />
              {item.time}
            </p>
          </div>
          <div>
            <p className="px-5 py-[10px] bg-[#ececec] text-black flex items-center gap-2 justify-center">
              <FaLocationDot className={"text-[#ea062b]"} />
              {item.location}
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 px-[30px] text-center">
        <h3 className="my-[10px] text-2xl font-semibold text-black">
          {item.title}
        </h3>
        <p className="mb-[14px] leading-[30px]">
          {item.description.length > 100
            ? item.description.slice(0, 100) + "..."
            : item.description}
        </p>
        <Link className="text-[#ea062b]" href={`/event/${item.id}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
};
export default EventCard;
