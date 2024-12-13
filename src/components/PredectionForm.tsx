
"use client";

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";

const Prediction = () => {
  const [predictionResult, setPredictionResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("earthquake");
  const [loading, setLoading] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(10);
  const [floodData, setFloodData] = useState({
    SUBDIVISIONS: "",
    YEAR: 2024,
    JAN: 0,
    FEB: 0,
    MAR: 0,
    APR: 0,
    MAY: 0,
    JUN: 0,
    JUL: 0,
    AUG: 0,
    SEP: 0,
    OCT: 0,
    NOV: 0,
    DEC: 0,
    ANNUAL: 0,
  });

  const handlePredict = (): void => {
    setPredictionResult(null);
    setLoading(true);
    setTimer(10);
    const messages = [
      "Initializing prediction model",
      "Loading data",
      "Analyzing patterns",
      "Running simulations",
      "Finalizing predictions",
    ];
    setLoadingMessages([messages[0]]);

    let currentStep = 0;
    const messageInterval = setInterval(() => {
      if (currentStep < messages.length) {
        setLoadingMessages([messages[currentStep]]);
        currentStep++;
      }
    }, 2000);

    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 1) return prev - 1;
        clearInterval(timerInterval);
        return 0;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(messageInterval);
      clearInterval(timerInterval);
      const disasterDetected = Math.random() < 0.5; // Simulated logic
      setPredictionResult(
        disasterDetected
          ? "Disaster detected! Monitor the disaster."
          : "No disaster detected. All is safe."
      );
      setLoading(false);
    }, 10000);
  };

  const handleCancel = (): void => {
    setPredictionResult(null);
  };

  const handleFloodSubmit = (): void => {
    
    const filledMonths = Object.values(floodData).filter(
      (value) => typeof value === "number" && value > 0
    );

    if (filledMonths.length < 5) {
      alert("Please fill at least 5 months of data.");
      return;
    }
    setPredictionResult(null);
    setLoading(true);
    setTimer(10);
    const avg =
      filledMonths.reduce((sum, value) => sum + value, 0) / filledMonths.length;

    const completedData = Object.fromEntries(
      Object.entries(floodData).map(([key, value]) => {
        if (
          [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ].includes(key) && value === 0
        ) {
          return [key, avg];
        }
        return [key, value];
      })
    );
    console.log(loading)
    const messages = [
      "Initializing prediction model...",
      "Loading data...",
      "Analyzing patterns...",
      "Running simulations...",
      "Finalizing predictions...",
    ];
    setLoadingMessages(messages);
    
    let currentStep = 0;
    const messageInterval = setInterval(() => {
      if (currentStep < messages.length) {
        setLoadingMessages([messages[currentStep]]);
        currentStep++;
      }
    }, 2000);

    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 1) return prev - 1;
        clearInterval(timerInterval);
        return 0;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(messageInterval);
      clearInterval(timerInterval);
      const disasterDetected = Math.random() < 0.5; // Simulated logic
      setPredictionResult(
        disasterDetected
          ? "Disaster detected! Monitor the disaster."
          : "No disaster detected. All is safe."
      );
      setLoading(false);
    }, 10000);
  };

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
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Earthquake Prediction</h2>
          {loading ? (
            <div className="mt-5">
              <ul className="text-sm space-y-2">
                {loadingMessages.map((message, index) => (
                  <li key={index}> <div className="flex flex-row  gap-2 text-xl font-bold text-blue-500 place-items-baseline"> {message}
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
                </div></li>
                ))}
              </ul>
              <div className="mt-3 text-center">
                <p>Time remaining: {timer} seconds</p>
              </div>
            </div>
          ) : predictionResult ? (
            <div className="mt-5 text-center">
              <p className="text-lg font-semibold">{predictionResult}</p>
              {predictionResult.includes("Disaster") && (
                <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg flex items-center justify-center font-medium hover:shadow-lg hover:bg-red-600">
                  <TriangleAlert className="mr-2" /> Monitor the disaster
                </button>
              )}
            </div>
          ) : (
            <button
              className="mb-2 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
              onClick={handlePredict}
            >
              Predict
            </button>
          )}
        </div>
      )}

      {activeTab === "flood" && (
        
<div className="max-w w-full space-y-8 p-10 bg-white rounded-xl shadow-xl">
          <h2 className="text-lg font-bold">Flood Data</h2>
          <div className="flex flex-col space-y-4">
          {loading ? (
            <div className="mt-5">
              <ul className="text-sm space-y-2">
                {loadingMessages.map((message, index) => (
                  <li key={index}>{message} <div className="flex flex-row gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
                </div></li>
                ))}
              </ul>
              <div className="mt-3 text-center">
                <p>Time remaining: {timer} seconds</p>
              </div>
            </div>
          ) : predictionResult ? (
            <div className="mt-5 text-center">
              <p className="text-lg font-semibold">{predictionResult}</p>
              {predictionResult.includes("Disaster") && (
                <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg flex items-center justify-center font-medium hover:shadow-lg hover:bg-red-600">
                  <TriangleAlert className="mr-2" /> Monitor the disaster
                </button>
              )}
            </div>
          ) : (
            <>
            <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">
                          Year <abbr title="required">*</abbr>
                        </label>
                        <input
                          placeholder="Year"
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="number"
                          value={floodData.YEAR}
                onChange={(e) =>
                  setFloodData({ ...floodData, YEAR: parseInt(e.target.value) || 2024 })
                }
                        />
                      </div>
                    



                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                      Subdivision
                      </label>
                      <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div className="flex">
                          <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center text-xl rounded-lg text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                          value={floodData.SUBDIVISIONS}
                          placeholder="Subdivion"
                          onChange={(e) =>
                            setFloodData({ ...floodData, SUBDIVISIONS: e.target.value })
                          }
                        />
                      </div>
                    </div>
            
            {/* <div className="flex flex-col">
              <label className="font-semibold text-gray-600 py-2"></label>
              <input
                type="text"
                
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              />
            </div> */}
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            {Object.keys(floodData).map((key) =>
              key !== "SUBDIVISIONS" &&
              key !== "YEAR" &&
              key !== "ANNUAL" ? (
                <div key={key} className="flex ">
                  <label className="font-semibold text-gray-600 py-2">{key}</label>
                  <input
                    type="number"
                    value={floodData[key as keyof typeof floodData]}
                    onChange={(e) =>
                      setFloodData({
                        ...floodData,
                        [key]: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="border rounded-lg px-3 py-1 w-[100px]"
                  />
                </div>
              ) : null
            )}
          </div>
          <div className="flex item-center justify-center">
          <button
            className="mb-2 bg-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
            onClick={handleFloodSubmit}
          >
            Submit
          </button>
        </div>
        </>)};
        
        </div>
</div>)}

</div>);}

export default Prediction;
