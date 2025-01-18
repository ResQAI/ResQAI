import React, { useState, useMemo, useEffect } from "react";
import DisasterCard from "./ShortDisasterInfo";
import DisasterMap from "./DisasterMap";
import { motion, AnimatePresence } from "framer-motion";

export interface DisasterItem {
  name: string;
  area: string;
  tags?: { label: string; type?: "status" | "level" | "custom" }[];
  exactLocation?: { address: string; coordinates: [number, number] };
}

interface DisasterListProps {
  title: string;
  disasters: DisasterItem[];
  lat: number;
  lng: number;
  zoom: number;
  setDisaster: (disaster: DisasterItem) => void;
  isLoading?: boolean;
}

const DisasterList: React.FC<DisasterListProps> = ({
  title,
  disasters,
  lat,
  lng,
  zoom,
  setDisaster,
  isLoading = false,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapView, setMapView] = useState({ lat, lng, zoom });

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-0">
          {title}
        </h1>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
        <div className="relative w-full sm:w-64">
          <select
            value={selectedFilter || ""}
            onChange={(e) => setSelectedFilter(e.target.value || null)}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 appearance-none bg-white"
          >
            <option value="">All Disasters</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke="currentColor" fill="none" />
            </svg>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium rounded-lg 
            text-white bg-blue-600 hover:bg-blue-700 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
            transition-colors duration-200"
        >
          View Map
        </motion.button>
      </div>

      {/* Responsive Grid with Centered Mobile Cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg animate-pulse h-[280px] mx-auto w-full max-w-[350px] sm:max-w-none"
            />
          ))}
        </div>
      ) : filteredDisasters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredDisasters.map((disaster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mx-auto w-full max-w-[350px] sm:max-w-none"
            >
              <DisasterCard
                name={disaster.name}
                area={disaster.exactLocation?.address}
                tags={disaster.tags}
                disasterDetails={disaster}
                onViewMore={() => setDisaster(disaster)}
                setDisaster={setDisaster}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg"
        >
          No disasters found matching your criteria.
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm
              flex items-center justify-center z-50 p-4 md:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-5xl
                h-[90vh] md:h-[85vh] flex flex-col overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700
                  focus:outline-none z-10 bg-white rounded-full shadow-lg
                  transition-colors duration-200"
                aria-label="Close map"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex-1 overflow-hidden rounded-lg">
                <DisasterMap
                  lat={mapView.lat}
                  lng={mapView.lng}
                  zoom={mapView.zoom}
                  markers={filteredDisasters.map((d) => ({
                    position: d.exactLocation?.coordinates,
                    title: d.name,
                  }))}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DisasterList;