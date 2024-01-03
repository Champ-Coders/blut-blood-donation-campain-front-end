import Image from "next/image";
import React from "react";
import image from "../../../public/assets/event/1.jpg";
import image2 from "../../../public/assets/event/7.jpg";
import { FaCheck, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";
import { BsCalendar2Date } from "react-icons/bs";
import { LuClock9 } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import Comments from "../Comments/Comments";

type EventDetailsProps = {};

const EventDetails: React.FC<EventDetailsProps> = () => {
  const textData: {
    text: string;
    id: string;
  }[] = [
    {
      id: "1",
      text: "Vivamus starlord finibus, dictum massa eget, suscipit metus nami at tristique elit started",
    },
    {
      id: "2",
      text: "Cras ipsum libero, suscipit vitamin tellus vitae, feugiat ultricies purus praesent gamora.",
    },
    {
      id: "3",
      text: "Proin ex sem, ultrices drax the sit amet, facilisis destrogen et odio profession risusest.",
    },
    {
      id: "4",
      text: "Cras ipsum libero, suscipit vitamin tellus vitae, feugiat ultricies purus praesent gamora.",
    },
    {
      id: "5",
      text: "Cras ipsum libero, suscipit vitamin tellus vitae, feugiat ultricies purus praesent gamora.",
    },
  ];

  const information: {
    id: string;
    icon: IconType;
    key: string;
    value: string;
  }[] = [
    {
      id: "1",
      icon: BsCalendar2Date,
      key: "Date",
      value: "27th August 2021",
    },
    {
      id: "2",
      icon: LuClock9,
      key: "Time",
      value: "10.00am - 01.00pm",
    },

    {
      id: "3",
      icon: IoLocationSharp,
      key: "Location",
      value: "RSU Bunda Medika",
    },
  ];

  const socialMedia: {
    icon: IconType;
    id: string;
  }[] = [
    {
      id: "1",
      icon: FaFacebookF,
    },
    {
      id: "2",
      icon: FaTwitter,
    },
    {
      id: "3",
      icon: RiWhatsappFill,
    },
    {
      id: "4",
      icon: FaPinterestP,
    },
  ];
  return (
    <div>
      <div className="common pt-10 md:pb-[100px]">
        <div>
          <div className="h-[400px] overflow-hidden">
            <Image
              width={1200}
              height={400}
              src={image.src}
              alt="details event image"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-12 mt-14">
            <div className="w-full lg:w-[70%]">
              <div>
                <h2 className="text-[#111]  text-2xl font-semibold mb-5">
                  Wood Custom
                </h2>
                <p className="text-[#7a7a7a] leading-6 mb-5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi dicta
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia totamio voluptas sit aspernatur{" "}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex justify-center lg:justify-start">
                  <Image
                    width={425.016}
                    height={283.336}
                    src={image2.src}
                    alt="details image"
                  />
                </div>
                <div>
                  <ul>
                    {textData.map((item) => (
                      <li
                        key={item.id}
                        className="text-[#7a7a7a] leading-6 mb-5 w-full flex items-center gap-5 "
                      >
                        <span className="text-[#ea062b] ">
                          <FaCheck />
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="flex flex-col gap-5 text-[14px]">
                {information.map((item) => (
                  <div
                    className="flex justify-center items-center gap-5"
                    key={item.id}
                  >
                    <div className="">
                      <item.icon size={25} className="text-[#ea062b] " />
                    </div>

                    <div>
                      <h4>{item.key}</h4>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex   flex-col gap-5 items-center justify-center lg:justify-normal">
                <p className="text-[#7a7a7a] leading-6">Share This:</p>
                <ul className=" flex gap-5 px-5">
                  {socialMedia.map((item) => (
                    <li
                      key={item.id}
                      className="p-2 w-full bg-primary text-white rounded-md  transition duration-500 ease-in-out hover:bg-[#111] hover:text-white cursor-pointer hover:shadow-[0px_9px_52px_0_rgba(0,0,0,.07)]"
                    >
                      <item.icon className="text-2xl" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* comment */}

      
      </div>
    </div>
  );
};
export default EventDetails;
