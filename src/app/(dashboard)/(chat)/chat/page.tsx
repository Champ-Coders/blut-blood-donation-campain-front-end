"use client";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatSidebar from "@/components/chat/ChatSidebar";
import socket from "@/socket/socket";
import React, { useEffect, useState } from "react";

export default function ChatAdminnPage() {
  const [messages, setMessages] = useState<any[]>([]); // Explicitly specify the type as any[]
  console.log("🚀 ~ file: page.tsx:9 ~ ChatAdminnPage ~ messages:", messages);

  const [allUsers, setAllUsers] = useState<any[]>([]); // Explicitly specify the type as any[]
  console.log("🚀 ~ file: page.tsx:12 ~ ChatAdminnPage ~ allUsers:", allUsers);

  const [singleUserMessages, setSingleUserMessages] = useState<any[]>([]); // Explicitly specify the type as any[]
  console.log(
    "🚀 ~ file: page.tsx:15 ~ ChatAdminnPage ~ singleUserMessages:",
    singleUserMessages
  );

  useEffect(() => {
    socket.on("all-messages", (allMessages: any[]) => {
      // Explicitly specify the type as any[]
      setMessages(allMessages);
    });

    socket.on("new-message", (newMessage: any) => {
      // Explicitly specify the type as any
      setMessages((prevMessages: any[]) => [...prevMessages, newMessage]);
    });

    socket.on("all-users", (users: any[]) => {
      // Explicitly specify the type as any[]
      setAllUsers(users);
    });

    socket.on("single-user-messages", (messages: any[]) => {
      // Explicitly specify the type as any[]
      setSingleUserMessages(messages);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message: any) => {
    // Explicitly specify the type as any
    socket.emit("send-message", message);
  };

  const getAllUsers = () => {
    socket.emit("get-all-users");
  };

  const getSingleUserMessages = (
    senderEmail: string,
    receiverEmail: string
  ) => {
    socket.emit("get-single-user-messages", { senderEmail, receiverEmail });
  };

  return (
    // <div className="flex h-screen overflow-hidden relative">
    //   <ChatSidebar />
    //   <ChatContainer />
    // </div>
    <div className="">
      <h3>main chat page</h3>
    </div>
  );
}
