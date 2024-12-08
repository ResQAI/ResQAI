export type chatUser = {
    id : Number;
    name: String;
}

export type Chat = {
    senderId : Number;
    content : String;
}

export type GroupChat = {
    groupName : String;
    members : chatUser[];
    chats : Chat[];
}