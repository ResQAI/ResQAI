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

interface Disaster {
  id: string;
  name: string;
  status: string;
  level: string;
  tags: string[];
  startTime: number;
  peopleAffected: number;
  estimatedEconomicImpact: number;
  exactLocation: ExactLocation;
  geologicalData?: GeologicalData;
  weatherData?: WeatherData;
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

  // Severity color mapping
  const severityColors = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-orange-100 text-orange-800",
    Critical: "bg-red-100 text-red-800",
  };

  // Filtered and sorted disasters
  const filteredDisasters = useMemo(() => {
    return disasters
      .filter(
        (disaster) =>
          (!filter.severity || disaster.level === filter.severity) &&
          (!filter.type || disaster.tags.includes(filter.type.toLowerCase()))
      )
      .sort((a, b) => b.startTime - a.startTime);
  }, [disasters, filter]);

  const handleViewInfo = (disaster: Disaster) => {
    setSelectedDisaster(disaster);
  };

  const handleDeclareDisaster = (id: string) => {
    const updatedDisasters = disasters.map((disaster) =>
      disaster.id === id ? { ...disaster, status: "Responding" } : disaster
    );
    setDisasters(updatedDisasters);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Incoming Disasters Information
        </h1>
        <div className="flex space-x-2">
          <select
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                severity: e.target.value as Disaster["level"],
              }))
            }
            className="px-3 py-2 border rounded-md text-gray-700"
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
            className="px-3 py-2 border rounded-md text-gray-700"
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

      <div className="space-y-4">
        {filteredDisasters.map((disaster) => (
          <div
            key={disaster.id}
            className="bg-white shadow-md rounded-lg p-5 flex justify-between items-center border-l-4"
            style={{
              borderColor: {
                Low: "green",
                Medium: "yellow",
                High: "orange",
                Critical: "red",
              }[disaster.level],
            }}
          >
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-bold text-gray-800">
                  {disaster.name}
                </h2>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    severityColors[disaster.level]
                  }`}
                >
                  {disaster.level}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mt-2 space-x-3">
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>{disaster.exactLocation.address}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{new Date(disaster.startTime).toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-2">
                {disaster.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleDeclareDisaster(disaster.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center"
              >
                <Shield className="mr-2" size={20} />
                Declare Disaster
              </button>
              <button
                onClick={() => handleViewInfo(disaster)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition flex items-center"
              >
                <Info className="mr-2" size={20} />
                View Details
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
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mr-4">
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
            <div className="grid grid-cols-2 gap-4 mb-6">
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
    </div>
  );
};

export default NationalDisasterTracker;
