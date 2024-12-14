"use client";
import React, { use, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { RootStateOrAny } from "react-redux";
import { init } from "next/dist/compiled/webpack/webpack";
import { setActiveDisaster } from "@/store/disasterSlice";
import { useDispatch } from "react-redux";
import { editResponsePlan } from "@/store/disasterSlice";
import { baseUrl } from "@/constants";

export interface Work {
  id: string;
  name: string;
  description: string;
  status: "completed" | "in-progress" | "to-do";
  departmentConcerned: string;
  estimatedTime?: number; // for to-do items
  actualTime?: number; // for completed items
  startTime: string;
  completedTime?: Date;
  isFailed?: boolean;
  statusUpdates?: {
    timestamp: string;
    currentStatus: string;
    personnelCount: number;
    additionalTimeNeeded: number;
    resources: string[];
    departments: string[];
    additionalResources: string[];
  }[];
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
  completed: {
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
  pending: {
    bg: "bg-[#87CEFA]", // Light orange for upcoming tasks
    text: "text-amber-700",
    icon: "text-amber-500",
    border: "border-amber-200",
  },
};

const ResponsePlan = () => {
  const activeDisaster = useSelector(
    (state: RootStateOrAny) => state.activeDisaster
  );

  const works = activeDisaster.responsePlan;

  const dispatch = useDispatch();
  const [selectedTask, setSelectedTask] = useState<Work | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Updated sorting logic
  const sortedWorks =
    works != null &&
    works.length != 0 &&
    [...works].sort((a, b) => {
      const statusPriority = { completed: 3, "in-progress": 2, pending: 1 };
      if (statusPriority[a.status] !== statusPriority[b.status]) {
        return statusPriority[b.status] - statusPriority[a.status];
      }
      // Convert startTime from string to Date object
      const startTimeA = new Date(a.startTime).getTime();
      const startTimeB = new Date(b.startTime).getTime();
      // Sort all tasks (done, in-progress, to-do) by start time (oldest first)
      return startTimeA - startTimeB;
    });

  const handleAddWork = async (newWork: Omit<Work, "id" | "status">) => {
    const work = {
      ...newWork,
      status: "pending",
      isFailed: false,
      statusUpdates: [],
      disasterId: activeDisaster.disaster.id,
      startTime: new Date(newWork.startTime).toISOString(), // Ensure startTime is serialized
    };
    fetch(`${baseUrl}/api/nationalDisasterCommittee/responsePlan`, {
      method: "POST",
      body: JSON.stringify(work),
    });

    dispatch(editResponsePlan([...works, work]));
  };

  const handleDeleteWork = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent triggering the task detail view
    fetch(`${baseUrl}/api/nationalDisasterCommittee/responsePlan`, {
      method: "DELETE",
      body: JSON.stringify({ id, disasterId: activeDisaster.disaster.id }),
    });
    dispatch(editResponsePlan(works.filter((work) => work.id !== id)));
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
    if (work.status === "completed") return false;
    const currentTime = new Date().getTime();
    const endTime = new Date(
      new Date(work.startTime).getTime() +
        (work.estimatedTime || 0) * 60 * 60 * 1000
    ).getTime();
    return currentTime > endTime;
  };

  // Add utility function to get the latest status update
  const getLastStatusUpdate = (work: Work) => {
    // Assuming work has a statusUpdates array
    return work.statusUpdates?.length > 0
      ? work.statusUpdates[work.statusUpdates.length - 1]
      : null;
  };

  let isDepartment = usePathname().includes("department");

  return (
    <div className="bg-neutral-50 h-full rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col max-h-[1400px] mx-auto mb-[5rem] relative">
      {selectedTask && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm overflow-scroll">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl p-6 max-w-md w-[90%] mx-4 relative border border-gray-100">
            <button
              onClick={handleCloseDetail}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="text-2xl font-bold mb-4 text-gray-800">
              {selectedTask.name}{" "}
              {isTaskLate(selectedTask) && !selectedTask.isFailed && (
                <span className="text-sm text-red-600"> (Delay)</span>
              )}
              {selectedTask.isFailed && (
                <span className="text-sm text-red-600"> (Failed)</span>
              )}
            </div>
            <p className="text-gray-800 mb-1 leading-relaxed">
              <span className="font-bold">Description - </span>
              {selectedTask.description}
            </p>
            <div className="grid grid-cols-2 gap-6 text-md">
              <div className="space-y-1">
                <span className="font-semibold text-gray-800 block">
                  Department
                </span>
                <span className="text-gray-800">
                  {selectedTask.departmentConcerned}
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
                  {new Date(selectedTask.startTime).toLocaleString()}
                </span>
              </div>
              {selectedTask.status === "completed" && (
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
              {selectedTask.status === "completed" && (
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
            {/* Last Status Update */}
            {getLastStatusUpdate(selectedTask) && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  Latest Status Update (
                  {new Date(
                    getLastStatusUpdate(selectedTask).timestamp
                  ).toLocaleString()}
                  )
                </h4>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium">Current Status:</span>{" "}
                    {getLastStatusUpdate(selectedTask).currentStatus}
                  </p>
                  <p>
                    <span className="font-medium">Personnel Involved:</span>{" "}
                    {getLastStatusUpdate(selectedTask).personnelCount}
                  </p>
                  <p>
                    <span className="font-medium">Additional Time Needed:</span>{" "}
                    {getLastStatusUpdate(selectedTask).additionalTimeNeeded}{" "}
                    hours
                  </p>
                  {getLastStatusUpdate(selectedTask).resources.length > 0 && (
                    <div>
                      <p className="font-medium mb-1">Resources Being Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {getLastStatusUpdate(selectedTask).resources.map(
                          (resource, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                              {resource}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  {getLastStatusUpdate(selectedTask).departments.length > 0 && (
                    <div>
                      <p className="font-medium mb-1">
                        Other Departments Involved:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {getLastStatusUpdate(selectedTask).departments.map(
                          (dept, index) => (
                            <span
                              key={index}
                              className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm"
                            >
                              {dept}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  {getLastStatusUpdate(selectedTask).additionalResources
                    .length > 0 && (
                    <div>
                      <p className="font-medium mb-1">
                        Additional Resources Needed:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {getLastStatusUpdate(
                          selectedTask
                        ).additionalResources.map((resource, index) => (
                          <span
                            key={index}
                            className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm"
                          >
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {works != null && works.length != 0 ? (
        <div className="relative overflow-hidden h-[calc(100vh-20rem)] min-h-[500px]">
          {/* Task Detail Overlay - Moved inside timeline container */}

          {/* Timeline content - Remove blur effect since we're using backdrop-blur */}
          <div className="absolute top-0 left-[48%] w-0.5 h-full bg-blue-700 transform -translate-x-1/2 pointer-events-none" />
          {/* Scrollable content wrapper */}
          <div className="absolute inset-0 overflow-y-auto">
            {/* Content container with padding */}
            <div className="relative px-8 py-4">
              <div className="space-y-8">
                {sortedWorks.map((work, index) => {
                  const isEven = index % 2 === 0;
                  const StatusIcon = StatusIcons[work.departmentConcerned];

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
                          {!work.isFailed && isTaskLate(work) && (
                            <div className="text-md text-rose-600 mb-2 mx-5 font-semibold">
                              Delay <Clock size={16} className="inline ml-2" />
                            </div>
                          )}
                          <div
                            className={`p-4 rounded-lg border ${
                              work.isFailed
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
                                {work.name}
                              </p>
                              <p className="text-xs text-gray-700">
                                {work.status === "completed"
                                  ? `Completed in ${work.actualTime}h`
                                  : work.status === "in-progress"
                                  ? "In Progress"
                                  : `Estimated: ${work.estimatedTime}h`}
                              </p>
                              <div className="text-sm font-semibold text-gray-700 mt-2">
                                {work.departmentConcerned}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Node */}
                      <div className="absolute left-[49.5%] -translate-x-1/2 z-10">
                        <div
                          className={`w-3 h-3 rounded-full border-2 border-white ${
                            work.isFailed ? "bg-red-600" : "bg-blue-700"
                          }`}
                        />
                      </div>

                      {/* Right side with increased width */}
                      <div
                        className={`w-[48%] ${isEven && "order-2"} 
                        ${isEven ? "pl-12" : "pr-12"} text-sm text-black"
                        ${isEven ? "text-left" : "text-right"}`}
                      >
                        {new Date(work.startTime).toLocaleDateString("en-US", {
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
      ) : (
        <div className="text-center py-10 text-gray-500">No Results.</div>
      )}
      {!isDepartment && <PlanForm onSubmit={handleAddWork} />}
    </div>
  );
};

export default ResponsePlan;
