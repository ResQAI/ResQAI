import type { Metadata } from "next";
import "../globals.css";
import NationalHeader from "@/components/National/NationalHeader";
import Sidebar from "@/components/National/NationalSidebar";

export const metadata: Metadata = {
  title: "ResQAI",
  description: "AI-powered disaster management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-10">
            <NationalHeader />
          </header>

          <div className="flex flex-row pt-16 min-h-screen">
            <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-md">
              <Sidebar role="national" />
            </aside>

            <main className="ml-64 w-full p-6 bg-white">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
