"use client"
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const LandingChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'model',
      parts: [{'text':'Hi there! 🫡\n\nI am ResQAI, your intelligent assistant. How can I help you today?'}],
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [typedMessages, setTypedMessages] = useState({});
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_ENDPOINT_CHAT_ASSISTANT = `https://landing-96420221158.us-central1.run.app/landing-chat`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Typewriter effect hook
  useEffect(() => {
    const typeMessage = (message, index) => {
      let currentLength = 0;
      const typeInterval = setInterval(() => {
        if (currentLength <= message.length) {
          setTypedMessages(prev => ({
            ...prev,
            [index]: message.slice(0, currentLength)
          }));
          currentLength++;
        } else {
          clearInterval(typeInterval);
        }
      }, 2); // Adjust typing speed here
    };

    // Find the last model message that needs typing
    const lastModelMessageIndex = messages.reduceRight((acc, msg, index) => {
      if (msg.role === 'model' && !(index in typedMessages)) {
        return index;
      }
      return acc;
    }, -1);

    if (lastModelMessageIndex !== -1) {
      typeMessage(messages[lastModelMessageIndex].parts[0]['text'], lastModelMessageIndex);
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { 
      role: 'user', 
      parts: [{'text': inputMessage}] 
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINT_CHAT_ASSISTANT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          query: inputMessage, 
          chat_history: messages
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const assistantResponse = { 
        role: 'model', 
        parts: [{'text':data.response}] 
      };

      setMessages(prev => [...prev, assistantResponse]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { 
        role: 'model', 
        parts: [{'text':'Sorry, there was an error processing your request. Please try again.'}] 
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceCommand = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 transform transition-all duration-300">
      {isOpen ? (
        <div className="w-full max-w-[92vw] sm:max-w-[450px] h-[80vh] sm:h-[600px] bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-black/5 flex flex-col overflow-hidden">
          
          <div className="bg-black/90 text-white p-4 sm:p-5 flex justify-between items-center">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <img src={'/Chat.svg'} alt="Chat Icon" className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold tracking-wide">ResQAI</h2>
                <p className="text-xs sm:text-sm text-white/70">Your Intelligent Assistant</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full group transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 group-hover:rotate-90 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-br from-gray-50 to-gray-100 scrollbar-hide">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex items-end space-x-2 sm:space-x-3 ${
                  msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {msg.role === 'model' && (
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-black text-white rounded-full flex items-center justify-center">
                    <img src={'/Chat.svg'} alt="ResQAI" className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] p-3 sm:p-4 rounded-3xl text-sm shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-black text-white self-end' 
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
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
                    {msg.role === 'model' 
                      ? (typedMessages[index] || msg.parts[0]['text']) 
                      : msg.parts[0]['text']
                    }
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          
          <div className="p-4 sm:p-5 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <input
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask something about ResQAI..."
                className="flex-1 p-2 sm:p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className={`p-2 sm:p-3 rounded-full transition-all ${
                  isLoading || !inputMessage.trim()
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800 active:bg-gray-900'
                }`}
              >
                {isLoading ? (
                  <svg 
                    className="animate-spin h-5 w-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={handleVoiceCommand}
                className={`p-2 sm:p-3 rounded-full transition-all ${
                  isListening
                    ? 'bg-red-500 text-white'
                    : 'bg-black text-white hover:bg-gray-800 active:bg-gray-900'
                }`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3zm-7 8a7 7 0 0014 0h-2a5 5 0 01-10 0H3zm7 8a7 7 0 01-7-7H1a9 9 0 0018 0h-2a7 7 0 01-7 7z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-black border-4 border-blue-600 p-3 sm:p-4 rounded-full shadow-2xl hover:bg-gray-200 transition-all transform hover:scale-110 active:scale-95 group"
        >
          <img src={'/bot.svg'} alt="Chat Icon" className="h-10 w-10" />
        </button>
      )}
    </div>
  );
};

export default LandingChatAssistant;