"use client";
import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  Video,
  Send,
  Paperclip,
  Smile,
  Search,
} from "lucide-react";
import avator from "../../../public/avataaars.png";
import Image, { StaticImageData } from "next/image";

const mockContacts = [
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

const mockMessages = [
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
  interface Contact {
    id: number;
    name: string;
    avatar: StaticImageData;
    lastMessage: string;
    unreadCount: number;
    lastMessageTime: string;
  }

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
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
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 bg-white border-r border-gray-200">
        <div className="flex justify-between items-center p-4 bg-gray-50">
          <Image
            src={avator}
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
          <div className="flex space-x-4">
            <MessageSquare className="text-gray-600 cursor-pointer" />
            <Phone className="text-gray-600 cursor-pointer" />
          </div>
        </div>
        <div className="p-3">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="bg-transparent w-full focus:outline-none text-black"
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          {mockContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                selectedContact?.id === contact.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedContact(contact)}
            >
              <Image
                src={contact.avatar}
                alt={contact.name}
                className="rounded-full w-12 h-12 mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <span className="font-semibold text-black">
                    {contact.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {contact.lastMessageTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">
                    {contact.lastMessage}
                  </span>
                  {contact.unreadCount > 0 && (
                    <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
                      {contact.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        {selectedContact ? (
          <>
            <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
              <div className="flex items-center">
                <Image
                  src={selectedContact.avatar}
                  alt={selectedContact.name}
                  className="rounded-full w-10 h-10 mr-4"
                />
                <div>
                  <div className="font-semibold text-black">
                    {selectedContact.name}
                  </div>
                  <div className="text-xs text-gray-500">online</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Video className="text-gray-600 cursor-pointer" />
                <Phone className="text-gray-600 cursor-pointer" />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${
                    message.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      px-4 py-2 rounded-lg max-w-md
                      ${message.sender === "me" ? "bg-blue-700" : "bg-blue-500"}
                    `}
                  >
                    <div>{message.text}</div>
                    <div className="text-xs text-white text-right">
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 flex items-center">
              <div className="flex items-center space-x-4 mr-4">
                <Smile className="text-gray-600 cursor-pointer" />
                <Paperclip className="text-gray-600 cursor-pointer" />
              </div>
              <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-grow text-black bg-white border rounded-full px-4 py-2 focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="ml-4 bg-blue-500 text-white p-2 rounded-full"
              >
                <Send />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center bg-gray-100">
            <div className="text-center text-gray-500">
              <MessageSquare size={64} className="mx-auto mb-4" />
              <h2 className="text-xl">Select a chat to start messaging</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
