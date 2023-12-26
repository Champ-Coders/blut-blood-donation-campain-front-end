"use client";

import Image, { StaticImageData } from "next/image";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
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

export default function DonateListPerson() {
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
  const { data } = useUserProfileQuery(null);

  const userData: IUser = data?.data;

  return (
    <main className="bg-slate-100">
      <ProfileTopSection userData={userData} />
      <section className="">
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
      </section>
    </main>
  );
}
