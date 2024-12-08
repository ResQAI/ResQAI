"use client";
import React from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatContacts from "@/components/ChatContacts";
import ChatWindow from "@/components/ChatWindow";
import { UserAuthProvider } from "@/store/UserAuth";

const ChatApp = () => {
  return (
    <UserAuthProvider>
      <div className="flex h-screen bg-gray-200">
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col ">
          <ChatHeader />
          <ChatContacts />
        </div>

        <div className="flex-grow flex flex-col">
          <ChatWindow />
        </div>
      </div>
    </UserAuthProvider>
  );
};

export default ChatApp;
