"use client";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";
import userBg from "../../../../public/assets/banner/userBg.jpg";
import userImage from "../../../../public/assets/icon/blood_user.jpg";
import Image from "next/image";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import { IUser } from "@/interfaces/common";
import Link from "next/link";

const profile = {
  name: "Ricardo Cooper",
  email: "ricardo.cooper@example.com",
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};

export default function ProfilePage() {
  const { data } = useUserProfileQuery(null);

  const userData: IUser = data?.data;
  console.log(data);

  return (
    <div>
      <div>
        <Image
          height={200}
          width={300}
          className="h-[30vh] w-full object-cover "
          src={userBg}
          alt="profilebanner"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              height={100}
              width={100}
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={userImage}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {userData?.name}
              </h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href={`https://wa.me/${userData?.phoneNumber}`}
                target="_blank"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <MessageOutlined
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Message</span>
              </Link>
              <Link
                href={`https://wa.me/${userData?.phoneNumber}`}
                target="_blank"
                // type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PhoneOutlined
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Call</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {userData?.name}
          </h1>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold uppercase leading-normal text-blueGray-700 mb-2">
          {userData?.role}{" "}
          <span className="text-red-600">({userData?.bloodGroup})</span>
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Address: {userData?.address}
        </div>
        <div className="mb-2 text-blueGray-600 mt-10">
          <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
          Date of Birth: {userData?.dateOfBirth}
        </div>
        <div className="mb-2 text-blueGray-600">
          <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
          Contact: {userData?.phoneNumber}
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              A blood {userData?.role} of considerable range, {userData?.name}{" "}
              the name taken by &nbsp; {userData?.address}, Brooklyn-based{" "}
              {userData?.name} writes, performs and records all of his own
              music, giving it a warm, intimate feel with a solid groove
              structure. An artist of considerable range.
            </p>
            <a href="#" className="font-normal text-pink-500">
              Show more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
