import Link from "next/link";
import React from "react";
import {
  ProfileFilled,
  ReadFilled,
  CaretUpFilled,
  AlertFilled,
  AccountBookFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { IUser } from "@/interfaces/common";

const ProfileAside = ({ userData }: { userData: IUser }) => {
  return (
    <aside className="w-full min-h-[60vh] lg:w-[30%] flex flex-col gap-7 px-1 py-[3rem] mt-5 bg-white shadow-md">
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <ProfileFilled />
        <span>Profile</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <ReadFilled />
        <span>Basic Info</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <CaretUpFilled />
        <span>Change Password</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <AlertFilled />
        <span>Notificaction</span>
      </Link>
      <Link
        className="flex gap-5 text-black text-[16px] font-[500]"
        href="/profile"
      >
        <AccountBookFilled />
        <span>Account</span>
      </Link>
    </aside>
  );
};

export default ProfileAside;
