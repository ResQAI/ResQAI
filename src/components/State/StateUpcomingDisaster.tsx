"use client";
import React, { useState } from "react";
import { AlertCircle, Info } from "lucide-react";

interface Disaster {
  id: number;
  name: string;
  location: string;
  details: string;
}

const initialDisasters: Disaster[] = [
  {
    id: 1,
    name: "Hurricane Maya",
    location: "Gulf Coast, USA",
    details:
      "Category 3 hurricane with winds up to 120 mph. Predicted to make landfall in 48 hours. Mandatory evacuation for coastal regions.",
  },
  {
    id: 2,
    name: "Wildfire Outbreak",
    location: "California, USA",
    details:
      "Multiple wildfires spreading across dry forest regions. Over 10,000 acres currently affected. High risk of rapid expansion.",
  },
  {
    id: 3,
    name: "Earthquake",
    location: "Tokyo, Japan",
    details:
      "6.5 magnitude earthquake detected. Tsunami warning issued for coastal areas. Emergency response teams are on high alert.",
  },
];

const NationalIncomingDisaster: React.FC = () => {
  const [selectedDisaster, setSelectedDisaster] = useState<Disaster | null>(
    null
  );
  const [disasters, setDisasters] = useState<Disaster[]>(initialDisasters);

  const handleViewInfo = (disaster: Disaster) => {
    setSelectedDisaster(disaster);
  };

  const closeModal = () => {
    setSelectedDisaster(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-8 font-semibold text-gray-900">
        Upcoming Disasters
      </h1>

      <div className="space-y-4">
        {disasters.map((disaster) => (
          <div
            key={disaster.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center border-2 border-gray-200"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {disaster.name}
              </h2>
              <p className="text-gray-600">{disaster.location}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleViewInfo(disaster)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center"
              >
                <Info className="mr-2" size={20} />
                View Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Disaster Details */}
      {selectedDisaster && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedDisaster.name}
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Location:</strong> {selectedDisaster.location}
            </p>
            <p className="text-gray-600 mb-4">{selectedDisaster.details}</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NationalIncomingDisaster;
