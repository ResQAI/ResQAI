import React from "react";
import Prediction from "@/components/PredectionForm";

const AnalysisPage = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full bg-blue-700">
        {/* <WeatherComponent /> */}
      </div>
      <div className="w-1/2 h-full bg-red-700">
        <Prediction/>
      
      </div>
    </div>
  );
};

export default AnalysisPage;
