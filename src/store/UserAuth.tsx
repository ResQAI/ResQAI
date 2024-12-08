"use client"
import groupChats, { groupChat, userData } from '@/types/groupChats';
import { chatUser } from '@/types/chatUser';
import { createContext, ReactNode, use, useContext, useEffect, useState } from 'react'
const UserAuth = createContext({} as {
    user: chatUser | null;
    groups: groupChat[] | null;
    selectedContact: groupChat | null;
    setSelectedContact: React.Dispatch<React.SetStateAction<groupChat | null>>;
    setGroups: React.Dispatch<React.SetStateAction<groupChat[] | null>>;
});

export function UserAuthProvider({children} : {children : ReactNode}){
    let [selectedContact, setSelectedContact] = useState<groupChat | null>(null);
    let [groups, setGroups] = useState<groupChat[] | null>(null);
    let [user, setUser] = useState<chatUser | null>(null);

    useEffect(()=>{
        setUser(userData);
        setGroups(groupChats);
    })

    return (
        <UserAuth.Provider value={{user, groups, selectedContact, setSelectedContact, setGroups}}>
            {children}
        </UserAuth.Provider>
    );
}

export function userAuth(){
    return useContext(UserAuth);
}

