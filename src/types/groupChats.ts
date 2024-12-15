import { chatUser } from "./chatUser";

export type groupChat = {
    id: Number;
    groupName: string;
    members: Array<{ id: number; name: string }>;
    chats: Array<{ content: String; senderId: number, time: String }>;
    lastMessageTime : string;
    lastMessage: string | null;
    unreadCount: number;
};

export const userData : chatUser = {
    id: 2,
    name: "National Commitee",
    avatar: null,
}

export const groupChats: Array<groupChat> = [
  {
    groupName: "Disaster Relief Coordination",
    id: 300,
    lastMessageTime: "9:45 AM",
    lastMessage: null,
    unreadCount: 0,
    members: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Dana" },
      { id: 5, name: "Eve" },
    ],
    chats: [
      { content: "Can we get an update on food supplies in Zone A?", senderId: 1, time: "10:34 AM" },
      { content: "We’ve sent two trucks. ETA is 3 hours.", senderId: 2, time: "10:34 AM" },
      { content: "Shelter availability in Zone B is almost full. Any backup options?", senderId: 3, time: "10:34 AM" },
      { content: "I’ll check with the logistics team and get back.", senderId: 4, time: "10:34 AM" },
      { content: "Keep me posted. I’ll coordinate with the local authorities.", senderId: 5, time: "10:34 AM" },
    ],
  },
  {
    groupName: "Flood Response Team",
    id: 270,
    lastMessageTime: "9:45 AM",
    lastMessage: null,
    unreadCount: 0,
    members: [
      { id: 12, name: "Liam" },
      { id: 13, name: "Mia" },
      { id: 14, name: "Noah" },
      { id: 15, name: "Olivia" },
      { id: 16, name: "Sophia" },
    ],
    chats: [
      { content: "Is the rescue boat dispatched to Sector 5?", senderId: 12, time: "10:34 AM" },
      { content: "Yes, it left 20 minutes ago. Should be there soon.", senderId: 13, time: "10:34 AM" },
      { content: "We’ve received reports of families stranded on rooftops. Can someone confirm?", senderId: 14, time: "10:34 AM" },
      { content: "Confirming now. Teams are moving in that direction.", senderId: 15, time: "10:34 AM" },
      { content: "Please ensure life jackets are distributed before they board the rescue boats.", senderId: 16, time: "10:34 AM" },
    ],
  },
  {
    groupName: "Volunteer Management",
    id: 400,
    lastMessageTime: "9:45 AM",
    lastMessage: null,
    unreadCount: 0,
    members: [
      { id: 17, name: "Aiden" },
      { id: 18, name: "Bella" },
      { id: 19, name: "Carter" },
      { id: 20, name: "Dylan" },
      { id: 21, name: "Ella" },
    ],
    chats: [
      { content: "We need 5 more volunteers for the food distribution center.", senderId: 17, time: "10:34 AM" },
      { content: "I’ll join. Which location?", senderId: 18, time: "10:34 AM" },
      { content: "Location is Shelter Zone C. Report at 2 PM.", senderId: 19, time: "10:34 AM" },
      { content: "Got it. I’ll bring a few extra helping hands.", senderId: 20, time: "10:34 AM" },
      { content: "Thank you! Make sure to carry identification badges.", senderId: 21, time: "10:34 AM" },
    ],
  },
  {
    groupName: "Medical Aid Team",
    id: 500,
    lastMessageTime: "9:45 AM",
    lastMessage: null,
    unreadCount: 0,
    members: [
      { id: 22, name: "Ethan" },
      { id: 23, name: "Fiona" },
      { id: 24, name: "George" },
      { id: 25, name: "Hannah" },
      { id: 26, name: "Isaac" },
    ],
    chats: [
      { content: "How many first-aid kits are left in our inventory?", senderId: 22, time: "10:34 AM" },
      { content: "We have around 20 kits. Need to request more supplies.", senderId: 23, time: "10:34 AM" },
      { content: "I’ll raise a request with the central warehouse.", senderId: 24, time: "10:34 AM" },
      { content: "Any updates on doctors arriving for Zone B?", senderId: 25, time: "10:34 AM" },
      { content: "They’re scheduled to arrive by 5 PM today.", senderId: 26, time: "10:34 AM" },
    ],
  },
  {
    groupName: "Resource Allocation",
    id: 412,
    lastMessageTime: "9:45 AM",
    lastMessage: null,
    unreadCount: 0,
    members: [
      { id: 27, name: "Jake" },
      { id: 28, name: "Lily" },
      { id: 29, name: "Mason" },
      { id: 30, name: "Natalie" },
      { id: 31, name: "Owen" },
    ],
    chats: [
      { content: "Do we have enough blankets for Shelter Zone A?", senderId: 27, time: "10:34 AM" },
      { content: "We’re short by 50 blankets. Can we redistribute from Zone C?", senderId: 28, time: "10:34 AM" },
      { content: "I’ll check stock levels and arrange transportation if needed.", senderId: 29, time: "10:34 AM" },
      { content: "Let’s ensure no zone runs out. We can’t leave anyone uncovered tonight.", senderId: 30, time: "10:34 AM" },
      { content: "Agreed. I’ll coordinate with the logistics team.", senderId: 31, time: "10:34 AM" },
    ],
  },
  {
    groupName: "Community Support Group",
    id: 890,
    lastMessageTime: "9:45 AM",
    lastMessage: null,
    unreadCount: 0,
    members: [
      { id: 32, name: "Penny" },
      { id: 33, name: "Quinn" },
      { id: 34, name: "Ryan" },
      { id: 35, name: "Samantha" },
      { id: 36, name: "Thomas" },
    ],
    chats: [
      { content: "Any updates on the counseling sessions for affected families?", senderId: 32, time: "10:34 AM" },
      { content: "We’ve scheduled them for tomorrow at 10 AM.", senderId: 33, time: "10:34 AM" },
      { content: "Can we add more slots? Some families are requesting evening sessions.", senderId: 34, time: "10:34 AM" },
      { content: "Sure. I’ll adjust the schedule and notify them.", senderId: 35, time: "10:34 AM" },
      { content: "Thanks, Samantha. Let’s ensure we have enough volunteers to assist.", senderId: 36, time: "10:34 AM" },
    ],
  },
];

  
  export default groupChats;
