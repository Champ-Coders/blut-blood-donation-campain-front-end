import Link from "next/link";
import React from "react";
import {
  ProfileFilled,
  ReadFilled,
  CaretUpFilled,
  AlertFilled,
  AccountBookFilled,
  DeleteFilled,
  SettingOutlined
} from "@ant-design/icons";
import { IUser } from "@/interfaces/common";

const ProfileAside = ({ userData }: { userData: IUser }) => {
  return (
    <aside className="w-full min-h-[60vh] lg:w-[30%] flex flex-col gap-7 px-1 py-[3rem] mt-5 bg-white shadow-md">
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <ProfileFilled style={{fontSize:"24px",color:"#ea062b"}} />
        <span>Profile</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <ReadFilled style={{fontSize:"24px",color:"#ea062b"}} />
        <span>Basic Info</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <CaretUpFilled style={{fontSize:"24px",color:"#ea062b"}} />
        <span>Change Password</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <AlertFilled style={{fontSize:"24px",color:"#ea062b"}} />
        <span>Notificaction</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <AccountBookFilled style={{fontSize:"24px",color:"#ea062b"}} />
        <span>Account</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <SettingOutlined style={{fontSize:"24px",color:"#ea062b"}} />
        <span>Setting</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <DeleteFilled style={{fontSize:"24px",color:"#ea062b"}} />
        <span>Delete Profile</span>
      </Link>
    </aside>
  );
};

export default ProfileAside;
