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
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute text-green-500 right-0 bottom-0">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <Image
                src={
                  "https://i.ibb.co/7xDVRjP/3d-illustration-businessman-with-headphone-blurred-background-business-concept.jpg"
                }
                alt="Live Chat"
                width={4000}
                height={4000}
                className="w-[50px] sm:w-10 h-[50px] rounded-full"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3 text-[18px]">
                  Mr. Admin
                </span>
              </div>
              <span className="text-[12px] text-gray-600">
                Cooperative Officer
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div>
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
