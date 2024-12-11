"use client";
import ResponsePlan from "@/components/ResponsePlan";
import SituationReport from "@/components/SituationReport";
import React, { useState } from "react";
import { MdTaskAlt } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";
import DepartmentDisasterList from "@/components/Department/DepartmentDisasterList";
import Button from "@/components/Button";
import StatusUpdateModal from "@/components/StatusUpdateModal";

interface StatusUpdate {
  timestamp: Date;
  currentStatus: string;
  personnelCount: number;
  additionalTimeNeeded: number;
  resources: string[];
  departments: string[];
  additionalResources: string[];
}

const mockTasks = [
  {
    id: 1,
    title: "Emergency Response Setup",
    description: "Set up emergency response units in affected areas",
    startTime: new Date("2025-01-20T10:00:00"),
    estimatedTime: 180, // in minutes
    status: "pending",
    statusUpdates: [
      {
        timestamp: new Date("2024-01-19T12:30:00"),
        currentStatus: "25% of response units established",
        personnelCount: 15,
        additionalTimeNeeded: 4,
        resources: ["Ambulances", "Basic Supplies"],
        departments: ["Medical"],
        additionalResources: ["More vehicles needed"],
      },
      {
        timestamp: new Date("2024-01-19T15:30:00"),
        currentStatus: "50% of response units established",
        personnelCount: 25,
        additionalTimeNeeded: 2,
        resources: [
          "Ambulances",
          "Medical Supplies",
          "Communication Equipment",
        ],
        departments: ["Medical", "Police"],
        additionalResources: [
          "More paramedics needed",
          "Additional tents required",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Medical Camp Organization",
    description:
      "Establish medical camps in three critical locations for immediate healthcare support",
    startTime: new Date("2024-01-20T11:30:00"),
    estimatedTime: 240,
    status: "in-progress",
    statusUpdates: [],
  },
  {
    id: 3,
    title: "Supply Chain Coordination",
    description:
      "Coordinate relief material distribution and maintain supply chain for essential goods",
    startTime: new Date("2025-01-20T09:00:00"),
    estimatedTime: 360,
    status: "pending",
    statusUpdates: [],
  },
];

interface Task {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  estimatedTime: number;
  status: string;
  statusUpdates: StatusUpdate[];
}

const TaskCard = ({
  task,
  onTaskComplete,
}: {
  task: Task;
  onTaskComplete: (id: number) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deadline = new Date(
    task.startTime.getTime() + task.estimatedTime * 60000
  );
  const isDeadlinePassed = new Date() > deadline;

  // Get the latest status update
  const lastUpdate =
    task.statusUpdates?.length > 0
      ? task.statusUpdates[task.statusUpdates.length - 1]
      : undefined;

  return (
    <>
      <div
        className="bg-white p-8 rounded-lg mb-6 w-[60%] mx-auto
                    border border-gray-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    transition-all duration-300 ease-in-out
                    hover:border-gray-400 hover:scale-[1.02]"
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">{task.title}</h3>
          <div className="flex items-center text-red-500 bg-red-50 px-3 py-1 rounded-full">
            <BiErrorCircle className="mr-1 text-xl" />
            <span>Report Failure</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          {task.description}
        </p>
        <p className="text-gray-500 mb-6 font-medium flex items-center gap-2">
          Deadline: {deadline.toLocaleString()}
          {isDeadlinePassed && (
            <span className="text-red-500 font-semibold">
              (Deadline Passed)
            </span>
          )}
        </p>
        {lastUpdate && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Latest Status Update ({lastUpdate.timestamp.toLocaleString()})
            </h4>
            <div className="space-y-3 text-gray-600">
              <p>
                <span className="font-medium">Current Status:</span>{" "}
                {lastUpdate.currentStatus}
              </p>
              <p>
                <span className="font-medium">Personnel Involved:</span>{" "}
                {lastUpdate.personnelCount}
              </p>
              <p>
                <span className="font-medium">Additional Time Needed:</span>{" "}
                {lastUpdate.additionalTimeNeeded} hours
              </p>

              {lastUpdate.resources.length > 0 && (
                <div>
                  <p className="font-medium mb-1">Resources Being Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {lastUpdate.resources.map((resource, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {lastUpdate.departments.length > 0 && (
                <div>
                  <p className="font-medium mb-1">Departments Involved:</p>
                  <div className="flex flex-wrap gap-2">
                    {lastUpdate.departments.map((dept, index) => (
                      <span
                        key={index}
                        className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {lastUpdate.additionalResources.length > 0 && (
                <div>
                  <p className="font-medium mb-1">
                    Additional Resources Needed:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lastUpdate.additionalResources.map((resource, index) => (
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
        <div className="flex gap-4 mt-6">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-base font-medium
                     shadow-lg hover:shadow-blue-200/50 active:scale-[0.98]"
          >
            Update Status
          </Button>
          <Button
            onClick={() => onTaskComplete(task.id)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-base font-medium
                     shadow-lg hover:shadow-green-200/50 active:scale-[0.98]"
          >
            Submit Final Report
          </Button>
        </div>
      </div>
      <StatusUpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={task}
      />
    </>
  );
};

const DepartmentPage = () => {
  const [activeTab, setActiveTab] = useState<"response" | "situation">(
    "response"
  );
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleTaskComplete = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="content min-h-[92vh] flex pt-5 flex-wrap">
      <div className="w-1/2 flex-1 p-4 font-medium">
        <DepartmentDisasterList />
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
            {activeTab === "response" ? <ResponsePlan /> : <SituationReport />}
          </div>
        </div>
      </div>

      {/*Assigned Tasks*/}
      <div className="w-full p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Assigned Tasks
          </h1>
        </div>
        <div className="flex flex-col">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onTaskComplete={handleTaskComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
