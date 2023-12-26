import React from "react";
import {
  ChromeOutlined,
  PhoneOutlined,
  MobileOutlined,
  LaptopOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { IUser } from "@/interfaces/common";

const sessionData: {
  icon: any;
  deviceName: string;
  location: string;
  status: boolean;
}[] = [
  {
    icon: (
      <ChromeOutlined
        style={{
          fontSize: "28px",
        }}
      />
    ),
    deviceName: "Chrome on macOS",
    location: "EU",
    status: true,
  },

  {
    icon: (
      <LaptopOutlined
        style={{
          fontSize: "28px",
        }}
      />
    ),
    deviceName: "Safari on Laptop",
    location: "US",
    status: false,
  },
  {
    icon: (
      <PhoneOutlined
        style={{
          fontSize: "28px",
        }}
      />
    ),
    deviceName: "Phone of IPhone",
    location: "EU",
    status: false,
  },
];

const ProfileSession = ({ userData }: { userData: IUser }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-8 px-5 shadow-x py-5 bg-white shadow-md rounded-md">
      <h2 className="text-xl mb-4 font-bold text-slate-700">User Sessions</h2>

      <p className="text-[#8690A5] text-[16px]">
        This is a list of devices that have logged into your account. Remove
        those that you do not recognize.
      </p>
      {/* Current session */}
      {sessionData.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between border-b py-4"
            key={index}
          >
            <div className="flex items-center gap-2 text-[16px]">
              {item?.icon}
              <span>{item?.deviceName}</span>
            </div>

            <button className="text-primary ">
              {item?.status && (
                <span className="text-[#65A30D] bg-[#D9F99D] p-[2px] font-[500] mx-2 rounded">
                  Active
                </span>
              )}
              <span className="text-[#8690A5] mr-3">{item?.location}</span>{" "}
              <span>See more</span>
              <ArrowRightOutlined />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSession;
