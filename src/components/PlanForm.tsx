import React, { useState } from "react";
import Button from "./Button";
import { Work } from "./ResponsePlan";

interface PlanFormProps {
  onSubmit: (newWork: Omit<Work, "id" | "status">) => void;
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

const PlanForm: React.FC<PlanFormProps> = ({ onSubmit }) => {
  const [workTitle, setWorkTitle] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");

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

    onSubmit({
      name: workTitle,
      description: workDescription,
      departmentConcerned: selectedDepartment,
      estimatedTime: parseFloat(estimatedTime),
      startTime: new Date(),
    });

    setWorkTitle("");
    setWorkDescription("");
    setSelectedDepartment("");
    setEstimatedTime("");
  };

  return (
    <div className="bg-white border-t border-neutral-200 px-8 py-4 mt-auto min-h-[230px]">
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

        <div className="flex flex-col items-center">
          <Button className="py-3 rounded-lg font-semibold">Add in Plan</Button>
          <div className="flex items-center gap-4 mt-7 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-300 border border-red-400" />
              <span className="text-xs text-gray-800 font-medium">Failed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#90EE90] border border-emerald-200" />
              <span className="text-xs text-gray-800 font-medium">
                Completed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#FFFACD] border border-sky-200" />
              <span className="text-xs text-gray-800 font-medium">Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#87CEFA] border border-amber-200" />
              <span className="text-xs text-gray-800 font-medium">
                Upcoming
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlanForm;
