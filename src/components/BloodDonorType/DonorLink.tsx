import Image from "next/image";
import Link from "next/link";
import React from "react";

type DonorLinkProps = {
  availableDonorLink: {
    name: string;
    link: string;
    logo: string;
  }[];
};

const DonorLink = ({ availableDonorLink }: DonorLinkProps) => {
  return (
    <div className="bg-primary grid lg:grid-cols-4  grid-cols-2 commonGap">
      {availableDonorLink.map((donorLink,i) => (
        <Link
          href={donorLink.link}
          key={i}
          className="group border-2"
        >
          <div className="flex flex-col items-center justify-center p-4">
            <Image
              src={donorLink?.logo}
              alt={donorLink?.name}
              width={50}
              height={50}
            />
            <p className="text-white text-[14px] group-hover:underline">
              {donorLink.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DonorLink;
