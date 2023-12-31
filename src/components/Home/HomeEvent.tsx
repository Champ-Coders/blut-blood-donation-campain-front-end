"use client";

import React from "react";
import EventCard from "../EventCard/EventCard";
import Link from "next/link";
import { useEventsQuery } from "@/redux/Api/eventApi";
import { IEvent } from "@/interfaces/common";

type HomeEventProps = {};

const HomeEvent: React.FC<HomeEventProps> = () => {
  const { data: events } = useEventsQuery(undefined);
  return (
    <section>
      <div className="common">
        <div>
          <div className="text-center">
            <h5 className="text-[#EA062B] text-[16px] uppercase mb-4">Event</h5>
            <h4 className="capitalize text-2xl lg:text-5xl font-bold text-black mb-7">
              Blood Donation Event
            </h4>
          </div>

          <div className="hidden md:flex justify-end -mt-[60px] mb-10">
            <Link href="/event">
              <span className="bg-[#EA062B] text-white py-3 px-5 rounded-full hover:bg-[#111111] transition duration-300">
                View All
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[100px]">
          {events?.data?.slice(0, 3).map((item:IEvent) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomeEvent;
