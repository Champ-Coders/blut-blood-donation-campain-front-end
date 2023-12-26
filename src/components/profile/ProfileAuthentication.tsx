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
  name: any;
  key: string;

  status: "Add" | "Edit" | "Setup";
}[] = [
  {
    name: "Security keys",
    key: "No Security Keys",
    status: "Add",
  },
  {
    name: "SMS number",
    key: "+4012374423",
    status: "Edit",
  },
  {
    name: "Authenticator app",
    key: "Not Configured",
    status: "Setup",
  },
];

const ProfileAuthentication = ({ userData }: { userData: IUser }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-8 px-5 shadow-x py-3 bg-white shadow-md rounded-md">
      <section className="flex justify-between items-center">
        <h2 className="text-xl mb-4 font-bold text-slate-700">
          Two-factor authentication
        </h2>
        <span className="text-[#65A30D] bg-[#D9F99D] p-[2px] font-[500] mx-2 rounded uppercase">
          Enabled
        </span>
      </section>

      {/* Current session */}
      {sessionData.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between border-b py-4"
            key={index}
          >
            <div className="flex items-center gap-2 text-[16px]">
              {item?.name}
            </div>

            <button className="">
              <span className="text-slate-600">{item?.key}</span>
              <button className="px-3 py-2 ml-2 w-[6rem] bg-white border-[1px] border-primary font-semibold rounded-md">
                {item?.status}
              </button>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileAuthentication;
