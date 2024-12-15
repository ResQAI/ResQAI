"use client";
import React, { useState } from "react";
// import { useRouter } from "next/router";
import { motion } from "framer-motion";

function QuizPage() {

    // const router = useRouter();
  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const quizData: Question[] = [
    {
      question: "What is the primary objective of disaster management?",
      options: ["Rescue operations", "Preventing disasters", "Mitigating disaster impact", "Evacuating cities"],
      correctAnswer: "Mitigating disaster impact",
    },
    {
      question: "Which of the following is a natural disaster?",
      options: ["Oil spill", "Hurricane", "Chemical explosion", "Forest fire due to negligence"],
      correctAnswer: "Hurricane",
    },
    {
      question: "What is the first step in disaster preparedness?",
      options: ["Evacuation", "Risk assessment", "Fundraising", "Building shelters"],
      correctAnswer: "Risk assessment",
    },
    {
      question: "Which organization is primarily responsible for disaster response globally?",
      options: ["World Health Organization", "Red Cross", "United Nations", "World Bank"],
      correctAnswer: "Red Cross",
    },
    {
      question: "What is the safest action during an earthquake?",
      options: ["Run outside", "Hide under a sturdy table", "Stand near windows", "Use elevators"],
      correctAnswer: "Hide under a sturdy table",
    },
    {
      question: "What scale is used to measure the magnitude of earthquakes?",
      options: ["Richter Scale", "Beaufort Scale", "Fujita Scale", "Mercalli Scale"],
      correctAnswer: "Richter Scale",
    },
    {
      question: "Which of these is a mitigation strategy for floods?",
      options: ["Building levees", "Evacuation drills", "Stockpiling food", "Using sandbags during floods"],
      correctAnswer: "Building levees",
    },
    {
      question: "What is a cyclone called in the North Atlantic region?",
      options: ["Typhoon", "Cyclone", "Hurricane", "Tornado"],
      correctAnswer: "Hurricane",
    },
    {
      question: "Which of the following is an early warning system for tsunamis?",
      options: ["Seismic activity sensors", "Weather satellites", "Rainfall measurements", "Ocean temperature monitors"],
      correctAnswer: "Seismic activity sensors",
    },
    {
      question: "What is the purpose of a disaster recovery plan?",
      options: ["To prevent disasters", "To rebuild and restore", "To rescue victims", "To provide immediate relief"],
      correctAnswer: "To rebuild and restore",
    },
  ];
  
  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 10);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleShare = () => {
    const shareText = `Hey! I participated in the ResQAI quiz and scored ${score}/100. You can also take the quiz here: https://your-site-link.com`;

    // Check if the browser supports the navigator.share API
    if (navigator.share) {
      navigator
        .share({
          title: "ResQAI Quiz",
          text: shareText,
          url: "https://your-site-link.com",
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      // Fallback: Open a Twitter share link in a new tab
      const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}`;
      window.open(twitterUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <a
        className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        // onClick={() => router.push("/")
        href="/"
      >
        Go Back
      </a>
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Disaster Management Quiz</h1>
        {isQuizFinished ? 
        (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="mt-4 text-lg">Your Score: {score}/100</p>
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleShare}
            >
              Share Your Score
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-right mb-4">
              <p className="font-bold">Score: {score}</p>
            </div>
            <div className="mb-6 text-center">
              <h3 className="font-bold text-xl">
                Question {currentQuestionIndex + 1}/{quizData.length}
              </h3>
              <p>{currentQuestion.question}</p>
            </div>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full px-4 py-2 border rounded-lg text-left transition ${
                    selectedOption
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-200"
                        : option === selectedOption
                        ? "bg-red-200"
                        : ""
                      : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleOptionClick(option)}
                  disabled={!!selectedOption}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOption && (
              <button
                className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;