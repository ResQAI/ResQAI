"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Trash2,
  Check,
  Clock,
  AlertTriangle,
  Info,
  Truck, // Transport
  Home, // Home Affairs
  Leaf, // Agriculture
  ClipboardList, // Programme Implementation
  Building, // Urban Affairs
  Speaker, // Information
  Utensils, // Food
  Droplet, // Water Resources
  LucideIcon, // Import the type for icons
  X,
} from "lucide-react";
import Button from "./Button";
import PlanForm from "./PlanForm";
import { usePathname } from "next/navigation";

export interface Work {
  id: number;
  title: string;
  description: string;
  status: "done" | "in-progress" | "to-do";
  department: string;
  estimatedTime?: number; // for to-do items
  actualTime?: number; // for completed items
  startTime: Date;
  completedTime?: Date;
  failed?: boolean;
}

const departments = [
  "Transport",
  "Home Affairs",
  "Agriculture",
  "Programme Implementation",
  "Urban Affairs",
  "Information",
  "Food",
  "Water Resources",
];

// Update initialWorks with start times starting from 7 hours before the current time
const initialWorks: Work[] = [
  {
    id: 1,
    title: "Road Clearance",
    description:
      "Clear debris from roads to ensure safe passage for emergency vehicles.",
    status: "done",
    department: "Transport",
    actualTime: 10,
    estimatedTime: 8,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    completedTime: new Date(),
    failed: false,
  },
  {
    id: 2,
    title: "Shelter Setup",
    description: "Set up temporary shelters for displaced residents.",
    status: "in-progress",
    department: "Home Affairs",
    estimatedTime: 6,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 10), // 10 hours ago
    failed: true,
  },
  {
    id: 3,
    title: "Food Distribution",
    description: "Distribute food supplies to affected areas.",
    status: "to-do",
    department: "Food",
    estimatedTime: 5,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 7), // 7 hours ago
    failed: false,
  },
  {
    id: 4,
    title: "Water Supply Restoration",
    description: "Restore clean water supply to affected areas.",
    status: "to-do",
    department: "Water Resources",
    estimatedTime: 8,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    failed: false,
  },
  {
    id: 5,
    title: "Public Information Campaign",
    description: "Inform the public about safety measures and updates.",
    status: "in-progress",
    department: "Information",
    estimatedTime: 3,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    failed: false,
  },
  {
    id: 6,
    title: "Agricultural Damage Assessment",
    description: "Assess the damage to agricultural lands and crops.",
    status: "to-do",
    department: "Agriculture",
    estimatedTime: 4,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    failed: false,
  },
  {
    id: 7,
    title: "Urban Infrastructure Inspection",
    description: "Inspect urban infrastructure for safety and damage.",
    status: "to-do",
    department: "Urban Affairs",
    estimatedTime: 7,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    failed: false,
  },
  {
    id: 8,
    title: "Program Coordination",
    description: "Coordinate disaster response programs across departments.",
    status: "in-progress",
    department: "Programme Implementation",
    estimatedTime: 6,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    failed: false,
  },
  {
    id: 9,
    title: "Medical Aid Distribution",
    description: "Distribute medical aid to affected areas.",
    status: "to-do",
    department: "Home Affairs",
    estimatedTime: 5,
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1 hour ago
    failed: false,
  },
  {
    id: 10,
    title: "Transport Coordination",
    description: "Coordinate transport for evacuation and supply distribution.",
    status: "in-progress",
    department: "Transport",
    estimatedTime: 8,
    startTime: new Date(), // Now
    failed: false,
  },
];

const StatusIcons: { [key: string]: LucideIcon } = {
  Transport: Truck,
  "Home Affairs": Home,
  Agriculture: Leaf,
  "Programme Implementation": ClipboardList,
  "Urban Affairs": Building,
  Information: Speaker,
  Food: Utensils,
  "Water Resources": Droplet,
};

// Update StatusColors object
const StatusColors = {
  done: {
    bg: "bg-[#90EE90]", // Light green for completed tasks
    text: "text-emerald-700",
    icon: "text-emerald-500",
    border: "border-emerald-200",
  },
  "in-progress": {
    bg: "bg-[#FFFACD]", // Very light blue for ongoing tasks
    text: "text-sky-700",
    icon: "text-sky-500",
    border: "border-sky-200",
  },
  "to-do": {
    bg: "bg-[#87CEFA]", // Light orange for upcoming tasks
    text: "text-amber-700",
    icon: "text-amber-500",
    border: "border-amber-200",
  },
};

const ResponsePlan = () => {
  const [works, setWorks] = useState<Work[]>(initialWorks);
  const [selectedTask, setSelectedTask] = useState<Work | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Updated sorting logic
  const sortedWorks = [...works].sort((a, b) => {
    const statusPriority = { done: 3, "in-progress": 2, "to-do": 1 };
    if (statusPriority[a.status] !== statusPriority[b.status]) {
      return statusPriority[b.status] - statusPriority[a.status];
    }
    // Sort all tasks (done, in-progress, to-do) by start time (oldest first)
    return a.startTime.getTime() - b.startTime.getTime();
  });

  const handleAddWork = (newWork: Omit<Work, "id" | "status">) => {
    const work: Work = {
      ...newWork,
      id: works.length + 1,
      status: "to-do",
    };
    setWorks([...works, work]);
  };

  const handleDeleteWork = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent triggering the task detail view
    setWorks(works.filter((work) => work.id !== id));
  };

  const handleTaskClick = (e: React.MouseEvent, work: Work) => {
    e.preventDefault();
    setSelectedTask(work);
  };

  const handleCloseDetail = () => {
    setSelectedTask(null);
  };

  // Add utility function to check if task is late
  const isTaskLate = (work: Work) => {
    if (work.status === "done") return false;
    const currentTime = new Date().getTime();
    const endTime = new Date(
      work.startTime.getTime() + (work.estimatedTime || 0) * 60 * 60 * 1000
    ).getTime();
    return currentTime > endTime;
  };

  let isDepartment = usePathname().includes("department");

  return (
    <div className="bg-neutral-50 h-full rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col max-h-[1400px] mx-auto mb-[5rem]">
      {/* Timeline container with relative positioning */}
      <div className="relative overflow-hidden h-[calc(100vh-20rem)] min-h-[500px]">
        {/* Task Detail Overlay - Moved inside timeline container */}
        {selectedTask && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl p-8 max-w-2xl w-[90%] mx-4 relative border border-gray-100">
              <button
                onClick={handleCloseDetail}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="text-2xl font-bold mb-4 text-gray-800">
                {selectedTask.title}{" "}
                {isTaskLate(selectedTask) && !selectedTask.failed && (
                  <span className="text-sm text-red-600"> (Delay)</span>
                )}
                {selectedTask.failed && (
                  <span className="text-sm text-red-600"> (Failed)</span>
                )}
              </div>
              <p className="text-gray-800 mb-1 leading-relaxed">
                <span className="font-bold">Description - </span>
                {selectedTask.description}
              </p>
              {selectedTask.status === "in-progress" && (
                <div className="mb-4 font-bold">
                  Current Progress -
                  <span className="font-normal">
                    The team is cleaning debris
                  </span>
                </div>
              )}
              <div className="grid grid-cols-2 gap-6 text-md">
                <div className="space-y-1">
                  <span className="font-semibold text-gray-800 block">
                    Department
                  </span>
                  <span className="text-gray-800">
                    {selectedTask.department}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-gray-800 block">
                    Status
                  </span>
                  <span className="text-gray-800">{selectedTask.status}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-gray-800 block">
                    Start Time
                  </span>
                  <span className="text-gray-800">
                    {selectedTask.startTime.toLocaleString()}
                  </span>
                </div>
                {selectedTask.status === "done" && (
                  <div className="space-y-1">
                    <span className="font-semibold text-gray-800 block">
                      End Time
                    </span>
                    <span className="text-gray-800">
                      {selectedTask.completedTime?.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="space-y-1">
                  <span className="font-semibold text-gray-800 block">
                    Estimated Time
                  </span>
                  <span className="text-gray-800">
                    {selectedTask.estimatedTime}h
                  </span>
                </div>
                {selectedTask.status === "done" && (
                  <div className="space-y-1">
                    <span className="font-semibold text-gray-800 block">
                      Actual Time
                    </span>
                    <span className="text-gray-800">
                      {selectedTask.actualTime}h
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Timeline content - Remove blur effect since we're using backdrop-blur */}
        <div className="absolute top-0 left-[48.4%] w-0.5 h-full bg-blue-700 transform -translate-x-1/2 pointer-events-none" />
        {/* Scrollable content wrapper */}
        <div className="absolute inset-0 overflow-y-auto">
          {/* Content container with padding */}
          <div className="relative px-8 py-4">
            <div className="space-y-8">
              {sortedWorks.map((work, index) => {
                const isEven = index % 2 === 0;
                const StatusIcon = StatusIcons[work.department];

                return (
                  <div
                    key={work.id}
                    className="flex items-center relative mb-8"
                    onClick={(e) => handleTaskClick(e, work)}
                    onMouseEnter={() => setHoveredId(work.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Left side with increased width */}
                    <div
                      className={`w-[50%] ${!isEven && "order-2"} 
                      ${isEven ? "text-right pr-12" : "pl-12"} relative`}
                    >
                      <div>
                        {/* Add Delay text below the div for late tasks */}
                        {!work.failed && isTaskLate(work) && (
                          <div className="text-md text-rose-600 mb-2 mx-5 font-semibold">
                            Delay <Clock size={16} className="inline ml-2" />
                          </div>
                        )}
                        <div
                          className={`p-4 rounded-lg border ${
                            work.failed
                              ? "border-red-400 bg-red-300"
                              : `${StatusColors[work.status].bg} ${
                                  StatusColors[work.status].border
                                }`
                          } shadow-sm hover:shadow-md transition-shadow duration-300 relative cursor-pointer`}
                        >
                          {/* Ministry Icon */}
                          <div className="absolute top-4 left-4">
                            <StatusIcon className="text-gray-700" size={18} />
                          </div>

                          {/* Delete button - moved to top right */}
                          {hoveredId === work.id && (
                            <div
                              className="absolute -top-2 -right-2 cursor-pointer bg-white p-1.5 rounded-full shadow-md hover:bg-red-100 transition-colors z-10"
                              onClick={(e) => handleDeleteWork(e, work.id)}
                            >
                              <X size={14} className="text-red-600" />
                            </div>
                          )}

                          {/* Content with padding for icon */}
                          <div className="pl-8">
                            <p className="font-2xl font-bold text-neutral-800">
                              {work.title}
                            </p>
                            <p className="text-xs text-gray-700">
                              {work.status === "done"
                                ? `Completed in ${work.actualTime}h`
                                : work.status === "in-progress"
                                ? "In Progress"
                                : `Estimated: ${work.estimatedTime}h`}
                            </p>
                            <div className="text-sm font-semibold text-gray-700 mt-2">
                              {work.department}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-[49.5%] -translate-x-1/2 z-10">
                      <div
                        className={`w-3 h-3 rounded-full border-2 border-white ${
                          work.failed ? "bg-red-600" : "bg-blue-700"
                        }`}
                      />
                    </div>

                    {/* Right side with increased width */}
                    <div
                      className={`w-[48%] ${isEven && "order-2"} 
                      ${isEven ? "pl-12" : "pr-12"} text-sm text-black"
                      ${isEven ? "text-left" : "text-right"}`}
                    >
                      {work.startTime.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {!isDepartment && <PlanForm onSubmit={handleAddWork} />}
    </div>
  );
};

export default ResponsePlan;
