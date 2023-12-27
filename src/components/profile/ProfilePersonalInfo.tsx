"use client";
import { IUser } from "@/interfaces/common";
import { Button } from "antd";
import React, { useState } from "react";
import ProfileUpdateModalUI from "../ModalUI/ProfileModal";

const PersonalInfo = ({ userData }: { userData: IUser }) => {
  console.log(userData);

  const [UserId, setUserId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    bloodGroup: "",
    dateOfBirth: "",
  });
  //   console.log(userData);
  const formattedDate = new Date(userData?.dateOfBirth).toLocaleDateString(
    "en-US",
    { day: "2-digit", month: "long", year: "numeric" }
  );
  return (
    <div className="max-w-full  mx-1 lg:mx-auto my-5  overflow-hidden sm:rounded-lg bg-white shadow-md">
      <div className="px-4 py-5 sm:px-6 ">
        <div className="flex justify-between">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            Personal Information
          </h3>

          <Button
            className="mr-[6px]"
            onClick={() => {
              setUserId(userData._id);
              setEditUser({
                name: userData.name,
                email: userData?.email,
                address: userData?.address,
                phoneNumber: userData?.phoneNumber,
                dateOfBirth: userData?.dateOfBirth,
                bloodGroup: userData?.bloodGroup,
              });

              // name: "Sarwar";
              // email: "asik@gmail.com";
              // address: "123 Main Street, Cityville";

              // phoneNumber: "12345678904";
              // bloodGroup: "A+";
              // dateOfBirth: "1990-01-01T00:00:00.000Z";

              setIsModalOpen(true);
            }}
            type="default"
          >
            Update Profile
          </Button>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and informations about user.
        </p>
      </div>

      <ProfileUpdateModalUI
        modalId={UserId}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        editUser={editUser}
        setEditUser={setEditUser}
      ></ProfileUpdateModalUI>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData?.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">User Birthday</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formattedDate}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData?.email}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-red-500">Blood Group</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData?.bloodGroup}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PersonalInfo;
