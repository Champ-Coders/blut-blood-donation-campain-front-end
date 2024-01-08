import { IVolunteers } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

type TeamMembersCardProps = {
  item: IVolunteers;
};

const TeamMembersCard: React.FC<TeamMembersCardProps> = ({ item }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="400"
      className="p-2 bg-white shadow rounded-xl group border "
    >
      <div className=" ">
        <div className="relative">
          <Image
            src={item?.image}
            className="w-full h-[350px] rounded-lg"
            alt={item?.name}
            layout="responsive"
            width={400}
            height={400}
          />
          <div className="hidden group-hover:block transition duration-300 ease-in-out">
            <div className="absolute  top-[50%] w-full h-full z-10 ">
              <ul className="flex gap-2 rounded-3xl items-center justify-center">
                {/* linkedin */}
                <Link href={item?.linkedin} target="_blank">
                  <li
                    className={`bg-white p-4 text-[#ea062b] hover:text-white hover:bg-[#ea062b] rounded-full  transition duration-500 ease-in-out hover:-translate-y-5`}
                  >
                    <FaLinkedin size={18} className={""} />
                  </li>{" "}
                </Link>
                {/* facebook */}
                <Link href={item?.facebook} target="_blank">
                  <li
                    className={`bg-white p-4 text-[#ea062b] hover:text-white hover:bg-[#ea062b] rounded-full  transition duration-500 ease-in-out hover:-translate-y-5`}
                  >
                    <FaFacebook size={18} className={""} />
                  </li>{" "}
                </Link>

                {/* github */}
                <Link href={item?.github} target="_blank">
                  <li
                    className={`bg-white p-4 text-[#ea062b] hover:text-white hover:bg-[#ea062b] rounded-full  transition duration-500 ease-in-out hover:-translate-y-5`}
                  >
                    <FaGithub size={18} className={""} />
                  </li>{" "}
                </Link>
                {/* instagram */}
                <Link href={item?.instagram} target="_blank">
                  <li
                    className={`bg-white p-4 text-[#ea062b] hover:text-white hover:bg-[#ea062b] rounded-full  transition duration-500 ease-in-out hover:-translate-y-5`}
                  >
                    <FaInstagramSquare size={18} className={""} />
                  </li>{" "}
                </Link>
              </ul>
            </div>
            <div className="bg-[#222222a6] w-full h-full absolute left-0 top-0 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="mt-[34px] text-center">
        <h4 className="text-[#111] mb-2 text-xl font-bold ">{item?.name}</h4>
        <p className="text-[#666] text-base">{item?.designation}</p>
      </div>
    </div>
  );
};
export default TeamMembersCard;
