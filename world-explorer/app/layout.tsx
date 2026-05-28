import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Poppins } from "next/font/google"
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "World Explorer",
   description: "A Next.js country explorer project for Week 13 and Week 14",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex flex-col antialiased`}>
       <Navbar/>
        <main>{children}</main>
       <Footer/>
       </body>
    </html>
  );
}
