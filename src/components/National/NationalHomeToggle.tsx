"use client"
import React, { useState } from 'react';
import { 

  FileText, 
  Clipboard 
} from 'lucide-react';

import ResponsePlan from "@/components/ResponsePlan";
import SituationReport from "@/components/SituationReport";

const NationalHomeToggleArea = () => {
  const [activeTab, setActiveTab] = useState('situationReport');

  const tabs = [
    { 
      id: 'situationReport', 
      label: 'Situation Report', 
      icon: <FileText className="w-6 h-6" />,
      component: <SituationReport />,
    },
    { 
      id: 'responsePlan', 
      label: 'Response Plan', 
      icon: <Clipboard className="w-6 h-6" />,
      component: <ResponsePlan />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        
        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative p-6 flex flex-col items-center justify-center space-y-2
                transition-all duration-300 group
                ${activeTab === tab.id 
                  ? 'bg-white shadow-lg' 
                  : 'hover:bg-gray-100'}
                transform hover:scale-105 active:scale-95
              `}
            >
              
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" />
              )}

              
              <div className={`
                flex flex-col items-center
                ${activeTab === tab.id 
                  ? 'text-blue-600' 
                  : 'text-gray-500 group-hover:text-gray-700'}
              `}>
                {tab.icon}
                <span className="font-semibold text-sm">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        
        <div className="p-8">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`
                transition-all duration-500 ease-in-out
                ${activeTab === tab.id 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4 hidden'}
              `}
            >
              {activeTab === tab.id && tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NationalHomeToggleArea;