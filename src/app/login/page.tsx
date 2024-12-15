"use client";
import Nav from "@/components/Navbar";
import React, { useState } from "react";
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  
  // State for username, password, and error message
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  // Function to handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    setError(""); // Reset error
  
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      router.push("/national/home"); // Redirect on successful login
    } else {
      setError("Invalid username or password.");
    }}
  return (
    <div className="h-screen flex flex-col md:flex-row">
        <Nav/>
      {/* Left Section */}
      <div className="flex w-full md:w-1/2 bg-gradient-to-tr from-blue-200 to-blue-600 justify-around items-center p-6">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">ResQAI</h1>
          <p className="text-gray-700 mt-1">The most popular peer-to-peer lending platform</p>
          <button
            type="button"
            className="block w-28 bg-blue-500 text-white mt-4 py-2 rounded-2xl font-bold mb-2 hover:bg-blue-600"
          >
            Read More
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-slate-100 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          {isLoggedIn ? (
            <div className="text-center">
              <h3 className="text-blue-500 font-semibold text-lg">Welcome, Admin!</h3>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                className="block w-full bg-blue-500 text-white mt-4 py-2 rounded-2xl font-semibold hover:bg-blue-600"
              >
                Login
              </button>
              <span className="text-sm mt-2 block text-center text-blue-500 cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
