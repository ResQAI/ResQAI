"use client";

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";
import Earthquake from "./Earthquake";
import Flood from "./Flood";

const Prediction = () => {
  // const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);;
  const [activeTab, setActiveTab] = useState("earthquake");
  // const [loading, setLoading] = useState(false);
  // const [loadingMessages, setLoadingMessages] = useState<string[]>([]);
  // const [timer, setTimer] = useState<number>(10);
  // const [floodData, setFloodData] = useState({
  //   SUBDIVISIONS: "",
  //   YEAR: 2024,
  //   JAN: 0,
  //   FEB: 0,
  //   MAR: 0,
  //   APR: 0,
  //   MAY: 0,
  //   JUN: 0,
  //   JUL: 0,
  //   AUG: 0,
  //   SEP: 0,
  //   OCT: 0,
  //   NOV: 0,
  //   DEC: 0,
  //   ANNUAL: 0,
  // });

  // const handlePredict = (): void => {
  //   setPredictionResult(null);
  //   setLoading(true);
  //   setTimer(10);
  //   const messages = [
  //     "Initializing prediction model",
  //     "Loading data",
  //     "Analyzing patterns",
  //     "Running simulations",
  //     "Finalizing predictions",
  //   ];
  //   setLoadingMessages([messages[0]]);

  //   let currentStep = 0;
  //   const messageInterval = setInterval(() => {
  //     if (currentStep < messages.length) {
  //       setLoadingMessages([messages[currentStep]]);
  //       currentStep++;
  //     }
  //   }, 2000);

  //   const timerInterval = setInterval(() => {
  //     setTimer((prev) => {
  //       if (prev > 1) return prev - 1;
  //       clearInterval(timerInterval);
  //       return 0;
  //     });
  //   }, 1000);

  //   setTimeout(() => {
  //     clearInterval(messageInterval);
  //     clearInterval(timerInterval);
  //     const disasterDetected = Math.random() < 0.5; // Simulated logic
  //     setPredictionResult(
  //       disasterDetected
  //         ? "Disaster detected! Monitor the disaster."
  //         : "No disaster detected. All is safe."
  //     );
  //     setLoading(false);
  //   }, 10000);
  // };

  // const handleCancel = (): void => {
  //   setPredictionResult(null);
  // };

 


  //   const annual = Object.values(completedData)
  //     .filter((value) => typeof value === "number")
  //     .reduce((sum, value) => sum + value, 0);

  //   setFloodData({ ...completedData, ANNUAL: annual });
  //   alert("Flood data submitted successfully.");
  // };

  return (
    <div className="p-5">
      <div className="flex justify-center mb-5">
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

      {activeTab === "earthquake" && (
        <Earthquake/>
      )}

      {activeTab === "flood" && (
        <Flood/>
        
          )}

</div>);}

export default Prediction;
