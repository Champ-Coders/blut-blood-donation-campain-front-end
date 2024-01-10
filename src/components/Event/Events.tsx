"use client";
// import { events } from "@/constants/Event";
import React from "react";
import EventCard from "../EventCard/EventCard";
import LoadingPage from "@/app/loading";
import { useEventsQuery } from "@/redux/Api/eventApi";

type EventsProps = {};

const Events: React.FC<EventsProps> = () => {
  const { data: events, isLoading: eventLoading } = useEventsQuery(undefined);

  if (eventLoading) {
    return <LoadingPage />;
  }

  return (
    <section className="">
      <div className="common">
        <div className="text-center mb-10">
          <h5 className="text-[#EA062B] text-[16px] uppercase mb-4">Event</h5>
          <h4 className="capitalize text-2xl lg:text-5xl font-bold text-black mb-7">
            Blood Donation Event
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events?.data?.map((item: any) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
