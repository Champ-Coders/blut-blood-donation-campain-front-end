"use client";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import {
  useGetMessageQuery,
  useRefreshChatMutation,
} from "@/redux/Api/chatApi";
import socket from "@/socket/socket";
import { Image } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import TextAreaField from "../TextAreaField/TextAreaField";

export default function ChatContainer({ senderId }: { senderId: string }) {
  // console.log("🚀 ~ file: ChatContainer.tsx:12 ~ ChatContainer ~ senderId:", senderId)

  const { data: userInfo } = useUserProfileQuery(null);

  // console.log(
  //   "🚀 ~ file: ChatContainer.tsx:15 ~ ChatContainer ~ userInfo:",
  //   userInfo
  // );

  const { register, handleSubmit, reset, setValue } = useForm();

  const { data: messageData, refetch } = useGetMessageQuery(senderId);

  const [refreshChat] = useRefreshChatMutation();

  // console.log("🚀 ~ file: page.tsx:29 ~ messageData:", messageData);

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
    console.log(
      "🚀 ~ file: ChatContainer.tsx:12 ~ onSubmit ~ data:",
      data,
      "and",
      replyMessage
    );
    socket.emit("send-message", replyMessage);
    reset();
    refreshChat(replyMessage);
  };
  const scroll = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    socket.on("update-message", (data) => {
      // scroll.current?.scrollIntoView({ behavior: "smooth" });
      // console.log("uuuuuuuuuuuuuuuuuuuu", data);
      refetch();
      refreshChat(data);
    });
  }, [refetch, refreshChat]);
  // console.log("messageData", messageData);
  return (
    <div className="">
      <div className="h-screen overflow-y-auto p-4 pb-36">
        {messageData?.data?.map((liveChat: any) => {
          return (
            <div key={liveChat?._id} className="chat-message">
              <div
                className={`flex ${
                  liveChat?.types === "reply"
                    ? "items-end "
                    : "  items-end justify-end"
                } `}
              >
                <div
                  className={`flex flex-col space-y-2 text-xl max-w-2xl mx-2 ${
                    liveChat?.types === "reply"
                      ? "order-2 items-start  "
                      : " order-1 items-end"
                  } `}
                >
                  <div>
                    <span
                      className={`px-4 py-2 rounded-lg inline-block ${
                        liveChat?.types === "reply"
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
                    liveChat.types === "reply"
                      ? "https://i.ibb.co/VxhHWhd/professional-Side.png"
                      : "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg"
                  }
                  alt="My profile"
                  className={`w-6 h-6 rounded-full ${
                    liveChat?.types === "reply" ? "order-1" : "  order-2"
                  } `}
                />
              </div>
            </div>
          );
        })}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-t border-gray-300 p-4 
    //   absolute bottom-0 w-[80%]
      
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
            className="w-1/5 bg-indigo-500  text-white px-4 py-2 rounded-md ml-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
