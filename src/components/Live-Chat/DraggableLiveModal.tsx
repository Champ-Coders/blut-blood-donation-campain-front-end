"use client";

import Image from "next/image";
import React from "react";
import { FaRegMessage } from "react-icons/fa6";

type DraggableLiveModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DraggableLiveModal = () => {
  return (
    <div>
      <div className="md:h-[400px] h-[200px] md:w-[400px] w-[200px] overflow-x-hidden bg-[#f0f0f5] px-3 py-2 font-inter flex flex-col justify-between ">
        {/* message */}
        <div className=" flex gap-2">
          <Image
            src={"https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg"}
            alt="Live Chat"
            width={4000}
            height={4000}
            className="w-[20px] h-[20px] rounded-full"
          />

          <div className="bg-white shadow-lg rounded-lg w-full  md:h-[40px] h-[60px] text-[12px] md:text-[14px] px-2 pt-1 mt-1 text-black">
            Our team typically replies in a few minutes.
          </div>
        </div>

        {/* add Chat Now button on footer */}

        <button className="bg-primary text-white rounded-lg px-2 py-1 w-full hover:bg-black">
          Chat Now
        </button>
      </div>
      <footer className="flex gap-1 text-center w-full items-center justify-around py-1 border-t">
        <div className="flex gap-1 items-center">
          Power by <FaRegMessage className="text-primary font-bold" />{" "}
          <span className="font-bold">Live Chat</span>
        </div>
      </footer>
    </div>
  );
};

export default DraggableLiveModal;
