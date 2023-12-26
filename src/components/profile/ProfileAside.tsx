import Link from "next/link";
import React from "react";
import {
  ProfileFilled,
  ReadFilled,
  CaretUpFilled,
  AlertFilled,
  AccountBookFilled,
  DeleteFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { IUser } from "@/interfaces/common";

const profileData: {
  icon: any;
  title: string;

  link: string;
}[] = [
  {
    icon: (
      <ProfileFilled
        style={{
          fontSize: "24px",
        }}
      />
    ),
    title: "Profile",
    link: "/profile/profile",
  },
  {
    icon: (
      <ReadFilled
        style={{
          fontSize: "24px",
        }}
      />
    ),
    title: "Posts",
    link: "/profile",
  },
  {
    icon: (
      <CaretUpFilled
        style={{
          fontSize: "24px",
        }}
      />
    ),
    title: "Likes",
    link: "/profile",
  },
  {
    icon: (
      <AlertFilled
        style={{
          fontSize: "24px",
        }}
      />
    ),
    title: "Notifications",
    link: "/profile",
  },
  {
    icon: (
      <AccountBookFilled
        style={{
          fontSize: "24px",
        }}
      />
    ),
    title: "Account",
    link: "/profile",
  },
  {
    icon: (
      <DeleteFilled
        style={{
          fontSize: "24px",
        }}
      />
    ),
    title: "Delete",
    link: "/profile",
  },{
    icon: (
      <SettingOutlined
        style={{
          fontSize: "24px",
        }}
      />
    ),
    title: "Settings",
    link: "/profile",
  }
];
const ProfileAside = ({ userData }: { userData: IUser }) => {
  return (
    <aside className="sticky top-0 w-full lg:w-[30%] flex flex-col gap-5  py-[3rem] mt-5 bg-white shadow-md px-3">
      {profileData.map((item, index) => {
        return (
          <Link
            className="flex gap-5 text-black text-[16px] font-[500] px-3  py-2 hover:bg-slate-200"
            href={item?.link}
            key={index + 1}
          >
            {item?.icon}
            <span>{item?.title}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default ProfileAside;
