import  {StaticImageData}  from "next/image";

export type groupContact =  {
    id: number;
    name: string;
    avatar: StaticImageData;
    lastMessage: string;
    unreadCount: number;
    lastMessageTime: string;
}