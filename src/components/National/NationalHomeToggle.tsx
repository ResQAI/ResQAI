"use client"
import React, { useState } from 'react';
import { 
  FileText, 
  Clipboard, 
  Package 
} from 'lucide-react';

import ResponsePlan from "@/components/ResponsePlan";
import SituationReport from "@/components/SituationReport";
import ResourceRequestManagement from './NationalResourceManagement';

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
    },
    { 
      id: 'resourceRequest', 
      label: 'Resource Request', 
      icon: <Package className="w-6 h-6" />,
      component: <ResourceRequestManagement />,
    }
  ];

  return (
    <div className="h-full w-full">
      {/* Tabs */}
      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative p-1 flex flex-col items-center justify-center space-y-1
              transition-all duration-300 group
              ${activeTab === tab.id 
                ? 'bg-white' 
                : 'hover:bg-gray-100'}
              
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

      {/* Content */}
      <div 
        className="relative p-8 min-h-[400px]" // Set a minimum height to prevent movement
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`
              absolute inset-0 transition-opacity duration-500
              ${activeTab === tab.id 
                ? 'opacity-100' 
                : 'opacity-0 pointer-events-none'}
            `}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NationalHomeToggleArea;
