import type { Metadata } from "next";
import "./globals.css";
import LandingChatAssistant from "@/components/ChatAssistant";

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
        <div>
          <LandingChatAssistant />
        {children}
        </div>
        </body>
    </html>
  );
}
