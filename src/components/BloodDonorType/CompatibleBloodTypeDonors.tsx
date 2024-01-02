"use client";
import { Table } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompatibleBloodType = [
  {
    id: 1,
    bloodType: "A+",
    donateBloodTo: "A+, AB+",
    receiveBloodFrom: "A+, A-, O+, O-",
  },
  {
    id: 2,
    bloodType: "A-",
    donateBloodTo: "A+, A-, AB+, AB-",
    receiveBloodFrom: "A-, O-",
  },
  {
    id: 3,
    bloodType: "B+",
    donateBloodTo: "B+, AB+",
    receiveBloodFrom: "B+, B-, O+, O-",
  },
  {
    id: 4,
    bloodType: "B-",
    donateBloodTo: "B+, B-, AB+, AB-",
    receiveBloodFrom: "B-, O-",
  },
  {
    id: 5,
    bloodType: "AB+",
    donateBloodTo: "AB+",
    receiveBloodFrom: "Everyone",
  },
  {
    id: 6,
    bloodType: "AB-",
    donateBloodTo: "AB+, AB-",
    receiveBloodFrom: "AB-, A-, B-, O-",
  },
  {
    id: 7,
    bloodType: "O+",
    donateBloodTo: "A+, B+, AB+, O+",
    receiveBloodFrom: "O+, O-",
  },
  {
    id: 8,
    bloodType: "O-",
    donateBloodTo: "Everyone",
    receiveBloodFrom: "O-",
  },
];

const columns = [
  {
    title: "Blood Type",
    dataIndex: "bloodType",
    key: "bloodType",
  },
  {
    title: "Donate Blood To",
    dataIndex: "donateBloodTo",
    key: "donateBloodTo",
  },
  {
    title: "Receive Blood From",
    dataIndex: "receiveBloodFrom",
    key: "receiveBloodFrom",
  },
];

const CompatibleBloodTypeDonors = () => {
  return (
    <div className="relative my-[50px]">
      <Image
        src="https://i.ibb.co/hHCs4hf/4414663.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
        width={2070}
        height={700}
      />
      <div className="relative bg-primary/70 bg-opacity-90">
        <svg
          className="absolute inset-x-0 -bottom-1 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div className="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
              <h2 className="mb-6 max-w-lg font-oswald text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">
                You don&apos;t need to be a Doctor to Save Lives
              </h2>
              <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg">
                Be a hero. A real hero. Save a life. Donate blood.
              </p>
              <Link
                href="/donate-now"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider text-white transition-colors duration-200 hover:text-white"
              >
                Donate Now
                <svg
                  className="ml-2 inline-block w-3"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:w-6/12 xl:px-8">
              <Table
                columns={columns}
                dataSource={CompatibleBloodType}
                bordered
                title={() => (
                  <p className="font-playfair">Compatible Blood Type Donors</p>
                )}
                pagination={false}
                className="overflow-hidden rounded-xl border-t-4 border-primary/70  shadow-2xl shadow-primary/40 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibleBloodTypeDonors;
