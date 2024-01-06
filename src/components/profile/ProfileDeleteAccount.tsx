import React from "react";
import {
  ChromeOutlined,
  PhoneOutlined,
  MobileOutlined,
  LaptopOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { IUser } from "@/interfaces/common";
import { Switch } from "antd";

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

const ProfileDeleteAccount = ({ userData }: { userData: IUser }) => {
  return (
    <div className="w-full flex flex-col gap-1 mt-8 px-5 shadow-x py-7 bg-white shadow-md rounded-md">
      <h2 className="text-xl mb-4 font-bold text-slate-700">Delete Account</h2>

      <p className="text-[#8690A5] text-[16px]">
        Once you delete your account, there is no going back. Please be certain.
      </p>
      {/* Current session */}
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center gap-3 text-[16px]">
          <Switch />
          <h2 className="flex flex-col">
            <span className="text-[18px] font-[550] text-slate-700">
              Confirm
            </span>
            <span className="text-[14px] text-slate-500">
              I want to delete my account.
            </span>
          </h2>
        </div>

        <section className="">
          <button className="px-3 py-2 ml-2 w-[6rem] bg-red-600 text-white font-semibold  rounded-md uppercase">
            Active
          </button>
          <button className="px-3 py-2 ml-2  bg-white border-[1px] border-slate-400 font-semibold text-slate-600 rounded-md uppercase">
            Delete Account
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProfileDeleteAccount;
