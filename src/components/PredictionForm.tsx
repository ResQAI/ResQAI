"use client";

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";
import Earthquake from "./Earthquake";
import Flood from "./Flood";

const Prediction = () => {
  const [activeTab, setActiveTab] = useState("flood");

  return (
    <div className="p-5 max-md:p-0 max-md:mt-10">
      <div className="flex justify-center mb-5 max-sm:text-xl">
        <button
          className={`px-4 py-2 border-b-2 ${
            activeTab === "earthquake" ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={() => setActiveTab("earthquake")}
        >
          Earthquake
        </button>
        <button
          className={`px-4 py-2 border-b-2 ${
            activeTab === "flood" ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={() => setActiveTab("flood")}
        >
          Flood
        </button>
      </div>

      {activeTab === "earthquake" && <Earthquake />}

      {activeTab === "flood" && <Flood />}
    </div>
  );
};

export default Prediction;
