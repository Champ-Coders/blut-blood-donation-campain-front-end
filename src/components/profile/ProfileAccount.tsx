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

const accountData: {
  icon: any;
  name: string;

  type: string;
  status: boolean;
}[] = [
  {
    icon: (
      <ChromeOutlined
        style={{
          fontSize: "36px",
        }}
      />
    ),
    name: "Slack",
    type: "Organized",
    status: true,
  },

  {
    icon: (
      <LaptopOutlined
        style={{
          fontSize: "36px",
        }}
      />
    ),
    name: "Spotify",
    type: "Music",
    status: true,
  },
  {
    icon: (
      <PhoneOutlined
        style={{
          fontSize: "36px",
        }}
      />
    ),
    name: "Atlassian",
    type: "Payment vendor",
    status: false,
  },
];

const ProfileAccount = ({ userData }: { userData: IUser }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-8 px-5 shadow-x py-5 bg-white shadow-md rounded-md">
      <h2 className="text-xl mb-4 font-bold text-slate-700">Accounts</h2>

      <p className="text-[#8690A5] text-[16px]">
        Here you can setup and manage your integration settings.
      </p>
      {/* Current session */}
      {accountData.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between border-b py-4 "
            key={index}
          >
            <div className="flex items-center gap-2 text-[16px]">
              {item?.icon}
              <section>
                <h2 className="text-xl font-[550]">{item?.name}</h2>
                <p className="text-[14px] text-[#8690A5]">{item?.type}</p>
              </section>
            </div>

            <div className="text-[#8690A5] flex gap-2">
              {item?.status && <h3>Enabled</h3>}

              <Switch defaultChecked={item?.status ? true : false} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileAccount;
