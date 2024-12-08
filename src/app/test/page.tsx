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

const mockContacts : Array<groupContact> = [
  {
    id: 1,
    name: "John Doe",
    avatar: avator,
    lastMessage: "Hey, how are you?",
    unreadCount: 2,
    lastMessageTime: "10:30 AM",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: avator,
    lastMessage: "See you later!",
    unreadCount: 0,
    lastMessageTime: "9:45 AM",
  },
];

const mockMessages: groupMessage[] = [
  { id: 1, text: "Hi there!", sender: "me", time: "10:32 AM" },
  { id: 2, text: "Hello! How are you?", sender: "other", time: "10:33 AM" },
  {
    id: 3,
    text: "I'm good, thanks for asking.",
    sender: "me",
    time: "10:34 AM",
  },
];

const ChatApp = () => {

  const [selectedContact, setSelectedContact] = useState<groupContact | null>(null);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <UserAuthProvider>
        <div className="flex h-screen bg-gray-200 ml-[6rem]">
            <div className="w-1/3 bg-white border-r border-gray-200">
                <ChatHeader />
                <ChatContacts contacts={mockContacts} selectedContact={selectedContact} setSelectedContact={setSelectedContact} />
            </div>

            <div className="flex-grow flex flex-col">
                <ChatWindow messages={mockMessages} newMessage={newMessage} setNewMessage={setNewMessage} handleSendMessage={handleSendMessage} selectedContact={selectedContact}/>
            </div>
        </div>
    </UserAuthProvider>
  );
};

export default ChatApp;
