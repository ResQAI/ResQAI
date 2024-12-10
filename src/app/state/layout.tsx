import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import NationalHeader from "@/components/National/NationalHeader";

export const metadata: Metadata = {
  title: "ResQAI - State",
  description: "AI-powered disaster management application - State Dashboard",
};

export default function StateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-30">
            <NationalHeader />
          </header>

          <div className="flex flex-row pt-16 min-h-screen">
            <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-md">
              <Sidebar role="national" />
            </aside>

            <main className="ml-64 w-full bg-white overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}