"use client";

interface PredictionResult {
    ml_output: {
      lower_bound: number;
      upper_bound: number;
      value: number;
    };
    response: string;
  }
  

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";
import axios from "axios";

const Earthquake = () => {
    const [formData, setFormData] = useState({
        Timestamp: "",
        Latitude: "",
        Longitude: "",
        Depth: "",
        Location: "",
    });
    const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

    const [loading, setLoading] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState<string[]>([]);
    const [timer, setTimer] = useState<number>(10);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePredict = async (): Promise<void> => {
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

        try {
            const response = await axios.post("/api/predict", formData);
            clearInterval(messageInterval);
            clearInterval(timerInterval);
            setPredictionResult(response.data);
        } catch (error) {
            console.error("Prediction error:", error);
            setPredictionResult({ response: "An error occurred during prediction." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-start justify-center">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
                <h2 className="text-lg font-semibold">Earthquake Prediction</h2>

                


                {loading ? (
                    <div className="mt-5">
                        <ul className="text-sm space-y-2">
                            {loadingMessages.map((message, index) => (
                                <li key={index}>
                                    <div className="flex flex-row gap-2 text-xl font-bold text-blue-500 place-items-baseline">
                                        {message}
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"></div>
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3 text-center">
                            <p>Time remaining: {timer} seconds</p>
                        </div>
                    </div>
                ) : predictionResult ? (
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold">Prediction Result</h3>
                        <pre className="mt-3 text-sm bg-gray-100 p-3 rounded">
                            {JSON.stringify(predictionResult, null, 2)}
                        </pre>
                        {predictionResult.response.includes("Disaster") && (
                            <button
                                className="mt-4 bg-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                            >
                                Monitor Disaster
                            </button>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Timestamp</label>
                        <input
                            type="datetime-local"
                            name="Timestamp"
                            value={formData.Timestamp}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Latitude</label>
                        <input
                            type="number"
                            name="Latitude"
                            step="any"
                            value={formData.Latitude}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Longitude</label>
                        <input
                            type="number"
                            name="Longitude"
                            step="any"
                            value={formData.Longitude}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Depth</label>
                        <input
                            type="number"
                            name="Depth"
                            value={formData.Depth}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="Location"
                            value={formData.Location}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                    <button
                        className="mb-2 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                        onClick={handlePredict}
                    >
                        Predict
                    </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Earthquake;
