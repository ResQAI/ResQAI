"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  TriangleAlert,
  Check,
  MapPin,
  Calendar,
  LoaderCircle,
  Waves,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Modal from "./AddToMonitorModal";  // Assuming you have a similar modal component

interface PredictionResult {
  ml_output: {
    value: number;
    lower_bound: number;
    upper_bound: number;
  };
  response: string;
}

const LoadingStage = ({ stage }: { stage: number }) => {
  const stages = [
    { icon: MapPin, text: "Collecting Seismic Data" },
    { icon: Calendar, text: "Processing Location Parameters" },
    { icon: Waves, text: "Analyzing Geological Patterns" },
    { icon: LoaderCircle, text: "Training Predictive Model" },
    { icon: Calendar, text: "Generating Earthquake Forecast" },
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

const Earthquake: React.FC = () => {
  const [formData, setFormData] = useState({
    Timestamp: formatToCustomISO(new Date()),
    Latitude: "",
    Longitude: "",
    Depth: "",
    Location: "",
  });

  function formatToCustomISO(date: Date): string {
    const pad = (num: number) => String(num).padStart(2, "0");

    return (
      `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}` +
      `T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}+00:00`
    );
  }

  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddToMonitorClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const validateData = (): boolean => {
    if (!formData.Latitude || !formData.Longitude) {
      setError("Please enter Latitude and Longitude");
      return false;
    }
    return true;
  };

  const determineRiskLevel = (magnitude: number): string => {
    if (magnitude < 3.0) return "Not Serious";
    if (magnitude >= 3.0 && magnitude < 5.0) return "Moderate";
    return "Severe";
  };

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPredictionResult(null);

    if (!validateData()) return;

    setLoading(true);
    setLoadingStage(0);

    try {
      const response = await axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setPredictionResult(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center text-blue-900"
      >
        Earthquake Prediction
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
              {determineRiskLevel(predictionResult.ml_output.value) === "Severe" ? (
                <>
                  <TriangleAlert className="text-red-500 w-8 h-8 animate-bounce" />
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={handleAddToMonitorClick}
                  >
                    Add to Monitor
                  </button>
                </>
              ) : (
                <Check className="text-green-500 w-8 h-8" />
              )}
            </div>
          </div>
          {/* Modal Component */}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title="Monitor Settings"
          />

          <div className="mb-6">
            <div
              className={`p-4 rounded-lg text-center font-bold text-xl ${
                determineRiskLevel(predictionResult.ml_output.value) === "Severe"
                  ? "bg-red-200 text-red-800"
                  : determineRiskLevel(predictionResult.ml_output.value) === "Moderate"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              Magnitude: {predictionResult.ml_output.value.toFixed(2)} - 
              Risk Level: {determineRiskLevel(predictionResult.ml_output.value)}
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
          onSubmit={handlePredict}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-blue-900">
                Latitude
              </label>
              <input
                type="number"
                name="Latitude"
                step="any"
                value={formData.Latitude}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter Latitude"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-blue-900">
                Longitude
              </label>
              <input
                type="number"
                name="Longitude"
                step="any"
                value={formData.Longitude}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter Longitude"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-blue-900">
                Depth
              </label>
              <input
                type="number"
                name="Depth"
                value={formData.Depth}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter Depth"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-blue-900">
                Location
              </label>
              <input
                type="text"
                name="Location"
                value={formData.Location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter Location"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform shadow-lg"
          >
            Predict Earthquake Risk
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};

export default Earthquake;