"use client";
import "./globals.css";
import LandingChatAssistant from "@/components/ChatAssistant";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <LandingChatAssistant />
          {children}
        </Provider>
      </body>
    </html>
  );
}
