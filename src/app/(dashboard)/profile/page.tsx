"use client";

import Image from "next/image";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import { IUser } from "@/interfaces/common";
import Link from "next/link";
import ChangePasswordPage from "@/components/dashboard/ChangePassword";
import ProfileTopSection from "@/components/profile/ProfileTop";
import PersonalInfo from "@/components/profile/ProfilePersonalInfo";

import ProfileSession from "@/components/profile/ProfileSession";
import ProfileAside from "@/components/profile/ProfileAside";
import ProfileAuthentication from "@/components/profile/ProfileAuthentication";

export default function ProfilePage() {
  const { data } = useUserProfileQuery(null);

  const userData: IUser = data?.data;

  return (
    <div className="bg-slate-100">
      <ProfileTopSection userData={userData} />

      <section className="block lg:flex justify-between items-start gap-3">
        <ProfileAside userData={userData} />
        {/* //! Right Section */}
        <div className="w-full lg:w-[70%] flex flex-col  items-center ">
          <PersonalInfo userData={userData}></PersonalInfo>
          <ProfileAuthentication userData={userData} />
          <div className="  my-2 sm:rounded-lg w-full ">
            <ChangePasswordPage />
          </div>
          <ProfileSession userData={userData}></ProfileSession>
         
        </div>
      </section>
    </div>
  );
}
