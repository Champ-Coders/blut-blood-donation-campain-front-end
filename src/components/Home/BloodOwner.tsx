"use client";
import { FaHeart, FaPlay } from "react-icons/fa";
import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { useGetAllUsersQuery } from "@/redux/Api/authApi/AuthApi";

const BloodOwner = () => {
  const { data: allBlood } = useGetAllUsersQuery(undefined);

  const availableDonor = allBlood?.data?.data?.filter((item: any) => {
    return item?.available === true;
  });

  return (
    <section className={`relative mt-[150px]`}>
      <div
        style={{
          // backgroundImage
          backgroundImage: `url(https://i.ibb.co/ScS9jyZ/tp227-socialmedia-10-googlefocus.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 0,
        }}
        className="py-[50px] lg:py-[116px]  "
      >
        {/* overlay start */}
        <div className="absolute w-full h-full left-0 top-0 -z-[5] bg-[#16181b] opacity-80"></div>
        {/* overlay end */}
        {/* bg image end */}
        <div className="common">
          <div className="relative z-10">
            <div className="text-center">
              <h5 className="text-[#EA062B] text-[16px] uppercase mb-4">
                blood owner
              </h5>
              <h4 className="capitalize text-2xl lg:text-5xl font-bold text-white mb-7">
                we are blood donor group
              </h4>
            </div>
            <div className="flex justify-between relative">
              <button className=" bg-transparent mx-auto border border-white  border-l-transparent w-[85px] h-[85px] after:w-[65px] after:h-[65px] rounded-full rotate-[55deg]">
                <span></span>
                <span className=" w-full h-full flex items-center justify-center ">
                  <FaPlay
                    size={22}
                    className="text-[#ea062b] -rotate-[55deg]"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section start */}
      <div className="common p-0 relative -top-[60px] ">
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            className="bg-white py-[35px] px-[25px] shadow-[0px_9px_52px_0px_rgba(0,0,0,.07)] w-full rounded-lg border border-primary/20 "
          >
            <h3 className="text-[30px] text-[#111111] font-bold capitalize">
              current blood request
            </h3>
            <div className="w-full">
              <ul>
                {availableDonor?.map((item: any, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-[10px] border-b-[#11111140] border-b-[1px] py-[19px] text-[14px]"
                  >
                    {/* name */}
                    <span className="text-[#111111] font-bold">
                      {item?.name?.length > 15 ? (
                        <span>{item?.name?.slice(0, 15)}...</span>
                      ) : (
                        <span>{item?.name}</span>
                      )}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaHeart className="text-[#ea062b]" />
                      {item?.bloodGroup}
                    </span>{" "}
                    , {item?.address ?? "Full BD"} ,{" "}
                    {/* age ({item.dateOfBirth}) */}{" "}
                    <span className="text-[12px]">
                      (
                      {new Date().getFullYear() -
                        new Date(item?.dateOfBirth).getFullYear()}
                      ) years old
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* form */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            className="bg-white py-[35px] px-[25px] shadow-[0px_9px_52px_0px_rgba(0,0,0,.07)] w-full rounded-lg border border-primary/20 "
          >
            <h3 className="text-[30px] text-[#111111] font-bold capitalize mb-[30px]">
              Request for Blood Here
            </h3>
            <div className="w-full">
              <AppointmentForm availableDonor={availableDonor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodOwner;
