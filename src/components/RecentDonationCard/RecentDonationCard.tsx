import Image from "next/image";
import React from "react";

//  Image, name, date, BloodGroup;

type IRecentDonation = {
  image: string;
  name: string;
  date: string;
  bloodGroup: string;
};

const RecentDonationCard = ({
  recentDonation,
}: {
  recentDonation: IRecentDonation;
}) => {
  return (
    <div className="bg-[#F6F4F5] px-5 py-3 flex justify-between gap-5 items-center rounded-lg font-oswald">
      <Image
        src={recentDonation.image}
        alt=""
        width={80}
        height={80}
        className="w-[50px] h-[50px] rounded-full"
      />

      <div className="!text-start w-[200px]">
        <p className="text-[18px] font-semibold">
          {recentDonation.name.length > 10
            ? recentDonation.name.slice(0, 10) + ".."
            : recentDonation.name}
        </p>
        <p className="text-[#8B8B8B] font-[14px]">{recentDonation.date}</p>
      </div>

      <p className="font-semibold text-[18px]  text-[#CF3E3E] bg-[#f7b9b9] p-2 rounded-xl">
        {recentDonation.bloodGroup}
      </p>
    </div>
  );
};

export default RecentDonationCard;
