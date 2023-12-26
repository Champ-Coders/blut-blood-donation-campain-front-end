"use client";

import { Badge, FloatButton, Tooltip } from "antd";
import ChatBox, { ChatFrame } from "react-chat-plugin";
import Image from "next/image";
import React, { useState } from "react";
import LiveChatImage from "../../../public//assets/live-chat-icon.png";
import Popovers from "../Popover/Popover";
import DraggableLiveModal from "./DraggableLiveModal";
import { FaMinus } from "react-icons/fa";

const LiveChatButton = () => {
  const [open, setOpen] = React.useState(false);


  const [attr, setAttr] = useState({
    showChatbox: false,
    showIcon: true,
    messages: [
      {
        text: "user2 has joined the conversation",
        timestamp: 1578366389250,
        type: "notification",
      },
      {
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
        },
        text: "Hi",
        type: "text",
        timestamp: 1578366393250,
      },
      {
        author: { username: "user2", id: 2, avatarUrl: null },
        text: "Show two buttons",
        type: "text",
        timestamp: 1578366425250,
        buttons: [
          {
            type: "URL",
            title: "Yahoo",
            payload: "http://www.yahoo.com",
          },
          {
            type: "URL",
            title: "Example",
            payload: "http://www.example.com",
          },
        ],
      },
      {
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
        },
        text: "What's up?",
        type: "text",
        timestamp: 1578366425250,
        hasError: true,
      },
    ],
  });
  const handleClickIcon = () => {
    // toggle showChatbox and showIcon
    setAttr({
      ...attr,
      showChatbox: !attr.showChatbox,
      showIcon: !attr.showIcon,
    });
  };
  const handleOnSendMessage = (message:any) => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
        },
        text: message,
        type: "text",
        timestamp: +new Date(),
      }),
    });
  };





  return (
    <>
      <Popovers
        setOpen={setOpen}
        open={open}
        placement="leftTop"
        title={
          <div className="p-2 shadow-lg">
            {/* header */}
            <div className="flex justify-between items-center ">
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
            </div>

            {/* body */}
            <div className="h-[60px] w-full md:my-[30px] mt-[10px] flex flex-col justify-center items-center ">
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
            </div>

            {/* Chat */}
            <ChatBox
              onSendMessage={handleOnSendMessage}
              userId={1}
              messages={attr.messages}
              width={"300px"}
              showTypingIndicator={true}
              activeAuthor={{ username: "user2", id: 2, avatarUrl: null }}
            />
          </div>
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
