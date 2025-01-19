"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import {
  GitPullRequestClosedIcon,
  HomeIcon,
  MessageSquareLockIcon,
  SendIcon,
  User2Icon,
  AlertTriangleIcon,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  role: "citizen" | "ngo" | "district" | "national";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const path = window.location.pathname.split("/").pop();
    if (path) {
      setActiveTab(path);
    }
  }, []);

  const navigationItems = [
    { id: "home", name: "Home", icon: HomeIcon },
    { id: "profile", name: "Profile", icon: User2Icon },
    {
      id: "report",
      name: "Report Submission",
      icon: GitPullRequestClosedIcon,
    },
    { id: "collaborate", name: "Collaborate", icon: MessageSquareLockIcon },
    {
      id: "upcomingdisasters",
      name: "Upcoming Disasters",
      icon: AlertTriangleIcon,
    },
  ];

  const setActiveTabFunction = (id: string) => () => {
    setActiveTab(id);
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
                  href={`/state/${item.id}`}
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
          <Link
            href="/national/aisuggest"
            onClick={() => {
              setActiveTab("aisuggest");
            }}
          >
            <Button className="w-full text-lg">AI suggestions</Button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
