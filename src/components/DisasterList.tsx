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
  disasters: any[];
  lat: number;
  lng: number;
  zoom: number;
}

const DisasterList: React.FC<DisasterListProps> = ({
  title,
  disasters,
  lat,
  lng,
  zoom,
  setDisaster,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapView, setMapView] = useState({
    lat: 20.5937,
    lng: 78.9629,
    zoom: 5,
  });

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
    <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">
          {title}
        </h1>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 items-stretch sm:items-center justify-center sm:justify-start">
        <select
          value={selectedFilter || ""}
          onChange={(e) => setSelectedFilter(e.target.value || null)}
          className="w-full sm:w-48 px-3 py-2 text-sm border border-gray-300 
            rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:border-blue-500"
        >
          <option value="">All Disasters</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <button
          onClick={openModal}
          className="w-full sm:w-auto px-4 py-2 text-sm font-medium 
            rounded-md text-white bg-blue-600 hover:bg-blue-700 
            focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-blue-500 min-w-[120px]"
        >
          View Map
        </button>
      </div>

      {/* Cards Grid */}
      {filteredDisasters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 
          gap-4 sm:gap-6 justify-items-center">
          {filteredDisasters.map((disaster, index) => (
            <div key={index} className="w-full max-w-sm">
              <DisasterCard
                name={disaster.name}
                area={disaster.exactLocation?.address}
                tags={disaster.tags}
                disasterDetails={disaster}
                onViewMore={() => console.log("View more")}
                setDisaster={setDisaster}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">No Results.</div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center 
          justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg shadow-lg relative w-full max-w-4xl 
            h-[90vh] sm:h-[80vh] flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 
                focus:outline-none z-10 bg-white rounded-full"
            >
              <svg
                className="w-5 h-5"
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
            <div className="flex-1 overflow-hidden">
              <DisasterMap lat={lat} lng={lng} zoom={zoom} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DisasterList;