import React from "react";
import { createPortal } from "react-dom";
import DisasterMap from "./DisasterMap";

interface DisasterModalProps {
  isOpen: boolean;
  onClose: () => void;
  disaster: any;
}

// Sample disaster data
const sampleDisasterData = {
  location: "Maharashtra, India",
  severity: "High",
  level: "Level 3",
  areaSize: "450 sq km",
  epicenter: { lat: 19.076, lng: 72.8777 },
  peopleAffected: 25000,
  casualties: 42,
  estimatedLoss: 15000000,
};

const DisasterModal: React.FC<DisasterModalProps> = ({
  isOpen,
  onClose,
  disaster,
}) => {
  if (!isOpen) return null;

  // Merge provided data with sample data, preferring provided data
  const displayData = {
    ...sampleDisasterData,
    ...disaster,
  };

  // Format number with null check
  const formatNumber = (num: number | undefined) => {
    return num?.toLocaleString() ?? "N/A";
  };

  const modalContent = (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
        <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {disaster.name}
            </h2>
            <p className="text-blue-600 text-sm font-medium">
              {disaster.exactLocation.address}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-blue-800 font-semibold mb-3">
                Current Status
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <StatusItem
                  label="Severity"
                  value={
                    disaster.level == 3
                      ? "High"
                      : disaster.level == 2
                      ? "Medium"
                      : "Low"
                  }
                  colorClass={
                    disaster.level == 3 ? "text-red-600" : "text-yellow-600"
                  }
                />
                <StatusItem
                  label="Level"
                  value={disaster.level}
                  colorClass="text-blue-600"
                />
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-red-800 font-semibold mb-3">
                Impact Assessment
              </h3>
              <div className="space-y-2">
                <ImpactItem
                  label="People Affected"
                  value={formatNumber(disaster.peopleAffected)}
                />
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-green-800 font-semibold mb-3">
                Area Details
              </h3>
              <div className="space-y-2">
                <InfoItem label="Area Size" value={disaster.areaSize} />
                {displayData.epicenter && (
                  <InfoItem
                    label="Epicenter"
                    value={`${disaster.exactLocation.latitude}, ${disaster.exactLocation.longitude}`}
                  />
                )}
                <InfoItem
                  label="Estimated Loss"
                  value={`$${formatNumber(disaster.estimatedEconomicImpact)}`}
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            {isOpen && displayData.epicenter && (
              <DisasterMap
                lat={disaster.exactLocation.latitude}
                lng={disaster.exactLocation.longitude}
                zoom={13}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Use createPortal to render the modal outside the main DOM hierarchy
  return typeof window === "undefined"
    ? null
    : createPortal(modalContent, document.body);
};

const StatusItem = ({
  label,
  value,
  colorClass,
}: {
  label: string;
  value: string;
  colorClass: string;
}) => (
  <div>
    <p className="text-gray-600 text-sm mb-1">{label}</p>
    <p className={`font-semibold ${colorClass}`}>{value}</p>
  </div>
);

const ImpactItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-600 text-sm">{label}</p>
    <p className="text-red-600 font-semibold">{value}</p>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-600 text-sm">{label}</p>
    <p className="text-gray-800 font-medium">{value}</p>
  </div>
);

export default DisasterModal;
