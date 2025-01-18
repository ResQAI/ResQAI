"use client";
import Nav from "@/components/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  // State for username, password, and error message
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();

  // Function to handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Invalid username or password.");
      }
      setIsLoggedIn(true);
      const data = await res.json();

      router.push("/national/home");

      setError(""); // Reset error
    } catch (error) {
      setError("Invalid username or password.");
    }
  };
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Nav />
      {/* Left Section */}
      <div className="lg:flex md:flex md:flex-col hidden w-full md:w-1/2 bg-gradient-to-tr from-blue-200 to-blue-600 justify-around items-center lg:p-6 md:p-2">
        <div className="lg:p-12 md:p-12 flex-col flex text-center">
          <h1 className="text-white font-bold text-4xl mb-8 font-sans">
            ResQAI Mission
          </h1>
          <p className=" mt-3 text-xl mb-10 px-5">
            Leveraging AI to revolutionize disaster management and provide
            real-time assistance during emergencies. Our mission is to save
            lives and mitigate risks with cutting-edge technology.
          </p>
          <ul className="lg:grid lg:grid-cols-2 md:hidden mt-4 gap-5 text-xl text-left list-disc ml-12">
            <li> Real-time disaster tracking and updates</li>
            <li> AI-powered risk assessment and resource allocation</li>
            <li> Seamless communication and coordination during crises</li>
            <li>Actionable insights for better preparedness</li>
          </ul>

          <button
            type="button"
            className="block w-36 mx-auto bg-blue-600 text-white mt-12 py-3 text-lg rounded-2xl font-bold mb-4 hover:bg-blue-700 transition duration-200"
          >
            <a href="/#features" className="block w-full h-full">
              Learn More
            </a>
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex h-full w-full lg:w-1/2 md:w-1/2 justify-center items-center bg-slate-100 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          {isLoggedIn ? (
            <div className="text-center">
              <h3 className="text-blue-500 font-semibold text-lg">
                Shifting you to dashboard......
              </h3>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Hello Again!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-7">
                Welcome Back
              </p>

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
