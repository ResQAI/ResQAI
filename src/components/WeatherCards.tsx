"use client";
import React, { useState } from "react";
import { WiStrongWind, WiRaindrop, WiBarometer } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiFilterAlt } from "react-icons/bi";

interface WeatherData {
  state: string;
  temperature: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  airPressure: number;
  humidity: number;
  riskLevel: "low" | "medium" | "high";
}

const sampleWeatherData: WeatherData[] = [
  {
    state: "Kerala",
    temperature: 28,
    windSpeed: 45,
    windDirection: "SW",
    precipitation: 85,
    airPressure: 1008,
    humidity: 80,
    riskLevel: "high",
  },
  {
    state: "Gujarat",
    temperature: 35,
    windSpeed: 25,
    windDirection: "NE",
    precipitation: 10,
    airPressure: 1012,
    humidity: 45,
    riskLevel: "low",
  },
  {
    state: "West Bengal",
    temperature: 31,
    windSpeed: 32,
    windDirection: "SE",
    precipitation: 65,
    airPressure: 1009,
    humidity: 75,
    riskLevel: "medium",
  },
  {
    state: "Tamil Nadu",
    temperature: 30,
    windSpeed: 38,
    windDirection: "S",
    precipitation: 70,
    airPressure: 1007,
    humidity: 78,
    riskLevel: "high",
  },
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const FilterDropdown: React.FC<{
  label: string;
  options: string[] | number[];
  value: string;
  onChange: (value: string) => void;
}> = ({ label, options, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-600 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-1.5 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const WeatherCards: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    riskLevel: "",
    windDirection: "",
    windSpeed: "",
    temperature: "",
    precipitation: "",
    airPressure: "",
    humidity: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const filteredData = sampleWeatherData.filter((data) => {
    const matchesSearch = data.state
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRisk =
      !filters.riskLevel || data.riskLevel === filters.riskLevel;
    const matchesWind =
      !filters.windDirection || data.windDirection === filters.windDirection;
    const matchesTemp =
      !filters.temperature ||
      (filters.temperature === "high"
        ? data.temperature > 30
        : filters.temperature === "medium"
        ? data.temperature >= 25 && data.temperature <= 30
        : data.temperature < 25);
    const matchesPrecipitation =
      !filters.precipitation ||
      (filters.precipitation === "high"
        ? data.precipitation > 70
        : filters.precipitation === "medium"
        ? data.precipitation >= 30 && data.precipitation <= 70
        : data.precipitation < 30);

    return (
      matchesSearch &&
      matchesRisk &&
      matchesWind &&
      matchesTemp &&
      matchesPrecipitation
    );
  });

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Search and Filter Header */}
      <div className="mb-6 bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BiFilterAlt />
            Filters
          </button>
        </div>

        {/* Expanded Filters Section */}
        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <FilterDropdown
              label="Risk Level"
              options={["low", "medium", "high"]}
              value={filters.riskLevel}
              onChange={(value) => setFilters({ ...filters, riskLevel: value })}
            />
            <FilterDropdown
              label="Wind Direction"
              options={["N", "S", "E", "W", "NE", "SE", "SW", "NW"]}
              value={filters.windDirection}
              onChange={(value) =>
                setFilters({ ...filters, windDirection: value })
              }
            />
            <FilterDropdown
              label="Wind Speed"
              options={["0-20", "21-40", "41-60", ">60"]}
              value={filters.windSpeed}
              onChange={(value) => setFilters({ ...filters, windSpeed: value })}
            />
            <FilterDropdown
              label="Temperature"
              options={["<25", "25-30", ">30"]}
              value={filters.temperature}
              onChange={(value) =>
                setFilters({ ...filters, temperature: value })
              }
            />
            <FilterDropdown
              label="Precipitation"
              options={["0-30", "31-70", ">70"]}
              value={filters.precipitation}
              onChange={(value) =>
                setFilters({ ...filters, precipitation: value })
              }
            />
            <FilterDropdown
              label="Air Pressure"
              options={["<1000", "1000-1010", ">1010"]}
              value={filters.airPressure}
              onChange={(value) =>
                setFilters({ ...filters, airPressure: value })
              }
            />
            <FilterDropdown
              label="Humidity"
              options={["<40", "40-70", ">70"]}
              value={filters.humidity}
              onChange={(value) => setFilters({ ...filters, humidity: value })}
            />
          </div>
        )}
      </div>

      {/* Weather Cards Grid */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {filteredData.map((data) => (
            <div
              key={data.state}
              className="bg-white rounded-lg border-2 border-gray-300 shadow-sm hover:shadow-md transition-all p-2.5 max-w-sm"
            >
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center">
                  <FaLocationDot className="text-blue-600 mr-1.5 text-sm" />
                  <h2 className="text-base font-bold text-gray-800">
                    {data.state}
                  </h2>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRiskColor(
                    data.riskLevel
                  )}`}
                >
                  {data.riskLevel.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-1.5 text-xs">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <WiStrongWind className="text-2xl text-gray-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Wind</p>
                      <p className="font-medium">
                        {data.windSpeed} km/h {data.windDirection}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <WiRaindrop className="text-2xl text-gray-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Precipitation</p>
                      <p className="font-medium">{data.precipitation}%</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <WiBarometer className="text-2xl text-gray-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Pressure</p>
                      <p className="font-medium">{data.airPressure} hPa</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-2xl mr-2">💧</span>
                    <div>
                      <p className="text-sm text-gray-500">Humidity</p>
                      <p className="font-medium">{data.humidity}%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-1.5 border-t border-gray-200">
                <p className="text-lg font-bold text-gray-800 mb-1">
                  {data.temperature}°C
                </p>
                <p className="text-blue-600 text-xs font-medium hover:text-blue-800 cursor-pointer transition-colors">
                  View detailed analysis & historical data →
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">
            No weather information found for "{searchQuery}"
          </p>
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto"
          >
            {isSearching ? (
              <>
                <span className="animate-spin">⌛</span>
                Searching...
              </>
            ) : (
              <>
                <FaSearch />
                Get Weather Information
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherCards;
