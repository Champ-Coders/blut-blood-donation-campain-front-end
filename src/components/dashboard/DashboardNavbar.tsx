import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import MultipleSelectUI from "../UI/MultipleSelectUI";

const optionData = ["AB+", "AB-", "A+", "A-", "B+", "B-", "C+", "C-"];

const DashboardNavbar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#000000",
        backgroundColor: "#ffffff",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        paddingInline: "3px",
        // position:"absolute",
        // top:0,
        // width:"100%",
        // zIndex:100,
      }}
    >
      <section style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1em",
          fontSize: "1.5rem",
          padding: "10px 10px",
          // background: "blue",
        }}
      >
        <MultipleSelectUI data={{ optionData: optionData }} />

        {/*//! MultipleSelectUI reusable UI for select multiple options  */}

        <BellOutlined
          style={{
            padding: "0.6rem",
            background: "red",
            borderRadius: "50%",
            color: "white",
          }}
        />
        <SettingOutlined
          style={{
            padding: "0.6rem",
            background: "red",
            borderRadius: "50%",
            color: "white",
          }}
        />
      </section>
    </Header>
  );
};

export default DashboardNavbar;
