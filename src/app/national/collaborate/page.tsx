"use client";
import ChatContacts from "@/components/ChatContacts";
import ChatHeader from "@/components/ChatHeader";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ChatWindow from "@/components/ChatWindow";
import { UserAuthProvider } from "@/store/UserAuth";
import { userAuth } from '@/store/UserAuth'
import React from "react";

const Page = () => {
  const { selectedContact } = userAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <UserAuthProvider>
      <div className=" h-full bg-gray-50 relative">
        {/* Hamburger Icon */}
        <button
          className="md:hidden border-gray-200 p-4 focus:outline-none"
          onClick={handleSidebarToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <div
          className={`h-full absolute md:relative md:w-1/3 bg-white border-r border-gray-200 flex flex-col transform md:translate-x-0 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing sidebar on click inside it
          style={{ width: "100%", maxWidth: "300px" }} // Ensure no gap or misalignment
        >
          <ChatHeader />
          <ChatContacts />
        </div>

        {/* Overlay for small screens */}
        {isSidebarOpen && (
          <div
            className="fixed h-full bg-black bg-opacity-50 md:hidden"
            onClick={handleSidebarClose}
          />
        )}

        {/* Chat Window */}
        <div className="flex-grow h-full w-full flex flex-col" onClick={handleSidebarClose}>
          <ChatWindow />
        </div>
      </div>
    </UserAuthProvider>
  );
};

export default Page;