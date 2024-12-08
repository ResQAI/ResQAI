"use client";
import React, { useState } from "react";
import avator from "../../../public/avataaars.png";
import Image, { StaticImageData } from "next/image";
import ChatHeader from "@/components/ChatHeader";
import ChatContacts from "@/components/ChatContacts";
import { groupContact } from "@/types/groupContact";
import ChatWindow from "@/components/ChatWindow";
import { groupMessage } from "@/types/groupMessage";
import { UserAuthProvider } from "@/store/UserAuth";


const ChatApp = () => {

  return (
    <UserAuthProvider>
        <div className="flex h-screen bg-gray-200 ml-[6rem]">
            <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col ">
                <ChatHeader />
                <ChatContacts/>
            </div>

            <div className="flex-grow flex flex-col">
                <ChatWindow />
            </div>
        </div>
    </UserAuthProvider>
  );
};

export default ChatApp;
