import { groupContact } from '@/types/groupContact'
import Image from 'next/image'
import React from 'react'

const ChatContacts = ({contacts, selectedContact, setSelectedContact}: {contacts: Array<groupContact>, selectedContact : groupContact | null , setSelectedContact: React.Dispatch<React.SetStateAction<groupContact | null>>}) => {
  return (
    <div className="overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                selectedContact?.id === contact.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedContact(contact)}
            >
              <Image
                src={contact.avatar!}
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
  )
}

export default ChatContacts