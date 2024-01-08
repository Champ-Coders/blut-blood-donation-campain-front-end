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
    event_date: "17-08-2021",
    event_time: "110 am - 1 pm",
    location: "Mirpur-10, Dhaka",
    title: "Blood Donation for Independence Day",
    description:
      "Blood donation is a voluntary procedure that can help save the lives of others. There are several types of blood donation, which help meet different medical needs. The most common types of donation are whole blood, platelet, and double red cell donation. A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation (separation of whole-blood components). Donation may be of whole blood, or of specific components directly (the latter called apheresis). Blood banks often participate in the collection process as well as the procedures that follow it.",
    image: img1,
    link: "/events/1",
  },
  {
    id: "2",
    event_date: "17-11-2021",
    event_time: "10 am - 1 pm",
    location: "Mohanpur, Rajshahi",
    title: "Woman International Day Blood Donation",
    description:
      "We Donate Blood For Life. Blood donation is a voluntary procedure that can help save the lives of others. There are several types of blood donation, which help meet different medical needs. The most common types of donation are whole blood, platelet, and double red cell donation. A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation (separation of whole-blood components). Donation may be of whole blood, or of specific components directly (the latter called apheresis). Blood banks often participate in the collection process as well as the procedures that follow it.",
    image: img2,
    link: "/events/2",
  },
  {
    id: "3",
    event_date: "09-12-2021",
    event_time: "10 am - 1 pm",
    location: "RSUD Sanjiwani",
    title: "August Blood Donation Regular Event    ",
    description:
      "Our Blood is all the same. Blood donation is a voluntary procedure that can help save the lives of others. There are several types of blood donation, which help meet different medical needs. The most common types of donation are whole blood, platelet, and double red cell donation. A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation (separation of whole-blood components). Donation may be of whole blood, or of specific components directly (the latter called apheresis). Blood banks often participate in the collection process as well as the procedures that follow it.",
    image: img3,
    link: "/events/3",
  },
  {
    id: "4",
    event_date: "21-12-2021",
    event_time: "10 am - 1 pm",
    location: "RSUD Sanjiwani",
    title: "Great Green Day Blood Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img4,
    link: "/events/4",
  },
  {
    id: "5",
    event_date: "22-02-2022",
    event_time: "10 am - 1 pm",
    location: "RSU Gatot Subroto",
    title: "Love for Cancer Surviver Blood Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img5,
    link: "/events/5",
  },
  {
    id: "6",
    event_date: "03-03-2022",
    event_time: "10 am - 1 pm",
    location: "Gelora Bung Karno",
    title: "Youth Generation for Earth Blood Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: img6,
    link: "/events/6",
  },
];
