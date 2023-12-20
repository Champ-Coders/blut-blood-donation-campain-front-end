import React from "react";
import { IconType } from "react-icons";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { IoLocationSharp, IoMailOutline } from "react-icons/io5";
import EventForm from "./EventForm";

type EventRegisterFormProps = {};

const EventRegisterForm: React.FC<EventRegisterFormProps> = () => {
  const information1: {
    id: string;
    icon: IconType;
    value: string;
  }[] = [
    {
      id: "1",
      icon: IoLocationSharp,

      value: "Jl. Niti Mandala, Renon, Bali, Indonesia – 80225",
    },
    {
      id: "2",
      icon: FaPhoneAlt,

      value: "(+62) 8152 254 239",
    },

    {
      id: "3",
      icon: IoMailOutline,

      value: "contact@domain.com",
    },
  ];

  const information2: {
    id: string;
    icon: IconType;
    value: string;
  }[] = [
    {
      id: "1",
      icon: IoLocationSharp,

      value: "Jl. Sunset Road No.815, Kuta, Bali 80361",
    },
    {
      id: "2",
      icon: FaPhoneAlt,

      value: "(+62) 8152 254 239",
    },

    {
      id: "3",
      icon: IoMailOutline,

      value: "contact@domain.com",
    },
  ];
  return (
    <section className="bg-[#f6f6f6]">
      <div className="common">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-[40px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] bg-white rounded-lg">
            <EventForm />
          </div>
          <div>
            <div>
              <p className="text-primary my-2 font-semibold">Register</p>
              <h4 className="text-2xl lg:text-5xl text-[#111] font-semibold">
                Your Donation Can Make Someone’s Life Better
              </h4>
              <p className="text-[#6f747e] my-5 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco
              </p>
            </div>
            <h5 className="text-[#111] font-semibold leading-7 my-5">
              Opening Hours
            </h5>
            <div className=" border-t-[1px] border-b-[1px] border-t-[#7a7a7a] border-b-[#7a7a7a] py-2">
              <div className="flex flex-wrap justify-between w-full text-[#7a7a7a]">
                <p>Sunday - Saturday</p>
                <p className="flex items-center gap-5">
                  <FaRegClock className="text-primary" />
                  08.00 AM - 15.00 PM
                </p>
              </div>
            </div>
            <div className="flex flex-col my-10 lg:flex-row gap-10">
              <div>
                <div>
                  <h4 className="text-[#111] text-2xl leading-8 font-semibold mb-5">
                    Denpasar, Bali
                  </h4>
                  <ul className="flex flex-col gap-5">
                    {information1.map((item) => (
                      <li key={item.id} className="flex gap-2 items-center">
                        <item.icon className="text-primary text-xl" />
                        <p className="text-[#7a7a7a] leading-6">{item.value}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-[#111] text-2xl leading-8 font-semibold mb-5">
                  Kuta, Bali
                </h4>
                <ul className="flex flex-col gap-5">
                  {information2.map((item) => (
                    <li key={item.id} className="flex gap-2 items-center">
                      <item.icon className="text-primary text-xl" />
                      <p className="text-[#7a7a7a] leading-6">{item.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventRegisterForm;
