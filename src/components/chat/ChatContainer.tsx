"use client";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import {
  useGetMessageQuery,
  useRefreshChatMutation,
} from "@/redux/Api/chatApi";
import socket from "@/socket/socket";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";

import ChatSkelleton from "../skeleton/ChatSkeleton";
import Image from "next/image";
import userIcon from "../../../public/assets/icon/userIcon.png";

export default function ChatContainer({ senderId }: { senderId: string }) {
  //! get user profile data
  const { data: userInfo } = useUserProfileQuery(null);

  //! for sent message

  const { register, handleSubmit, reset, setValue } = useForm();

  const { data: messageData, isLoading } = useGetMessageQuery(senderId);

  //!@ for refresh messages
  const [refreshChat] = useRefreshChatMutation();
  const [chatMessages, setChatMessages] = React.useState<any>(
    messageData?.data || []
  );

  const onSubmit = (data: any) => {
    // console.log("🚀 ~ file: ChatContainer.tsx:23 ~ onSubmit ~ data:", data);

    const replyMessage = {
      // id: chatMessages.length + 1,
      message: data.message,
      time: new Date().toLocaleTimeString(),
      img: userInfo?.data.imgUrl || "",
      status: "online",
      type: "reply",
      email: userInfo?.data.email,
      _id: senderId,
    };
    // console.log(
    //   "🚀 ~ file: ChatContainer.tsx:12 ~ onSubmit ~ data:",
    //   data,
    //   "and",
    //   replyMessage
    // );
    socket.emit("send-message", replyMessage);
    refreshChat(replyMessage);
    reset();
  };
  const scroll = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    setChatMessages(messageData?.data);
    socket.on("update-message", (data) => {
      // scroll.current?.scrollIntoView({ behavior: "smooth" });
      // console.log("uuuuuuuuuuuuuuuuuuuu", data);
      // refetch();
      scroll.current?.scrollIntoView({ behavior: "smooth" });
      setChatMessages(messageData?.data);
      refreshChat(data);
    });
  }, [refreshChat, messageData]);

  // console.log("messageData", messageData);
  return (
    <div className="">
      <div className="h-screen overflow-y-auto p-4 pb-36">
        {isLoading || (messageData?.data?.length < 1 && <ChatSkelleton />)}
        {messageData?.data?.map((liveChat: any) => {
          return (
            <div key={liveChat?._id} className="chat-message">
              <div
                className={`flex ${
                  liveChat?.types === "reply"
                    ? "items-end justify-end"
                    : "  items-end "
                } `}
              >
                <div
                  className={`flex flex-col  space-y-2 text-xl max-w-2xl my-2 mx-2 ${
                    liveChat?.types === "reply"
                      ? "order-1 items-end  "
                      : " order-2 items-start"
                  } `}
                >
                  <div>
                    <span
                      className={`px-4 py-2 rounded-lg inline-block ${
                        liveChat?.types === "reply"
                          ? "rounded-br-none bg-primary text-white "
                          : "order-1 items-end"
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
                    liveChat.types === "reply"
                      ? "https://i.ibb.co/VxhHWhd/professional-Side.png"
                      : `${
                          liveChat?.img
                            ? liveChat.img
                            : userIcon
                        }`
                  }
                  alt="My profile"
                  className={`w-6 h-6 rounded-full ${
                    liveChat?.types === "reply" ? "order-2" : "  order-1"
                  } `}
                />
              </div>
            </div>
          );
        })}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-t border-gray-300 p-4  w-full 
      absolute bottom-0 lg:w-[80%]
      
      "
      >
        <div className="flex  items-center ">
          {/* <input type="text" name="message" placeholder="Type a message..." /> */}

          <InputField
            placeholder="Enter Your Message"
            // label="Your Thana"
            name={"message"}
            type="text"
            register={register}
            required
            // errors={errors}
          />
          <button
            type="submit"
            className="w-1/5 lg:w-1/3 bg-primary text-center  text-white px-4 py-2 rounded ml-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
