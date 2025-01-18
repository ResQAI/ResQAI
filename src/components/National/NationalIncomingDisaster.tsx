"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  AlertCircle,
  Info,
  MapPin,
  Clock,
  Shield,
  TriangleAlert as Alert,
  X,
  Filter,
} from "lucide-react";
import { baseUrl } from "@/constants";

// Enhanced Disaster Interface
interface ExactLocation {
  longitude: number;
  latitude: number;
  address: string;
  affectedArea: string;
}

interface GeologicalData {
  magnitude: number;
  depth: number;
  richterScale: number;
}

interface WeatherData {
  precipitation: number;
  windSpeed: number;
  temperature: number;
}

interface Tag {
  type: string;
  label: string;
}

interface SituationReport {
  id: string;
  time: string;
  summary: string;
}

interface ResourceRequest {
  id: string;
  resourceType: string;
  quantity: number;
}

interface ResponsePlanTask {
  id: string;
  status: string;
  description: string;
}

interface Notification {
  id: string;
  message: string;
  time?: string;
  title?: string;
  status?: string;
  departmentsConcerned?: string[];
  type?: string;
  disasterId?: string;
  urgency?: string;
  dateIssued?: string;
}

interface Disaster {
  id: string;
  name: string;
  status: string;
  level: string;
  tags: Tag[];
  startTime: number;
  peopleAffected: number;
  estimatedEconomicImpact: number;
  exactLocation: ExactLocation;
  geologicalData?: GeologicalData;
  weatherData?: WeatherData;
  notifications?: Notification[];
  responsePlan?: ResponsePlanTask[];
  situationReports?: SituationReport[];
  resourceRequests?: ResourceRequest[];
  endTime?: string;
}

const NationalDisasterTracker: React.FC = () => {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${baseUrl}/api/nationalDisasterCommittee/incomingDisaster`
      );
      const data = await res.json();
      setDisasters(data.data);
      console.log(data.data);
    }

    fetchData();
  }, []);

  const [selectedDisaster, setSelectedDisaster] = useState<Disaster | null>(
    null
  );
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const [filter, setFilter] = useState<{
    severity?: Disaster["level"];
    type?: string;
  }>({});
  const [showDeclarationForm, setShowDeclarationForm] = useState(false);
  const [declarationData, setDeclarationData] = useState<Partial<Disaster>>({});
  const [activeDisaster, setActiveDisaster] = useState<Disaster | null>(null);

  // Severity color mapping
  const severityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-orange-100 text-orange-800",
    critical: "bg-red-100 text-red-800",
  };

  // Filtered and sorted disasters
  const filteredDisasters = useMemo(() => {
    return disasters
      .filter(
        (disaster) =>
          (!filter.severity || disaster.level.toLowerCase() === filter.severity.toLowerCase()) &&
          (!filter.type ||
            disaster.tags?.some(
              (tag) => tag.toLowerCase() === filter.type.toLowerCase() )))
      
      .sort((a, b) => b.startTime - a.startTime);
  }, [disasters, filter]);

  const handleViewInfo = (disaster: Disaster) => {
    setSelectedDisaster(disaster);
  };

  const handleDeclareDisaster = (disaster: Disaster) => {
    setDeclarationData({
      name: disaster.name,
      level: disaster.level,
      exactLocation: disaster.exactLocation,
      startTime: disaster.startTime,
      geologicalData: disaster.geologicalData,
      weatherData: disaster.weatherData,
      peopleAffected: disaster.peopleAffected,
      estimatedEconomicImpact: disaster.estimatedEconomicImpact,
      tags: disaster.tags.map((tag) => ({
        label: tag,
        type: tag.type,
      })),
    });
    setActiveDisaster(disaster);
    setShowDeclarationForm(true);
  };

  const handleSubmitDeclaration = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(declarationData);
      const response = await fetch(
        `${baseUrl}/api/nationalDisasterCommittee/declaredDisasters`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...declarationData,
            responsePlans: [],
            situationshipReports: [],
            status: "Active",
            notifications: [],
            resourceRequests: [],
            geologicalData: declarationData.geologicalData || {},
          }),
        }
      );
      if (response.ok) {
        setShowDeclarationForm(false);
        setDisasters(disasters.filter((d) => d.id !== activeDisaster?.id));
        await fetch(
          `${baseUrl}/api/nationalDisasterCommittee/incomingDisaster`,
          {
            method: "DELETE",
            body: JSON.stringify({ id: activeDisaster?.id }),
          }
        );
        // Handle success (maybe show a notification)
      }
    } catch (error) {
      console.error("Error declaring disaster:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-3 sm:p-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Incoming Disasters Information
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <select
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                severity: e.target.value as Disaster["level"],
              }))
            }
            className="w-full sm:w-auto px-3 py-2 border rounded-md text-gray-700"
          >
            <option value="">All Severities</option>
            {Object.keys(severityColors).map((severity) => (
              <option key={severity} value={severity}>
                {severity}
              </option>
            ))}
          </select>
          <select
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                type: e.target.value,
              }))
            }
            className="w-full sm:w-auto px-3 py-2 border rounded-md text-gray-700"
          >
            <option value="">All Types</option>
            {["Hurricane", "Wildfire", "Earthquake", "Flood", "Tsunami"].map(
              (type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      {/* Disaster Cards */}
      <div className="space-y-4">
        {filteredDisasters.map((disaster) => (
          <div
            key={disaster.id}
            className="bg-white shadow-md rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 gap-4"
            style={{
              borderColor: {
                low: "green",
                medium: "yellow",
                high: "orange",
                critical: "red",
              }[disaster.level.toLowerCase()],
            }}
          >
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  {disaster.name}
                </h2>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    severityColors[disaster.level.toLowerCase()]
                  }`}
                >
                  {disaster.level}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center text-gray-600 mt-2 gap-2 sm:gap-3">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span className="text-sm">{disaster.exactLocation.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span className="text-sm">
                    {new Date(disaster.startTime).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {disaster.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleDeclareDisaster(disaster)}
                className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center justify-center"
              >
                <Shield className="mr-2" size={20} />
                Declare
              </button>
              <button
                onClick={() => handleViewInfo(disaster)}
                className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Info className="mr-2" size={20} />
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal */}
      {selectedDisaster && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setSelectedDisaster(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedDisaster.name}
              </h2>
              <span
                className={`px-3 py-1 rounded text-sm font-semibold ${
                  severityColors[selectedDisaster.level]
                }`}
              >
                {selectedDisaster.level}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <MapPin className="mr-2" />
                  <strong>Location:</strong>
                </div>
                <p>{selectedDisaster.exactLocation.address}</p>
                <p>Area: {selectedDisaster.exactLocation.affectedArea}</p>
              </div>
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <Alert className="mr-2" />
                  <strong>Status:</strong>
                </div>
                <p>{selectedDisaster.status}</p>
              </div>
              {selectedDisaster.geologicalData && (
                <div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <Alert className="mr-2" />
                    <strong>Geological Data:</strong>
                  </div>
                  <p>Magnitude: {selectedDisaster.geologicalData.magnitude}</p>
                  <p>Depth: {selectedDisaster.geologicalData.depth}km</p>
                </div>
              )}
              {selectedDisaster.weatherData && (
                <div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <Alert className="mr-2" />
                    <strong>Weather Data:</strong>
                  </div>
                  <p>
                    Temperature: {selectedDisaster.weatherData.temperature}°C
                  </p>
                  <p>
                    Wind Speed: {selectedDisaster.weatherData.windSpeed}km/h
                  </p>
                  <p>
                    Precipitation: {selectedDisaster.weatherData.precipitation}
                    mm
                  </p>
                </div>
              )}
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <Alert className="mr-2" />
                  <strong>Impact:</strong>
                </div>
                <p>
                  People Affected:{" "}
                  {selectedDisaster.peopleAffected.toLocaleString()}
                </p>
                <p>
                  Economic Impact: $
                  {selectedDisaster.estimatedEconomicImpact.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Declaration Form Modal */}
      {showDeclarationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-8 relative">
            <button
              onClick={() => setShowDeclarationForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Declare Disaster</h2>
            <form onSubmit={handleSubmitDeclaration} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pre-filled disabled fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={declarationData.name}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Level
                  </label>
                  <input
                    type="text"
                    value={declarationData.level}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
                  />
                </div>

                {/* Editable fields */}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowDeclarationForm(false)}
                  className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Declare Disaster
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NationalDisasterTracker;