import { IEvent } from "@/interfaces/common";
import img1 from "../../public/assets/event/1.jpg";
import img2 from "../../public/assets/event/2.jpg";
import img3 from "../../public/assets/event/3.jpg";
import img4 from "../../public/assets/event/4.jpg";
import img5 from "../../public/assets/event/5.jpg";
import img6 from "../../public/assets/event/6.jpg";

export const events: IEvent[] = [
  {
    id: "1",
    date: "17-08-2021",
    time: "110 am - 1 pm",
    location: "RSUP Sanglah",
    title: "Blood Donation for Independence Day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img1,
    link: "/events/1",
  },
  {
    id: "2",
    date: "17-11-2021",
    time: "10 am - 1 pm",
    location: "RSUP Sanglah",
    title: "Woman International Day Blood Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img2,
    link: "/events/2",
  },
  {
    id: "3",
    date: "09-12-2021",
    time: "10 am - 1 pm",
    location: "Bunda Medika    ",
    title: "August Blood Donation Regular Event    ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img3,
    link: "/events/3",
  },
  {
    id: "4",
    date: "21-12-2021",
    time: "10 am - 1 pm",
    location: "RSUD Sanjiwani",
    title: "Great Green Day Blood Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img4,
    link: "/events/4",
  },
  {
    id: "5",
    date: "22-02-2022",
    time: "10 am - 1 pm",
    location: "RSU Gatot Subroto",
    title: "Love for Cancer Surviver Blood Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img5,
    link: "/events/5",
  },
  {
    id: "6",
    date: "03-03-2022",
    time: "10 am - 1 pm",
    location: "Gelora Bung Karno",
    title: "Youth Generation for Earth Blood Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img6,
    link: "/events/6",
  },
];
