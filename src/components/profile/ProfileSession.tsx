import React from "react";
import {
  ChromeOutlined,
  PhoneOutlined,
  MobileOutlined,
  LaptopOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { IUser } from "@/interfaces/common";

const ProfileSession = ({ userData }: { userData: IUser }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-8 px-5 shadow-x py-3 bg-white shadow-md rounded-md">
      <h2 className="text-xl mb-4 font-bold text-slate-700">Sessions</h2>

      <p className="text-[#8690A5] text-[16px]">
        This is a list of devices that have logged into your account. Remove
        those that you do not recognize.
      </p>
      {/* Current session */}
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center gap-2 text-[16px]">
          <LaptopOutlined style={{
            fontSize:"28px"
          }}/>
          <span>Bucharest 68.133.163.201</span>
        </div>
        <button className="text-primary ">
            <span className="text-[#65A30D] bg-[#D9F99D] p-[2px] font-[500] mx-2 rounded">Active</span>
          <span className="text-[#8690A5] mr-3">BDT</span> <span>See more</span>
          <ArrowRightOutlined />
        </button>
      </div>
      {/* Active Session */}
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center gap-2 text-[16px]">
          <ChromeOutlined style={{
            fontSize:"28px"
          }}/>
          <span>Chrome on macOS</span>
        </div>
        <button className="text-primary ">
          {" "}
          <span className="text-[#8690A5] mr-3">EU</span> <span>See more</span>{" "}
          <ArrowRightOutlined />
        </button>
      </div>

      {/* Inactive Session 1 */}
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center gap-2 text-[16px]">
          <PhoneOutlined style={{
            fontSize:"28px"
          }}/>
          <span>Safari on iPhone</span>
        </div>
        <button className="text-primary ">
          <span className="text-[#8690A5] mr-3">EU</span> <span>See more</span>
          <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
};

export default ProfileSession;
