import { FaHeart, FaPlay } from "react-icons/fa";
import React from "react";
import bg from "../../../public/assets/cover-sbda.jpg";
import { CurrentBloodRequest } from "@/constants/CurrentBloodRequest";
import { ICurrentBloodRequest } from "@/interfaces/common";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { useGetAllUsersQuery } from "@/redux/Api/authApi/AuthApi";
import config from "@/config/config";

async function getData() {
  const res = await fetch(`${config.apiBaseUrl}/users/all-users`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BloodOwner = async () => {
  const allBlood = await getData();

  const availableDonor = allBlood?.data?.data?.filter((item: any) => {
    return item?.available === true;
  });

  return (
    <section className={`relative`}>
      <div
        style={{
          // backgroundImage
          backgroundImage: `url(${bg.src})`,
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
      <div className="common p-0 relative -top-[60px]">
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="bg-white py-[35px] px-[25px] shadow-[0px_9px_52px_0px_rgba(0,0,0,.07)] w-full">
            <h3 className="text-[30px] text-[#111111] font-bold capitalize">
              current blood request
            </h3>
            <div className="w-full">
              <ul>
                {availableDonor?.map((item: any, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-[10px] border-b-[#11111140] border-b-[1px] py-[19px]"
                  >
                    <span className="flex items-center gap-2">
                      <FaHeart className="text-[#ea062b]" />
                      {item?.bloodGroup}
                    </span>{" "}
                    ,{item?.address ?? "Full BD"} ,
                    {/* age ({item.dateOfBirth}) */}({" "}
                    {new Date().getFullYear() -
                      new Date(item?.dateOfBirth).getFullYear()}
                    ) years old
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* form */}
          <div className="bg-white py-[35px] px-[25px] shadow-[0px_9px_52px_0px_rgba(0,0,0,.07)] w-full">
            <h3 className="text-[30px] text-[#111111] font-bold capitalize mb-[30px]">
              Request Appointment Here
            </h3>
            <div className="w-full">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodOwner;
