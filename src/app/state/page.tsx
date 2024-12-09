"use client";
import Sidebar from "@/components/Sidebar";
import ResponsePlan from "@/components/ResponsePlan";
import React, { useState } from "react";

const StatePage = () => {
  const [activeTab, setActiveTab] = useState<"response" | "situation">(
    "response"
  );

  return (
    <>
      <Sidebar role="national" />
      <div className="flex-1 sm:ml-64">
        <div className="h-[8vh] w-full bg-yellow-300 text-black font-semibold flex items-center px-4">
          State Dashboard
        </div>
        <div className="content h-[92vh] flex">
          <div className="w-[50%] bg-red-300 p-4 font-medium">Map Area</div>
          <div className="w-[50%] bg-white p-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
              {/* Toggle Header */}
              <div className="flex space-x-8 border-b border-neutral-200 mb-4">
                <button
                  onClick={() => setActiveTab("response")}
                  className={`pb-4 px-2 text-lg font-medium transition-all duration-300 ${
                    activeTab === "response"
                      ? "text-sky-600 border-b-2 border-sky-600"
                      : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  Response Plan
                </button>
                <button
                  onClick={() => setActiveTab("situation")}
                  className={`pb-4 px-2 text-lg font-medium transition-all duration-300 ${
                    activeTab === "situation"
                      ? "text-sky-600 border-b-2 border-sky-600"
                      : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  Situation Report
                </button>
              </div>

              {/* Content Area */}
              <div className="h-[85vh]">
                {activeTab === "response" ? (
                  <ResponsePlan />
                ) : (
                  <div className="bg-neutral-50 h-full rounded-2xl shadow-2xl p-2 border border-neutral-200">
                    <h3 className="text-xl font-semibold text-neutral-700">
                      Situation Report
                    </h3>
                    {/* Add your Situation Report component here */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatePage;
