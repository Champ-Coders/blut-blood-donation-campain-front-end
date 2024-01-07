/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { ILiveChat } from "@/constants/ILiveChat";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import {
  useGetUserMessageQuery,
  useRefreshChatMutation,
} from "@/redux/Api/chatApi";
import socket from "@/socket/socket";

import { message } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegMessage } from "react-icons/fa6";
import InputEmoji from "react-input-emoji";
import { useDispatch } from "react-redux";
import ChatSkelleton from "../skeleton/ChatSkeleton";
import userIcon from "../../../public/assets/icon/userIcon.png";

const DraggableLiveModal = () => {
  const { data } = useUserProfileQuery(null);
  const userInfo = data?.data;

  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  const {
    data: MessageData,
    refetch,
    isLoading,
  } = useGetUserMessageQuery(userInfo?.email);

  const [refreshChat] = useRefreshChatMutation();

  const [messages, setMessages] = useState<any>("");

  const [chatMessages, setChatMessages] = React.useState<any>(
    MessageData?.data || []
  );
  const onSubmit = (data: any) => {
    //! take message from input

    if (!userInfo) {
      return message.error("Please login first");
    } else if (!messages) {
      return message.error("Please write something");
    } else {
      const newMessage = {
        // id: chatMessages.length + 1,
        message: messages,
        time: new Date().toLocaleTimeString(),
        img:
          userInfo?.imgUrl ||
          "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1380&t=st=1704185130~exp=1704185730~hmac=59e603b1b189517200baee240e19841cac32cac33e3b18bf388d3af232517699",
        status: "online",
        types: "comment",
        email: userInfo?.email,
        _id: userInfo?._id,
      };
      // console.log(newMessage);
      socket.emit("send-message", newMessage);
      socket.on("update-message", (data) => {
        // console.log("uuuuu", data);
        refreshChat(data);
        reset();
        setMessages("");
      });
    }
  };

  const scroll = React.useRef<HTMLDivElement>(null);

  //!  always scroll to bottom when new message added
  useEffect(() => {
    setChatMessages(MessageData?.data);
    socket.on("update-message", (data) => {
      ///! for refresh and update message
      // console.log("uuuuuuuuuuuuuuuuuuuu", data);
      scroll.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      setChatMessages(MessageData?.data);
      refreshChat(data);
      // refetch();
      //  dispatch(
      //   api.endpoints.getUserMessage.ini
      //  )
    });
  }, [refetch, MessageData, dispatch, refreshChat]);

  // console.log('messageData',chatMessages)
  return (
    <div className="lg:w-[500px] ">
      <div className="flex-1 p-2 justify-between flex flex-col h-[500px]">
        {/* message */}
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch "
        >
          {
            // chatMessages
            //   ?.sort((a: any, b: any) => a.updatedAt - b.updatedAt)
            chatMessages?.map((liveChat: ILiveChat) => {
              return (
                <div key={liveChat?._id} className="chat-message">
                  <div
                    className={`flex ${
                      liveChat?.types !== "reply"
                        ? "items-end justify-end"
                        : "items-end "
                    } `}
                  >
                    <div
                      className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
                        liveChat?.types !== "reply"
                          ? "order-1 items-end  "
                          : " order-2 items-start"
                      } `}
                    >
                      <div>
                        <span
                          className={`px-4 py-2 rounded-lg inline-block ${
                            liveChat?.types !== "reply"
                              ? "rounded-br-none bg-primary text-white "
                              : "   order-1 items-end"
                          }  rounded-bl-none bg-gray-300 text-gray-600`}
                        >
                          {liveChat?.message}
                        </span>
                      </div>
                    </div>
                    <Image
                      height={50}
                      width={50}
                      src={
                        liveChat?.types === "reply"
                          ? "https://i.ibb.co/7xDVRjP/3d-illustration-businessman-with-headphone-blurred-background-business-concept.jpg"
                          : userIcon
                      }
                      alt="My profile"
                      className={`w-6 h-6 rounded-full ${
                        liveChat?.types !== "reply" ? "order-1" : "  order-1"
                      } `}
                    />
                  </div>
                </div>
              );
            })
          }

          <div ref={scroll} />
        </div>
        {/* Message end */}
        {/* button */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-t-2 border-gray-200 bg-red-300 p-4 mb-2 sm:mb-0"
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
            {/* chat input */}
            <InputEmoji
              onChange={(text) => setMessages(text)}
              // cleanOnEnter
              value={messages}
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg px-4 py-1 text-[12px] transition duration-500 ease-in-out text-white bg-primary hover:bg-black focus:outline-none"
            >
              <span className="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
            {/* <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            </div> */}
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
