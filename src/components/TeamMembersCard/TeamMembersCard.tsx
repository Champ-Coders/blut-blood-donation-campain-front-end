import Image from "next/image";
import React from "react";

type TeamMembersCardProps = {
  name: string;
  position: string;
  image: string;
  socialMedia: {
    id: string;
    link: string;
    icon: string;
  }[];
};

const TeamMembersCard: React.FC<TeamMembersCardProps> = ({
  name,
  position,
  image,
  socialMedia,
}) => {
  return (
    <div className="p-[25px]">
      <div className="relative">
        <Image src={""} alt="" />
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <ul className="flex gap-1 ">
            {socialMedia.map((item) => (
              <li key={item.id}>{item.link}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-[34px]">
        <h4 className="text-[#666666] mb-5"></h4>
        <p></p>
      </div>
    </div>
  );
};
export default TeamMembersCard;
