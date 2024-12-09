"use client";
import React from "react";
import Button from "./Button";
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
  const commonLinks = [
    { name: "Profile", href: "/profile" },
    { name: "Notifications", href: "/notifications" },
    { name: "Donate to Govt. ", href: "/donate" },
  ];

  const citizenLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/citizen/country" },
    { name: "Area (Ongoing, upcoming)", href: "/citizen/area" },
    { name: "Apply for volunteer", href: "/citizen/volunteer" },
    {
      name: "Options for which organization user wants to work with",
      href: "/citizen/organizations",
    },
    {
      name: "Emergency rescue alert to the Government",
      href: "/citizen/emergency",
    },
  ];

  const ngoLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/ngo/country" },
    { name: "Area (Ongoing, upcoming)", href: "/ngo/area" },
    { name: "Submission of progress", href: "/ngo/progress" },
    { name: "Collaborate", href: "/ngo/collaborate" },
    { name: "Create awareness drives", href: "/ngo/awareness" },
    { name: "AI model ", href: "/ngo/chatbot" },
  ];

  const districtLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/district/country" },
    { name: "Area (Ongoing, upcoming)", href: "/district/area" },
    { name: "Submission of progress", href: "/district/progress" },
    { name: "Collaborate", href: "/district/collaborate" },
    {
      name: "Send notification for need of NGOs",
      href: "/district/notification",
    },
    {
      name: "AI model for personal suggestion (Chatbot)",
      href: "/district/chatbot",
    },
  ];

  const nationalLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/national/country" },
    { name: "Create Alerts", href: "/national/alerts" },
    { name: "Send notifications", href: "/national/notifications" },
    { name: "Other notifications", href: "/national/other-notifications" },
    { name: "Declaration", href: "/national/declaration" },
    { name: "Level updation of disaster", href: "/national/level-update" },
    { name: "AI ", href: "/national/ai-suggestions" },
    { name: "Current Response Plan", href: "/national/response-plan" },
    { name: "Situation Report", href: "/national/situation-report" },
    { name: "Collaborate", href: "/national/collaborate" },
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

  return (
    <>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto bg-gray-50">
          <ul className="space-y-8 font-medium">
            <li>
              <a
                href="#"
                className="flex my-5 items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <HomeIcon size={24} />
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="my-5 flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <User2Icon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="my-5 flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
              >
                <GitPullRequestClosedIcon size={24} />
                <span className="ms-3">Incoming Requests</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group my-5"
              >
                <ChartLine size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Progress Submission
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <SendIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Send Notifications
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <MessageSquareLockIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Collaborate
                </span>
              </a>
            </li>
          </ul>
          <Button className="w-full text-lg">AI suggestions</Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
