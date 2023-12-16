import React from "react";

import LogoLight from "../../../../public/assets/logo-light.png";
import Image from "next/image";
import { NavList } from "@/constants/NavList";
import { INav } from "@/interfaces/INav";
import { Button, Dropdown, MenuProps } from "antd";
import TopHeader from "./TopHeader";

const HeaderPage = () => {
  return (
    <div>
      {/* Top Nav */}
      <TopHeader />

      {/* Main Nav */}
    </div>
  );
};

export default HeaderPage;
