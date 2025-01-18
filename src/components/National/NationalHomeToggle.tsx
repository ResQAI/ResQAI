"use client";
import React, { useState, useEffect } from "react";
import { FileText, Clipboard, Package, X } from "lucide-react";
import ResponsePlan from "@/components/ResponsePlan";
import SituationReport from "@/components/SituationReport";
import ResourceRequestManagement from "./NationalResourceManagement";
import PreviousReports from "../PreviousReports";

interface NationalHomeToggleAreaProps {
  isOpen: boolean;
  onClose: () => void;
}

const NationalHomeToggleArea: React.FC<NationalHomeToggleAreaProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState("responsePlan");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const tabs = [
    {
      id: "responsePlan",
      label: "Response Plan",
      icon: <Clipboard className="w-5 h-5" />,
      component: <ResponsePlan />,
    },
    {
      id: "resourceRequest",
      label: "Resource Request",
      icon: <Package className="w-5 h-5" />,
      component: <ResourceRequestManagement />,
    },
    {
      id: "situationReports",
      label: "Situation Reports",
      icon: <FileText className="w-5 h-5" />,
      component: <PreviousReports />,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div
        className={`w-full md:w-[600px] bg-white h-screen flex flex-col shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-2 flex items-center justify-between border-b">
          <div className="flex justify-center w-full">
            <h2 className="text-lg font-semibold">Action Center</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 border-b border-gray-200 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-2 px-2 flex flex-col items-center justify-center space-y-1 transition-all duration-300 group
                ${activeTab === tab.id ? "bg-gray-50" : "hover:bg-gray-50"}`}
            >
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
              <div
                className={`flex flex-col items-center gap-1.5
                  ${
                    activeTab === tab.id
                      ? "text-blue-600"
                      : "text-gray-600 group-hover:text-blue-500"
                  }`}
              >
                {tab.icon}
                <span className="font-medium text-xs sm:text-sm whitespace-nowrap">
                  {tab.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`h-full transition-all duration-300 ease-in-out
                ${activeTab === tab.id ? "block" : "hidden"}`}
            >
              <div className="p-4">{tab.component}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NationalHomeToggleArea;
