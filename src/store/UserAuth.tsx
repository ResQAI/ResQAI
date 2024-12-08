"use client"
import groupChats, { groupChat, userData } from '@/chatData';
import { chatUser } from '@/types/chatUser';
import { groupContact } from '@/types/groupContact';
import { groupMessage } from '@/types/groupMessage';
import { createContext, ReactNode, use, useContext, useEffect, useState } from 'react'
const UserAuth = createContext({} as {
    user: chatUser | null;
    groups: groupChat[] | null;
    messages: groupMessage[] | null;
    selectedContact: groupContact | null;
    setSelectedContact: React.Dispatch<React.SetStateAction<groupContact | null>>;
    setMessages: React.Dispatch<React.SetStateAction<groupMessage[] | null>>;
    setGroups: React.Dispatch<React.SetStateAction<groupChat[] | null>>;
});

export function UserAuthProvider({children} : {children : ReactNode}){
    let [selectedContact, setSelectedContact] = useState<groupContact | null>(null);
    let [messages, setMessages] = useState<groupMessage[] | null>(null);
    let [groups, setGroups] = useState<groupChat[] | null>(null);
    let [user, setUser] = useState<chatUser | null>(null);

    useEffect(()=>{
        setUser(userData);
        setGroups(groupChats);
    })

    return (
        <UserAuth.Provider value={{user, groups, messages, selectedContact, setSelectedContact, setMessages, setGroups}}>
            {children}
        </UserAuth.Provider>
    );
}

export function userAuth(){
    return useContext(UserAuth);
}

