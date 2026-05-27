import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "World Explorer",
   description: "A Next.js country explorer project for Week 13 and Week 14",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
       <Navbar/>
        <main>{children}</main>
       <Footer/>
       </body>
    </html>
  );
}
