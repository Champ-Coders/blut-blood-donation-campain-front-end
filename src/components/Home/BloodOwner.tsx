import { FaPlay } from "react-icons/fa";
import React from "react";
import bg from "@/assets/home/blood-donor-bg.png";
import Image from "next/image";

const BloodOwner = () => {
  return (
    <section className={`  `}>
      <div className="py-[116px]  relative">
        {/* bg image start */}
        <div className="absolute w-full h-full -z-10 left-0 top-0 ">
          <Image src={bg} className="" alt="blood-donor-bg" fill />
        </div>
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
              <h4 className="capitalize text-5xl font-bold text-white mb-7">
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
      <div className="common">
        <div>
          <div className="bg-white p-[35px] shadow-[0px_9px_52px_0px_rgba(0,0,0,.07)]">
            <h3>current blood request</h3>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default BloodOwner;
