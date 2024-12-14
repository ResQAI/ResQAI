"use client";

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";

interface PredictionResult {
  ml_output: {
    PREDICTION: string; // Can be 'YES' or 'NO'
    SUBDIVISIONS: string; // Name of the subdivision/city
    YEAR: number; // Year of prediction
  };
  response: string; // The detailed formatted response
}


const Flood = () => {
    const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);;
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
      

      const handleFloodSubmit = async(): void => {
    
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
        let messageIndex = 0;
        let intervalId = null;
    
        try {
          setLoading(true);
          // Start the loader messages
          intervalId = setInterval(() => {
            setLoadingMessages([messages[messageIndex]]);
            messageIndex = (messageIndex + 1) % messages.length;
          }, 1000); // Change message every second
    
          // Make the API call
          const response = await fetch('/api/your-endpoint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ /* Your payload here */ }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
    
          const data = await response.json();
          setPredictionResult(data);
    
        } catch (error) {
          console.error('Error:', error);
        } finally {
          // Stop the loader and cleanup
          // clearInterval(intervalId);
          setLoading(false);
          setLoadingMessages([]);
        }
      };


  return (
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
                      <div className="mt-5 p-5 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
                          Flood Prediction Insights for {predictionResult.ml_output.SUBDIVISIONS} ({predictionResult.ml_output.YEAR})
                        </h2>
                    
                        <div className="text-lg">
                          <p className="mb-2">
                            <strong>Prediction:</strong> {predictionResult.ml_output.PREDICTION === "YES" ? (
                              <span className="text-red-500 font-semibold">High Risk of Flooding</span>
                            ) : (
                              <span className="text-green-500 font-semibold">No Flood Predicted</span>
                            )}
                          </p>
                          
                          <p className="mb-2">
                            <strong>City/Subdivision:</strong> {predictionResult.ml_output.SUBDIVISIONS} - {`Alipurduar is a district in the state of West Bengal, India. Established in 2014, it is the 20th district of West Bengal. The district is divided into two municipalities, Alipurduar and Falakata, and six community development blocks. Alipurduar is largely a rural district with over 80% of its population belonging to Scheduled Castes (SC) and Scheduled Tribes (ST).`}
                          </p>
                          
                          <p className="mb-2">
                            <strong>Explanation:</strong> {`The flood prediction model indicates a high likelihood of flooding in Alipurduar for the year 2022. This prediction is primarily based on the exceptionally high rainfall recorded during the monsoon months from June to September. The cumulative rainfall during this period contributes significantly to the annual rainfall, which is a major factor influencing flood occurrences.`}
                          </p>
                          
                          <p className="mb-2">
                            <strong>Historical Disaster Context:</strong> {`Alipurduar district has a history of being vulnerable to natural disasters, particularly floods and landslides. The region's location in the foothills of the Himalayas and the presence of major rivers make it susceptible to flooding during the monsoon season. While specific historical data on flood events in Alipurduar is limited, it is important to note that the district was part of the Jalpaiguri district, which has a documented history of severe floods. For instance, in 1968, 1987, and 2002, the Jalpaiguri and Alipurduar region experienced devastating landslides triggered by heavy rainfall, resulting in significant damage to infrastructure and loss of life.`}
                          </p>
                          
                          <p className="mb-2">
                            <strong>Government Recommendations:</strong> {`
                            - Early Warning System and Evacuation Plans: Implement and strengthen early warning systems for flood prediction and disseminate timely alerts to residents. Establish clear evacuation plans and procedures, ensuring the availability of adequate flood shelters and safe evacuation routes.
                            - Infrastructure Development and Maintenance: Invest in flood control infrastructure, including embankments, drainage systems, and river channel improvements. Regularly maintain existing infrastructure to ensure its effectiveness in managing floodwaters.`}
                          </p>
                          
                          <p className="mb-2">
                            <strong>Recent News Highlights:</strong>
                            <ul className="list-disc pl-5">
                              <li>Three women lost their lives in an elephant attack in Alipurduar district while collecting firewood in the Chilapata forest. This tragic incident highlights the dangers posed by wildlife encounters, particularly in areas adjacent to forests.</li>
                              <li>A fire broke out at the 'Hollong Bungalow' in Jaldapara National Park, Alipurduar district. The fire was contained, and there were no casualties reported. This incident emphasizes the importance of fire safety measures, especially in tourist accommodations located within forested areas.</li>
                            </ul>
                          </p>
                        </div>
                    
                        {predictionResult.ml_output.PREDICTION === "YES" && (
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
          </div>
  );
};

export default Flood;