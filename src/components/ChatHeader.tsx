import Image from 'next/image'
import React from 'react'
import {
    MessageSquare,
    Phone,
    Search,
  } from "lucide-react";

const ChatHeader = () => {
  return (
    <header>
        <div className="flex justify-between items-center p-4 bg-gray-50">
          <Image
            src="/avataaars.png"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
            width={40}
            height={40}
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
    </header>
  )
}

export default ChatHeader