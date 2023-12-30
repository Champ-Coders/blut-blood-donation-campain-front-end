import React from "react";
import DonorLink from "../BloodDonorType/DonorLink";
import CompatibleBloodTypeDonors from "../BloodDonorType/CompatibleBloodTypeDonors";

const AvailableDonorLink = [
  {
    name: "Available Blood Groups",
    link: "/donor-list",
    logo: "https://i.ibb.co/KKYLv7k/b-group.png",
  },
  {
    name: "Search Blood Groups",
    link: "/donor-list",
    logo: "https://i.ibb.co/bLrRsBC/b-search.png",
  },
  {
    name: "Donor Registration",
    link: "/donate-now",
    logo: "https://i.ibb.co/PCMNhK6/b-donor-reg.png",
  },
  {
    name: "Search Donor",
    link: "/searchDonor",
    logo: "https://i.ibb.co/nPR0F0W/b-donor-search.png",
  },
];

const BloodTypeDonors = () => {
  return (
    <div className="md:my-[90px] my-[30px]">
      <DonorLink availableDonorLink={AvailableDonorLink} />
      <CompatibleBloodTypeDonors />
    </div>
  );
};

export default BloodTypeDonors;
