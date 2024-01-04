import ChatSidebar from "@/components/chat/ChatSidebar";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className=" block lg:flex  h-screen  overflow-hidden relative">
        <div className="w-full lg:w-[25%]  bg-red-200 p-2 ">
          <ChatSidebar />
        </div>
        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
}
