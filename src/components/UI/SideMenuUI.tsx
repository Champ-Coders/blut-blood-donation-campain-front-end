"use client"

import { Menu } from "antd";
import React from "react";

//! SIdeMenuUI is reusable MenuUI for showing layout sidebar UI with dropdown children
function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}
const SideMenuUI = ({
  data: { itemsData, mainCss, menuCss, subMenuCss },
}: {
  data: {
    itemsData: any[] | undefined;
    mainCss?: string;
    menuCss?: string;
    subMenuCss?: string;
  };
}) => {
  const renderSubMenu = (item: any) => {
    return (
      <Menu.SubMenu
        key={item.key}
        icon={item.icon}
        className={menuCss}
        title={item.label}
      >
        {item.children.map((childItem: any) => (
          <Menu.Item className={subMenuCss} key={childItem.key}>
            {childItem.label}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    );
  };
  return (
    <Menu
      className={mainCss}
      defaultSelectedKeys={["1"]}
      triggerSubMenuAction="hover"
      style={{
        overflowY: "auto",
      }}
      mode="inline"
    >
      {itemsData?.map((item: any) =>
        item.children ? (
          renderSubMenu(item)
        ) : (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            className="custom-menu-item"
          >
            {item.label}
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

export default SideMenuUI;
