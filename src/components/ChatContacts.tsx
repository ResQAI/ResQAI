import { userAuth } from '@/store/UserAuth'
import Image from 'next/image'
import React, { Key } from 'react'



const ChatContacts = () => {
    const {groups , selectedContact, setSelectedContact} = userAuth();
    // console.log(selectedContact)
  return (
    <div className="flex-1 overflow-y-scroll">
          {groups?.map((group) => (
            <div
              key={group.id as Key}
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                selectedContact?.id === group.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedContact(group)}
            >
              <Image
                src="/user.png"
                alt={group.groupName.charAt(0)}
                className="rounded-full w-10 h-10 mr-4"
                width={30}
                height={30}
              />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <span className="font-semibold text-black">
                    {group.groupName}
                  </span>
                  <span className="text-xs text-gray-500">
                    {group.lastMessageTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">
                    {group.lastMessage != null && group.lastMessage}
                  </span>
                  {group.unreadCount > 0 && (
                    <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
                      {group.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}

export default ChatContacts;