import { IUser } from "@/interfaces/common";
import React from "react";
import NoImage from "../../../public/assets/icon/userIcon.png";
import Image from "next/image";
import Link from "next/link";

const DonateList = ({ data }: { data: IUser }) => {
  return (
    <div className="bg-white shadow-md border p-3 rounded-lg  text-[14px] grid lg:grid-cols-4 justify-between items-center">
      {/* profile */}

      <div className="flex items-center flex-col md:flex-row ">
        <Image
          className="w-10 h-10 rounded-full mr-4"
          src={data?.imgUrl ?? NoImage}
          alt="Avatar of Jonathan Reinink"
          width={40}
          height={40}
        />
        <div className="text-sm flex flex-col gap-1">
          <p className="text-gray-900 leading-none">{data?.name}</p>
          <p className="text-gray-600 text-[12px] ">{data?.email}</p>
          {/* Phone */}
          <p className="text-gray-900 leading-none text-[12px]">
            {data?.phoneNumber}
          </p>
        </div>
      </div>

      {/* Blood Group */}

      <p className="text-gray-900 leading-none text-center">
        {data?.bloodGroup}
      </p>

      {/* Available */}
      <p className="text-gray-900 leading-none">
        {data?.available === true ? (
          <span className="text-green-900 text-[12px] bg-green-200 rounded-full p-2">
            Available
          </span>
        ) : (
          <span className="text-red-500 text-[12px] bg-primary/30 rounded-full p-2 ">
            Unavailable
          </span>
        )}
      </p>

      {/* request for blood */}
      {
        // @ts-ignore
        data?.available === true ? (
          <Link
            href={""}
            className="bg-primary text-white px-4 py-2 rounded-md text-center"
          >
            Request
          </Link>
        ) : (
          <button className="bg-primary/30 text-white px-4 py-2 rounded-md text-center">
            Request
          </button>
        )
      }
    </div>
  );
};

export default DonateList;
