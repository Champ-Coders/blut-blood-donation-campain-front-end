import React from "react";

import Logo from "../../../../public/assets/logo-light.png";
import Image from "next/image";
import { NavList } from "@/constants/NavList";
import Dropdown from "@/components/Dropdown/Dropdown";

const MainHeader = () => {
  return (
    <div className="flex items-center">
      <Image
        src={Logo}
        alt="logo"
        width={600}
        height={500}
        className="bg-primary w-[127px] py-3"
      />

      <div className="flex items-center gap-5">
        {NavList.map((item, i) => (
          <Dropdown key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainHeader;
