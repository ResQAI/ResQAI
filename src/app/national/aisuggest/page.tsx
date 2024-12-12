import React from "react";
import Prediction from "@/components/PredectionForm";
import WeatherCards from "@/components/WeatherCards";

const AnalysisPage = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full">
        <WeatherCards />
      </div>
      <div className="w-1/2 h-full">
        <Prediction />
      </div>
    </div>
  );
};

export default AnalysisPage;
