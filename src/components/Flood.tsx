"use client";

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface FloodData {
  SUBDIVISIONS: string;
  YEAR: number;
  JAN: number;
  FEB: number;
  MAR: number;
  APR: number;
  MAY: number;
  JUN: number;
  JUL: number;
  AUG: number;
  SEP: number;
  OCT: number;
  NOV: number;
  DEC: number;
  ANNUAL: number;
}

interface PredictionResult {
  ml_output: {
    PREDICTION: "YES" | "NO";
    SUBDIVISIONS: string;
    YEAR: number;
  };
  response: string;
}

const FloodPredictionForm: React.FC = () => {
  const [floodData, setFloodData] = useState<FloodData>({
    SUBDIVISIONS: "",
    YEAR: new Date().getFullYear(),
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

  const [predictionResult, setPredictionResult] =
    useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFloodData((prev) => ({
      ...prev,
      [name]: name === "SUBDIVISIONS" ? value : Number(value),
    }));
  };

  const validateData = (): boolean => {
    const monthKeys = [
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
    ];
    const filledMonths = monthKeys.filter(
      (key) => floodData[key as keyof FloodData] > 0
    );

    if (floodData.SUBDIVISIONS.trim() === "") {
      setError("Please enter a subdivision");
      return false;
    }

    if (filledMonths.length < 5) {
      setError("Please fill at least 5 months of rainfall data");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPredictionResult(null);

    if (!validateData()) return;

    setLoading(true);

    try {
      // Calculate average for missing months
      const monthKeys = [
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
      ];
      const filledMonths = monthKeys.filter(
        (key) => floodData[key as keyof FloodData] > 0
      );
      const avgRainfall =
        filledMonths.reduce(
          (sum, key) => sum + floodData[key as keyof FloodData],
          0
        ) / filledMonths.length;

      // Create completed data object
      const completedData = {
        ...floodData,
        ...monthKeys.reduce((acc, key) => {
          acc[key] = floodData[key as keyof FloodData] || avgRainfall;
          return acc;
        }, {} as Partial<FloodData>),
        ANNUAL: Object.values(floodData)
          .filter((key) => typeof key === "number")
          .reduce((sum, value) => sum + value, 0),
      };

      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completedData),
      });

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const result = await response.json();
      setPredictionResult(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Flood Prediction</h2>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
          <p>Predicting flood risk...</p>
        </div>
      ) : predictionResult ? (
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            Flood Prediction for {predictionResult.ml_output.SUBDIVISIONS} (
            {predictionResult.ml_output.YEAR})
          </h3>

          <div
            className={`mb-4 p-3 rounded ${
              predictionResult.ml_output.PREDICTION === "YES"
                ? "bg-red-200 text-red-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            <strong>Prediction:</strong>{" "}
            {predictionResult.ml_output.PREDICTION === "YES"
              ? "High Flood Risk"
              : "Low Flood Risk"}
          </div>

          <div className="prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-600"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside ml-4">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside ml-4">{children}</ol>
                ),
                h1: ({ children }) => (
                  <h1 className="text-xl font-bold">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-lg font-bold">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-md font-bold">{children}</h3>
                ),
                p: ({ children }) => <p className="mb-2">{children}</p>,
              }}
            >
              {predictionResult.response}
            </ReactMarkdown>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold">Subdivision</label>
            <input
              type="text"
              name="SUBDIVISIONS"
              value={floodData.SUBDIVISIONS}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter subdivision name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Year</label>
            <input
              type="number"
              name="YEAR"
              value={floodData.YEAR}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              min={2000}
              max={new Date().getFullYear()}
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {(
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
              ] as const
            ).map((month) => (
              <div key={month}>
                <label className="block mb-1">{month}</label>
                <input
                  type="number"
                  name={month}
                  value={floodData[month]}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                  min={0}
                  step={0.1}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Predict Flood Risk
          </button>
        </form>
      )}
    </div>
  );
};

export default FloodPredictionForm;
