import React from "react";
import { Layout, Menu } from "antd";

import Link from "next/link";

import { ProfileOutlined, UserOutlined } from "@ant-design/icons";
import { dashboardItems } from "@/constants/dashboardItems";
import { USER_ROLE } from "@/constants/userRole";
import Image from "next/image";
import "./dashboard.css";

const { Sider } = Layout;

const DashboardSidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) => {
  return (
    <Sider
      // collapsible
      className="bg-primar"
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
        padding: "10px 0 0 0",
        // width: "70vw",
        background: "white",
        // background:"",
        // overflow: "auto",
        // height: "100vh",
        // position: "fixed",
        // left: 0,
        // top: 0,
        // bottom: 0,
      }}
    >
      {!collapsed ? (
        <section className="ml-3 text-3xl mt- flex gap-2 items-center">
          <Link
            href={"/"}
            className="bg-primary flex justify-center text-white rounded w-full font-bold py-2 px-2 "
          >
            Blut
            {/* <Image
          src={Logo}
          alt="logo"
          width={600}
          height={500}
          className=" w-[127px] "
        /> */}
          </Link>
        </section>
      ) : (
        <UserOutlined className="text-2xl ml-7 mt-3" />
      )}

      <Menu
        // theme="light"
        className="bg-white mt-10"
        defaultSelectedKeys={["1"]}
        triggerSubMenuAction={"hover"}
        style={{
          overflowY: "auto",
        }}
        mode="inline"
        items={dashboardItems(USER_ROLE.admin)}
      />
    </Sider>
  );
};

export default DashboardSidebar;
