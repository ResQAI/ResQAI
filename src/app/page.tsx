"use client";
import Nav from "@/components/Navbar";
import LandingChatAssistant from "@/components/ChatAssistant"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";



export default function Home() {

  const teamMembers = [
    {
        name: "Abhay Dixit",
        img: "https://ayurguru.vercel.app/assets/w3-D2UE32XB.png",
        role: "AI Developer",
        // description: "Visionary leader driving innovation and strategic growth.",
        linkedin: "https://www.linkedin.com/in/abhay-dixit-546b85254/",
        github: "https://github.com/abhaydixit07",
    },
    {
        name: "Khagesh Sharma",
        img: "https://ayurguru.vercel.app/assets/w2--Nxxim4A.png",
        role: "DevOps Expert ",
        // description: "Technical mastermind transforming complex challenges.",
        linkedin: "https://www.linkedin.com/in/khageshsharma",
        github: "https://github.com/khagesh2409",
    },
    {
        name: "Shaurya Gupta",
        img: "https://ayurguru.vercel.app/assets/w1-BqHjM9pj.png",
        role: "Full Stack Developer",
        // description: "Innovation catalyst with a passion for user-centric design.",
        linkedin: "https://www.linkedin.com/in/shaurya--gupta",
        github: "https://github.com/CodeByShaurya",
    },
    {
      name: "Shreyas Dharmvans",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGTmqFzsyxRzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720636262644?e=1739404800&v=beta&t=D7rH-59ouPkgFsid1Z-Q7HvDuI-1gsGKW6lKzvuNlMk",
      role: "Full Stack Developer",
      // description: "Innovation catalyst with a passion for user-centric design.",
      linkedin: "https://www.linkedin.com/in/shreyas-d20/",
      github: "https://github.com/shreyasD-24",
  },
];


  return (
    <div>
      <LandingChatAssistant />
      <div>
        <Nav/>
       
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 space-x-24 opacity-40 "
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-primary " />
        <div className="blur-[100px] h-56 bg-primary " />
          
          {/* <div className="blur-[100px] h-32 bg-indigo-500 " /> */}
        </div>

        <div className="max-w-7xl  mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 ddkktext-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Destroying a world with{" "}
                <span className="text-primary ddkktext-white">ResQAI</span>
              </h1>
              <p className="mt-8 text-gray-700 ddkktext-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                nam itaque sed eius modi error totam sit illum. Voluptas doloribus
                asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
              </p>
              <div className="mt-16 flex flex-wrap  justify-center gap-y-4 gap-x-6">
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 rounded-full  transition duration-300 hover:scale-105 bg-primary  sm:w-max"
                >
                  <span className="relative text-white  font-semibold text-white">
                    Get started
                  </span>
                </a>
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full border border-transparent bg-purple-50  transition duration-300 hover:scale-105 active:duration-75 active:scale-95 ddkkborder-gray-700 ddkkbg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary ddkktext-white">
                    Learn more
                  </span>
                </a>
              </div>
              <div className="hidden py-8 mt-10 border-y border-gray-100 ddkkborder-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 ddkktext-white">
                    The lowest price
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 ddkktext-white">
                    The fastest on the market
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 ddkktext-white">
                    The most loved
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center space-y-12"
                >
          <div className="mt-24">
            {/* component */}
            <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
              More Than 10 Years We Provide Service <br className="md:block hidden" />
              in <span className="text-primary">Real State Industry</span>
            </h1>
            <div className="md:mt-14 m-4 relative sm:flex items-center justify-center">
              <img
                src="https://i.ibb.co/KjrPCyW/map.png"
                alt="world map image"
                className="  h-96 object-cover object-fill sm:block hidden"
              />
              <img
                src="https://i.ibb.co/SXKj9Mf/map-bg.png"
                alt="mobile-image"
                className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
              />
              <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                <p className="text-3xl font-semibold text-primary">20K+</p>
                <p className="text-base leading-4 xl:mt-4 mt-2 text-primary">
                  Recently Property Listed
                </p>
              </div>
              <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                <p className="text-3xl font-semibold text-primary">8K+</p>
                <p className="text-base leading-4 xl:mt-4 mt-2 text-primary">
                  Active Listening
                </p>
              </div>
              <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                <p className="text-3xl font-semibold text-primary">15K+</p>
                <p className="text-base leading-4 xl:mt-4 mt-2 text-primary">
                  Recently Sold Lands
                </p>
              </div>
              {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            </div>
          </div>
          </motion.div>


          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-primary">819</h6>
                <p className="mb-2 font-bold text-primary text-md">Downloads</p>
                <p className="">
                  It’s something that’s many of the wisest people in history have kept in
                  mind.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-primary">1.3K</h6>
                <p className="mb-2 font-bold text-primary text-md">Users</p>
                <p className="text-gray-700">
                  For many men, the acquisition of wealth does not end their troubles, it
                  only changes them.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-primary">91</h6>
                <p className="mb-2 font-bold text-md text-primary">Subscribers</p>
                <p className="text-gray-700">
                  It's a helluva start, being able to recognize what makes you happy
                  today, in this moment.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <svg
                    className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="text-4xl font-bold text-primary">52</h6>
                <p className="mb-2 font-bold text-md text-primary">Products</p>
                <p className="text-gray-700">
                  Happiness is when what you think, what you say, and what you do are in
                  harmony.
                </p>
              </div>
            </div>
          </div>



        {/* <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative">
            <h1 className="text-center text-5xl font-bold text-blue-900 ddkktext-white sm:text-6xl lg:text-left lg:text-7xl">
              Design, Build,
              <span className="relative">
                <svg
                  className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  viewBox="0 0 260 15.6"
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .st0 {\n    fill: #957fef\n}\n                                "
                    }}
                  />
                  <path
                    className="st0"
                    d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
                  />
                  <path
                    className="st0"
                    d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
                  />
                  <path
                    className="st0"
                    d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
                  />
                </svg>
                <span className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-blue-500  ddkkfrom-primaryLight ddkkto-secondaryLight md:px-2">
                  Scale
                </span>
              </span>
            </h1>
            <div className="relative items-center gap-12 lg:flex">
              <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
                <p className="mt-12 text-lg text-gray-600 ddkktext-gray-300 sm:text-xl">
                  Computers used to be magical. But much of that magic has been lost
                  over time, replaced by subpar tools and practices that slow teams down
                  and hold great work back.
                </p>
                <form action="" className="mt-12">
                  <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 ddkkborder-white/10 ddkkbg-dark ddkktext-white md:p-2 lg:pr-3">
                    <div className="py-3 pl-4 lg:pl-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto h-6 w-6 fill-gray-500 ddkkfill-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      aria-label="your email"
                      autoComplete="email"
                      placeholder="Your mail address"
                      className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none ddkkplaceholder-white"
                      type="email"
                    />
                    <div className="md:pr-1.5 lg:pr-0">
                      <button
                        type="submit"
                        title="Start buying"
                        className="relative ml-auto h-12 w-16 absolute inset-0 rounded-full bg-primary transition duration-300 active:duration-75 active:scale-95 ddkkbg-primaryLight sm:w-auto sm:px-6"
                      >
                        <span className="relative hidden w-max font-semibold text-white ddkktext-gray-900 md:block">
                          {" "}
                          Get Started{" "}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="relative mx-auto h-6 w-6 text-white ddkktext-gray-900 md:hidden"
                        >
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-12 hidden lg:block">
                  <span className="text-gray-700 ddkktext-white">
                    From the most talented{" "}
                    <a
                      href="customers.html"
                      className="text-primary underline ddkktext-primaryLight"
                    >
                      Team
                    </a>{" "}
                    !
                  </span>
                  
                </div>
              </div>
              <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
                <img
                  className="w-full"
                  src="https://ampire.netlify.app/images/team.svg"
                  alt="team illustration"
                  height={600}
                  width={800}
                />
              </div>
            </div>
           
          </div>
        </div> */}

        <section className=" flex item-center justify-center  pt-[110px]">
          <div className=" ">
          <div className="">
            <div
              className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
              data-wow-delay=".2s"
              style={{ visibility: "visible", animationDelay: "0.2s" }}
            >
              <h2 className="mb-4 text-3xl font-bold text-black ddkktext-white sm:text-4xl md:text-[44px] md:leading-tight">
                Amazing features for to make your <span className="text-primary"> work easier</span>
              </h2>
              <p className="text-base text-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
                tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
                maximus.
              </p>
            </div>
          </div>
          <div className="">
            <div className="rounded-2xl bg-white px-5 mx-14 pt-5 pb-14 shadow-card d md:pb-1   xl:px-10">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow rounded-xl border p-10 shadow-xl  group mx-auto mb-[50px] max-w-[310px] text-center"
                    data-wow-delay=".2s"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray  duration-300 text-primary duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_28_4)">
                          <path
                            d="M22 3.66675C32.1255 3.66675 40.3333 11.8746 40.3333 22.0001C40.3333 32.1256 32.1255 40.3334 22 40.3334C11.8745 40.3334 3.66666 32.1256 3.66666 22.0001C3.66666 11.8746 11.8745 3.66675 22 3.66675ZM22 7.33341C18.1101 7.33341 14.3796 8.87865 11.6291 11.6292C8.87856 14.3797 7.33332 18.1102 7.33332 22.0001C7.33332 25.8899 8.87856 29.6204 11.6291 32.371C14.3796 35.1215 18.1101 36.6667 22 36.6667C25.8898 36.6667 29.6204 35.1215 32.3709 32.371C35.1214 29.6204 36.6667 25.8899 36.6667 22.0001C36.6667 18.1102 35.1214 14.3797 32.3709 11.6292C29.6204 8.87865 25.8898 7.33341 22 7.33341ZM16.1755 28.1289L14.7272 30.6406C14.6282 30.8125 14.4964 30.9632 14.3392 31.0842C14.182 31.2051 14.0025 31.2939 13.811 31.3455C13.6194 31.3971 13.4196 31.4104 13.2229 31.3848C13.0263 31.3592 12.8366 31.295 12.6647 31.1961C12.4928 31.0971 12.342 30.9653 12.2211 30.8081C12.1001 30.6509 12.0113 30.4714 11.9597 30.2799C11.9082 30.0884 11.8948 29.8886 11.9204 29.6919C11.9461 29.4952 12.0102 29.3055 12.1092 29.1336L13.189 27.2709C14.399 26.8932 15.3908 27.1829 16.1755 28.1289ZM24.2183 15.8767L28.6605 23.5657H32.5857C32.7838 23.565 32.9802 23.6035 33.1635 23.6789C33.3468 23.7544 33.5133 23.8653 33.6535 24.0054C33.7938 24.1455 33.9049 24.3119 33.9806 24.495C34.0563 24.6782 34.095 24.8746 34.0945 25.0727C34.0952 25.2711 34.0567 25.4676 33.9811 25.651C33.9055 25.8344 33.7944 26.001 33.6542 26.1413C33.5139 26.2815 33.3473 26.3926 33.1639 26.4682C32.9805 26.5438 32.784 26.5823 32.5857 26.5816H30.404L31.8762 29.1317C32.0627 29.4778 32.107 29.8829 31.9996 30.2611C31.8922 30.6393 31.6416 30.9607 31.3011 31.1572C30.9605 31.3536 30.5568 31.4095 30.1757 31.313C29.7946 31.2166 29.4661 30.9753 29.26 30.6406L23.6867 20.9862C22.4217 18.8046 23.3237 16.6174 24.2183 15.8767ZM24.728 10.2961C25.4522 10.7104 25.696 11.6344 25.2817 12.3586L18.8137 23.5584H23.4942C25.0085 23.5584 25.8592 25.3404 25.201 26.5742H11.4877C11.2895 26.5747 11.0931 26.536 10.91 26.4603C10.7268 26.3847 10.5604 26.2735 10.4203 26.1333C10.2803 25.9931 10.1693 25.8265 10.0939 25.6433C10.0184 25.46 9.97993 25.2636 9.98066 25.0654C9.98017 24.8674 10.0188 24.6712 10.0944 24.4881C10.1699 24.3051 10.2809 24.1388 10.421 23.9987C10.561 23.8587 10.7273 23.7477 10.9104 23.6721C11.0934 23.5966 11.2896 23.5579 11.4877 23.5584H15.3322L20.2547 15.0279L18.7183 12.3586C18.5318 12.0125 18.4875 11.6074 18.5949 11.2292C18.7023 10.851 18.9528 10.5296 19.2934 10.3332C19.6339 10.1368 20.0376 10.0808 20.4188 10.1773C20.7999 10.2738 21.1284 10.515 21.3345 10.8497L21.9927 12.0102L22.6655 10.8497C22.7644 10.6779 22.8963 10.5271 23.0536 10.4063C23.2108 10.2854 23.3904 10.1967 23.5819 10.1453C23.7735 10.0938 23.9733 10.0807 24.17 10.1066C24.3666 10.1325 24.5562 10.1968 24.728 10.2961Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_28_4">
                            <rect width={44} height={44} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-black ddkktext-white sm:text-[22px] xl:text-[26px]">
                      Crafted for App Landing
                    </h3>
                    <p className="text-base text-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      convallis tortor.
                    </p>
                  </div>
                </div>


                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow rounded-xl border p-10 shadow-xl   fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                    data-wow-delay=".3s"
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white  ">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_211_934)">
                          <path
                            d="M23.2007 4.24461L38.2241 13.2576C38.3511 13.3337 38.4562 13.4413 38.5292 13.5701C38.6022 13.6989 38.6406 13.8444 38.6406 13.9924C38.6406 14.1405 38.6022 14.286 38.5292 14.4147C38.4562 14.5435 38.3511 14.6512 38.2241 14.7272L22.3203 24.2695L6.41652 14.7272C6.28951 14.6512 6.18437 14.5435 6.11137 14.4147C6.03837 14.286 6 14.1405 6 13.9924C6 13.8444 6.03837 13.6989 6.11137 13.5701C6.18437 13.4413 6.28951 13.3337 6.41652 13.2576L21.4382 4.24461C21.7046 4.08456 22.0095 4 22.3203 4C22.6311 4 22.936 4.08456 23.2024 4.24461H23.2007Z"
                            fill="currentColor"
                          />
                          <path
                            d="M36.1653 19.9874L38.2241 21.2224C38.3512 21.2984 38.4563 21.4061 38.5293 21.5349C38.6023 21.6637 38.6407 21.8092 38.6407 21.9572C38.6407 22.1052 38.6023 22.2507 38.5293 22.3795C38.4563 22.5083 38.3512 22.616 38.2241 22.692L22.3204 32.2343L6.41658 22.692C6.28956 22.616 6.18443 22.5083 6.11143 22.3795C6.03843 22.2507 6.00005 22.1052 6.00005 21.9572C6.00005 21.8092 6.03843 21.6637 6.11143 21.5349C6.18443 21.4061 6.28956 21.2984 6.41658 21.2224L8.47542 19.9874L22.3204 28.2947L36.1653 19.9874ZM36.1653 28.0378L38.2241 29.2728C38.3512 29.3488 38.4563 29.4565 38.5293 29.5853C38.6023 29.714 38.6407 29.8595 38.6407 30.0076C38.6407 30.1556 38.6023 30.3011 38.5293 30.4299C38.4563 30.5587 38.3512 30.6664 38.2241 30.7424L23.2025 39.7554C22.9361 39.9154 22.6311 40 22.3204 40C22.0096 40 21.7046 39.9154 21.4382 39.7554L6.41658 30.7424C6.28956 30.6664 6.18443 30.5587 6.11143 30.4299C6.03843 30.3011 6.00005 30.1556 6.00005 30.0076C6.00005 29.8595 6.03843 29.714 6.11143 29.5853C6.18443 29.4565 6.28956 29.3488 6.41658 29.2728L8.47542 28.0378L22.3204 36.3451L36.1653 28.0378Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_211_934">
                            <rect width={44} height={44} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold  ddkktext-white sm:text-[22px] xl:text-[26px]">
                      High-quality Design
                    </h3>
                    <p className="text-base text-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      convallis tortor.
                    </p>
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                    data-wow-delay=".4s"
                    style={{ visibility: "visible", animationDelay: "0.4s" }}
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 text-primary duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_211_971)">
                          <path
                            d="M25.3333 37H8.66667C8.22464 37 7.80072 36.8244 7.48816 36.5118C7.17559 36.1993 7 35.7754 7 35.3333V18.6667H25.3333V37ZM37 15.3333H7V8.66667C7 8.22464 7.17559 7.80072 7.48816 7.48816C7.80072 7.17559 8.22464 7 8.66667 7H35.3333C35.7754 7 36.1993 7.17559 36.5118 7.48816C36.8244 7.80072 37 8.22464 37 8.66667V15.3333Z"
                            fill="currentColor"
                          />
                          <path
                            d="M28.6667 37V18.6667H37V35.3333C37 35.7754 36.8244 36.1993 36.5118 36.5118C36.1993 36.8244 35.7754 37 35.3333 37H28.6667Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_211_971">
                            <rect width={44} height={44} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-black ddkktext-white sm:text-[22px] xl:text-[26px]">
                      All Essential Sections
                    </h3>
                    <p className="text-base text-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      convallis tortor.
                    </p>
                  </div>
                </div>


                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                    data-wow-delay=".2s"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 text-primary duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_211_962)">
                          <path
                            d="M22.0001 3.66675C32.1256 3.66675 40.3334 11.8746 40.3334 22.0001C40.3334 32.1256 32.1256 40.3334 22.0001 40.3334C11.8746 40.3334 3.66675 32.1256 3.66675 22.0001C3.66675 11.8746 11.8746 3.66675 22.0001 3.66675ZM22.0001 7.33341C13.9004 7.33341 7.33341 13.9004 7.33341 22.0001C7.33341 30.0997 13.9004 36.6667 22.0001 36.6667C30.0997 36.6667 36.6667 30.0997 36.6667 22.0001C36.6667 13.9004 30.0997 7.33341 22.0001 7.33341ZM29.7771 11.6289L32.3712 14.2212L25.5439 21.0522C25.6246 21.3547 25.6667 21.6719 25.6667 22.0001C25.6667 24.0259 24.0259 25.6667 22.0001 25.6667C19.9742 25.6667 18.3334 24.0259 18.3334 22.0001C18.3334 19.9742 19.9742 18.3334 22.0001 18.3334C22.3282 18.3334 22.6454 18.3756 22.9479 18.4562L29.7789 11.6289H29.7771Z"
                            fill="currentColor"
                          />
                          <path
                            d="M22 9.16671C23.8664 9.16671 25.6392 9.56454 27.2397 10.2814L24.3742 13.145C23.617 12.9434 22.8214 12.8334 22 12.8334C16.9382 12.8334 12.8334 16.9382 12.8334 22C12.8334 24.53 13.86 26.8217 15.5174 28.4827L12.925 31.075L12.639 30.7799C10.4867 28.4845 9.16671 25.3954 9.16671 22C9.16671 14.9124 14.9124 9.16671 22 9.16671ZM33.7187 16.7622C34.4337 18.3609 34.8334 20.1355 34.8334 22C34.8334 25.5439 33.396 28.7522 31.075 31.075L28.4827 28.4827C30.14 26.8217 31.1667 24.53 31.1667 22C31.1667 21.1787 31.0585 20.383 30.855 19.6259L33.7187 16.7622Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_211_962">
                            <rect width={44} height={44} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-black ddkktext-white sm:text-[22px] xl:text-[26px]">
                      Speed Optimized
                    </h3>
                    <p className="text-base text-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      convallis tortor.
                    </p>
                  </div>
                </div>


                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                    data-wow-delay=".3s"
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 text-primary duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_211_943)">
                          <path
                            d="M11.2535 28.9978C11.5633 28.1197 12.1379 27.3593 12.898 26.8215C13.6581 26.2837 14.5663 25.9949 15.4974 25.9949C16.4286 25.9949 17.3368 26.2837 18.0969 26.8215C18.857 27.3593 19.4316 28.1197 19.7414 28.9978H34.9927V31.9971H19.7414C19.4316 32.8751 18.857 33.6355 18.0969 34.1733C17.3368 34.7112 16.4286 35 15.4974 35C14.5663 35 13.6581 34.7112 12.898 34.1733C12.1379 33.6355 11.5633 32.8751 11.2535 31.9971H5V28.9978H11.2535ZM20.2513 18.5004C20.5611 17.6223 21.1357 16.8619 21.8958 16.3241C22.6559 15.7862 23.5641 15.4974 24.4952 15.4974C25.4264 15.4974 26.3346 15.7862 27.0947 16.3241C27.8548 16.8619 28.4294 17.6223 28.7392 18.5004H34.9927V21.4996H28.7392C28.4294 22.3777 27.8548 23.1381 27.0947 23.6759C26.3346 24.2138 25.4264 24.5026 24.4952 24.5026C23.5641 24.5026 22.6559 24.2138 21.8958 23.6759C21.1357 23.1381 20.5611 22.3777 20.2513 21.4996H5V18.5004H20.2513ZM11.2535 8.00294C11.5633 7.12486 12.1379 6.36449 12.898 5.82666C13.6581 5.28882 14.5663 5 15.4974 5C16.4286 5 17.3368 5.28882 18.0969 5.82666C18.857 6.36449 19.4316 7.12486 19.7414 8.00294H34.9927V11.0022H19.7414C19.4316 11.8803 18.857 12.6407 18.0969 13.1785C17.3368 13.7163 16.4286 14.0051 15.4974 14.0051C14.5663 14.0051 13.6581 13.7163 12.898 13.1785C12.1379 12.6407 11.5633 11.8803 11.2535 11.0022H5V8.00294H11.2535Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_211_943">
                            <rect width={40} height={40} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-black ddkktext-white sm:text-[22px] xl:text-[26px]">
                      Fully Customizable
                    </h3>
                    <p className="text-base text-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      convallis tortor.
                    </p>
                  </div>
                </div>


                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                    data-wow-delay=".4s"
                    style={{ visibility: "visible", animationDelay: "0.4s" }}
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 text-primary duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_211_982)">
                          <path
                            d="M10.0155 8.12727C13.3422 5.24464 17.5981 3.66062 22 3.66677C32.1255 3.66677 40.3333 11.8746 40.3333 22.0001C40.3333 25.9161 39.105 29.5461 37.015 32.5234L31.1667 22.0001H36.6667C36.6669 19.1247 35.822 16.3127 34.2369 13.9137C32.6518 11.5147 30.3965 9.63456 27.7515 8.50699C25.1064 7.37943 22.1883 7.05422 19.3599 7.5718C16.5315 8.08938 13.9177 9.42691 11.8433 11.4181L10.0155 8.12727Z"
                            fill="currentColor"
                          />
                          <path
                            d="M33.9845 35.8729C30.6578 38.7555 26.4018 40.3396 22 40.3334C11.8745 40.3334 3.66663 32.1256 3.66663 22.0001C3.66663 18.0841 4.89496 14.4541 6.98496 11.4767L12.8333 22.0001H7.33329C7.33306 24.8754 8.178 27.6874 9.76308 30.0864C11.3481 32.4854 13.6034 34.3656 16.2485 35.4932C18.8935 36.6207 21.8117 36.946 24.64 36.4284C27.4684 35.9108 30.0823 34.5733 32.1566 32.5821L33.9845 35.8729Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_211_982">
                            <rect width={44} height={44} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-black ddkktext-white sm:text-[22px] xl:text-[26px]">
                      Regular Updates
                    </h3>
                    <p className="text-base text-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      convallis tortor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Graphics */}
          <div className="absolute top-0 right-0 -z-10">
            <svg
              width={602}
              height={1154}
              viewBox="0 0 602 1154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.25" filter="url(#filter0_f_26_84)">
                <circle cx={577} cy={577} r={317} fill="url(#paint0_linear_26_84)" />
              </g>
              <defs>
                <filter
                  id="filter0_f_26_84"
                  x={0}
                  y={0}
                  width={1154}
                  height={1154}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={130}
                    result="effect1_foregroundBlur_26_84"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_26_84"
                  x1="183.787"
                  y1={894}
                  x2="970.173"
                  y2="346.491"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8EA5FE" />
                  <stop offset="0.541667" stopColor="#BEB3FD" />
                  <stop offset={1} stopColor="#90D1FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute left-0 -bottom-1/2 -z-10 hidden md:block">
            <svg
              width={622}
              height={1236}
              viewBox="0 0 622 1236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2" filter="url(#filter0_f_26_85)">
                <circle cx={4} cy={618} r={368} fill="url(#paint0_linear_26_85)" />
              </g>
              <defs>
                <filter
                  id="filter0_f_26_85"
                  x={-614}
                  y={0}
                  width={1236}
                  height={1236}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={125}
                    result="effect1_foregroundBlur_26_85"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_26_85"
                  x1={-364}
                  y1={250}
                  x2="506.12"
                  y2="754.835"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8FE8" />
                  <stop offset={1} stopColor="#FFC960" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          </div>
        </section>


        {/* <section className=" flex item-center justify-center bg-white py-16 md:mt-10">
          <div className="container max-w-screen-xl mx-auto px-4">
            <p className="font-light text-gray-500 text-lg md:text-xl text-center uppercase mb-6">
              Our features
            </p>
            <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-10">
              We believe we can save <br />
              more life with you
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 py-6 flex justify-center bg-blue-200 bg-opacity-30 text-blue-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-globe"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={2} y1={12} x2={22} y2={12} />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                  Transparent
                </h4>
                <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                  Donations and distributions can be seen transparently
                </p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 py-6 flex justify-center bg-blue-200 bg-opacity-30 text-blue-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-up-right"
                    >
                      <line x1={7} y1={17} x2={17} y2={7} />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                  Quick Fundraise
                </h4>
                <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                  The simple and quickest way to make a donation
                </p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 py-6 flex justify-center bg-blue-200 bg-opacity-30 text-blue-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-clock"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                  Real Time
                </h4>
                <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                  Reports related to donations and distribution are updated directly
                </p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* container.// 
        </section> */}



        {/* <section className="bg-white py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between space-x-16">
              <div className="flex justify-center w-[600px] lg:justify-start">
                <img src="https://img.freepik.com/free-vector/volunteers-collecting-goods-charity-into-huge-donation-box-donating-coins-into-jar-donation-charity-donation-funds-gift-kind-concept-pinkish-coral-bluevector-isolated-illustration_335657-1387.jpg?t=st=1734072181~exp=1734075781~hmac=4213e375b4a9972199cd17533446f215961bfaa9314d6f9b65244c93e9257f9c&w=900" alt="Image" />
              </div>
              <div className="mt-16">
                <h1 className="font-semibold text-gray-900 text-xl md:text-4xl mb-20">
                  You can help lots of people by <br />
                  donating
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-16">
                  <div className="mb-5 md:mb-0">
                    <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-sun text-info"
                      >
                        <circle cx={12} cy={12} r={5} />
                        <line x1={12} y1={1} x2={12} y2={3} />
                        <line x1={12} y1={21} x2={12} y2={23} />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1={1} y1={12} x2={3} y2={12} />
                        <line x1={21} y1={12} x2={23} y2={12} />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                      10000+
                    </h3>
                    <p className="font-light text-gray-400 text-md md:text-lg">
                      Fundraising campaign in <br />
                      all time
                    </p>
                  </div>
                  <div>
                    <div className="w-20 py-6 flex justify-center bg-red-500 bg-opacity-5 rounded-xl mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-award text-red-500"
                      >
                        <circle cx={12} cy={8} r={7} />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                      $120M+
                    </h3>
                    <p className="font-light text-gray-400 text-md md:text-lg">
                      Raised and counting <br />
                      donations in all time
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20">
                  <div className="mb-5 md:mb-0">
                    <div className="w-20 py-6 flex justify-center bg-yellow-500 bg-opacity-5 rounded-xl mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-users text-yellow-500"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                      1200+
                    </h3>
                    <p className="font-light text-gray-400 text-md md:text-lg">
                      Our volunteer around the <br />
                      world
                    </p>
                  </div>
                  <div>
                    <div className="w-20 py-6 flex justify-center bg-green-500 bg-opacity-5 rounded-xl mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trending-up text-green-500"
                      >
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                      98%
                    </h3>
                    <p className="font-light text-gray-400 text-md md:text-lg">
                      Positive review from <br />
                      public
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* container.// 
        </section> */}


        

        

<>
 
            <section className="bg-white py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                  Quiz
                </h2>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                </div>
                <div className="flex flex-wrap">
                  <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                      ipsum eu nunc commodo posuere et sit amet ligula.
                      <br />
                      <br />
                      Images from:
                      <a className="text-pink-500 underline" href="http://localhost:3000/quiz/options">
                        undraw.co
                      </a>
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 p-6">
                    {/* <svg
                      className="w-full sm:h-64 mx-auto"
                      viewBox="0 0 1177 598.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>travel booking</title>
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M274.63,501l-6.29-3.91c-.6-.37-1.19-.77-1.79-1.15a59.86,59.86,0,0,0,6.05-116.62l.31,24.66-13.55-26.83h-.17a59.87,59.87,0,0,0-62.58,57c-.06,1.15,0,2.27,0,3.4-4.71-5.38-9-11.15-11.83-17.47-5.73-12.79-5.84-27.28-5.39-44.9.9-34.9,2.41-70.08,4.37-105.14a59.85,59.85,0,0,0,53.16-56.64c.08-1.83,0-3.63,0-5.43,0-.45,0-.89-.07-1.34-.12-1.74-.28-3.46-.55-5.16,0-.28-.1-.55-.15-.82-.24-1.44-.54-2.86-.88-4.26-.13-.53-.26-1-.4-1.57-.42-1.53-.88-3-1.42-4.52-.18-.49-.39-1-.58-1.46-.42-1.09-.88-2.17-1.37-3.23-.26-.56-.51-1.12-.78-1.67-.08-.14-.13-.29-.21-.43l0,0a59.84,59.84,0,0,0-70.28-30.36l.4,32.1-13.4-26.52a59.57,59.57,0,0,0-28.55,64.51h-.06c.09.43.22.84.32,1.26.19.79.39,1.57.61,2.35.28,1,.6,2,.93,3,.25.74.49,1.47.77,2.2.41,1.06.87,2.09,1.33,3.12.27.6.51,1.22.8,1.81q1.14,2.33,2.48,4.53c.31.52.66,1,1,1.51.64,1,1.28,2,2,2.93.43.59.89,1.16,1.34,1.73.66.83,1.33,1.65,2,2.44.49.57,1,1.12,1.51,1.66.74.78,1.49,1.53,2.27,2.26.52.49,1,1,1.57,1.46.88.79,1.8,1.53,2.73,2.26.47.37.93.75,1.41,1.11,1.42,1,2.88,2,4.39,3,.28.17.59.31.87.48,1.27.74,2.55,1.45,3.87,2.09.57.28,1.15.53,1.73.79,1.08.48,2.17.95,3.29,1.38l2,.7c1.1.37,2.22.72,3.35,1,.66.18,1.33.37,2,.53,1.22.29,2.47.53,3.73.75l.24.05q-1.23,22.19-2.2,44.39a59.83,59.83,0,0,0-83.07-26l10.58,29-21.77-20.9a59.66,59.66,0,0,0-19.34,41.34A58.5,58.5,0,0,0,52.8,354a59.84,59.84,0,0,0,110.06,16.3c0,1.5-.1,3-.14,4.51-.4,15.54-.9,34.88,6.85,52.15,5.25,11.7,13.69,21.21,22,29.73,5.43,5.54,11.06,10.91,16.83,16.1a60.09,60.09,0,0,0,21.62,18c9.48,7.3,19.3,14.17,29.45,20.51l6.34,3.94c5.7,3.53,11.54,7.16,17.26,10.93-1-.1-2-.21-3-.26a59.89,59.89,0,0,0-58.94,39l37.4,30.43-41.14-9.54a59.89,59.89,0,0,0,85.82,53.92l-2.78,3.45q-2.76,3.43-5.45,6.82c-24.34,30.83-31.11,60.09-19.06,82.4l14.66-7.91c-11.73-21.72,5.91-49.52,17.47-64.16q2.64-3.33,5.36-6.7c15.55-19.32,33.17-41.22,32.74-68.08C345.52,545,306.21,520.6,274.63,501Z"
                        fill="#f2f2f2"
                      />
                      <ellipse cx="588.5" cy="577.5" rx="588.5" ry={21} fill="#3f3d56" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M119.9,721.42c-3-5.51.4-12.27,4.29-17.18s8.61-10,8.51-16.29c-.15-9-9.7-14.31-17.33-19.09a84,84,0,0,1-15.56-12.51A22.8,22.8,0,0,1,95,650c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.26,1.91-38.49"
                        fill="none"
                        stroke="#3f3d56"
                        strokeMiterlimit={10}
                        strokeWidth={4}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M81,599.39a14,14,0,0,1,7-11.5l3.14,6.22-.1-7.53a14.22,14.22,0,0,1,4.63-.56A14,14,0,1,1,81,599.39Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M106,694.38a14,14,0,1,0-.68-11.3l8.77,7.13L104.46,688A14,14,0,0,0,106,694.38Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M113,667.13a14,14,0,0,0,4.45-27.53l.08,5.78-3.18-6.29h0a14,14,0,0,0-14.67,13.36,13.84,13.84,0,0,0,.6,4.79A14,14,0,0,0,113,667.13Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M78.88,644.46a14,14,0,1,0-6.21-26.27l2.48,6.8-5.1-4.9a14,14,0,0,0-4.53,9.69,13.79,13.79,0,0,0,.35,3.87A14,14,0,0,0,78.88,644.46Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m82.88 603.13c3.24 0.35 6.39 1.36 9.64 1.56s6.82-0.57 8.88-3.1c1.1-1.36 1.66-3.08 2.59-4.57a10 10 0 0 1 3.54 -3.33 14 14 0 1 1 -26.24 9.31q0.79 0 1.59 0.13z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M78.88,644.46a14,14,0,0,0,13.35-20,10.37,10.37,0,0,0-2.82,2.82c-1,1.51-1.61,3.26-2.78,4.64-2.19,2.57-5.92,3.41-9.31,3.26s-6.66-1.12-10-1.43c-.47,0-.94-.07-1.42-.08A14,14,0,0,0,78.88,644.46Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M113,667.13a14,14,0,0,0,13.46-19.76,11.48,11.48,0,0,0-3,2.85c-1.09,1.54-1.77,3.32-3,4.74-2.37,2.63-6.35,3.56-9.93,3.48s-6.83-.93-10.28-1.2A14,14,0,0,0,113,667.13Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M106,694.38a14,14,0,0,0,25.59-11.45,13.84,13.84,0,0,0-3.08,2.75c-1.34,1.62-2.22,3.47-3.76,5-2.87,2.82-7.5,4-11.63,4.09A60,60,0,0,1,106,694.38Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m141.07 715.07s-11.08-0.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-1.94 32.4-4 4.03-10.94 4.03-10.94z"
                        fill="#656380"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m104.42 728.69c12.51 0.1 29.06-2 32.39-4 2.54-1.55 3.55-7.09 3.89-9.65h0.37s-0.7 8.94-4 11-19.89 4.07-32.4 4c-3.61 0-4.85-1.31-4.78-3.21 0.47 1.17 1.84 1.83 4.53 1.86z"
                        opacity=".2"
                      />
                      <rect
                        x="171.5"
                        y="111.25"
                        width={834}
                        height={456}
                        rx="20.42"
                        fill="#f2f2f2"
                      />
                      <path
                        d="m172 133.75h268v434h-247.58a20.42 20.42 0 0 1 -20.42 -20.42v-413.58z"
                        fill="#ff6347"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1017,282.42V294H183V282.42A20.42,20.42,0,0,1,203.42,262H996.58A20.42,20.42,0,0,1,1017,282.42Z"
                        fill="#3f3d56"
                      />
                      <circle cx={193} cy="127.75" r={6} fill="#ff6347" />
                      <circle cx={208} cy="127.75" r={6} fill="#ff6347" />
                      <circle cx={223} cy="127.75" r={6} fill="#ff6347" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M387.5,490A66.5,66.5,0,1,1,321,423.5,66.47,66.47,0,0,1,387.5,490Z"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M325.38,467.23l8.3,13,35.53,55.59a66.5,66.5,0,0,1-103.32-8.57l43.54-84.94.91,1.43"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M385.31,507a66.46,66.46,0,0,1-16.1,28.82l-35.53-55.59,15.69-24.78a.66.66,0,0,1,1.1,0C353.76,460.32,371,486,385.31,507Z"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M337.5,452.5a15,15,0,0,1-12.12,14.73l-15-23.51a15,15,0,0,1,27.16,8.78Z"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m347.5 481.5"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m333.5 480.5"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M563.51,413.13c-.35,0-1.51,0-1.83,0l-6.61.17a.19.19,0,0,1-.17-.09L545,398.42a1.61,1.61,0,0,0-1.37-.75h-2.41c-.57,0-.77.57-.56,1.1l5.09,14.52a.2.2,0,0,1-.18.28l-12.45.18a.81.81,0,0,1-.67-.31l-3.77-4.58a1.59,1.59,0,0,0-1.28-.62h-1.71a.4.4,0,0,0-.38.54l2,7a1.68,1.68,0,0,1,0,1.21l-2,7a.39.39,0,0,0,.38.53h1.7a1.62,1.62,0,0,0,1.28-.62l3.84-4.64a.82.82,0,0,1,.67-.32l12.38.27a.21.21,0,0,1,.18.28L540.65,434c-.21.53,0,1.1.56,1.1h2.41a1.61,1.61,0,0,0,1.37-.76l9.91-14.81a.2.2,0,0,1,.17-.09l6.61.17c.33,0,1.48,0,1.83,0,4.5,0,7.35-1.45,7.35-3.25S568,413.13,563.51,413.13Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M548.32,532.86a.41.41,0,0,0-.51,0l-15.87,12.7a.42.42,0,0,0-.15.31v23.4a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21V555a.21.21,0,0,1,.21-.2h9.36a.2.2,0,0,1,.2.2v14.24a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21v-23.4a.4.4,0,0,0-.15-.31Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M568.69,543.05l-19.23-15.41a2.23,2.23,0,0,0-1.39-.48,2.26,2.26,0,0,0-1.4.48l-8.37,6.81v-4.29a.2.2,0,0,0-.2-.21H532a.2.2,0,0,0-.2.21v9.38l-4.34,3.57a1.41,1.41,0,0,0-.54,1,1.45,1.45,0,0,0,.41,1.09,1.41,1.41,0,0,0,1,.42,1.47,1.47,0,0,0,.9-.31l18.7-15.06a.22.22,0,0,1,.14,0,.24.24,0,0,1,.13,0l18.71,15a1.44,1.44,0,0,0,2.33-1.19,1.45,1.45,0,0,0-.55-1Z"
                        fill="#3f3d56"
                      />
                      <rect
                        x={604}
                        y="260.14"
                        width={347}
                        height={11}
                        rx="1.24"
                        fill="#ff6347"
                        opacity=".3"
                      />
                      <rect
                        x={604}
                        y="392.07"
                        width={347}
                        height={11}
                        rx="1.24"
                        fill="#ff6347"
                        opacity=".3"
                      />
                      <rect
                        x={878}
                        y="279.75"
                        width={73}
                        height={25}
                        rx="1.24"
                        fill="#ff6347"
                      />
                      <rect
                        x={878}
                        y="411.75"
                        width={73}
                        height={25}
                        rx="1.24"
                        fill="#ff6347"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m978.18 606.93l-1.73 2s-21.05 2-20.2 5.39 25.35-4.55 25.35-4.55z"
                        fill="#ffc1c7"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z"
                        fill="#ff6584"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z"
                        opacity=".1"
                      />
                      <circle cx="989.6" cy="378.29" r="15.09" fill="#ffc1c7" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1014 543.21a11.85 11.85 0 0 0 2 2.71 24.62 24.62 0 0 0 7.28 5.44 246.74 246.74 0 0 1 -25.93 3.86c0.92-3.24-0.29-6.7-1.91-9.64s-3.7-5.69-4.72-8.9l10.2 0.28c1.85 0 3.71 0.1 5.56 0 1.39-0.07 3.69-0.9 5-0.59 2.64 0.63 1.3 4.42 2.52 6.84z"
                        fill="#ffc1c7"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                        fill="#575a89"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1086.8 648.79v8.55a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-7.12a1 1 0 0 0 -1 -1h-18.82a1 1 0 0 0 -1 1v7.12a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-8.55a1 1 0 0 1 1 -1h22.78a1 1 0 0 1 1.04 1z"
                        fill="#3c354c"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M999.16,721.79a5.79,5.79,0,0,0,5.14,6l134.88,3.33a.41.41,0,0,0,.32-.11h0a.31.31,0,0,0,.11-.2l1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36a1.12,1.12,0,0,0-.25-.28,1,1,0,0,0-.61-.2l-127,1.89a5.8,5.8,0,0,0-5.71,5.53Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1135.53,654.27l4,76.78h0l.11-.2,1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36A1.12,1.12,0,0,0,1135.53,654.27Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1016.2 613.3s26.06-9.79 40.58 11c0 0 3.7 32.18-11.11 33.6s-34.17 1.14-38.73-3.7-33.32-18.51-33.32-18.51-14.32-7.3-17.12 2.19-3.1 11.77-3.1 11.77-14.81 10.82-20.79 12.81c0 0-4 5.7-6.26 5.7s-16.23 3.13-14.81-7.41l23.07-21.07 23.06-22.5s6.55-9.68 23.36-4.56a346.13 346.13 0 0 0 33.89 8.26z"
                        fill="#575a89"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M955.68,707.46s5.41,13.67.86,15.38-14.24.57-14.24.57-11.4-1.43-14.24-1.14-14.53-2-12.82-6.55,10.54-3.42,10.54-3.42l8-3.7s.86-2.85,2.85-1.71S944.29,712.3,955.68,707.46Z"
                        fill="#cbceda"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m926.06 667s6 13.38-3.7 12.24-17.09-3.13-19.93-3.41-10.49-2.92-9.3-8.19a4.52 4.52 0 0 0 0.08 -1c0-0.71 1-2.09 8.65-1.88 0 0 5.69 0 8-4-0.03-0.01 8.51 10.81 16.2 6.24z"
                        fill="#cbceda"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m990.71 553.1s20.5-12.81 37.59 0 28.48 71.2 28.48 71.2l-39.59-8.83s-1.7-6.83-4-8-2.57-6-2.57-6-12.24-3.7-11.39-17.94-8.52-30.43-8.52-30.43z"
                        fill="#ff6584"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1001.2 553.67h-10.54s-6.27 7.12-7.12 25.06l-3.42 14.27s-7.12 17.09-2.85 19.94 12.54 2.56 14.24-3.13 13.44-38.76 13.44-38.76z"
                        fill="#ff6584"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M998.23,509.4A15.27,15.27,0,0,1,1014,512c5.47,4.88,6.57,12.85,8,20s4.17,15.21,11,18a28.35,28.35,0,0,1-9.19-.27l10.25,9.19-17.27-5.63c-5.42-1.77-11.11-3.56-16.72-2.56-9.3,1.65-15.78,10.4-24.71,13.47l1-4.85-6,0a11.75,11.75,0,0,0,3.43-4,3.27,3.27,0,0,0-2.29-1.2c-2.5-15.59,6.76-31,18.81-41.17,2.38-2,5-3.92,8.06-4.42s6.64.87,7.71,3.78"
                        fill="#3c354c"
                      />
                    </svg> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/2641/2641457.png" className=" sm:h-64 mx-auto"/>
                  </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                  <div className="w-full sm:w-1/2 ">
                  {/* <svg
                      className="w-full sm:h-64 mx-auto"
                      viewBox="0 0 1177 598.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>travel booking</title>
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M274.63,501l-6.29-3.91c-.6-.37-1.19-.77-1.79-1.15a59.86,59.86,0,0,0,6.05-116.62l.31,24.66-13.55-26.83h-.17a59.87,59.87,0,0,0-62.58,57c-.06,1.15,0,2.27,0,3.4-4.71-5.38-9-11.15-11.83-17.47-5.73-12.79-5.84-27.28-5.39-44.9.9-34.9,2.41-70.08,4.37-105.14a59.85,59.85,0,0,0,53.16-56.64c.08-1.83,0-3.63,0-5.43,0-.45,0-.89-.07-1.34-.12-1.74-.28-3.46-.55-5.16,0-.28-.1-.55-.15-.82-.24-1.44-.54-2.86-.88-4.26-.13-.53-.26-1-.4-1.57-.42-1.53-.88-3-1.42-4.52-.18-.49-.39-1-.58-1.46-.42-1.09-.88-2.17-1.37-3.23-.26-.56-.51-1.12-.78-1.67-.08-.14-.13-.29-.21-.43l0,0a59.84,59.84,0,0,0-70.28-30.36l.4,32.1-13.4-26.52a59.57,59.57,0,0,0-28.55,64.51h-.06c.09.43.22.84.32,1.26.19.79.39,1.57.61,2.35.28,1,.6,2,.93,3,.25.74.49,1.47.77,2.2.41,1.06.87,2.09,1.33,3.12.27.6.51,1.22.8,1.81q1.14,2.33,2.48,4.53c.31.52.66,1,1,1.51.64,1,1.28,2,2,2.93.43.59.89,1.16,1.34,1.73.66.83,1.33,1.65,2,2.44.49.57,1,1.12,1.51,1.66.74.78,1.49,1.53,2.27,2.26.52.49,1,1,1.57,1.46.88.79,1.8,1.53,2.73,2.26.47.37.93.75,1.41,1.11,1.42,1,2.88,2,4.39,3,.28.17.59.31.87.48,1.27.74,2.55,1.45,3.87,2.09.57.28,1.15.53,1.73.79,1.08.48,2.17.95,3.29,1.38l2,.7c1.1.37,2.22.72,3.35,1,.66.18,1.33.37,2,.53,1.22.29,2.47.53,3.73.75l.24.05q-1.23,22.19-2.2,44.39a59.83,59.83,0,0,0-83.07-26l10.58,29-21.77-20.9a59.66,59.66,0,0,0-19.34,41.34A58.5,58.5,0,0,0,52.8,354a59.84,59.84,0,0,0,110.06,16.3c0,1.5-.1,3-.14,4.51-.4,15.54-.9,34.88,6.85,52.15,5.25,11.7,13.69,21.21,22,29.73,5.43,5.54,11.06,10.91,16.83,16.1a60.09,60.09,0,0,0,21.62,18c9.48,7.3,19.3,14.17,29.45,20.51l6.34,3.94c5.7,3.53,11.54,7.16,17.26,10.93-1-.1-2-.21-3-.26a59.89,59.89,0,0,0-58.94,39l37.4,30.43-41.14-9.54a59.89,59.89,0,0,0,85.82,53.92l-2.78,3.45q-2.76,3.43-5.45,6.82c-24.34,30.83-31.11,60.09-19.06,82.4l14.66-7.91c-11.73-21.72,5.91-49.52,17.47-64.16q2.64-3.33,5.36-6.7c15.55-19.32,33.17-41.22,32.74-68.08C345.52,545,306.21,520.6,274.63,501Z"
                        fill="#f2f2f2"
                      />
                      <ellipse cx="588.5" cy="577.5" rx="588.5" ry={21} fill="#3f3d56" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M119.9,721.42c-3-5.51.4-12.27,4.29-17.18s8.61-10,8.51-16.29c-.15-9-9.7-14.31-17.33-19.09a84,84,0,0,1-15.56-12.51A22.8,22.8,0,0,1,95,650c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.26,1.91-38.49"
                        fill="none"
                        stroke="#3f3d56"
                        strokeMiterlimit={10}
                        strokeWidth={4}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M81,599.39a14,14,0,0,1,7-11.5l3.14,6.22-.1-7.53a14.22,14.22,0,0,1,4.63-.56A14,14,0,1,1,81,599.39Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M106,694.38a14,14,0,1,0-.68-11.3l8.77,7.13L104.46,688A14,14,0,0,0,106,694.38Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M113,667.13a14,14,0,0,0,4.45-27.53l.08,5.78-3.18-6.29h0a14,14,0,0,0-14.67,13.36,13.84,13.84,0,0,0,.6,4.79A14,14,0,0,0,113,667.13Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M78.88,644.46a14,14,0,1,0-6.21-26.27l2.48,6.8-5.1-4.9a14,14,0,0,0-4.53,9.69,13.79,13.79,0,0,0,.35,3.87A14,14,0,0,0,78.88,644.46Z"
                        fill="#57b894"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m82.88 603.13c3.24 0.35 6.39 1.36 9.64 1.56s6.82-0.57 8.88-3.1c1.1-1.36 1.66-3.08 2.59-4.57a10 10 0 0 1 3.54 -3.33 14 14 0 1 1 -26.24 9.31q0.79 0 1.59 0.13z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M78.88,644.46a14,14,0,0,0,13.35-20,10.37,10.37,0,0,0-2.82,2.82c-1,1.51-1.61,3.26-2.78,4.64-2.19,2.57-5.92,3.41-9.31,3.26s-6.66-1.12-10-1.43c-.47,0-.94-.07-1.42-.08A14,14,0,0,0,78.88,644.46Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M113,667.13a14,14,0,0,0,13.46-19.76,11.48,11.48,0,0,0-3,2.85c-1.09,1.54-1.77,3.32-3,4.74-2.37,2.63-6.35,3.56-9.93,3.48s-6.83-.93-10.28-1.2A14,14,0,0,0,113,667.13Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M106,694.38a14,14,0,0,0,25.59-11.45,13.84,13.84,0,0,0-3.08,2.75c-1.34,1.62-2.22,3.47-3.76,5-2.87,2.82-7.5,4-11.63,4.09A60,60,0,0,1,106,694.38Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m141.07 715.07s-11.08-0.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-1.94 32.4-4 4.03-10.94 4.03-10.94z"
                        fill="#656380"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m104.42 728.69c12.51 0.1 29.06-2 32.39-4 2.54-1.55 3.55-7.09 3.89-9.65h0.37s-0.7 8.94-4 11-19.89 4.07-32.4 4c-3.61 0-4.85-1.31-4.78-3.21 0.47 1.17 1.84 1.83 4.53 1.86z"
                        opacity=".2"
                      />
                      <rect
                        x="171.5"
                        y="111.25"
                        width={834}
                        height={456}
                        rx="20.42"
                        fill="#f2f2f2"
                      />
                      <path
                        d="m172 133.75h268v434h-247.58a20.42 20.42 0 0 1 -20.42 -20.42v-413.58z"
                        fill="#ff6347"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1017,282.42V294H183V282.42A20.42,20.42,0,0,1,203.42,262H996.58A20.42,20.42,0,0,1,1017,282.42Z"
                        fill="#3f3d56"
                      />
                      <circle cx={193} cy="127.75" r={6} fill="#ff6347" />
                      <circle cx={208} cy="127.75" r={6} fill="#ff6347" />
                      <circle cx={223} cy="127.75" r={6} fill="#ff6347" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M387.5,490A66.5,66.5,0,1,1,321,423.5,66.47,66.47,0,0,1,387.5,490Z"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M325.38,467.23l8.3,13,35.53,55.59a66.5,66.5,0,0,1-103.32-8.57l43.54-84.94.91,1.43"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M385.31,507a66.46,66.46,0,0,1-16.1,28.82l-35.53-55.59,15.69-24.78a.66.66,0,0,1,1.1,0C353.76,460.32,371,486,385.31,507Z"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M337.5,452.5a15,15,0,0,1-12.12,14.73l-15-23.51a15,15,0,0,1,27.16,8.78Z"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m347.5 481.5"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m333.5 480.5"
                        fill="none"
                        stroke="#f2f2f2"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M563.51,413.13c-.35,0-1.51,0-1.83,0l-6.61.17a.19.19,0,0,1-.17-.09L545,398.42a1.61,1.61,0,0,0-1.37-.75h-2.41c-.57,0-.77.57-.56,1.1l5.09,14.52a.2.2,0,0,1-.18.28l-12.45.18a.81.81,0,0,1-.67-.31l-3.77-4.58a1.59,1.59,0,0,0-1.28-.62h-1.71a.4.4,0,0,0-.38.54l2,7a1.68,1.68,0,0,1,0,1.21l-2,7a.39.39,0,0,0,.38.53h1.7a1.62,1.62,0,0,0,1.28-.62l3.84-4.64a.82.82,0,0,1,.67-.32l12.38.27a.21.21,0,0,1,.18.28L540.65,434c-.21.53,0,1.1.56,1.1h2.41a1.61,1.61,0,0,0,1.37-.76l9.91-14.81a.2.2,0,0,1,.17-.09l6.61.17c.33,0,1.48,0,1.83,0,4.5,0,7.35-1.45,7.35-3.25S568,413.13,563.51,413.13Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M548.32,532.86a.41.41,0,0,0-.51,0l-15.87,12.7a.42.42,0,0,0-.15.31v23.4a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21V555a.21.21,0,0,1,.21-.2h9.36a.2.2,0,0,1,.2.2v14.24a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21v-23.4a.4.4,0,0,0-.15-.31Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M568.69,543.05l-19.23-15.41a2.23,2.23,0,0,0-1.39-.48,2.26,2.26,0,0,0-1.4.48l-8.37,6.81v-4.29a.2.2,0,0,0-.2-.21H532a.2.2,0,0,0-.2.21v9.38l-4.34,3.57a1.41,1.41,0,0,0-.54,1,1.45,1.45,0,0,0,.41,1.09,1.41,1.41,0,0,0,1,.42,1.47,1.47,0,0,0,.9-.31l18.7-15.06a.22.22,0,0,1,.14,0,.24.24,0,0,1,.13,0l18.71,15a1.44,1.44,0,0,0,2.33-1.19,1.45,1.45,0,0,0-.55-1Z"
                        fill="#3f3d56"
                      />
                      <rect
                        x={604}
                        y="260.14"
                        width={347}
                        height={11}
                        rx="1.24"
                        fill="#ff6347"
                        opacity=".3"
                      />
                      <rect
                        x={604}
                        y="392.07"
                        width={347}
                        height={11}
                        rx="1.24"
                        fill="#ff6347"
                        opacity=".3"
                      />
                      <rect
                        x={878}
                        y="279.75"
                        width={73}
                        height={25}
                        rx="1.24"
                        fill="#ff6347"
                      />
                      <rect
                        x={878}
                        y="411.75"
                        width={73}
                        height={25}
                        rx="1.24"
                        fill="#ff6347"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m978.18 606.93l-1.73 2s-21.05 2-20.2 5.39 25.35-4.55 25.35-4.55z"
                        fill="#ffc1c7"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z"
                        fill="#ff6584"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z"
                        opacity=".1"
                      />
                      <circle cx="989.6" cy="378.29" r="15.09" fill="#ffc1c7" />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1014 543.21a11.85 11.85 0 0 0 2 2.71 24.62 24.62 0 0 0 7.28 5.44 246.74 246.74 0 0 1 -25.93 3.86c0.92-3.24-0.29-6.7-1.91-9.64s-3.7-5.69-4.72-8.9l10.2 0.28c1.85 0 3.71 0.1 5.56 0 1.39-0.07 3.69-0.9 5-0.59 2.64 0.63 1.3 4.42 2.52 6.84z"
                        fill="#ffc1c7"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                        fill="#575a89"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1086.8 648.79v8.55a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-7.12a1 1 0 0 0 -1 -1h-18.82a1 1 0 0 0 -1 1v7.12a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-8.55a1 1 0 0 1 1 -1h22.78a1 1 0 0 1 1.04 1z"
                        fill="#3c354c"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M999.16,721.79a5.79,5.79,0,0,0,5.14,6l134.88,3.33a.41.41,0,0,0,.32-.11h0a.31.31,0,0,0,.11-.2l1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36a1.12,1.12,0,0,0-.25-.28,1,1,0,0,0-.61-.2l-127,1.89a5.8,5.8,0,0,0-5.71,5.53Z"
                        fill="#3f3d56"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M1135.53,654.27l4,76.78h0l.11-.2,1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36A1.12,1.12,0,0,0,1135.53,654.27Z"
                        opacity=".1"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1016.2 613.3s26.06-9.79 40.58 11c0 0 3.7 32.18-11.11 33.6s-34.17 1.14-38.73-3.7-33.32-18.51-33.32-18.51-14.32-7.3-17.12 2.19-3.1 11.77-3.1 11.77-14.81 10.82-20.79 12.81c0 0-4 5.7-6.26 5.7s-16.23 3.13-14.81-7.41l23.07-21.07 23.06-22.5s6.55-9.68 23.36-4.56a346.13 346.13 0 0 0 33.89 8.26z"
                        fill="#575a89"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M955.68,707.46s5.41,13.67.86,15.38-14.24.57-14.24.57-11.4-1.43-14.24-1.14-14.53-2-12.82-6.55,10.54-3.42,10.54-3.42l8-3.7s.86-2.85,2.85-1.71S944.29,712.3,955.68,707.46Z"
                        fill="#cbceda"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m926.06 667s6 13.38-3.7 12.24-17.09-3.13-19.93-3.41-10.49-2.92-9.3-8.19a4.52 4.52 0 0 0 0.08 -1c0-0.71 1-2.09 8.65-1.88 0 0 5.69 0 8-4-0.03-0.01 8.51 10.81 16.2 6.24z"
                        fill="#cbceda"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m990.71 553.1s20.5-12.81 37.59 0 28.48 71.2 28.48 71.2l-39.59-8.83s-1.7-6.83-4-8-2.57-6-2.57-6-12.24-3.7-11.39-17.94-8.52-30.43-8.52-30.43z"
                        fill="#ff6584"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="m1001.2 553.67h-10.54s-6.27 7.12-7.12 25.06l-3.42 14.27s-7.12 17.09-2.85 19.94 12.54 2.56 14.24-3.13 13.44-38.76 13.44-38.76z"
                        fill="#ff6584"
                      />
                      <path
                        transform="translate(-11.5 -150.75)"
                        d="M998.23,509.4A15.27,15.27,0,0,1,1014,512c5.47,4.88,6.57,12.85,8,20s4.17,15.21,11,18a28.35,28.35,0,0,1-9.19-.27l10.25,9.19-17.27-5.63c-5.42-1.77-11.11-3.56-16.72-2.56-9.3,1.65-15.78,10.4-24.71,13.47l1-4.85-6,0a11.75,11.75,0,0,0,3.43-4,3.27,3.27,0,0,0-2.29-1.2c-2.5-15.59,6.76-31,18.81-41.17,2.38-2,5-3.92,8.06-4.42s6.64.87,7.71,3.78"
                        fill="#3c354c"
                      />
                    </svg> */}
                    <img src="https://static.vecteezy.com/system/resources/previews/011/153/690/non_2x/question-and-answer-education-3d-illustrations-png.png" className=" sm:h-64 mx-auto"/>
                  </div>
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        Lorem ipsum dolor sit amet
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        at ipsum eu nunc commodo posuere et sit amet ligula.
                        <br />
                        <br />
                        Images from:
                        <a className="text-pink-500 underline" href="http://localhost:3000/quiz/answer">
                          undraw.co
                        </a>
                      </p>
                    
                    
                </div>
              
                  </div>
                </div>
              </div>
            </section>




  
 
              <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center space-y-12"
                >
                    <h2 className="text-5xl font-black text-gray-900">
                        Meet <span className="text-primary">Our Team</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-16">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                            >
                                <div className="relative">
                                    <img
                                        src={member.img}
                                        alt={`${member.name} Profile`}
                                        className="w-full h-90 object-cover group-hover:brightness-75 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 mb-4">{member.description}</p>
                                    <div className="flex justify-center space-x-4">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
                                        </a>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-6 h-6 text-gray-900 hover:text-black transition-colors" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
  
   


  {/*Footer*/}
              <footer className="bg-white mt-24">
                <div className="container mx-auto px-8">
                  <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                      <a
                        className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#"
                      >
                        {/*Icon from: http://www.potlabicons.com/ */}
                        <svg
                          className="h-8 fill-current inline"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512.005 512.005"
                        >
                          <rect
                            fill="#2a2a31"
                            x="16.539"
                            y="425.626"
                            width="479.767"
                            height="50.502"
                            transform="matrix(1,0,0,1,0,0)"
                          />
                          <path
                            className="plane-take-off"
                            d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                          />
                        </svg>
                        LANDING
                      </a>
                    </div>
                    <div className="flex-1">
                      <p className="uppercase text-gray-500 md:mb-6">Links</p>
                      <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            FAQ
                          </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Help
                          </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Support
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                      <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Terms
                          </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <p className="uppercase text-gray-500 md:mb-6">Social</p>
                      <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Facebook
                          </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Linkedin
                          </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Twitter
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <p className="uppercase text-gray-500 md:mb-6">Company</p>
                      <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Official Blog
                          </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                          <a
                            href="#"
                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <a
                  href="https://www.freepik.com/free-photos-vectors/background"
                  className="text-gray-500"
                >
                  Background vector created by freepik - www.freepik.com
                </a> */}
              </footer>
</>

      </div>
    </div>
  );
}
