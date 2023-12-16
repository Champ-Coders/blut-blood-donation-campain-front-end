import React from "react";
import {
  PhoneOutlined,
  MessageOutlined,
  IssuesCloseOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const SocialList = [
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

const FollowList = [
  {
    name: "facebook",
    link: "https://www.facebook.com/",
    icon: <FacebookOutlined />,
  },
  {
    name: "twitter",
    link: "https://twitter.com/",
    icon: <TwitterOutlined />,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/",
    icon: <InstagramOutlined />,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/",
    icon: <YoutubeOutlined />,
  },
];

const TopHeader = () => {
  return (
    <div className="font-roboto md:grid grid-cols-3 hidden ">
      {/* Social */}

      <div className="flex items-center bg-black text-white py-3 w-full gap-10 lg:col-span-2 col-span-3 justify-around pr-[120px]">
        {SocialList.map((item, index) => (
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
          {FollowList.map((item, index) => (
            <Link
              href={item?.link}
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
                   duration-300
                   ease-in-out

                  "
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
