"use client";

import Image, { StaticImageData } from "next/image";
import { useGetSingleUserQuery } from "@/redux/Api/authApi/AuthApi";
import { IUser } from "@/interfaces/common";
import ProfileTopSection from "@/components/profile/ProfileTop";

import image1 from "../../../../../public/assets/list blood donar/reword/1.png";

import image2 from "../../../../../public/assets/list blood donar/reword/2.png";

import image3 from "../../../../../public/assets/list blood donar/reword/3.png";

import image4 from "../../../../../public/assets/list blood donar/reword/4.png";

type IReword = {
  title: string;
  image: StaticImageData;
  id: string;
};

export default function DonateListPerson({
  params,
}: {
  params: { id: string };
}) {
  const reword: IReword[] = [
    {
      id: "1",
      title: "Lifelong Blood Donor",
      image: image1,
    },
    {
      id: "2",
      title: "Silver Club",
      image: image2,
    },
    {
      id: "3",
      title: "Golden Club",
      image: image3,
    },
    {
      id: "4",
      title: "Platinum Club",
      image: image4,
    },
  ];
  const { data } = useGetSingleUserQuery(params.id);

  const userData: IUser = data?.data;

  return (
    <main className="">
      <ProfileTopSection userData={userData} />
      {/* <section className="">
        <div className="common">
          <h4 className="text-2xl text-[#111] border-b-[3px] border-b-primary">
            Achievement
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reword.map((item) => (
              <div key={item.id}>
                <Image
                  width={140}
                  height={240}
                  src={item.image}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <div className="common bg-white">
        {/* batch */}

        {userData?.totalDonation > 0 ? (
          <>
            <p className="py-2 text-xl font-semibold">Batch</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <Image
                width={140}
                height={240}
                src={image1}
                alt="Lifelong Blood Donor"
              />
            </div>
          </>
        ) : null}

        {/* name */}

        <hr className="mt-2 mb-2" />
        <p className="py-2 text-xl font-semibold">Email Address</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            <strong>{userData?.email}</strong>
          </p>
        </div>
        <hr className="mt-2 mb-2" />
        <p className="py-2 text-xl font-semibold">Phone Number</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            <strong>{userData?.phoneNumber}</strong>
          </p>
        </div>
        {/* address */}
        <hr className="mt-2 mb-2" />
        <p className="py-2 text-xl font-semibold">Address</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            <strong className="flex flex-wrap gap-3">
              {userData?.address?.village},{userData?.address?.thana},
              {userData?.address?.postOffice},{userData?.address?.district},
              {userData?.address?.division}
            </strong>
          </p>
        </div>

        {/* blood group */}
        <hr className="mt-2 mb-2" />
        <p className="py-2 text-xl font-semibold">Blood Group</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            <strong>{userData?.bloodGroup}</strong>
          </p>
        </div>

        {/* birth day */}
        <hr className="mt-2 mb-2" />
        <p className="py-2 text-xl font-semibold">Birth Day</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            <strong>
              {new Date(userData?.dateOfBirth)
                .toString()
                .split(" ")
                .slice(0, 4)
                .join(" ")}
            </strong>
          </p>
        </div>
      </div>
    </main>
  );
}
