import React from "react";
import {
  PhoneOutlined,
  MessageOutlined,
  IssuesCloseOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ISocial } from "@/interfaces/common";
import { SocialList } from "@/constants/SocialList";

const ContactList = [
  {
    name: "number",
    text: "(+880)123456789",
    icon: <PhoneOutlined />,
  },
  {
    name: "email",
    text: "blut.blood@donation.com",
    icon: <MessageOutlined />,
  },
  {
    name: "location",
    text: "Dhaka, Bangladesh",
    icon: <IssuesCloseOutlined />,
  },
];

const TopHeader = () => {
  return (
    <div className="font-inter md:grid grid-cols-3 hidden ">
      {/* Social */}

      <div className="flex items-center bg-black text-white py-3 w-full gap-10 lg:col-span-2 col-span-3 justify-around pr-[120px]">
        {ContactList.map((item, index) => (
          <div className="flex items-center text-[14px] gap-2" key={index}>
            <div className="pb-2 text-[18px]">{item.icon}</div>
            {/* divider left */}

            <div className="  ">|</div>

            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* follow link */}

      <div className="bg-primary flex items-center gap-9 py-3 w-full lg:col-span-1 col-span-3  pl-5 font-inter">
        <p className="text-white font-semibold">Follow Now</p>
        <div className="flex items-center gap-4">
          {SocialList.map((item: ISocial, index) => (
            <Link
              href={item?.href}
              target="_blank"
              key={index}
              title={item?.name}
              className="
              text-primary
               hover:text-white
                bg-white
                 hover:bg-black 
                 text-[18px]
                  px-2 py-1 rounded
                   transition-all
                   duration-500
                   ease-in-out

                  "
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
