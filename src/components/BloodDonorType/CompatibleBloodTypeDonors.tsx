"use client";
import { Table } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompatibleBloodType = [
  {
    bloodType: "A+",
    donateBloodTo: "A+, AB+",
    receiveBloodFrom: "A+, A-, O+, O-",
  },
  {
    bloodType: "A-",
    donateBloodTo: "A+, A-, AB+, AB-",
    receiveBloodFrom: "A-, O-",
  },
  {
    bloodType: "B+",
    donateBloodTo: "B+, AB+",
    receiveBloodFrom: "B+, B-, O+, O-",
  },
  {
    bloodType: "B-",
    donateBloodTo: "B+, B-, AB+, AB-",
    receiveBloodFrom: "B-, O-",
  },
  {
    bloodType: "AB+",
    donateBloodTo: "AB+",
    receiveBloodFrom: "Everyone",
  },
  {
    bloodType: "AB-",
    donateBloodTo: "AB+, AB-",
    receiveBloodFrom: "AB-, A-, B-, O-",
  },
  {
    bloodType: "O+",
    donateBloodTo: "A+, B+, AB+, O+",
    receiveBloodFrom: "O+, O-",
  },
  {
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
    <div className="md:w-5/6 mx-0 md:mx-auto ">
      {/* <h1 className="text-[28px] font-semibold my-[30px] text-center text-primary font-poppins">
        Learn About Donation
      </h1> */}

      <div className="text-center my-10 ">
        <h5 className="text-[#EA062B] text-[16px] uppercase mb-4">Learn</h5>
        <h4 className="capitalize text-2xl font-playfair lg:text-5xl font-bold text-black mb-7">
          Learn About Donation
        </h4>
      </div>

      {/* donation */}

      <div className="flex flex-col lg:flex-row w-full gap-28 items-center justify-between">
        {/* image */}
        <div>
          <Image
            src="https://i.ibb.co/TtssLxt/donation-Fact.webp"
            alt="logo"
            width={600}
            height={700}
            className=" w-[807px] h-[330px] "
          />

          <div className="text-center text-[#6b6f72] border-l-4 border-gray-200 flex flex-col items-center ">
            <p className="text-[18px] font-semibold font-Player-Display px-4">
              {" "}
              After donating blood, the body works to replenish the blood loss.
              This stimulates the production of new blood cells and in turn,
              helps in maintaining good health.
            </p>
            {/* Button -Donate Now */}
            <Link
              href={"/donate-now"}
              className="bg-primary text-white px-4 py-2 rounded-lg mt-4 text-[12px]"
            >
              {/* blood icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
                  clipRule="evenodd"
                />
              </svg>
              Donate Now
            </Link>
          </div>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={CompatibleBloodType}
          bordered
          title={() => (
            <p className="font-playfair">Compatible Blood Type Donors</p>
          )}
          pagination={false}
          className="w-[600px] shadow rounded-lg"
        />
      </div>
    </div>
  );
};

export default CompatibleBloodTypeDonors;
