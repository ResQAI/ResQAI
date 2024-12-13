"use client";
import ResponsePlan from "@/components/ResponsePlan";
import StateDisasterList from "@/components/State/StateDisasterList";
import React, { useState } from "react";
import { MdTaskAlt } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import PreviousReports from "@/components/PreviousReports";

const StatePage = () => {
  const [activeTab, setActiveTab] = useState<"response" | "situation">(
    "response"
  );

  return (
    <div className="content min-h-[92vh] flex pt-5">
      <div className="w-1/2 flex-1 p-4 font-medium">
        <StateDisasterList />
      </div>
      <div className="w-1/2 flex-1 bg-white">
        <div className="bg-white h-full">
          {/* Toggle Header */}
          <div className="flex space-x-8 border-b border-neutral-200 mb-6 px-6 pt-6">
            <button
              onClick={() => setActiveTab("response")}
              className={`pb-4 px-2 text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "response"
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              <MdTaskAlt className="text-2xl" />
              Response Plan
            </button>
            <button
              onClick={() => setActiveTab("situation")}
              className={`pb-4 px-2 text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "situation"
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              <IoWarningOutline className="text-2xl" />
              Situation Report
            </button>
          </div>

          {/* Content Area */}
          <div className="max-h-[calc(100%-4rem)]">
            {activeTab === "response" ? <ResponsePlan /> : <PreviousReports />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatePage;
