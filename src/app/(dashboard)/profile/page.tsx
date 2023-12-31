"use client";

import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import { IUser } from "@/interfaces/common";
import ChangePasswordPage from "@/components/dashboard/ChangePassword";
import ProfileTopSection from "@/components/profile/ProfileTop";
import PersonalInfo from "@/components/profile/ProfilePersonalInfo";

import ProfileSession from "@/components/profile/ProfileSession";
import ProfileAside from "@/components/profile/ProfileAside";
import ProfileAuthentication from "@/components/profile/ProfileAuthentication";
import ProfileAccount from "@/components/profile/ProfileAccount";
import ProfileNotification from "@/components/profile/ProfileNotification";
import ProfileDeleteAccount from "@/components/profile/ProfileDeleteAccount";

export default function ProfilePage() {
  const { data } = useUserProfileQuery(null);

  const userData: IUser = data?.data;

  return (
    <div className="bg-slate-100">
      <ProfileTopSection userData={userData} />

      <section className="block lg:flex justify-between items-start gap-3 relative px-5">
        <ProfileAside userData={userData} />
        {/* //! Right Section */}
        <div className="w-full lg:w-[70%] flex flex-col  items-center ">
          <PersonalInfo userData={userData}></PersonalInfo>
          <div className="  my-2 sm:rounded-lg w-full ">
            <ChangePasswordPage />
          </div>
          <ProfileAuthentication userData={userData} />
          <ProfileAccount userData={userData}></ProfileAccount>
          <ProfileNotification userData={userData}></ProfileNotification>
          <ProfileSession userData={userData}></ProfileSession>
          <ProfileDeleteAccount userData={userData}></ProfileDeleteAccount>
        </div>
      </section>
    </div>
  );
}
