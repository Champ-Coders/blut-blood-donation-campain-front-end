"use client";
import ChatContainer from "@/components/chat/ChatContainer";
import { useSearchParams } from "next/navigation";

import React from "react";

export default function ChatMessagePage({
  params,
}: {
  params: { id: string };
}) {
  // console.log(params);

  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  // console.log("🚀 ~ file: page.tsx:17 ~ name:", name);

  return (
    <div className="">
      <div className="w-auto flex-1  bg-blue-100">
      <header className="bg-wwhite p-4 text-gray-700">
        <h1 className="text-2xl font-semibold">{name}</h1>
      </header>
      <ChatContainer senderId={params?.id} />
    </div>
    </div>
  );
}
