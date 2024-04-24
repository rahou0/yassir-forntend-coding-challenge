"use client"
// import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"
import MainLayout from "../components/layouts/main-layout";
import store from "@/services/store";
import {Provider} from "react-redux";
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans", });
import {Toaster} from "@/components/ui/toaster";

// export const metadata: Metadata = {
//   title: "Frontend Engineer Coding Challenge",
//   description: "Frontend Engineer Coding Challenge",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>

      <html lang="en">
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        >
          <MainLayout>{children}</MainLayout>
          <Toaster/>
        </body>
      </html>
    </Provider>

  );
}
