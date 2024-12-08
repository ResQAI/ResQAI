import { chatUser } from "./types/chatUser";

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
    name: "Bob",
    avatar: null,
}

export const groupChats : Array<groupChat> = [
    {
      groupName: "Tech Enthusiasts",
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
        { content: "Hey everyone! Have you checked out the latest iPhone release? Thoughts?", senderId: 1, time: "10:34 AM" },
        { content: "Yes! The new features are cool, but the price hike is insane.", senderId: 2, time: "10:34 AM" },
        { content: "I’m more excited about the advancements in AI chips this year.", senderId: 3, time: "10:34 AM" },
        { content: "Same here, Charlie. The integration of AI in daily life is fascinating.", senderId: 4, time: "10:34 AM" },
        { content: "Does anyone know if they’re adding support for foldable screens?", senderId: 5, time: "10:34 AM" },
      ],
    },
    {
      groupName: "Movie Buffs",
      id: 290,
      lastMessageTime: "9:45 AM",
      lastMessage: null,
      unreadCount: 0,
      members: [
        { id: 6, name: "Frank" },
        { id: 7, name: "Grace" },
        { id: 8, name: "Hank" },
        { id: 9, name: "Ivy" },
        { id: 10, name: "Jack" },
        { id: 11, name: "Kara" },
      ],
      chats: [
        { content: "Has anyone seen the latest Mission Impossible movie? It’s packed with action!", senderId: 6, time: "10:34 AM" },
        { content: "Not yet! Is it better than the last one?", senderId: 7, time: "10:34 AM" },
        { content: "Definitely! Tom Cruise has outdone himself this time.", senderId: 8, time: "10:34 AM" },
        { content: "The stunts are unreal! I heard he did most of them himself again.", senderId: 9, time: "10:34 AM" },
        { content: "He’s such a legend. Did you guys catch the behind-the-scenes footage?", senderId: 10, time: "10:34 AM" },
        { content: "Yes! That motorcycle cliff jump gave me chills.", senderId: 11, time: "10:34 AM" },
      ],
    },
    {
      groupName: "Book Club",
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
        { content: "So, did everyone finish 'Atomic Habits' this week?", senderId: 12, time: "10:34 AM" },
        { content: "Yes, it was such an insightful read. I loved the part about habit stacking!", senderId: 13 , time: "10:34 AM"},
        { content: "Same here. It really helped me implement small changes in my daily routine.", senderId: 14, time: "10:34 AM" },
        { content: "I’m halfway through but already hooked. The examples make it so relatable.", senderId: 15, time: "10:34 AM" },
        { content: "I’m starting it tonight. Any specific chapter I should look out for?", senderId: 16, time: "10:34 AM" },
      ],
    },
    {
      groupName: "Gaming Legends",
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
        { content: "What’s the plan for tonight? Are we raiding in World of Warcraft?", senderId: 17, time: "10:34 AM" },
        { content: "Count me in! I’ve been leveling up my character all week.", senderId: 18 , time: "10:34 AM"},
        { content: "Same! I just unlocked a new set of gear. Let’s crush it.", senderId: 19, time: "10:34 AM" },
        { content: "Can someone help me with the new dungeon mechanics? It’s confusing.", senderId: 20 , time: "10:34 AM"},
        { content: "Sure, Dylan. I’ll walk you through it before the raid.", senderId: 21 , time: "10:34 AM"},
      ],
    },
    {
      groupName: "Fitness Warriors",
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
        { content: "How’s everyone’s progress with the 30-day fitness challenge?", senderId: 22 , time: "10:34 AM"},
        { content: "Pretty good! I’m seeing improvements in my endurance.", senderId: 23 , time: "10:34 AM"},
        { content: "Same here. The HIIT workouts are brutal but effective.", senderId: 24 , time: "10:34 AM"},
        { content: "I’ve been focusing on yoga this week. It’s helping with flexibility.", senderId: 25 , time: "10:34 AM"},
        { content: "Anyone have tips for sticking to a meal plan? I keep slipping.", senderId: 26 , time: "10:34 AM"},
      ],
    },
    {
      groupName: "Travel Explorers",
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
        { content: "Our next destination: Bali or Greece? Vote now!", senderId: 27 , time: "10:34 AM"},
        { content: "Greece! I’ve always wanted to visit Santorini.", senderId: 28, time: "10:34 AM" },
        { content: "Bali for sure. The beaches and culture are amazing.", senderId: 29, time: "10:34 AM" },
        { content: "Can we do both? A split trip sounds epic.", senderId: 30, time: "10:34 AM" },
        { content: "I’m with Mason. Why not make it a grand adventure?", senderId: 31, time: "10:34 AM" },
      ],
    },
    {
      groupName: "Foodies United",
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
        { content: "Who’s up for a food tour this weekend? Suggestions?", senderId: 32, time: "10:34 AM" },
        { content: "How about a taco crawl? I know some great spots.", senderId: 33, time: "10:34 AM" },
        { content: "Yes! Tacos sound perfect. Let’s finalize a route.", senderId: 34 , time: "10:34 AM"},
        { content: "I’m in! Can we include a dessert stop too?", senderId: 35, time: "10:34 AM" },
        { content: "Definitely. I know a place with the best churros.", senderId: 36, time: "10:34 AM" },
      ],
    },
  ];
  
  export default groupChats;
