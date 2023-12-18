"use client";
import React from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const experiencesData = [
  {
    title: "Registration",
    location: "",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ipsam voluptatem",
    icon: React.createElement(RiNumber1),
    date: "",
  },

  {
    title: "Screening test",
    location: " ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ipsam voluptatem",
    icon: React.createElement(RiNumber2),
    date: " ",
  },
  {
    title: "Donation",
    location: " ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ipsam voluptatem",
    icon: React.createElement(RiNumber3),
    date: " ",
  },
  {
    title: "Rest & Refresh",
    location: " ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ipsam voluptatem Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ipsam voluptatem",
    icon: React.createElement(RiNumber4),
    date: " ",
  },
] as const;

const DonationProcess = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center pt-8 pb-6">
        <p className="text-base text-primary pb-3">WHAT WE DO</p>
        <h1 className="text-5xl font-bold">Donation Process</h1>
      </div>
      <VerticalTimeline
        animate={false}
        className="vertical-timeline--red"
        layout="2-columns"
        lineColor="#ea062b"
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              iconOnClick={() => console.info("icon has been clicked")}
              className="vertical-timeline-element--work"
              date={item.date}
              icon={item.icon}
              contentStyle={{
                background:
                  "light" === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  "light" === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              iconStyle={{
                background:
                  "light" === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                color: "#ea062b",
              }}
            >
              {/* <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p> */}
              <h3 className="font-semibold capitalize text-xl py-2">
                {item.title}
              </h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700  ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default DonationProcess;
