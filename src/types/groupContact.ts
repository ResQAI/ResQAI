import  {StaticImageData}  from "next/image";
import { chatUser } from "./chatUser";

export type groupContact =  chatUser &{
    lastMessage: string;
    unreadCount: number;
    lastMessageTime: string;
}