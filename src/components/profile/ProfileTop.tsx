import Image from "next/image";
import React from "react";
import userImage from "../../../public/assets/icon/userIcon.png";
import Link from "next/link";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";
import { IUser } from "@/interfaces/common";

import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

const ProfileTopSection = ({ userData }: { userData: IUser }) => {
  return (
    <div className="bg-white">
      <div>
        <Image
          unoptimized
          height={200}
          width={300}
          className="h-[30vh] w-full object-cover "
          src={`https://img.freepik.com/free-photo/red-white-triangular-cardboard-sheets-with-copy-space_23-2148320474.jpg?size=626&ext=jpg&uid=R88795710&ga=GA1.1.347367071.1702385638&semt=ais`}
          alt="profilebanner"
        />
      </div>
      <div className="common px-4 sm:px-6 lg:px-8 py-3">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              height={100}
              width={100}
              className="h-[7rem] w-[7rem] rounded-full  bg-white  sm:h-32 sm:w-32"
              src={userData?.imgUrl ?? userImage}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {userData?.name}
              </h1>

              <div className="mt-2 flex items-center text-sm text-gray-500">
                <span className="truncate">{userData?.role}</span>
              </div>
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
              <Link
                href={`/request/${userData?._id}`}
                target="_blank"
                // type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <VscGitPullRequestGoToChanges
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Request For Blood</span>
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
    </div>
  );
};

export default ProfileTopSection;
