"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";
import { LuPhoneIncoming } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { IPerson } from "@/interfaces/common";
import DonateCart from "../DonateList/DonateCart";

type ListOfHonorableBloodDonorsProps = {};

const ListOfHonorableBloodDonors: React.FC<
  ListOfHonorableBloodDonorsProps
> = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const people = [
    {
      id: "1",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "2",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "3",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "4",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "5",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];

  const donateValue = [
    {
      id: "1",
      key: "50",
      value: "97",
    },
    {
      id: "2",
      key: "25",
      value: "25555",
    },
    {
      id: "3",
      key: "10",
      value: "11765",
    },
    {
      id: "4",
      key: "3",
      value: "45198",
    },
  ];

  return (
    <section className="bg-[#f5f5f5]">
      <div className="common">
        <div className="text-center mb-5 sm:mb-10">
          <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
            DONATE NOW
          </h3>
          <h1 className="text-black font-[800] text-3xl sm:text-5xl">
            List of Honorable Blood Donors
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <h4 className="text-xl font-bold mb-5 text-[#111] leading-normal">
              Supreme blood donor
            </h4>
            <Slider {...settings}>
              {people.map((person) => (
                <DonateCart key={person.id} person={person} />
              ))}
            </Slider>
          </div>
          <div className="col-span-4">
            <h4 className="text-xl font-bold mb-5 text-[#111] leading-normal">
              Silver Club Member
            </h4>
            <Slider {...settings}>
              {people.map((person) => (
                <DonateCart key={person.id} person={person} />
              ))}
            </Slider>
          </div>
          <div className="col-span-4">
            <div className="bg-primary text-white p-5 ">
              <h4 className="text-xl flex gap-4 flex-col mb-5">
                <span>
                  Quantum is the lifeblood of voluntary blood donation programs
                </span>
                <span className="font-semibold">
                  List of Honorable Blood Donors
                </span>
              </h4>
              <div>
                {donateValue.map((donate) => (
                  <Link key={donate.id} href={`/donate-list`}>
                    <div className="p-1 mb-2 bg-white flex items-center  gap-3 justify-between rounded-tl-[50px] rounded-bl-[50px] rounded-[50px 0 0 50px] ">
                      <div className="flex gap-5 items-center">
                        <p className="w-[50px] flex items-center justify-center h-[50px] bg-primary rounded-full">
                          {donate.key}
                        </p>
                        <p className="text-[#111]">{donate.value}</p>
                      </div>
                      <IoIosArrowForward className="text-[#111]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListOfHonorableBloodDonors;
