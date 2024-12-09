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
} from "lucide-react";
import Button from "./Button";

interface Work {
  id: number;
  title: string;
  description: string;
  status: "done" | "in-progress" | "to-do";
  department: string;
  estimatedTime?: number; // for to-do items
  actualTime?: number; // for completed items
  startTime: Date;
  completedTime?: Date;
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

// Update initial mock data
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
    startTime: new Date("2024-01-15T09:00:00"),
    completedTime: new Date("2024-01-15T19:00:00"),
  },
  {
    id: 2,
    title: "Shelter Setup",
    description: "Set up temporary shelters for displaced residents.",
    status: "in-progress",
    department: "Home Affairs",
    estimatedTime: 6,
    startTime: new Date("2024-01-16T10:00:00"),
  },
  {
    id: 3,
    title: "Food Distribution",
    description: "Distribute food supplies to affected areas.",
    status: "to-do",
    department: "Food",
    estimatedTime: 5,
    startTime: new Date("2024-01-17T11:00:00"),
  },
  {
    id: 4,
    title: "Water Supply Restoration",
    description: "Restore clean water supply to affected areas.",
    status: "to-do",
    department: "Water Resources",
    estimatedTime: 8,
    startTime: new Date("2024-01-18T11:00:00"),
  },
  {
    id: 5,
    title: "Public Information Campaign",
    description: "Inform the public about safety measures and updates.",
    status: "in-progress",
    department: "Information",
    estimatedTime: 3,
    startTime: new Date("2024-01-19T11:00:00"),
  },
  {
    id: 6,
    title: "Agricultural Damage Assessment",
    description: "Assess the damage to agricultural lands and crops.",
    status: "to-do",
    department: "Agriculture",
    estimatedTime: 4,
    startTime: new Date("2024-01-20T09:00:00"),
  },
  {
    id: 7,
    title: "Urban Infrastructure Inspection",
    description: "Inspect urban infrastructure for safety and damage.",
    status: "to-do",
    department: "Urban Affairs",
    estimatedTime: 7,
    startTime: new Date("2024-01-21T10:00:00"),
  },
  {
    id: 8,
    title: "Program Coordination",
    description: "Coordinate disaster response programs across departments.",
    status: "in-progress",
    department: "Programme Implementation",
    estimatedTime: 6,
    startTime: new Date("2024-01-22T11:00:00"),
  },
  {
    id: 9,
    title: "Medical Aid Distribution",
    description: "Distribute medical aid to affected areas.",
    status: "to-do",
    department: "Home Affairs",
    estimatedTime: 5,
    startTime: new Date("2024-01-23T12:00:00"),
  },
  {
    id: 10,
    title: "Transport Coordination",
    description: "Coordinate transport for evacuation and supply distribution.",
    status: "in-progress",
    department: "Transport",
    estimatedTime: 8,
    startTime: new Date("2024-01-24T13:00:00"),
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

const StatusColors = {
  done: {
    bg: "bg-emerald-50/50",
    text: "text-emerald-700",
    icon: "text-emerald-500",
    border: "border-emerald-200",
  },
  "in-progress": {
    bg: "bg-sky-50/50",
    text: "text-sky-700",
    icon: "text-sky-500",
    border: "border-sky-200",
  },
  "to-do": {
    bg: "bg-amber-50/50",
    text: "text-amber-700",
    icon: "text-amber-500",
    border: "border-amber-200",
  },
};

const ResponsePlan = () => {
  const [workTitle, setWorkTitle] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [works, setWorks] = useState<Work[]>(initialWorks);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [showDescription, setShowDescription] = useState<number | null>(null);

  // Updated sorting logic
  const sortedWorks = [...works].sort((a, b) => {
    const statusPriority = { done: 3, "in-progress": 2, "to-do": 1 };
    if (statusPriority[a.status] !== statusPriority[b.status]) {
      return statusPriority[b.status] - statusPriority[a.status];
    }
    // Sort completed items by completion time
    if (a.status === "done" && b.status === "done") {
      return (
        (b.completedTime?.getTime() || 0) - (a.completedTime?.getTime() || 0)
      );
    }
    // Sort other items by start time
    return b.startTime.getTime() - a.startTime.getTime();
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !workTitle.trim() ||
      !workDescription.trim() ||
      !selectedDepartment ||
      !estimatedTime
    ) {
      alert("Please fill all fields");
      return;
    }

    const newWork: Work = {
      id: works.length + 1,
      title: workTitle,
      description: workDescription,
      status: "to-do",
      department: selectedDepartment,
      estimatedTime: parseFloat(estimatedTime),
      startTime: new Date(), // Record current time when work is created
    };

    setWorks([...works, newWork]);
    setWorkTitle("");
    setWorkDescription("");
    setSelectedDepartment("");
    setEstimatedTime("");
  };

  const handleDeleteWork = (id: number) => {
    setWorks(works.filter((work) => work.id !== id));
  };

  // Updated description popup with time information
  const DescriptionPopup = ({ work }: { work: Work }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full space-y-4">
        <h3 className="font-bold text-lg">Work Details</h3>
        <div className="space-y-2">
          <p className="text-neutral-700">{work.description}</p>
          <div className="text-sm text-neutral-500 space-y-1">
            <p>Started: {work.startTime.toLocaleString()}</p>
            {work.status === "done" && work.completedTime && (
              <p>Completed: {work.completedTime.toLocaleString()}</p>
            )}
            <p>
              {work.status === "done"
                ? `Time taken: ${work.actualTime}h`
                : `Estimated time: ${work.estimatedTime}h`}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowDescription(null)}
          className="mt-4 text-sky-600 hover:text-sky-700"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-neutral-50 h-full rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col">
      {showDescription !== null && (
        <DescriptionPopup work={works.find((w) => w.id === showDescription)!} />
      )}

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 max-h-[calc(5*6rem)] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-thumb:hover]:bg-black/20">
        {sortedWorks.map((work) => {
          const statusStyle = StatusColors[work.status];
          const StatusIcon = StatusIcons[work.department];

          return (
            <div
              key={work.id}
              className={`relative group cursor-pointer ${statusStyle.bg} ${statusStyle.border} border rounded-xl p-4 transition-all duration-500 hover:shadow-lg`}
              onMouseEnter={() => setHoveredWork(work.id)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <div className="relative flex items-center">
                <StatusIcon className={`mr-3 ${statusStyle.icon}`} size={20} />
                <div className="flex-grow">
                  <div className={`font-medium ${statusStyle.text}`}>
                    {work.title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1 flex items-center space-x-2">
                    <span>{work.department}</span>
                    <span>•</span>
                    <span>
                      {work.status === "done"
                        ? `Completed in ${work.actualTime}h`
                        : `${work.estimatedTime}h estimated`}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDescription(work.id);
                  }}
                  className="mr-3 text-neutral-400 hover:text-neutral-600"
                >
                  <Info size={18} />
                </button>
                <div
                  className={`capitalize font-semibold ${statusStyle.text} text-sm`}
                >
                  {work.status === "to-do"
                    ? "Upcoming"
                    : work.status.replace("-", " ")}
                </div>
                {hoveredWork === work.id && (
                  <button
                    onClick={() => handleDeleteWork(work.id)}
                    className="ml-3 text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Updated Form Section */}
      <div className="bg-white border-t border-neutral-200 px-6 py-4 mt-auto">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="flex-grow space-y-2">
              <input
                type="text"
                value={workTitle}
                onChange={(e) => setWorkTitle(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none hover:border-sky-300 transition-all duration-300 text-neutral-700 placeholder-neutral-400"
                placeholder="Work Title"
              />
              <textarea
                value={workDescription}
                onChange={(e) => setWorkDescription(e.target.value)}
                rows={1}
                className="w-full border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none hover:border-sky-300 transition-all duration-300 resize-none text-neutral-700 placeholder-neutral-400 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-thumb:hover]:bg-black/20"
                placeholder="Describe what work to be done..."
              />
            </div>
            <div className="w-1/3 space-y-2">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg p-3 appearance-none focus:ring-2 focus:ring-sky-500 focus:outline-none hover:border-sky-300 transition-all duration-300 text-neutral-700"
              >
                <option value="">Ministry</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <input
                type="number"
                step="0.5"
                min="0.5"
                value={estimatedTime}
                onChange={(e) => setEstimatedTime(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none hover:border-sky-300 transition-all duration-300 text-neutral-700 placeholder-neutral-400"
                placeholder="Estimated hours"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button className=" py-3 rounded-lg font-semibold">
              Add in Plan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResponsePlan;
