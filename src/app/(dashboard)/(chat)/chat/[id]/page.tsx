import ChatContainer from "@/components/chat/ChatContainer";
import React from "react";

export default function ChatMessagePage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);
  return (
    <div className="flex-1 bg-blue-200">
      <header className="bg-white p-4 text-gray-700">
        <h1 className="text-2xl font-semibold">Alice</h1>
      </header>
      <ChatContainer />
    </div>
  );
}
