"use client";
import React, { useState } from "react";
import Button from "../Button";
import {
  ChartLine,
  GitPullRequestClosedIcon,
  HomeIcon,
  Loader2Icon,
  MessageSquareLockIcon,
  Send,
  SendIcon,
  Sparkle,
  User2Icon,
} from "lucide-react";

interface SidebarProps {
  role: "citizen" | "ngo" | "district" | "national";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState('home');

  const commonLinks = [
    { name: "Profile", href: "/profile", icon: User2Icon },
    { name: "Notifications", href: "/notifications", icon: SendIcon },
    { name: "Donate to Govt. ", href: "/donate", icon: Sparkle },
  ];

  const citizenLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/citizen/country", icon: ChartLine },
    { name: "Area (Ongoing, upcoming)", href: "/citizen/area", icon: ChartLine },
    { name: "Apply for volunteer", href: "/citizen/volunteer", icon: GitPullRequestClosedIcon },
    {
      name: "Options for which organization user wants to work with",
      href: "/citizen/organizations",
      icon: MessageSquareLockIcon,
    },
    {
      name: "Emergency rescue alert to the Government",
      href: "/citizen/emergency",
      icon: SendIcon,
    },
  ];

  const ngoLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/ngo/country", icon: ChartLine },
    { name: "Area (Ongoing, upcoming)", href: "/ngo/area", icon: ChartLine },
    { name: "Submission of progress", href: "/ngo/progress", icon: ChartLine },
    { name: "Collaborate", href: "/ngo/collaborate", icon: MessageSquareLockIcon },
    { name: "Create awareness drives", href: "/ngo/awareness", icon: SendIcon },
    { name: "AI model ", href: "/ngo/chatbot", icon: Sparkle },
  ];

  const districtLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/district/country", icon: ChartLine },
    { name: "Area (Ongoing, upcoming)", href: "/district/area", icon: ChartLine },
    { name: "Submission of progress", href: "/district/progress", icon: ChartLine },
    { name: "Collaborate", href: "/district/collaborate", icon: MessageSquareLockIcon },
    {
      name: "Send notification for need of NGOs",
      href: "/district/notification",
      icon: SendIcon,
    },
    {
      name: "AI model for personal suggestion (Chatbot)",
      href: "/district/chatbot",
      icon: Sparkle,
    },
  ];

  const nationalLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/national/country", icon: ChartLine },
    { name: "Create Alerts", href: "/national/alerts", icon: SendIcon },
    { name: "Send notifications", href: "/national/notifications", icon: SendIcon },
    { name: "Other notifications", href: "/national/other-notifications", icon: SendIcon },
    { name: "Declaration", href: "/national/declaration", icon: GitPullRequestClosedIcon },
    { name: "Level updation of disaster", href: "/national/level-update", icon: ChartLine },
    { name: "AI ", href: "/national/ai-suggestions", icon: Sparkle },
    { name: "Current Response Plan", href: "/national/response-plan", icon: MessageSquareLockIcon },
    { name: "Situation Report", href: "/national/situation-report", icon: ChartLine },
    { name: "Collaborate", href: "/national/collaborate", icon: MessageSquareLockIcon },
  ];

  const renderLinks = () => {
    switch (role) {
      case "citizen":
        return [...commonLinks, ...citizenLinks];
      case "ngo":
        return [...commonLinks, ...ngoLinks];
      case "district":
        return [...commonLinks, ...districtLinks];
      case "national":
        return [...nationalLinks, ...commonLinks];
      default:
        return [];
    }
  };

  const navigationItems = [
    { id: 'home', name: 'Home', icon: HomeIcon },
    { id: 'profile', name: 'Profile', icon: User2Icon },
    // { id: 'incoming-requests', name: 'Incoming Requests', icon: GitPullRequestClosedIcon },
    // { id: 'progress-submission', name: 'Progress Submission', icon: ChartLine },
    // { id: 'send-notifications', name: 'Send Notifications', icon: SendIcon },
    { id: 'Become a volunteer', name: 'Become a volunteer', icon: MessageSquareLockIcon },
  ];

  return (
    <>
      <aside
        id="separator-sidebar"
        className="fixed left-0 z-40 w-64 h-[92vh] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto bg-gray-50">
          <ul className="space-y-8 font-medium">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex my-5 items-center p-2 text-gray-900 rounded-lg  group ${
                    activeTab === item.id ? 'bg-blue-500 text-white' : 'bg-gray-50'
                  }`}
                >
                  <item.icon size={24} />
                  <span className="ms-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full text-lg" color="red">Help Me</Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;