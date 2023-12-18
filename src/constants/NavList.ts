import { INav } from "@/interfaces/INav";

export const NavList: INav[] = [
  {
    name: "Home",
    path: "/",
    children: [],
  },
  {
    name: "About Us",
    path: "/about-us",
    children: [],
  },
  {
    name: "Campaign",
    path: "/campaign",
    children: [
      {
        name: "Campaign Grid",
        path: "/campaign",
      },
      {
        name: "Campaign List",
        path: "/campaign-list",
      },
      {
        name: "Campaign Details",
        path: "/campaign-details",
      },
    ],
  },
  {
    name: "Pages",
    path: "/pages",
    children: [
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "Register Now",
        path: "/register",
      },
      {
        name: "Donate Now",
        path: "/donate-now",
      },
    ],
  },
  {
    name: "Blog",
    path: "/blog",
    children: [
      {
        name: "Blog Grid",
        path: "/blog",
      },
      {
        name: "Blog List",
        path: "/blog-list",
      },
      {
        name: "Blog Details",
        path: "/blog-details",
      },
    ],
  },

  {
    name: "Contact",
    path: "/contact",
    children: [],
  },
];
