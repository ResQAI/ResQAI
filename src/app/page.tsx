"use client";
import Nav from "@/components/Navbar";
import LandingChatAssistant from "@/components/ChatAssistant";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

// Add this custom hook after the imports
function useCounter(end: number, duration: number = 1500) {
  // Increased default duration to 1500ms
  // Reduced default duration to 1000ms
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Use easeOut cubic function for smoother animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (end - startValue) * easeOut;

        setCount(Math.round(currentValue * 100) / 100); // Round to 2 decimal places

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [end, duration, inView, hasAnimated]);

  return { count, ref: countRef };
}

export default function Home() {
  const teamMembers = [
    {
      name: "Abhay Dixit",
      img: "https://ayurguru.vercel.app/assets/w3-D2UE32XB.png",
      role: "AI/ML Developer",
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

  // Add these counters before the return statement
  const lives = useCounter(5, 1200);
  const users = useCounter(1.3, 1200);
  const agencies = useCounter(10, 1200);
  const models = useCounter(6, 1200);

  return (
    <div>
      <LandingChatAssistant />
      <div>
        <Nav />

        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 space-x-24 opacity-40 "
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-primary " />
          <div className="blur-[100px] h-56 bg-primary " />

          {/* <div className="blur-[100px] h-32 bg-indigo-500 " /> */}
        </div>

        {/* Hero Section */}

        <div className="max-w-7xl  mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 ddkktext-white font-bold text-5xl md:text-5xl xl:text-7xl">
                Act Faster, Save Lives with{" "}
                <span className="text-primary ddkktext-white">ResQAI</span>
                {/* <span className="text-primary ddkktext-white">ResQAI</span> */}
              </h1>
              <p className="mt-8 mx-10 text-gray-700 ddkktext-gray-300">
                Empowering government agencies, NGOs, and citizens to minimize
                damage, save lives, and rebuild communities during disasters
                with AI-driven insights and collaboration.
              </p>
              <div className="mt-16 flex flex-wrap  justify-center gap-y-4 gap-x-6">
                <a
                  href="/login"
                  className="relative flex h-11 w-full items-center justify-center px-6 rounded-full  transition duration-300 hover:scale-105 bg-primary  sm:w-max"
                >
                  <span className="relative text-white  font-semibold text-white">
                    Get started
                  </span>
                </a>
                <a
                  href="#features"
                  className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full border border-transparent bg-purple-50  transition duration-300 hover:scale-105 active:duration-75 active:scale-95 ddkkborder-gray-700 ddkkbg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary ddkktext-white">
                    Learn more
                  </span>
                </a>
              </div>
              <div className="hidden py-8 mt-10 border-y border-gray-100 grid grid-col-3 ddkkborder-gray-800 sm:flex justify-between">
                <div className="text-center">
                  <h6 className="text-lg font-semibold text-gray-700 ddkktext-white">
                    Prepared Everytime
                  </h6>
                  <p className="mt-2 mr-3 text-gray-500">
                    Anticipates disasters to keep you ahead.
                  </p>
                </div>
                <div className="text-center">
                  <h6 className="text-lg font-semibold text-gray-700 ddkktext-white">
                    Faster Relief Coordination
                  </h6>
                  <p className="mt-2  pr-3  text-gray-500">
                    Connects citizens, volunteers and agencies seamlessly.
                  </p>
                </div>
                <div className="text-center">
                  <h6 className="text-lg font-semibold text-gray-700 ddkktext-white">
                    Saving Lives, Smarter
                  </h6>
                  <p className="mt-2 text-gray-500">
                    AI-powered insights that make every second count.
                  </p>
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
          <div className="mt-24" id="stats">
            {/* component */}
            <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
              Impact of <span className="text-primary">Smarter</span>{" "}
              <br className="md:block hidden" /> Disaster Management
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
                <p className="text-3xl font-semibold text-primary">300+</p>
                <p className="text-base leading-4 xl:mt-4 mt-2 text-primary">
                  Natural Disasters in 2023
                </p>
              </div>
              <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                <p className="text-3xl font-semibold text-primary">$313B+</p>
                <p className="text-base leading-4 xl:mt-4 mt-2 text-primary">
                  Economic Losses
                </p>
              </div>
              <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                <p className="text-3xl font-semibold text-primary">40M+</p>
                <p className="text-base leading-4 xl:mt-4 mt-2 text-primary">
                  People Displaced
                </p>
              </div>
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
              <h6 className="text-4xl font-bold text-primary" ref={lives.ref}>
                {lives.count}M+
              </h6>
              <p className="mb-2 font-bold text-primary text-md">
                Lives can be saved
              </p>
              <p className="">
                AI-driven alerts and response plans are projected to reduce
                fatalities dramatically.
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
              <h6 className="text-4xl font-bold text-primary" ref={users.ref}>
                {users.count}K
              </h6>
              <p className="mb-2 font-bold text-primary text-md">Users</p>
              <p className="text-gray-700">
                For many men, the acquisition of wealth does not end their
                troubles, it only changes them.
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
              <h6
                className="text-4xl font-bold text-primary"
                ref={agencies.ref}
              >
                {agencies.count}K+
              </h6>
              <p className="mb-2 font-bold text-md text-primary">
                {" "}
                Agencies Expected
              </p>
              <p className="text-gray-700">
                Unifying efforts across governments, NGOs, and volunteers
                worldwide
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
              <h6 className="text-4xl font-bold text-primary" ref={models.ref}>
                {models.count}
              </h6>
              <p className="mb-2 font-bold text-md text-primary">
                ML and AI Models working
              </p>
              <p className="text-gray-700">
                Happiness is when what you think, what you say, and what you do
                are in harmony.
              </p>
            </div>
          </div>
        </div>

        <section
          className=" flex item-center justify-center  pt-[110px]"
          id="features"
        >
          <div className=" ">
            <div className="">
              <div
                className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
                data-wow-delay=".2s"
                style={{ visibility: "visible", animationDelay: "0.2s" }}
              >
                <h2 className="mb-4 text-3xl font-bold text-black ddkktext-white sm:text-4xl md:text-[44px] md:leading-tight">
                  Features That{" "}
                  <span className="text-primary">
                    {" "}
                    Transform Disaster Management{" "}
                  </span>
                </h2>
                {/* <p className="text-base text-body">
              Seamless collaboration, AI-driven decisions, and faster response times.
              </p> */}
              </div>
            </div>
            <div className="">
              <div className="rounded-2xl bg-white px-5 mx-14 pt-5 pb-14 shadow-card d md:pb-1   xl:px-10">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                      className="wow rounded-xl border p-10 shadow-xl  group mx-auto mb-[50px] h-[350px] text-center"
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
                        Predictive Disaster Alerts
                      </h3>
                      <p className="text-base text-body">
                        Receive timely warnings for both predictable and
                        unpredictable disasters.
                      </p>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                      className="wow rounded-xl border p-10 shadow-xl   fadeInUp group mx-auto mb-[60px] h-[350px]  text-center"
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
                        AI-Powered Resource Planning
                      </h3>
                      <p className="text-base text-body">
                        Predict resource needs fatalities based on population
                        density, infrastructure, and evacuation systems.
                      </p>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                      className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] h-[350px] text-center"
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
                        Emergency Reporting
                      </h3>
                      <p className="text-base text-body">
                        Citizens can report emergencies and fatalities in real
                        time.AI identifies high-priority areas needing immediate
                        assistance.
                      </p>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                      className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] h-[350px] text-center"
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
                        Real-Time Updates
                      </h3>
                      <p className="text-base text-body">
                        Centralized real-time updates for government agencies,
                        NGOs, and citizens making process faster.
                      </p>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                      className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] h-[350px] text-center"
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
                        Coordination and Collaboration
                      </h3>
                      <p className="text-base text-body">
                        Track progress and assign steps to agencies based on
                        standard disaster response models.
                      </p>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                      className="wow rounded-xl border p-10 shadow-xl fadeInUp group mx-auto mb-[60px] h-[350px] text-center"
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
                        Dynamic Response
                      </h3>
                      <p className="text-base text-body">
                        AI redefines plans and suggests alternative actions in
                        real-time if initial actions are ineffective or
                        conditions worsen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -z-10">
              <svg
                width={602}
                height={1154}
                viewBox="0 0 602 1154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.25" filter="url(#filter0_f_26_84)">
                  <circle
                    cx={577}
                    cy={577}
                    r={317}
                    fill="url(#paint0_linear_26_84)"
                  />
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
                  <circle
                    cx={4}
                    cy={618}
                    r={368}
                    fill="url(#paint0_linear_26_85)"
                  />
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

        <>
          <section className="bg-white py-8">
            <div className="container max-w-5xl mx-auto m-8">
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
                Learn & Respond Effectively
              </h2>
              <div className="w-full mb-12">
                <div className="h-1 mx-auto bg-blue-600 w-64 opacity-50 my-0 py-0 rounded-t" />
              </div>
              <div className="flex flex-wrap justify-center gap-16 mt-5">
                {/* Card 1 */}
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-primary w-full sm:w-5/12 p-6">
                  <h3 className="text-3xl text-primary font-bold leading-none mb-3 text-center">
                    MCQ Test: Know Your Disaster Types
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Interactive quizzes to learn about floods, cyclones, and
                    earthquakes.
                  </p>
                  <div className="flex items-center justify-center">
                    <a
                      href="/quiz"
                      className="w-[200px] text-center px-4 py-2 bg-primary text-white font-semibold text-sm rounded-full transition duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
                    >
                      Take Quiz
                    </a>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-primary w-full sm:w-5/12 p-6">
                  <h3 className="text-3xl text-primary font-bold leading-none mb-3 text-center">
                    Case Study: Real-Life Response Scenarios
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Analyze real-life cases to understand response strategies.
                  </p>
                  <div className="flex items-center justify-center">
                    <a
                      href="/awareness"
                      className="flex items-center w-[200px] justify-center px-4 py-2 bg-primary text-white font-semibold text-sm rounded-full transition duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
                    >
                      Learn from Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <motion.div
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
                </motion.div> */}

          {/*Footer*/}
          <footer className="mt-5 xl:mt-12 mx-auto w-full relative text-center bg-blue-600 text-white">
            <div className="px-6 py-8 md:py-14 xl:pt-10 xl:pb-12">
              <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
                Ready to Make a Difference?
                <br />
              </h2>
              <a
                href="/login"
                className="mt-8 xl:mt-2 px-6 py-3 text-md font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
              >
                Get started
              </a>
              <div className="mt-4 xl:mt-5">
                <nav className="flex flex-wrap justify-center text-lg font-medium">
                  <div className="px-5 py-2">
                    <a href="/#features">Features</a>
                  </div>
                  <div className="px-5 py-2">
                    <a href="/#stats">Statistics</a>
                  </div>
                  <div className="px-5 py-2">
                    <a href="/awareness">Awareness</a>
                  </div>
                  <div className="px-5 py-2">
                    <a href="/quiz">Quiz</a>
                  </div>
                </nav>
                <p className="mt-7 text-base">© 2024 ResqAI</p>
              </div>
            </div>
          </footer>
        </>
      </div>
    </div>
  );
}
