"use client";
import React, { useRef, useState } from "react";
import { CloseIcon } from "../ui/icons";
import useClickOutside from "@/hooks/useClickOutside";
import {
  AlertTriangleIcon,
  GitPullRequestClosedIcon,
  HomeIcon,
  MessageSquareLockIcon,
  SendIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import Button from "../Button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "home"
  );
  const sidebarRef = useRef<HTMLDivElement>(null);
  const setActiveTabFunction = (id: string) => () => {
    setActiveTab(id);
    localStorage.setItem("activeTab", id);
  };
  useClickOutside(sidebarRef, onClose);

  const navigationItems = [
    { id: "home", name: "Home", icon: HomeIcon },
    { id: "profile", name: "Profile", icon: User2Icon },
    {
      id: "situationshipreport",
      name: "Situationship Report",
      icon: GitPullRequestClosedIcon,
    },
    { id: "sendnotification", name: "Send Notifications", icon: SendIcon },
    { id: "collaborate", name: "Collaborate", icon: MessageSquareLockIcon },
    {
      id: "incomingdisasterinfo",
      name: "Incoming Disaster",
      icon: AlertTriangleIcon,
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">
            <a
              href="/national/home"
              aria-label="logo"
              className="flex items-center space-x-2 astro-ES6RJE63 h-8 mr-3"
            >
              <svg
                viewBox="0 0 370 99.98335497153181"
                className="looka-1j8o68f h-12 w-136"
              >
                <defs id="SvgjsDefs2275">
                  <linearGradient id="SvgjsLinearGradient2280">
                    <stop
                      id="SvgjsStop2281"
                      stop-color="#2d388a"
                      offset="0"
                    ></stop>
                    <stop
                      id="SvgjsStop2282"
                      stop-color="#00aeef"
                      offset="1"
                    ></stop>
                  </linearGradient>
                  <linearGradient id="SvgjsLinearGradient2283">
                    <stop
                      id="SvgjsStop2284"
                      stop-color="#2d388a"
                      offset="0"
                    ></stop>
                    <stop
                      id="SvgjsStop2285"
                      stop-color="#00aeef"
                      offset="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <g
                  id="SvgjsG2276"
                  featurekey="odWo6G-0"
                  transform="matrix(0.16638935108153077,0,0,0.16638935108153077,-30.848584674955802,-30.73211263697873)"
                  fill="url(#SvgjsLinearGradient2280)"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        fill="url(#SvgjsLinearGradient2280)"
                        d="M485.9,785.6c-165.7,0-300.5-134.8-300.5-300.5c0-78.3,29-149.3,83.9-205.4c2.7-2.8,6.9-3.3,10.2-1.4    c3.3,1.9,4.9,5.9,3.9,9.6c-1.3,4.9-30.7,121.2,143.7,193.9c203.3,84.8,204.4,233.7,193.5,269c-0.7,2.2-2.3,4.1-4.4,5.1    C575.4,775.6,531.6,785.6,485.9,785.6z M264.4,310.3c-41.3,49.8-62.2,108.5-62.2,174.9c0,156.4,127.2,283.6,283.6,283.6    c41.8,0,82.1-8.9,119.6-26.4c8.6-37.5,0.5-167.8-184.8-245C283.5,440.2,264.4,353.7,264.4,310.3z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="url(#SvgjsLinearGradient2280)"
                        d="M694.9,697.5c-1.3,0-2.5-0.3-3.7-0.9c-3.3-1.6-5.1-5.1-4.7-8.7c15-112.7-56.4-167.7-185-224.6    C317.5,381.9,349.7,221,350,219.4c0.5-2.5,2.2-4.7,4.6-5.8c39-18.9,84.4-28.9,131.3-28.9c165.7,0,300.5,134.8,300.5,300.5    C786.3,564,756,638.5,701,695C699.4,696.6,697.2,697.5,694.9,697.5z M365.8,226.9C362,251.5,350.9,378.2,508.4,448    c143.6,63.6,199.9,124.1,197,216.8c41.5-50.6,64-113.4,64-179.6c0-156.4-127.2-283.6-283.6-283.6    C443.1,201.5,401.7,210.3,365.8,226.9z"
                      ></path>
                    </g>
                    <g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M683.6,762.3c-79,0-166.7-34-257.1-100c-83.7-61.1-141.1-129-141.7-129.7c-3-3.6-2.5-8.9,1-11.9     c3.6-3,8.9-2.5,11.9,1c2.2,2.6,225,264.1,436.5,218.4c4.6-1,9,1.9,10,6.5c1,4.6-1.9,9-6.5,10     C720.2,760.5,702.1,762.3,683.6,762.3z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M384,660c-43.5,0-68.8-25.2-70.1-26.6c-3.3-3.3-3.2-8.7,0.1-11.9c3.3-3.3,8.6-3.2,11.9,0.1     c1.4,1.4,32.7,31.9,85.5,17.8c3.8-6.4,15.2-32.9-18.3-86.3c-2.5-3.9-1.3-9.1,2.7-11.6c3.9-2.5,9.1-1.3,11.6,2.7     c46.5,74,16.5,107,15.2,108.4c-1,1.1-2.3,1.9-3.7,2.3C406.3,658.5,394.6,660,384,660z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M488.8,732.7c-42.4,0-90.3-24-93-25.4c-4.1-2.1-5.8-7.2-3.7-11.3c2.1-4.1,7.2-5.8,11.3-3.7     c22.5,11.4,87.4,36.5,116.6,15.4c3.8-2.7,9-1.9,11.8,1.9c2.7,3.8,1.9,9-1.9,11.8C518.4,729.6,504,732.7,488.8,732.7z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M534.5,727.4c-2.1,0-4.1-0.8-5.8-2.3c-3.4-3.1-3.6-8.4-0.5-11.8c0.7-0.9,25.4-33.2-36-120     c-2.7-3.8-1.8-9.1,2-11.7c3.8-2.7,9-1.8,11.7,2c29.1,41.2,44.2,76.8,44.7,105.9c0.4,23.4-9,34.1-10,35.2     C539,726.5,536.8,727.4,534.5,727.4z"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M682.3,450.7c-2.4,0-4.8-1-6.5-3c-2.2-2.7-223.9-265-435.5-220.3c-4.5,0.9-9-2-10-6.5c-1-4.6,2-9,6.5-10     c92-19.4,199.5,13.7,310.8,95.7C631,368,688.2,436.2,688.8,436.9c3,3.6,2.5,8.9-1.1,11.9C686.1,450.1,684.2,450.7,682.3,450.7z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M573.2,428.9c-2.8,0-5.6-1.4-7.2-4c-46.1-74.2-16-107.1-14.7-108.4c1-1.1,2.3-1.9,3.8-2.3     c64.7-18.6,103.3,20.2,104.9,21.8c3.2,3.3,3.2,8.7-0.2,11.9c-3.3,3.2-8.6,3.2-11.9-0.2c-1.4-1.4-32.5-32.1-85.5-18.1     c-3.9,6.3-15.4,32.8,17.9,86.4c2.5,4,1.2,9.1-2.7,11.6C576.3,428.4,574.7,428.9,573.2,428.9z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M574.6,277.7c-1.3,0-2.6-0.3-3.8-0.9c-22.5-11.5-87.2-36.9-116.6-15.9c-3.8,2.7-9,1.8-11.8-1.9     c-2.7-3.8-1.8-9,1.9-11.8c43.6-31.2,130.4,12.8,134.1,14.7c4.1,2.1,5.8,7.2,3.6,11.3C580.6,276,577.7,277.7,574.6,277.7z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="url(#SvgjsLinearGradient2280)"
                          d="M474.6,388.6c-2.7,0-5.3-1.3-6.9-3.6c-29-41.3-43.8-77-44.2-106.1c-0.3-23.4,9.1-34,10.2-35.2     c3.2-3.4,8.5-3.5,11.9-0.3c3.3,3.2,3.5,8.4,0.5,11.8c-0.7,0.9-25.6,33.1,35.5,120.2c2.7,3.8,1.7,9.1-2.1,11.7     C477.9,388.1,476.3,388.6,474.6,388.6z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  id="SvgjsG2277"
                  featurekey="VGK2BT-0"
                  transform="matrix(4.027836915872687,0,0,4.027836915872687,115.90506326284046,-6.464075358950481)"
                  fill="url(#SvgjsLinearGradient2283)"
                >
                  <path d="M11.186 19.67797 c0.11864 0.16949 0.034064 0.32203 -0.1861 0.32203 l-1.2544 0 c-0.37288 0 -0.67814 -0.33881 -0.81356 -0.5422 l-2.6441 -3.8983 l-3.3559 0 l0 4.1525 c0 0.18644 -0.10169 0.28797 -0.27119 0.28797 l-1.3729 0 c-0.16949 0 -0.27119 -0.10153 -0.27119 -0.28797 l0 -13 c0 -0.15254 0.10169 -0.27119 0.27119 -0.27119 l5.2203 0 c2.9659 0 4.5592 2.5254 4.5592 4.5592 c0 1.6949 -1.0168 3.5934 -2.9322 4.2881 z M2.9324 8.288 l0 5.4237 l3.3559 0 c1.9153 0 2.8644 -1.3729 2.8644 -2.7458 c0 -1.3559 -0.9661 -2.678 -2.8644 -2.678 l-3.3559 0 z M19.610162711864405 16.4915 c0.61 0 1.0336 -0.30508 1.0336 -1.0169 c0 -2.0847 -1.6102 -3.9831 -4.0847 -3.9831 c-2.3559 0 -4.2034 1.8644 -4.2034 4.3051 c0 2.5422 1.9322 4.288 4.3051 4.288 c1.5085 0 2.6949 -0.61017 3.4237 -1.5932 c0.10186 -0.13559 0.067963 -0.23729 -0.033568 -0.37288 l-0.32203 -0.42373 c-0.13559 -0.16933 -0.27119 -0.15254 -0.44085 -0.050847 c-0.5422 0.44068 -1.4405 0.81373 -2.4236 0.81373 c-1.3898 0 -2.3729 -0.84746 -2.5593 -1.9661 l5.3051 0 z M14.304962711864407 15.050799999999999 c0.067797 -0.81356 0.83051 -1.8644 2.2203 -1.8644 c1.4068 0 2.1356 1.0678 2.1864 1.8644 l-4.4068 0 z M22.084576440677964 18.7798 l0.5761 -0.91508 c0.11864 -0.18661 0.22034 -0.23746 0.38983 -0.15271 c0.016949 0.033898 1.0508 0.64407 2.1864 0.64407 c0.98305 0 1.322 -0.38983 1.322 -0.77966 c0 -0.57627 -0.62712 -0.77949 -1.7627 -1.0676 c-1.6102 -0.42373 -2.678 -1.2542 -2.678 -2.5424 c0 -1.2712 1.0847 -2.4576 3.1186 -2.4576 c1.2373 0 2.0847 0.42373 2.7627 0.81356 c0.16949 0.10169 0.25424 0.25424 0.15254 0.38983 l-0.62712 0.9661 c-0.084746 0.13559 -0.22034 0.18644 -0.37288 0.13559 c-0.44068 -0.22017 -1.1525 -0.54237 -1.9153 -0.54237 c-0.94915 0 -1.2034 0.47458 -1.2034 0.76271 c0 0.49153 0.71186 0.72881 1.5763 0.96593 c1.5086 0.40678 3.0171 1.1356 3.0171 2.6102 c0 1.4237 -1.3558 2.5083 -3.3898 2.5083 c-1.3898 0 -2.6441 -0.6778 -3.0678 -1.0168 c-0.11864 -0.067797 -0.15254 -0.23729 -0.084746 -0.32203 z M43.33883050847457 20.77966 c0.20339 0.16949 0.11848 0.38983 -0.016949 0.47458 l-1.0169 0.62712 c-0.35593 0.22017 -0.72881 0.13559 -0.9322 -0.20339 l-1.2712 -2.1186 c-0.84746 0.35593 -1.7797 0.55915 -2.7458 0.55915 c-3.8475 0 -6.9492 -3.0337 -6.9492 -6.9151 c0 -3.8305 3.1017 -6.8814 6.9492 -6.8814 c3.8136 0 6.9153 3.0508 6.9153 6.8814 c0 2.1695 -0.9661 4.0847 -2.5085 5.339 l0.64407 1.0678 c0.42373 0.66102 0.67797 0.94915 0.9322 1.1695 z M32.32173050847457 13.203700000000001 c0 2.4576 1.7797 4.5254 4.1017 4.9661 l-0.084746 -0.016949 c-0.49153 -0.35576 -0.71186 -0.86441 -0.71186 -1.4068 c0 -1.1356 0.9322 -2.0678 2.2203 -2.0678 c0.91525 0 1.6271 0.35593 2.322 1.3051 c0.20339 0.28814 0.38983 0.59322 0.59322 0.91525 c0.98305 -0.9322 1.6102 -2.2542 1.6102 -3.6949 c0 -2.7456 -2.2881 -5.0337 -5.0169 -5.0337 c-2.7458 0 -5.0339 2.2881 -5.0339 5.0337 z M37.355630508474576 18.2715 c0.61017 0 1.2034 -0.11848 1.7458 -0.32186 l-0.33898 -0.57627 c-0.35593 -0.57627 -0.74576 -0.81373 -1.3051 -0.81373 c-0.52542 0 -0.94898 0.44068 -0.94898 0.98305 c0 0.25441 0.13559 0.52542 0.42356 0.71186 c0.13559 0.016949 0.28814 0.016949 0.42373 0.016949 z M59.15289830508475 19.69492 c0.08458 0.16966 0.033898 0.30508 -0.15254 0.30508 l-1.5424 0 c-0.15254 0 -0.23712 -0.067631 -0.28797 -0.18644 l-1.0508 -2.2034 l-7.3051 0 l-1.0339 2.2034 c-0.067797 0.11881 -0.15254 0.18644 -0.28814 0.18644 l-1.5593 0 c-0.16949 0 -0.25424 -0.13543 -0.18644 -0.30508 l6.3898 -13.186 c0.050847 -0.11864 0.13559 -0.15254 0.22034 -0.15254 l0.22017 0 c0.084746 0 0.15254 0.033898 0.22034 0.15254 z M49.64419830508475 15.8646 l5.6441 0 l-2.8136 -6 z M62.81355593220339 6.441000000000001 l-1.3053 -0.00016552 c-0.16949 0 -0.27119 0.11864 -0.27119 0.27119 l0 13 c0 0.16949 0.11864 0.28814 0.28831 0.28814 l1.3051 0 c0.15254 0 0.25424 -0.13543 0.25424 -0.28797 l0 -13 c0 -0.15254 -0.11864 -0.27119 -0.27119 -0.27119 z"></path>
                </g>
              </svg>
            </a>{" "}
          </h2>
          <button onClick={onClose} aria-label="Close sidebar">
            <CloseIcon />
          </button>
        </div>
        <div className="p-4">
          {/* Sidebar content goes here */}
          <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto bg-gray-50">
            <ul className="space-y-8 font-medium">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/national/${item.id}`}
                    onClick={setActiveTabFunction(item.id)}
                    className={`flex my-5 items-center p-2 text-gray-900 rounded-lg  group ${
                      activeTab === item.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-50"
                    }`}
                  >
                    <item.icon size={24} />
                    <span className="ms-3">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/national/aisuggest"
              onClick={() => {
                setActiveTab("aisuggest");
                localStorage.setItem("activeTab", "aisuggest");
              }}
            >
              <Button className="w-full text-lg">AI suggestions</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
