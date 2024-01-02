import ChatContainer from "@/components/chat/ChatContainer";
import ChatSidebar from "@/components/chat/ChatSidebar";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
     
      <div className="flex h-screen overflow-hidden relative">
        <ChatSidebar />
        {children}
        {/* <div className=""></div> */}
      </div>
    </div>
  );
}
