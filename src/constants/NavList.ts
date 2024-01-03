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
    path: "/donor-list",
    children: [
      {
        name: "Donate Now",
        path: "/donate-now",
      },
      {
        name: "Request Blood",
        path: "/donor-list",
      },
      {
        name: "Donar List",
        path: "/donate-list",
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
