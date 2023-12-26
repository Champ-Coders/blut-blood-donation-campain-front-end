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
            {/* header */}
            {/* <div className="flex justify-between items-center ">
              <div className="font-bold md:text-3xl text-lg font-playfair">
                Live Chat
              </div>
              <Tooltip placement="bottomRight" title={"Minimize Windows"}>
                <div
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-500 hover:bg-primary/20 p-2 rounded-xl"
                >
                  <FaMinus />
                </div>
              </Tooltip>
            </div> */}

            {/* body */}
            {/* <div className="h-[60px] w-full md:my-[30px] mt-[10px] flex flex-col justify-center items-center ">
              <Badge size="default" status="success" dot>
                <Image
                  src={"https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg"}
                  alt="Live Chat"
                  width={4000}
                  height={4000}
                  className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] rounded-full"
                />
              </Badge>

              <h3 className="mt-2 font-inter text-sm">Md Mahafujur Rahaman</h3>
            </div> */}

            {/* Chat */}

            
           
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
