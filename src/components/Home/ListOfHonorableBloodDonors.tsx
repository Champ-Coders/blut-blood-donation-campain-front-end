"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";
import Link from "next/link";
import DonateCart from "../DonateList/DonateCart";

import bg from "../../../public/assets/list blood donar/bg.jpg";
import { useGetAllUsersQuery } from "@/redux/Api/authApi/AuthApi";
import LoadingPage from "@/app/loading";
import { IUser } from "@/interfaces/common";

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

  const { data: users, isLoading } = useGetAllUsersQuery(undefined);

  if (isLoading) {
    return <LoadingPage />;
  }

  // sort by total donation
 const highestDonar = users?.data?.data?.sort((a: IUser, b: IUser) => {
   return b.totalDonation - a.totalDonation;
 });
 console.log("🚀 ~ file: ListOfHonorableBloodDonors.tsx:122 ~ highestDonar ~ highestDonar:", highestDonar)







  return (
    <>
      {/* test */}
      <section className="relative overflow-hidden  py-12 sm:py-16 lg:py-20">
        <div className="absolute h-96 w-[520px] scale-125 -right-8 -bottom-10 hidden lg:block">
          <div className="absolute h-96 w-[550px] rounded-2xl border-4 border-primary/30"></div>
          <div className="absolute h-96 w-[550px] translate-x-3 translate-y-3 rounded-2xl border-4 border-primary/30"></div>
          <div className="absolute h-96 w-[550px] translate-x-6 translate-y-6 rounded-2xl border-4 border-primary/30"></div>
        </div>

        {/* main */}
        <section>
          <div className="common">
            <div className="text-center mb-5 sm:mb-20">
              <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
                DONATE NOW
              </h3>
              <h1 className="text-black font-[800] text-3xl sm:text-5xl">
                List of Honorable Blood Donors
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="col-span-4">
                <h4
                  className={`font-kalpurush text-xl font-bold mb-5 text-[#111] leading-normal`}
                >
                  সর্বোচ্চ রক্তদাতা
                </h4>
                <Slider {...settings}>
                  {users?.data?.data?.map((person: IUser) => (
                    <DonateCart key={person._id} person={person} />
                  ))}
                </Slider>
              </div>
              <div className="col-span-4">
                <h4
                  className={`font-kalpurush text-xl font-bold mb-5 text-[#111] leading-normal`}
                >
                  সিলভার ক্লাব মেম্বার
                </h4>
                <Slider {...settings} className="mx-[8px]">
                  {users?.data?.data?.map((person: IUser) => (
                    <DonateCart key={person._id} person={person} />
                  ))}
                </Slider>
              </div>
              <div className="col-span-4">
                <div
                  style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className=" text-white rounded-md  p-5 md:px-10"
                >
                  <h4 className="text-xl flex gap-5 flex-col mb-5 font-kalpurush ">
                    কোয়ান্টাম স্বেচ্ছা রক্তদান কার্যক্রমের প্রাণ সম্মানিত
                    রক্তদাতাদের তালিকা
                  </h4>
                  <div>
                    {donateValue.map((donate) => (
                      <Link key={donate.id} href={`/donate-list`}>
                        <div className="">
                          <div
                            className="w-full h-full relative items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group 
                      
                      p-1 mb-2  flex  gap-3 rounded-tl-[50px] rounded-bl-[50px] 
                      
                      "
                          >
                            {/* purple box */}
                            <div className="w-0 h-0 rounded rounded-tl-[50px] rounded-bl-[50px]  bg-[#111] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></div>
                            <div className="w-full text-wite transition-colors duration-300 ease-in-out group-hover:text-primary z-10 flex justify-between items-center ">
                              <div className="flex gap-5 items-center">
                                <p className="w-[50px] flex items-center justify-center h-[50px] bg-primary group-hover:bg-white rounded-full">
                                  {donate.key}
                                </p>
                                <p className="text-[#111] group-hover:text-white">
                                  {donate.value}
                                </p>
                              </div>
                              <IoIosArrowForward className="text-[#111] group-hover:text-white" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ListOfHonorableBloodDonors;
