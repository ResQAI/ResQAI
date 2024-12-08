import { groupContact } from '@/types/groupContact'
import { MessageSquare, Paperclip, Phone, Send, Smile, Video } from 'lucide-react'
import Image from 'next/image'
import {groupMessage} from '@/types/groupMessage'
import React, { Key } from 'react'

const ChatWindow = ({selectedContact, messages, newMessage, setNewMessage, handleSendMessage} : {selectedContact : groupContact | null, messages : groupMessage[], newMessage : string, setNewMessage : React.Dispatch<React.SetStateAction<string>> , handleSendMessage : ()=> void}) => {
  return selectedContact ? (
        <>
          <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
            <div className="flex items-center">
              <Image
                src={selectedContact.avatar!}
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
                key={message.id as Key}
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
    )
}

export default ChatWindow