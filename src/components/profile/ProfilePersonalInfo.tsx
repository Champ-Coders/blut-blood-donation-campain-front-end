import { IUser } from "@/interfaces/common";
import React from "react";

const PersonalInfo = ({ userData }: { userData: IUser }) => {
//   console.log(userData);
  const formattedDate = new Date(userData?.dateOfBirth).toLocaleDateString(
    "en-US",
    { day: "2-digit", month: "long", year: "numeric" }
  );
  return (
    <div className=" max-w-2xl lg:max-w-[45rem] mx-1 lg:mx-auto my-2 lg:my-12 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 ">
        <h3 className="text-xl leading-6 font-medium text-gray-900">
          Personal Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and informations about user.
        </p>
      </div>
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
