"use client";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatSidebar from "@/components/chat/ChatSidebar";
import { useChatUsersQuery } from "@/redux/Api/chatApi";
import socket from "@/socket/socket";

import React, { useEffect, useState } from "react";

export default function ChatAdminnPage() {
  const { data, isLoading } = useChatUsersQuery({});

  const userData = data?.data;
  console.log("🚀 ~ file: page.tsx:15 ~ ChatAdminnPage ~ userData:", userData);

  return (
    // <div className="flex h-screen overflow-hidden relative">
    //   <ChatSidebar />
    //   <ChatContainer />
    // </div>
    <div className="">
      {/* <h3>main chat page</h3> */}
      <div className="flex lg:hidden">
        <ChatSidebar />
      </div>
      <div className="hidden lg:flex">
        <ChatContainer senderId="6582ba903e41d51f5948ff4e" />
      </div>
    </div>
  );
}
