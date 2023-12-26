import React from "react";

import { IUser } from "@/interfaces/common";
import { Switch } from "antd";

const notificationData: {
  activity: string;
  details?: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}[] = [
  {
    activity: "Mentions",
    details: "Notify when another user mentions you in a comment",
    email: true,
    push: false,
    sms: false,
  },
  {
    activity: "Comments",
    details: "Notify when another user Comments you in a comment",
    email: true,
    push: true,
    sms: false,
  },
  {
    activity: "Follow",
    details: "Notify when another user Follow you in a comment",
    email: false,
    push: true,
    sms: false,
  },
  {
    activity: "Login from a new device",

    email: true,
    push: true,
    sms: true,
  },
];

const ProfileNotification = ({ userData }: { userData: IUser }) => {
  return (
    <div className="w-full flex flex-col gap-2 mt-8 px-5 shadow-x py-5 bg-white shadow-md rounded-md">
      <h2 className="text-xl mb-4 font-bold text-slate-700">Notification</h2>

      <p className="text-[#8690A5] text-[16px]">
        Choose how you receive notifications. These notification settings apply
        to the things you’re watching.
      </p>
      
      <div className="flex items-center justify-between border-b py-4">
        <h3 className="text-[16px]">Activity</h3>

        <div className="text-[#8690A5] flex justify-between gap-7">
          <h1>Email</h1>
          <h1>Push</h1>
          <h1>SMS</h1>
        </div>
      </div>

      {/* Current notification */}
      {notificationData.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between border-b py-4"
            key={index}
          >
            <div className="flex flex-col justify-start items-start gap-2 ">
              <h3 className="text-[16px]">{item?.activity}</h3>
              <p className="text-[#8690A5] text-[14px]">{item?.details}</p>
            </div>
            <div className="text-[#8690A5] flex gap-2">
              <Switch defaultChecked={item?.email ? true : false} />
              <Switch defaultChecked={item?.push ? true : false} />
              <Switch defaultChecked={item?.sms ? true : false} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileNotification;
