"use client";
import ChatContacts from "@/components/ChatContacts";
import ChatHeader from "@/components/ChatHeader";
import ChatWindow from "@/components/ChatWindow";
import { UserAuthProvider } from "@/store/UserAuth";
import React from "react";

const page = () => {
  return (
    <UserAuthProvider>
      <div className="flex h-full bg-gray-200">
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

export default page;
