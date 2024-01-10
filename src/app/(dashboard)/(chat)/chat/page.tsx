"use client";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatSidebar from "@/components/chat/ChatSidebar";
import { useChatUsersQuery } from "@/redux/Api/chatApi";
import socket from "@/socket/socket";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";

export default function ChatAdminnPage() {
  const { data, isLoading } = useChatUsersQuery({});

  const userData = data;
  console.log(
    "🚀 ~ file: page.tsx:15 ~ ChatAdminnPage ~ userData:",
    userData?.data[0]?._id
  );

  return (
    // <div className="flex h-screen overflow-hidden relative">
    //   <ChatSidebar />
    //   <ChatContainer />
    // </div>
    <div className="w-full ">
      {/* <h3>main chat page</h3> */}
      <div className="flex lg:hidden -full lg:w-[25%]">
        <ChatSidebar />
      </div>
      <div className="hidden lg:flex flex-col  w-full lg:w-[100%]">
        <header className="bg-white flex  p-4 text-gray-700">
          <Link href="/chat" className="flex gap-5 lg:hidden">
            <LeftOutlined
              style={{
                fontSize: "24px",
                color: "black",
                marginRight: "2rem",
              }}
            />
          </Link>
          <h1 className="text-2xl font-semibold">{userData?.data[0]?.name}</h1>
        </header>
        <ChatContainer senderId={userData?.data[0]?._id} />
      </div>
    </div>
  );
}
