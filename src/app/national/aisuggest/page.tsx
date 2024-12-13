import React from "react";
import Prediction from "@/components/PredectionForm";
import WeatherCards from "@/components/WeatherCards";
import LandingChatAssistant from "@/components/ChatAssistant";

const AnalysisPage = () => {
  return (
    <div className="flex w-full h-full">
      <LandingChatAssistant />
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
