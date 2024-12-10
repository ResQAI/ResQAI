import React, { useState, useMemo } from "react";
import DisasterCard from "./ShortDisasterInfo";
import DisasterMap from "./DisasterMap"; // Assuming this is your map component

export interface DisasterItem {
  name: string;
  area: string;
  tags?: { label: string; type?: "status" | "level" | "custom" }[];
}

interface DisasterListProps {
  title: string;
  disasters: DisasterItem[];
  lat: number;
  lng: number;
  zoom: number;

}

const DisasterList: React.FC<DisasterListProps> = ({ title, disasters,lat,lng,zoom }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapView, setMapView] = useState({ lat: 20.5937, lng: 78.9629, zoom: 5 });

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        
      </div>

      <div className="relative mb-6 flex justify-between mr-10">
      <select
          value={selectedFilter || ""}
          onChange={(e) => setSelectedFilter(e.target.value || null)}
          className="
            block 
       
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

        <button
          onClick={openModal}
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
            ml-10
          "
        >
          View Map
        </button>
      </div>

      {filteredDisasters.length > 0 ? (
        <div className="md:flex md:flex-wrap gap-4 item-center justify-center">
          {filteredDisasters.map((disaster, index) => (
            <DisasterCard
              key={index}
              name={disaster.name}
              area={disaster.area}
              tags={disaster.tags}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No disasters match the selected filter.
        </div>
      )}

      {isModalOpen && (
        <div
          className="
            fixed 
            inset-0 
            bg-gray-600 
            bg-opacity-50 
            flex 
            items-center 
            justify-center
            z-50
          "
        >
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-11/12 max-w-4xl">
            <button
              onClick={closeModal}
              className="
                absolute 
                top-2 
                right-2 
                text-gray-500 
                hover:text-gray-700 
                focus:outline-none
              "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <DisasterMap lat={lat} lng={lng} zoom={zoom} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisasterList;
