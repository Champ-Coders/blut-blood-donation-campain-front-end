import { ITeamMember } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TeamMembersCardProps = {
  item: ITeamMember;
};

const TeamMembersCard: React.FC<TeamMembersCardProps> = ({ item }) => {
  return (
    <div className="p-[25px] bg-white shadow-2xl rounded-xl group ">
      <div className=" ">
        <div className="relative">
          <Image src={item.image} className="w-full h-full" alt={item.name} />
          <div className="hidden group-hover:block transition duration-300 ease-in-out">
            <div className="absolute  top-[50%] w-full h-full z-10 ">
              <ul className="flex gap-2 rounded-3xl items-center justify-center">
                {item?.socialMedia.map((socialItem) => (
                  <li
                    key={socialItem.id}
                    className={`bg-white p-4 ${
                      socialItem.id === "1"
                        ? "rounded-tl-[20px] rounded-bl-[20px]"
                        : ""
                    } ${
                      socialItem.id === "3"
                        ? "rounded-tr-[20px] rounded-br-[20px]"
                        : ""
                    } rounded-full`}
                  >
                    <Link href={socialItem.link}>
                      <socialItem.icon size={18} className={"text-[#ea062b]"} />
                    </Link>
                  </li>
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
