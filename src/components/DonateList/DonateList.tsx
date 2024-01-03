import { IUser } from "@/interfaces/common";
import React from "react";
import NoImage from "../../../public/assets/icon/userIcon.png";
import Image from "next/image";

const DonateList = ({ data }: { data: IUser }) => {
  return (
    <div className="bg-white shadow-md border p-3 rounded-lg flex justify-between items-center">
      <div className="flex items-center">
        <Image
          className="w-10 h-10 rounded-full mr-4"
          src={data?.imgUrl ?? NoImage}
          alt="Avatar of Jonathan Reinink"
          width={40}
          height={40}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{data?.name}</p>
          <p className="text-gray-600">{data?.email}</p>
        </div>
      </div>

      {/* Blood Group */}

      <p className="text-gray-900 leading-none">{data?.bloodGroup}</p>
    </div>
  );
};

export default DonateList;
