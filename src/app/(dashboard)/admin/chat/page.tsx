import ChatContainer from "@/components/chat/ChatContainer";
import ChatSidebar from "@/components/chat/ChatSidebar";
import React from "react";

export default function ChatAdminnPage() {
  return (
    <div className="flex h-screen overflow-hidden relative">
      <ChatSidebar />
      <ChatContainer />
    </div>
  );
}
