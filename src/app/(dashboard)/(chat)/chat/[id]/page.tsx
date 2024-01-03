"use client";
import ChatContainer from "@/components/chat/ChatContainer";
import { useGetMessageMutation } from "@/redux/Api/ChatApi";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import React from "react";

export default function ChatMessagePage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);
  const { data: userData } = useUserProfileQuery(null);
  console.log("🚀 ~ file: page.tsx:13 ~ userData:", userData);

  const [getMessage] = useGetMessageMutation();

  const messageData = () => {};

  return (
    <div className="w-full flex-1 bg-blue-100">
      <header className="bg-wwhite p-4 text-gray-700">
        <h1 className="text-2xl font-semibold">Alice</h1>
      </header>
      <ChatContainer />
    </div>
  );
}
