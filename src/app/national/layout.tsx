import type { Metadata } from "next";
import "../globals.css";
import NationalHeader from "@/components/National/NationalHeader";
import Sidebar from "@/components/National/NationalSidebar";

export const metadata: Metadata = {
  title: "ResQAI",
  description: "AI powered disaster management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <div className="header h-[8vh]">
            <NationalHeader />
          </div>
          <div className="flex flex-row">
            <div className="sidebar w-[20vw]">
              <Sidebar role="national" />
            </div>
            <div className="main-content w-full">
              <div className="content flex">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
