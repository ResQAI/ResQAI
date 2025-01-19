"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  TriangleAlert,
  MapPin,
  Calendar,
  Cpu,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Modal from "./AddToMonitorModal";
import DisasterModal from "./AddToMonitorModal";

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

const LoadingStage = ({ stage }: { stage: number }) => {
  const stages = [
    { icon: MapPin, text: "Collecting Subdivision Data and Geospatial Data" },
    { icon: Calendar, text: "Processing Yearly Rainfall" },
    { icon: Cpu, text: "Predicting Flood Risk Using ML Model" },
    { icon: Sparkles, text: "Refining Insights Using Gemini 1.5 Pro Model" },
    {
      icon: ClipboardList,
      text: "Adding Recommendations and Contextual Information",
    },
  ];

  return (
    <div className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg">
      {stages.map((stageItem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: index < stage ? 1 : 0.4,
            x: 0,
            transition: { delay: index * 0.2 },
          }}
          className="flex items-center space-x-4"
        >
          <stageItem.icon
            className={`w-6 h-6 ${
              index < stage ? "text-green-500 animate-pulse" : "text-gray-400"
            }`}
          />
          <span
            className={`
            ${index < stage ? "font-bold text-blue-800" : "text-gray-600"}
            transition-all duration-300
          `}
          >
            {stageItem.text}
          </span>
          {index < stage && <Check className="text-green-500 ml-auto" />}
        </motion.div>
      ))}
    </div>
  );
};

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
  const [loadingStage, setLoadingStage] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stageInterval: NodeJS.Timeout;
    if (loading) {
      stageInterval = setInterval(() => {
        setLoadingStage((prev) => (prev < 4 ? prev + 1 : prev));
      }, 1500);
    }
    return () => clearInterval(stageInterval);
  }, [loading]);

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToMonitorClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPredictionResult(null);

    if (!validateData()) return;

    setLoading(true);
    setLoadingStage(0);

    try {
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

      const response = await fetch("https://resqai-96420221158.us-central1.run.app/predict", {
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
      console.log(predictionResult?.response);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white sm:rounded-2xl sm:shadow-lg max-sm:max-w-[100%] max-sm:p-3">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center text-blue-900 max-md:text-[1.65rem]"
      >
        Flood Risk Prediction
      </motion.h2>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"
            role="alert"
          >
            <div className="flex items-center">
              <TriangleAlert className="mr-3 text-red-500" />
              <p>{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {loading ? (
        <LoadingStage stage={loadingStage} />
      ) : predictionResult ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-blue-900">
              Prediction Results
            </h3>
            <div className="flex items-center gap-4">
              {predictionResult.ml_output.PREDICTION === "YES" ? (
                <>
                  <TriangleAlert className="text-red-500 w-8 h-8 animate-bounce" />
                  <DisasterModal />
                </>
              ) : (
                <Check className="text-green-500 w-8 h-8" />
              )}
            </div>
          </div>
          {/* Modal Component */}

          <div className="mb-6">
            <div
              className={`p-4 rounded-lg text-center font-bold text-xl ${
                predictionResult.ml_output.PREDICTION === "YES"
                  ? "bg-red-200 text-red-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {predictionResult.ml_output.SUBDIVISIONS} (
              {predictionResult.ml_output.YEAR}):{" "}
              {predictionResult.ml_output.PREDICTION === "YES"
                ? "High Flood Risk"
                : "Low Flood Risk"}
            </div>
          </div>

          <div className="prose max-w-none">
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
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-6 max-sm:text-center max-sm:text-xl max-md:mb-10">
            <div>
              <label className="block mb-2 font-semibold text-blue-900">
                Subdivision
              </label>
              <input
                type="text"
                name="SUBDIVISIONS"
                value={floodData.SUBDIVISIONS}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter subdivision name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-blue-900">
                Year
              </label>
              <input
                type="number"
                name="YEAR"
                value={floodData.YEAR}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                min={2000}
                max={new Date().getFullYear()}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-3 max-md:text-center">
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
              <div key={month} className="max-sm:mb-3">
                <label className="block mb-1 text-sm text-blue-800 max-sm:text-lg">
                  {month} <span className="max-sm:hidden">(in mm)</span>{" "}
                  <span className="sm:hidden">(mm)</span>
                </label>
                <input
                  type="number"
                  name={month}
                  value={floodData[month]}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  step="any"
                  placeholder="in mm"
                />
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform shadow-lg max-sm:text-lg"
          >
            Predict Flood Risk
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};

export default FloodPredictionForm;
