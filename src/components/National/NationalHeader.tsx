import Image from "next/image";
import avaatar from "../../../public/avataaars.png";
import { Bell, User } from "lucide-react";

export default function NationalHeader() {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>   
            <a
              href="/"
              aria-label="logo"
              className="flex items-center space-x-2 astro-ES6RJE63 h-8 mr-3"
            >
              <div aria-hidden="true" className="flex space-x-1 astro-ES6RJE63">
                <div className="h-4 w-4 rounded-full bg-gray-900 ddkkbg-white astro-ES6RJE63" />
                <div className="h-6 w-2 bg-primary astro-ES6RJE63" />
              </div>
              <span className="text-2xl font-bold text-gray-900 ddkktext-white astro-ES6RJE63">
                ResQAI
              </span>
            </a>
            <div className="text-xl font-semibold ml-12">Welcome</div>
          </div>
          <div className="flex items-center">
            {/* <div className="hidden mr-3 -mb-1 sm:block">
              <a
                className="github-button"
                href="https://github.com/themesberg/flowbite-admin-dashboard"
                data-color-scheme="no-preference: dark; light: light; dark: light;"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star themesberg/flowbite-admin-dashboard on GitHub"
              >
                Star
              </a>
            </div> */}
            {/* <form action="#" method="GET" className="hidden lg:block lg:pl-3.5">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form> */}
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">View notifications</span>
              {/* <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg> */}
              <Bell size={24} className="m-2 stroke-black" />
            </button>
            <div
              className="z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg"
              id="notification-dropdown"
            >
              <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50">
                Notifications
              </div>
              <div>
                <a
                  href="#"
                  className="flex px-4 py-3 border-b hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/images/users/bonnie-green.png"
                      alt="Jese image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 font-normal text-sm mb-1.5">
                      New message from{" "}
                      <span className="font-semibold text-gray-900">
                        Bonnie Green
                      </span>
                      : "Hey, what's up? All set for the presentation?"
                    </div>
                    <div className="text-xs font-medium text-primary-700">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex px-4 py-3 border-b hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/images/users/jese-leos.png"
                      alt="Jese image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 font-normal text-sm mb-1.5">
                      <span className="font-semibold text-gray-900">
                        Jese leos
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-gray-900">
                        5 others
                      </span>{" "}
                      started following you.
                    </div>
                    <div className="text-xs font-medium text-primary-700">
                      10 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="/profile"
                  className="flex px-4 py-3 border-b hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/images/users/joseph-mcfall.png"
                      alt="Joseph image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 font-normal text-sm mb-1.5">
                      <span className="font-semibold text-gray-900">
                        Joseph Mcfall
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-gray-900">
                        141 others
                      </span>{" "}
                      love your story. See it and view more stories.
                    </div>
                    <div className="text-xs font-medium text-primary-700">
                      44 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex px-4 py-3 border-b hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/images/users/leslie-livingston.png"
                      alt="Leslie image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 font-normal text-sm mb-1.5">
                      <span className="font-semibold text-gray-900">
                        Leslie Livingston
                      </span>{" "}
                      mentioned you in a comment:{" "}
                      <span className="font-medium text-primary-700">
                        @bonnie.green
                      </span>{" "}
                      what do you say?
                    </div>
                    <div className="text-xs font-medium text-primary-700">
                      1 hour ago
                    </div>
                  </div>
                </a>
                <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/images/users/robert-brown.png"
                      alt="Robert image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full pl-3">
                    <div className="text-gray-500 font-normal text-sm mb-1.5">
                      <span className="font-semibold text-gray-900">
                        Robert Brown
                      </span>{" "}
                      posted a new video: Glassmorphism - learn how to implement
                      the new design trend.
                    </div>
                    <div className="text-xs font-medium text-primary-700">
                      3 hours ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100"
              >
                <div className="inline-flex items-center ">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  View all
                </div>
              </a>
            </div>
            <div
              id="tooltip-toggle"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            >
              Toggle dark mode
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <div className="flex items-center">
              <div>
                <a href="/national/profile">
                <button
                  type="button"
                  className="flex text-sm border border-black rounded-full focus:ring-4 focus:ring-gray-300"
                  id="user-menu-button-2"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-2"
                >
                  <span className="sr-only">Open user menu</span>
                  {/* <Image
                    className="w-8 h-8 rounded-full"
                    src={}
                    alt="user photo"
                  /> */}
                  <User size={24} className="m-2 stroke-black" />
                </button>
                 </a>
              </div>
             
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                id="dropdown-2"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-900" role="none">
                    Neil Sims
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate"
                    role="none"
                  >
                    resqai
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
