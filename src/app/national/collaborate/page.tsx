"use client";
import ChatContacts from "@/components/ChatContacts";
import ChatHeader from "@/components/ChatHeader";
import ChatWindow from "@/components/ChatWindow";
import { UserAuthProvider, userAuth } from "@/store/UserAuth";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const ChatLayout = () => {
  const [screenSize, setScreenSize] = useState("large");
  const { selectedContact, setSelectedContact } = userAuth();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setScreenSize("mobile");
      } else {
        setScreenSize("large");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderMobileView = () => (
    <div className="flex h-full bg-gray-200">
      {!selectedContact ? (
        <div className="w-full bg-white flex flex-col">
          <ChatHeader />
          <ChatContacts />
        </div>
      ) : (
        <div className="w-full flex flex-col relative">
          <button
            onClick={() => setSelectedContact(null)}
            className="absolute top-0 left-0 p-2 hover:bg-gray-100 rounded-full bg-white shadow-sm"
          >
            <X size={12} />
          </button>
          <ChatWindow />
        </div>
      )}
    </div>
  );

  const renderDesktopView = () => (
    <div className="flex h-full bg-gray-200">
      <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
        <ChatHeader />
        <ChatContacts />
      </div>
      <div className="flex-grow flex flex-col">
        <ChatWindow />
      </div>
    </div>
  );

  return screenSize === "mobile" ? renderMobileView() : renderDesktopView();
};

const Page = () => {
  return (
    <UserAuthProvider>
      <ChatLayout />
    </UserAuthProvider>
  );
};

export default Page;
