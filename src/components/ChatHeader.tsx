import Image from 'next/image'
import React from 'react'
import {
    Search,
  } from "lucide-react";
import { userAuth } from '@/store/UserAuth';
import { User } from 'lucide-react';

const ChatHeader = () => {
  const {user} = userAuth();
  return (
    <header>
        <div className="flex justify-between items-center p-4 bg-gray-50">
          <div className="flex gap-5 justify-center items-center ">
            {/* <Image
              src={""}
              alt="User Avatar"
              className="rounded-full w-10 h-10"
              width={40}
              height={40}
            /> */}
             <User size={24} className="m-2 stroke-black  border border-black rounded-full focus:ring-4 focus:ring-gray-300" />
            <div className='font-semibold text-lg text-black'>{user?.name}</div>
          </div>
          <div className="flex space-x-4">
            <Image src="/add-group.png" alt="Add Group" width={30} height={30} className='cursor-pointer mr-8'/>
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