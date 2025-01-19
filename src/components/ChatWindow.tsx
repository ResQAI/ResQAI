"use client";
import { MessageSquare, Paperclip, Phone, Send, Smile, Video } from 'lucide-react'
import Image from 'next/image'
import React, { Key, useState } from 'react'
import { userAuth } from '@/store/UserAuth'


const ChatWindow = () => {
    const {selectedContact, user} = userAuth();
    let messages = selectedContact?.chats;
    const [newMessage, setNewMessage] = useState<String>("");

    const handleSendMessage = () => {
        selectedContact?.chats.push({
            content: newMessage,
            senderId: user!.id,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
        });
        setNewMessage("");
    }

  return selectedContact ? (
        <>
          <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
            <div className="flex items-center">
              <Image
                src="/user.png"
                alt={selectedContact.groupName.charAt(0)}
                className="rounded-full w-10 h-10 mr-4"
                height={30}
                width={30}
              />
              <div>
                <div className="font-semibold text-black">
                  {selectedContact.groupName}
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
            {messages?.map((message, id) => (
              <div
                key={id as Key}
                className={`flex mb-4 ${
                  message.senderId  === user!.id? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    px-4 py-2 rounded-lg max-w-md
                    ${message.senderId === user!.id ? "bg-blue-700" : "bg-blue-500"}
                  `}
                >
                  <div className='text-white'>{message.content}</div>
                  <div className="text-xs text-white text-right">
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:p-4 md:p-4 p-1 bg-gray-50 flex items-center">
            <div className="flex items-center space-x-4 lg:mr-4 md:mr-4 mr-2">
              <Smile className="text-gray-600 cursor-pointer lg:block md:block hidden" />
              <Paperclip className="text-gray-600 cursor-pointer" />
            </div>
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage as string}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-grow text-black bg-white border rounded-full lg:px-4 md:px-4 px-2 py-2 focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 lg:h-10 lg:w-10 flex items-center justify-center md:h-10 md:w-10 h-8 w-8 mr-2 lg:mr-0 md:mr-0 bg-blue-500 text-white p-2 rounded-full"
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
    )
}

export default ChatWindow