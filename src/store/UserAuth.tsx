"use client"
import { chatUser } from '@/types/chatUser';
import { groupContact } from '@/types/groupContact';
import { groupMessage } from '@/types/groupMessage';
import { createContext, ReactNode, use, useContext, useState } from 'react'
const UserAuth = createContext({} as {
    user: chatUser | null;
    contacts: groupContact[] | null;
    messages: groupMessage[] | null;
    selectedContact: groupContact | null;
    setSelectedContact: React.Dispatch<React.SetStateAction<groupContact | null>>;
    setMessages: React.Dispatch<React.SetStateAction<groupMessage[] | null>>;
    setContacts: React.Dispatch<React.SetStateAction<groupContact[] | null>>;
});

export function UserAuthProvider({children} : {children : ReactNode}){
    let [selectedContact, setSelectedContact] = useState<groupContact | null>(null);
    let [messages, setMessages] = useState<groupMessage[] | null>(null);
    let [contacts, setContacts] = useState<groupContact[] | null>(null);
    let [user, setUser] = useState<chatUser | null>(null);

    return (
        <UserAuth.Provider value={{user, contacts, messages, selectedContact, setSelectedContact, setMessages, setContacts}}>
            {children}
        </UserAuth.Provider>
    );
}

export function userAuth(){
    return useContext(UserAuth);
}

