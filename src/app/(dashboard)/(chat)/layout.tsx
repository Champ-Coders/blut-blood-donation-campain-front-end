import ChatSidebar from "@/components/chat/ChatSidebar";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="flex h-screen overflow-hidden relative">
        <div className="w-[100%] lg:w-1/4">
          <ChatSidebar />
        </div>
        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
}


