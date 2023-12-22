import React from "react";
import { Layout, Menu } from "antd";

import Link from "next/link";

import { ProfileOutlined, UserOutlined } from "@ant-design/icons";
import { dashboardItems } from "@/constants/dashboardItems";
import { USER_ROLE } from "@/constants/userRole";
import Image from "next/image";
import "./dashboard.css";
import logo from "../../../public/assets/logo-light.png";
import SideMenuUI from "../UI/SideMenuUI";

const { Sider } = Layout;

const DashboardSidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) => {
  const menuClass: string = "";
  return (
    <Sider
      // collapsible
      // className="bg-primar text-primary"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={300}
      style={{
        overflow: "auto",
        height: "110vh",
        position: "sticky",
        // position: "fixed",
        overflowY: "auto",
        zIndex: 40,
        left: 0,
        top: 0,
        bottom: 0,
        padding: "12px 0 0 0",
        // width: "70vw",
        background: "white",
        scrollBehavior: "smooth",
        backgroundColor: "#ea062b",
        // overflow: "auto",
        // height: "100vh",
        // position: "fixed",
        // left: 0,
        // top: 0,
        // bottom: 0,
      }}
    >
      {!collapsed ? (
        <section className="ml-3 text-3xl mt-0 flex gap-2 items-center">
          <Link
            href={"/"}
            className="bg-primary flex justify-center text-white rounded w-full font-bold pb-2 px-2"
          >
            <Image
              src={logo}
              alt="logo"
              width={600}
              height={500}
              className=" w-[127px] h-[45px] "
            />
          </Link>
        </section>
      ) : (
        // <UserOutlined className="text-2xl ml-7 mt-3" />
        <Link  href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={140}
            className=" bg-primary rounded h-[50px] px-2 py-3"
          />
        </Link>
      )}

      <SideMenuUI
        data={{
          itemsData: dashboardItems(USER_ROLE.admin),
          mainCss: `bg-white font-oswald pt-[20px] text-[14px] ${
            collapsed || ""
          }`,
          menuCss:
            " text-slate-700 text-[18px] font-oswald my-[8px] text-[14px] hover:text-primary",
          subMenuCss: " hover:text-primary font-oswalds  text-[14px]",
        }}
      />
      {/* //! SIdeMenuUI is reusable MenuUI for showing layout sidebar UI with dropdown children */}
    </Sider>
  );
};

export default DashboardSidebar;
