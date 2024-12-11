import React from "react";

interface TagItem {
  label: string;
  type?: "status" | "level" | "custom";
}

interface DisasterCardProps {
  name: string;
  area: string;
  tags?: TagItem[];
  onViewMore?: () => void;
  className?: string;
}

const getTagColor = (tag: TagItem) => {
  const label = tag.label.toLowerCase();

  // Status colors
  if (tag.type === "status") {
    if (label.includes("upcoming")) return "bg-yellow-100 text-yellow-800";
    if (label.includes("ongoing")) return "bg-red-100 text-red-800";
    if (label.includes("resolved")) return "bg-green-100 text-green-800";
  }

  // Disaster level colors
  if (tag.type === "level") {
    if (label.includes("1")) return "bg-green-100 text-green-800";
    if (label.includes("2")) return "bg-yellow-100 text-yellow-800";
    if (label.includes("3")) return "bg-red-100 text-red-800";
  }

  // Custom tags
  if (label.includes("critical")) return "bg-red-100 text-red-800";
  if (label.includes("warning")) return "bg-yellow-100 text-yellow-800";
  if (label.includes("info")) return "bg-blue-100 text-blue-800";

  return "bg-gray-100 text-gray-800";
};

const DisasterCard: React.FC<DisasterCardProps> = ({
  name,
  area,
  tags = [],
  onViewMore,
  className = "",
}) => {
  return (
    <div
      className={`
      w-[280px]
      max-w-sm 
      bg-white 
      border 
      border-gray-200 
      rounded-lg 
      shadow-md 
      p-6 
      space-y-4
      ${className}
    `}
    >
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h2 className="text-md font-bold text-gray-900 flex-grow">{name}</h2>
          {/* Tags Container */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-end">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`
                    px-2 
                    py-0.5 
                    rounded 
                    text-xs 
                    font-medium 
                    ${getTagColor(tag)}
                  `}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {area}
          </p>
        </div>
        {onViewMore && (
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={onViewMore}
              className="
                w-full 
                text-blue-600 
                hover:text-blue-700 
                hover:bg-blue-50 
                focus:ring-2 
                focus:ring-blue-300 
                font-medium 
                rounded-lg 
                text-sm 
                px-5 
                py-2.5 
                text-center
              "
            >
              View More Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisasterCard;
