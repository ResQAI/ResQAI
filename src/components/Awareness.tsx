"use client";
import {marked} from 'marked';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Shield, 
  AlertTriangle, 
  RefreshCcw, 
  Radio, 
  Landmark, 
  Battery, 
  Loader2
} from 'lucide-react';
import Nav from './Navbar';

// Disaster Preparedness Measures Component
const PreparednessGuide = () => {
  const disasterPreparednessSteps = [
    {
      icon: Shield,
      title: "Emergency Kit Preparation",
      description: "Assemble a comprehensive emergency kit including first aid supplies, non-perishable food, water, medications, flashlights, batteries, and important documents in a waterproof container."
    },
    {
      icon: Radio,
      title: "Communication Strategy",
      description: "Establish a family communication plan. Identify an out-of-area contact, ensure everyone knows emergency contact numbers, and have backup communication methods like battery-powered radios."
    },
    {
      icon: Landmark,
      title: "Evacuation Planning",
      description: "Identify multiple evacuation routes from your home, workplace, and common areas. Create a meeting point for family members and have a backup shelter plan."
    },
    {
      icon: Battery,
      title: "Power and Utilities",
      description: "Learn how to shut off gas, electricity, and water. Keep portable chargers, extra batteries, and alternative power sources like solar chargers or generators."
    },
    {
      icon: Landmark,
      title: "Water and Food Security",
      description: "Store at least one gallon of water per person per day for 3-7 days. Keep non-perishable food that doesn't require cooking. Have water purification methods available."
    },
    {
      icon: Battery,
      title: "Medical Preparedness",
      description: "Maintain a well-stocked first aid kit. Keep prescription medications in a portable container. Learn basic first aid and CPR techniques."
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center text-primary">
        <Shield className="mr-3 text-primary" /> 
        Disaster Preparedness: Essential Measures
      </h2>
      <>
 
    
</>

      <div className="grid md:grid-cols-3 gap-4">
        {disasterPreparednessSteps.map((step, index) => (
          // <div  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-4">


            <div key={index} className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]" />
      <div className="relative z-10 mx-auto max-w-md">
        <div className='flex gap-5'>
        <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
        
           <step.icon className="h-10 w-10 text-white transition-all" size={24} />
        </span>
        <h3 className="font-bold text-xl mb-2 group-hover:text-white/90 text-primary">{step.title}</h3>
        </div>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>
          {step.description}
          </p>
        </div>
        
      </div>
    </div>
         
        ))}
      </div>
    </div>
  );
};

// Main Disaster Awareness Component
const DisasterAwarenessApp = () => {
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);

  // Refined case study prompts with more structured question format
  const prompt = `
  Write a detailed and engaging narrative about a significant natural disaster from the past. Choose one specific disaster, such as an earthquake, hurricane, flood, or wildfire, and focus on:
  
  1. Introduction:
     - Briefly introduce the disaster, including where and when it occurred and its impact on the affected region.
  
  2. Disaster Details:
     - Describe the nature and scale of the disaster, highlighting key events, damage caused, and challenges faced by affected communities.
  
  3. Government Response:
     - Explain how the government addressed the crisis during the initial response phase, such as evacuation efforts, resource distribution, and communication strategies.

  4. Community and NGO Actions:
     - Share the role of local communities, international organizations, and NGOs in mitigating the disaster's effects and providing aid.
  
  5. Recovery and Long-Term Measures:
    - Discuss recovery efforts, such as rebuilding infrastructure, supporting livelihoods, and implementing policies to prevent future disasters or improve preparedness.
  
  6. Key Learnings:
     - Highlight the lessons learned from this disaster and how they shaped disaster management practices.
  
  7. Conclusion:
     - Conclude with insights into what this disaster teaches about handling similar crises and improving global disaster management systems.
  
  Ensure the narrative is informative, thought-provoking, and structured to educate the reader on disaster management strategies. Use storytelling to make the narrative compelling and impactful.
  `;

  // Generate Case Study using Vertex AI API
  const generateCaseStudy = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/general', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: prompt })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.response) {
        setCurrentCaseStudy({
          title: "Dynamic Disaster Scenario",
          description: data.response
        });
      } else {
        throw new Error('No response from API');
      }
    } catch (err) {
      setError('Failed to generate case study. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

 


const readOutLoud = () => {
  if (currentCaseStudy && currentCaseStudy.description) {
    // Convert Markdown to plain text
    const plainTextDescription = marked(currentCaseStudy.description).replace(/<\/?[^>]+(>|$)/g, "");

    const speech = new SpeechSynthesisUtterance(plainTextDescription);
    speech.pitch = 1.2; // Adjust pitch (0 to 2)
    speech.rate = 1; // Adjust rate (0.1 to 10)
    speech.volume = 1; // Adjust volume (0 to 1)

    // Select a female voice if available
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      speech.voice = voices.find(voice => voice.name.includes('Female')) || voices[0];
    }

    window.speechSynthesis.speak(speech);
  }
};

  // Function to stop reading
  const stopListening = () => {
    window.speechSynthesis.cancel();
    setIsListening(false);
  };

  return (
    <div className="w-full min-h-screen  ">
      <Nav/>
      <div className="bg-white   mx-auto p-8 ">
        <div className=" border-b-2  mt-16  flex items-center space-x-4">
          <AlertTriangle className="text-orange-500 w-8 h-8" />
          <h2 className="text-2xl font-bold text-gray-800">Disaster Readiness Challenge</h2>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Preparedness Guide */}
          <PreparednessGuide />

          {/* Case Study Generation */}
          <div className="text-center">
            <button 
              onClick={generateCaseStudy} 
              className="mx-auto   flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 shadow-md hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> 
                  Generating Scenario...
                </>
              ) : (
                <>
                  <RefreshCcw className="mr-2 h-5 w-5" /> 
                  Generate New Scenario
                </>
              )}
            </button>

            {error && (
              <div className="mt-4 text-red-500 text-center font-medium">
                {error}
              </div>
            )}

            {currentCaseStudy && (
              <div className="mt-6 p-6 bg-gray-100 rounded-xl text-left border border-gray-200 shadow-inner">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Narrative Disaster Case Study</h3>
                <div className="prose prose-gray max-w-none">
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
                      p: ({ children }) => (
                        <p className="mb-2">{children}</p>
                      ),
                    }}
                  >
                    {currentCaseStudy.description}
                  </ReactMarkdown>
                </div>

                <div className="mt-4 flex space-x-4 justify-center">
                  <button 
                    onClick={readOutLoud} 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  >
                    {isListening ? 'Continue Listening' : 'Listen to Scenario'}
                  </button>

                  {isListening && (
                    <button 
                      onClick={stopListening} 
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Stop Listening
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DisasterAwarenessApp;
