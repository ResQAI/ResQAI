import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateOrAny } from "@reduxjs/toolkit";
import DisasterModal from "./DisasterModal";
import NationalHomeToggle from "./National/NationalHomeToggle";
import { setActiveDisaster } from "@/store/disasterSlice";

interface TagItem {
  label: string;
  type?: "status" | "level" | "custom";
}

interface DisasterDetails {
  location: string;
  severity: string;
  level: string;
  areaSize: string;
  epicenter?: { lat: number; lng: number };
  peopleAffected: number;
  casualties: number;
  estimatedLoss: number;
  id: string;
  responsePlans?: any[];
  situationshipReports?: any[];
  name?: string;
}

interface DisasterState {
  disaster: DisasterDetails;
  responsePlan?: any[];
  situationReports?: any[];
}

interface DisasterCardProps {
  name: string;
  area: string;
  tags?: TagItem[];
  disasterDetails: DisasterDetails;
  className?: string;
  setDisaster?: (disaster: any) => void;
}

const getTagColor = (tag: TagItem) => {
  const label = tag.label.toLowerCase();

  if (tag.type === "status") {
    if (label.includes("upcoming")) return "bg-yellow-100 text-yellow-800";
    if (label.includes("ongoing")) return "bg-red-100 text-red-800";
    if (label.includes("resolved")) return "bg-green-100 text-green-800";
  }

  if (tag.type === "level") {
    if (label.includes("1")) return "bg-green-100 text-green-800";
    if (label.includes("2")) return "bg-yellow-100 text-yellow-800";
    if (label.includes("3")) return "bg-red-100 text-red-800";
  }

  if (label.includes("critical")) return "bg-red-100 text-red-800";
  if (label.includes("warning")) return "bg-yellow-100 text-yellow-800";
  if (label.includes("info")) return "bg-blue-100 text-blue-800";

  return "bg-gray-100 text-gray-800";
};

const DisasterCard: React.FC<DisasterCardProps> = ({
  name,
  area,
  tags = [],
  disasterDetails,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const dispatch = useDispatch();
  const activeDisaster = useSelector((state: RootStateOrAny) => state.activeDisaster) as DisasterState;

  const setCurrentDisaster = async () => {
    dispatch(
      setActiveDisaster({
        disaster: { ...disasterDetails, name },
        responsePlan: disasterDetails.responsePlans,
        situationReports: disasterDetails.situationshipReports,
      })
    );
  };

  const handleActionCenter = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await setCurrentDisaster();
    setIsToggleOpen(true);
  };

  return (
    <>
      <div
        className={`w-full bg-white border border-gray-200 rounded-lg shadow-md 
          h-full flex flex-col p-4 sm:p-6 ${className} cursor-pointer
          hover:shadow-lg transition-shadow duration-200`}
        onClick={setCurrentDisaster}
      >
        {/* Content Container */}
        <div className="flex flex-col h-full">
          {/* Main Content Area */}
          <div className="flex-grow">
            {/* Header with Title and Tags */}
            <div className="space-y-2 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h2 className="text-lg font-bold text-gray-900 line-clamp-2">{name}</h2>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:justify-end">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap
                          ${getTagColor(tag)}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="line-clamp-1">{area}</span>
            </p>
          </div>

          {/* Buttons Container - Fixed at bottom */}
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 
                focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 
                py-2 transition-colors duration-200"
            >
              View More Details
            </button>
            <button
              onClick={handleActionCenter}
              className="w-full text-white bg-blue-600 hover:bg-blue-700 
                focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm 
                px-4 py-2 transition-colors duration-200"
            >
              Action Center
            </button>
          </div>
        </div>
      </div>

      {isToggleOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="w-80 bg-white h-full shadow-lg">
            <NationalHomeToggle
              isOpen={isToggleOpen}
              onClose={() => setIsToggleOpen(false)}
              disaster={activeDisaster}
            />
          </div>
        </div>
      )}

      <DisasterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        disaster={{ name, ...disasterDetails }}
      />
    </>
  );
};

export default DisasterCard;