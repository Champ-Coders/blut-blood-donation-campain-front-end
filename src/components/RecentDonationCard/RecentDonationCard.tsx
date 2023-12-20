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
    <div className="bg-gray-300">
      <Image src={recentDonation.image} alt="" width={80} height={80} />

      <div>
        <p>{recentDonation.name}</p>
        <p>{recentDonation.date}</p>
      </div>

      <p>{recentDonation.bloodGroup}</p>
    </div>
  );
};

export default RecentDonationCard;
