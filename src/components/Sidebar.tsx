"use client";
import React from "react";
// import { useRouter } from "next/router";

interface SidebarProps {
  role: "citizen" | "ngo" | "district" | "national"; // Define roles
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
//   const router = useRouter();

  const commonLinks = [
    { name: "Profile", href: "/profile" },
    { name: "Notifications", href: "/notifications" },
    { name: "Donate to Govt. ", href: "/donate" },
  ];

  const citizenLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/citizen/country" },
    { name: "Area (Ongoing, upcoming)", href: "/citizen/area" },
    { name: "Apply for volunteer", href: "/citizen/volunteer" },
    { name: "Options for which organization user wants to work with", href: "/citizen/organizations" },
    { name: "Emergency rescue alert to the Government", href: "/citizen/emergency" },
  ];

  const ngoLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/ngo/country" },
    { name: "Area (Ongoing, upcoming)", href: "/ngo/area" },
    { name: "Submission of progress", href: "/ngo/progress" },
    { name: "Collaborate", href: "/ngo/collaborate" },
    { name: "Create awareness drives", href: "/ngo/awareness" },
    { name: "AI model ", href: "/ngo/chatbot" },
  ];

  const districtLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/district/country" },
    { name: "Area (Ongoing, upcoming)", href: "/district/area" },
    { name: "Submission of progress", href: "/district/progress" },
    { name: "Collaborate", href: "/district/collaborate" },
    { name: "Send notification for need of NGOs", href: "/district/notification" },
    { name: "AI model for personal suggestion (Chatbot)", href: "/district/chatbot" },
  ];

  const nationalLinks = [
    { name: "Country (Ongoing, upcoming)", href: "/national/country" },
    { name: "Create Alerts", href: "/national/alerts" },
    { name: "Send notifications", href: "/national/notifications" },
    { name: "Other notifications", href: "/national/other-notifications" },
    { name: "Declaration", href: "/national/declaration" },
    { name: "Level updation of disaster", href: "/national/level-update" },
    { name: "AI ", href: "/national/ai-suggestions" },
    { name: "Current Response Plan", href: "/national/response-plan" },
    { name: "Situation Report", href: "/national/situation-report" },
    { name: "Collaborate", href: "/national/collaborate" },
  ];

  const renderLinks = () => {
    switch (role) {
      case "citizen":
        return [...commonLinks,...citizenLinks];
      case "ngo":
        return [...commonLinks,...ngoLinks];
      case "district":
        return [...commonLinks,...districtLinks];
      case "national":
        return [...nationalLinks, ...commonLinks];
      default:
        return [];
    }
  };

  return (
    <>
  <aside
    id="separator-sidebar"
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="#"
            className="flex my-5 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="ms-3">Home</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="my-5 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="my-5 flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            <span className="ms-3">Situation Report</span>
          </a>
        </li>


        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group my-5"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Apply to Volunteer</span>
          </a>
        </li>


        {/* <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              Pro
            </span>
          </a>
        </li>


        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              3
            </span>
          </a>
        </li>
 */}

        
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
          
          <svg
                    // fill="#000000"
                   className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 425.521 425.521"
                    xmlSpace="preserve"
                    >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                        {" "}
                        <path d="M317.233,94.552l4.794-9.228c0.273-0.06,0.549-0.106,0.818-0.191c2.402-0.76,4.404-2.442,5.565-4.678l16.597-31.944 c2.419-4.656,0.606-10.391-4.05-12.81l-31.86-16.553c-2.235-1.162-4.842-1.387-7.244-0.628c-2.402,0.76-4.404,2.442-5.565,4.678 l-16.597,31.944c-1.353,2.604-1.38,5.544-0.329,8.054l-4.744,9.131c-10.808-3.918-22.088-6.841-33.732-8.655v-8.673h8.623 c5.247,0,9.5-4.253,9.5-9.5V9.5c0-5.247-4.253-9.5-9.5-9.5h-73.497c-5.247,0-9.5,4.253-9.5,9.5v35.999c0,5.247,4.253,9.5,9.5,9.5 h8.624v8.673C97.581,77.233,30.749,152.711,30.749,243.509c0,100.362,81.65,182.012,182.012,182.012s182.012-81.65,182.012-182.012 C394.773,181.993,364.091,127.514,317.233,94.552z M308.767,40.387l15.001,7.793l-7.837,15.084l-15.001-7.793L308.767,40.387z M295.206,73.909l8.929,4.639l-3.048,5.867c-2.926-1.631-5.897-3.188-8.919-4.66L295.206,73.909z M185.512,19h54.497v16.999 h-54.497V19z M203.636,54.999h18.25v6.727c-3.023-0.15-6.065-0.229-9.125-0.229c-3.06,0-6.101,0.079-9.125,0.229V54.999z M212.76,406.521c-89.885,0-163.012-73.127-163.012-163.012S122.876,80.497,212.76,80.497c89.885,0,163.012,73.127,163.012,163.012 S302.646,406.521,212.76,406.521z" />{" "}
                        <path d="M212.76,98.783c-79.802,0-144.726,64.924-144.726,144.727s64.924,144.727,144.726,144.727 c79.803,0,144.727-64.924,144.727-144.727S292.564,98.783,212.76,98.783z M212.76,369.236 c-69.326,0-125.726-56.401-125.726-125.727s56.4-125.727,125.726-125.727s125.727,56.401,125.727,125.727 S282.086,369.236,212.76,369.236z" />{" "}
                        <path d="M235.385,155.2v-16.706c0-5.247-4.253-9.5-9.5-9.5s-9.5,4.253-9.5,9.5v14.922h-7.249v-14.922c0-5.247-4.253-9.5-9.5-9.5 s-9.5,4.253-9.5,9.5V155.2c-15.731,4.954-27.172,19.677-27.172,37.023v21.98c0,17.346,11.441,32.068,27.172,37.023v59.565 c-4.942-3.605-8.172-9.423-8.172-15.994c0-5.247-4.253-9.5-9.5-9.5s-9.5,4.253-9.5,9.5c0,17.346,11.441,32.068,27.172,37.023 v16.706c0,5.247,4.253,9.5,9.5,9.5s9.5-4.253,9.5-9.5v-14.922h7.249v14.922c0,5.247,4.253,9.5,9.5,9.5s9.5-4.253,9.5-9.5v-16.706 c15.732-4.954,27.173-19.677,27.173-37.023v-21.98c0-17.346-11.441-32.069-27.173-37.023v-59.565 c4.942,3.605,8.173,9.423,8.173,15.995v12.211c0,5.247,4.253,9.5,9.5,9.5s9.5-4.253,9.5-9.5v-12.211 C262.558,174.876,251.117,160.154,235.385,155.2z M216.385,172.416v61.593h-7.249v-61.593H216.385z M181.964,214.203v-21.98 c0-6.572,3.23-12.389,8.172-15.994v53.969C185.194,226.592,181.964,220.774,181.964,214.203z M209.136,314.603v-61.593h7.249 v61.593H209.136z M243.558,272.816v21.98c0,6.572-3.23,12.39-8.173,15.995v-53.97C240.327,260.426,243.558,266.244,243.558,272.816 z" />{" "}
                        </g>{" "}
                    </g>
                    </svg>

            <span className="flex-1 ms-3 whitespace-nowrap">Donate to Govt.</span>
          </a>
        </li>
        
        
      </ul>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">

      {/* <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
              <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
              <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">AI Suggestions</span>
          </a>
        </li> */}



        {/* <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 20"
            >
              <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
            </svg>
            <span className="ms-3">Upgrade to Pro</span>
          </a>
        </li>
         */}


        {/* <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
              <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
            </svg>
            <span className="ms-3">Components</span>
          </a>
        </li> */}

        {/* Help Me */}
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-white transition duration-75 rounded-lg bg-red-700 hover:text-black dark:hover:bg-gray-700 dark:text-white group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 21"
            >
              <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
            </svg>
            <span className="ms-3">Help Me</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  
</>



  );
};

export default Sidebar;
