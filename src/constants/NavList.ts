import { INav } from "@/interfaces/INav";

export const NavList: INav[] = [
  {
    name: "Home",
    path: "/",
    children: [],
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Campaign",
    path: "/campaign",
    children: [
      {
        key: "1",
        label: "Campaign Grid",
      },
      {
        key: "2",
        label: "Campaign List",
      },
      {
        key: "3",
        label: "Campaign Details",
      },
    ],
  },
  {
    name: "Pages",
    path: "/pages",
    children: [
      {
        key: "1",
        label: "About Us",
      },
    ],
  },
  {
    name: "Blog",
    path: "/blog",
    children: [
      {
        key: "1",
        label: "Blog Grid",
      },
      {
        key: "2",
        label: "Blog List",
      },
      {
        key: "3",
        label: "Blog Details",
      },
    ],
  },

  {
    name: "Contact",
    path: "/contact",
    children: [],
  },
];
