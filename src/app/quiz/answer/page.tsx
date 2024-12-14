"use client";

import React, { useState } from "react";
// import { useRouter } from "next/router";
import { motion } from "framer-motion";

function AIAnswerPage() {
//   const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async () => {
    const aiFeedback = `Your answer: ${answer} - Great effort, but consider elaborating more on XYZ.`;
    setFeedback(aiFeedback);
    setIsSubmitted(true);
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
        <h1 className="text-2xl font-bold text-center mb-4">Submit Your Answer</h1>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            
            <div className="space-y-4">
              <p className="mt-4">{feedback}</p>
              <button
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setIsSubmitted(false)}
              >
                Try Again
              </button>
            </div>
          </motion.div>
        ) : (
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
             <div className="text-right mb-4">
              <p className="font-bold">Score: {score}</p>
            </div>
            <div className="mb-6 ">
              <h3 className="font-bold text-xl">
                Question {currentQuestionIndex + 1}/{quizData.length}
              </h3>
              <p className="m-5">{currentQuestion.question}</p>
            <textarea
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={5}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default AIAnswerPage;
