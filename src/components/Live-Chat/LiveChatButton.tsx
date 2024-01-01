"use client";

import { Badge, FloatButton, Tooltip } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import LiveChatImage from "../../../public//assets/live-chat-icon.png";
import Popovers from "../Popover/Popover";
import DraggableLiveModal from "./DraggableLiveModal";


const LiveChatButton = () => {
  const [open, setOpen] = React.useState(false);


 



  return (
    <>
      <Popovers
        setOpen={setOpen}
        open={open}
        placement="leftTop"
        title={
          <span>
          </span>
        }
        trigger="click"
        body={DraggableLiveModal}
      >
        <FloatButton
          onClick={() => setOpen(true)}
          style={{
            right: 90,
            width: 70,
            height: 70,
          }}
          icon={
            <div className="group transition-all ease-in-out duration-500">
              <div className="absolute bg-primary text-white shadow-xl  z-50 -mt-[75px] w-[200px] p-3 font-playfair rounded-xl mr-[300px] -ml-[180px] hidden group-hover:block transition-all ease-in-out duration-500">
                Hi! Welcome back. How can i help you?
              </div>
              <Image
                src={LiveChatImage}
                alt="Live Chat"
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
          }
        />
      </Popovers>
    </>
  );
};

export default LiveChatButton;
