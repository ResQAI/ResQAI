import React, { useState, useMemo } from "react";
import DisasterCard from "./ShortDisasterInfo";

interface DisasterItem {
  name: string;
  area: string;
  tags?: { label: string; type?: "status" | "level" | "custom" }[];
}

interface DisasterListProps {
  title: string;
  disasters: DisasterItem[];
  onOpenModal?: () => void;
}

const DisasterList: React.FC<DisasterListProps> = ({
  title,
  disasters,
  onOpenModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    disasters.forEach((disaster) => {
      disaster.tags?.forEach((tag) => tagSet.add(tag.label));
    });
    return Array.from(tagSet);
  }, [disasters]);
  const filteredDisasters = useMemo(() => {
    if (!selectedFilter) return disasters;
    return disasters.filter((disaster) =>
      disaster.tags?.some((tag) => tag.label === selectedFilter)
    );
  }, [disasters, selectedFilter]);
  return (
    <div className="container flex flex-wrap">
      <div className="flex gap-8 items-center mb-6 w-full">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={selectedFilter || ""}
              onChange={(e) => setSelectedFilter(e.target.value || null)}
              className="
                block 
                w-full 
                pl-3 
                pr-10 
                py-2 
                text-base 
                border 
                border-gray-300 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-blue-500 
                sm:text-sm 
                rounded-md
              "
            >
              <option value="">All Disasters</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div
              className="
              pointer-events-none 
              absolute 
              inset-y-0 
              right-0 
              flex 
              items-center 
              px-2 
              text-gray-700
            "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {onOpenModal && (
            <button
              onClick={onOpenModal}
              className="
                inline-flex 
                items-center 
                px-4 
                py-2 
                border 
                border-transparent 
                text-sm 
                font-medium 
                rounded-md 
                text-white 
                bg-blue-600 
                hover:bg-blue-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-offset-2 
                focus:ring-blue-500
              "
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              View Map
            </button>
          )}
        </div>
      </div>
      {filteredDisasters.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {filteredDisasters.map((disaster, index) => (
            <DisasterCard
              key={index}
              name={disaster.name}
              area={disaster.area}
              tags={disaster.tags}
              onViewMore={onOpenModal}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No disasters match the selected filter.
        </div>
      )}
    </div>
  );
};

export default DisasterList;
