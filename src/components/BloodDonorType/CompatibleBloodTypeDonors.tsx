"use client";
import { Table } from "antd";
import Image from "next/image";
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
      <h1 className="text-[28px] font-semibold my-[30px] text-center text-primary font-poppins">
        Learn About Donation
      </h1>

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
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={CompatibleBloodType}
          bordered
          title={() => "Compatible Blood Type Donors"}
          pagination={false}
          className="w-[600px] shadow-xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default CompatibleBloodTypeDonors;
