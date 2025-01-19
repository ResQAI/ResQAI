"use client";
import React, { useRef, useState, useEffect } from "react";
import { CloseIcon } from "../ui/icons";
import useClickOutside from "@/hooks/useClickOutside";
import {
  AlertTriangleIcon,
  GitPullRequestClosedIcon,
  HomeIcon,
  MessageSquareLockIcon,
  SendIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import Button from "../Button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("home");
  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const sidebarRef = useRef<HTMLDivElement>(null);

  // Add effect to prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isOpen]);

  const setActiveTabFunction = (id: string) => () => {
    setActiveTab(id);
    localStorage.setItem("activeTab", id);
  };

  useClickOutside(sidebarRef, onClose);

  const navigationItems = [
    { id: "home", name: "Home", icon: HomeIcon },
    { id: "profile", name: "Profile", icon: User2Icon },
    {
      id: "situationshipreport",
      name: "Situationship Report",
      icon: GitPullRequestClosedIcon,
    },
    { id: "sendnotification", name: "Send Notifications", icon: SendIcon },
    { id: "collaborate", name: "Collaborate", icon: MessageSquareLockIcon },
    {
      id: "incomingdisasterinfo",
      name: "Incoming Disaster",
      icon: AlertTriangleIcon,
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      style={{ touchAction: "none" }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
        style={{ touchAction: "none" }}
      />
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">
            <a
              href="/national/home"
              aria-label="logo"
              className="flex items-center space-x-2 astro-ES6RJE63 h-1 w-2 mr-3"
            >
              <p className="text-xl">ResQAI</p>
            </a>
          </h2>
          <button onClick={onClose} aria-label="Close sidebar">
            <CloseIcon />
          </button>
        </div>
        <div className="p-2">
          <div className="h-[90vh] px-3 flex flex-col justify-between overflow-y-auto">
            <ul className="space-y-8 font-medium">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/national/${item.id}`}
                    onClick={setActiveTabFunction(item.id)}
                    className={`flex my-5 items-center p-2 text-gray-900 rounded-lg  group ${
                      activeTab === item.id
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                    }`}
                  >
                    <item.icon size={16} />
                    <span className="ms-3 text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/national/aisuggest"
              onClick={() => {
                setActiveTab("aisuggest");
                localStorage.setItem("activeTab", "aisuggest");
              }}
            >
              <button className="text-sm mb-16 bg-blue-700 p-2 text-white rounded-lg w-full">
                AI suggestions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
