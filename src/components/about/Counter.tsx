"use client";
import React from "react";
import CountUp from "react-countup";
import { Statistic } from "antd";
type CounterProps = {};

type CounterData = {
  id: string;
  count: number;
  text: string;
};

const Counter: React.FC<CounterProps> = () => {
  const formatter = (value: number) => (
    <CountUp
      start={0}
      duration={2}
      redraw
      useEasing
      enableScrollSpy
      scrollSpyDelay={200}
      end={value}
      separator=","
    />
  );
  const data: CounterData[] = [
    {
      id: "1",
      count: 25,
      text: "Year's experience",
    },
    {
      id: "2",
      count: 430,
      text: "Blood donations",
    },
    {
      id: "3",
      count: 90,
      text: "total awards",
    },
    {
      id: "4",
      count: 35,
      text: "blood cooperation",
    },
  ];
  return (
    <section className="bg-primary">
      <div className="common py-[50px]">
        <div className="flex flex-col lg:flex-row  justify-between items-center ">
          {data.map((item: CounterData) => (
            <div
              className="flex flex-col text-center gap-3 justify-between"
              key={+item.id + 1}
            >
              <Statistic
                valueStyle={{
                  fontWeight: 800,
                  color: "white",
                  fontSize: "3.5rem",
                }}
                value={item.count}
                precision={2}
                formatter={formatter as any}
              />

              <h2 className="text-white font-semibold text-xl uppercase">
                {item?.text}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Counter;
