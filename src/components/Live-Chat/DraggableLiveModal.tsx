/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { ILiveChat, LiveChatData } from "@/constants/ILiveChat";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import { message } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegMessage } from "react-icons/fa6";

const DraggableLiveModal = () => {
  const { data } = useUserProfileQuery(null);
  const userInfo = data?.data;
  const [chatMessages, setChatMessages] = React.useState<any>(LiveChatData);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    if (!userInfo) {
      return message.error("Please login first");
    }
    const newMessage = {
      id: chatMessages.length + 1,
      message: data.message,
      time: new Date().toLocaleTimeString(),
      avatar: userInfo?.imgUrl,
      status: "online",
      type: "comment",
    };

    setChatMessages([...chatMessages, newMessage]);

    // clear input
    reset();
  };

  const scroll = React.useRef<HTMLDivElement>(null);

  // always scroll to bottom when new message added
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div>
      <div className="flex-1 p-2 justify-between flex flex-col h-[500px]">
        {/* header */}
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute text-green-500 right-0 bottom-0">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <Image
                src={"https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg"}
                alt="Live Chat"
                width={4000}
                height={4000}
                className="w-[50px] sm:w-10 h-[50px] rounded-full"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3 text-[18px]">
                  Md Mahafujur Rahaman
                </span>
              </div>
              <span className="text-[12px] text-gray-600">
                MERN Stack Developer
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
        {/* message */}
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch "
        >
          {chatMessages
            ?.sort((a: any, b: any) => a.id - b.id)
            .map((liveChat: ILiveChat) => (
              <div ref={scroll} key={liveChat.id} className="chat-message">
                <div
                  className={`flex ${
                    liveChat.type === "reply"
                      ? "items-end "
                      : "  items-end justify-end"
                  } `}
                >
                  <div
                    className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
                      liveChat.type === "reply"
                        ? "order-2 items-start  "
                        : " order-1 items-end"
                    } `}
                  >
                    <div>
                      <span
                        className={`px-4 py-2 rounded-lg inline-block ${
                          liveChat.type === "reply"
                            ? "rounded-br-none bg-primary text-white "
                            : "   order-1 items-end"
                        }  rounded-bl-none bg-gray-300 text-gray-600`}
                      >
                        {liveChat.message}
                      </span>
                    </div>
                  </div>
                  <img
                    src={liveChat.avatar}
                    alt="My profile"
                    className={`w-6 h-6 rounded-full ${
                      liveChat.type === "reply" ? "order-1" : "  order-2"
                    } `}
                  />
                </div>
              </div>
            ))}
        </div>
        {/* Message end */}
        {/* button */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"
        >
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              placeholder="Write your message!"
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
              {...register("message", { required: true })}
            />
            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-primary hover:bg-black focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        {/* button end */}
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
