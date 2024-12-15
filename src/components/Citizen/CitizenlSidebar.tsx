"use client";
import React, { useEffect, useState } from "react";
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
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  role: "citizen" | "ngo" | "district" | "national";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const navigationItems = [
    { id: "Home", name: "Home", icon: HomeIcon },
    { id: "Profile", name: "Profile", icon: User2Icon },
    // { id: 'incoming-requests', name: 'Incoming Requests', icon: GitPullRequestClosedIcon },
    // { id: 'progress-submission', name: 'Progress Submission', icon: ChartLine },
    // { id: 'send-notifications', name: 'Send Notifications', icon: SendIcon },
    // { id: 'volunteer', name: 'Become a volunteer', icon: MessageSquareLockIcon },
    { id: "Donate", name: "Donate to Govt. Funds", icon: HeartHandshake },
  ];

  const setActiveTabFunction = (id: string) => () => {
    setActiveTab(id);
    localStorage.setItem("activeTab", id);
  };

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
                <Link
                  href={`/citizen/${item.id}`}
                  onClick={setActiveTabFunction(item.id)}
                  className={`flex my-5 items-center p-2 text-gray-900 rounded-lg  group ${
                    activeTab === item.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-50"
                  }`}
                >
                  <item.icon size={24} />
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a href="/citizen/saveme">
            <Button className="w-full text-lg" color="red">
              Help Me
            </Button>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
