import React from "react";
import Prediction from "@/components/PredictionForm";
import WeatherCards from "@/components/WeatherCards";
import LandingChatAssistant from "@/components/ChatAssistant";

const AnalysisPage = () => {
  return (
    <div className="flex w-full h-full max-xl:flex-col-reverse max-xl:items-center max-md:gap-24">
      <LandingChatAssistant />
      <div className="w-1/2 h-full max-xl:w-[100%]">
        <WeatherCards />
      </div>
      <div className="w-1/2 h-full max-xl:w-[100%]">
        <Prediction />
      </div>
    </div>
  );
};

export default AnalysisPage;
