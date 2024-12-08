"use client"

import GroupChat from "@/components/GroupChat";
import { useState } from "react";

export default function chatPage(){
    let [chatVisibility, setChatVisibility] = useState<Boolean>(false);
    return(
        <div>
            <h1 onClick={()=>{
                setChatVisibility(!chatVisibility);
            }} className="cursor-pointer">Chat Page</h1>
            <GroupChat chatVisibility={chatVisibility}/>
        </div>
    )
}