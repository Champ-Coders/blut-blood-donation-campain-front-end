import { INav } from "@/interfaces/INav";

export const NavList: INav[] = [
  {
    name: "Home",
    path: "/",
    children: [],
  },
  {
    name: "About",
    path: "/about-us",
    children: [],
  },
  {
    name: "Events",
    path: "/event",
    children: [],
  },
  {
    name: "Donors",
    path: "/donors",
    children: [
      {
        name: "Donor List",
        path: "/donor-list",
      },
      {
        name: "Donate List",
        path: "/donate-list",
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
    children: [],
  },
  {
    name: "Contact",
    path: "/contact",
    children: [],
  },
];
