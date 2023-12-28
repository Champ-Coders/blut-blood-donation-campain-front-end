import { ITeamMember } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TeamMembersCardProps = {
  item: ITeamMember;
};

const TeamMembersCard: React.FC<TeamMembersCardProps> = ({ item }) => {
  return (
    <div className="p-[25px] bg-white shadow rounded-xl group border ">
      <div className=" ">
        <div className="relative">
          <Image
            src={item.image}
            className="w-full h-[400px]"
            alt={item.name}
          />
          <div className="hidden group-hover:block transition duration-300 ease-in-out">
            <div className="absolute  top-[50%] w-full h-full z-10 ">
              <ul className="flex gap-2 rounded-3xl items-center justify-center">
                {item?.socialMedia.map((socialItem) => (
                  <Link key={socialItem.id} href={socialItem.link}>
                    <li
                      className={`bg-white p-4 text-[#ea062b] hover:text-white hover:bg-[#ea062b] rounded-full  transition duration-500 ease-in-out hover:-translate-y-5`}
                    >
                      <socialItem.icon size={18} className={""} />
                    </li>{" "}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="bg-[#222222a6] w-full h-full absolute left-0 top-0"></div>
          </div>
        </div>
      </div>
      <div className="mt-[34px] text-center">
        <h4 className="text-[#111] mb-5 text-2xl font-bold ">{item.name}</h4>
        <p className="text-[#666] text-lg">{item.position}</p>
      </div>
    </div>
  );
};
export default TeamMembersCard;
