"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Globe } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <Link href="/"
          className="flex items-center gap-3">
  
          <div className=" bg-slate-900 text-white p-2 rounded-xl">
           <Globe className="w-6 h-6" />
          </div>

        <div>
         <h1 className="text-2xl font-black text-slate-900 text-xl sm:text-2xl lg:text-3xl">
           World Explorer
         </h1>
     
         <p className="text-xs text-slate-500">
           Discover the world
         </p>
       </div>

     </Link>
      
      <div className="hidden lg:flex items-center gap-8">

        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>

        <Link href="/countries" className="hover:text-blue-600 transition">
          Countries
        </Link>

        <Link href="/search" className="hover:text-blue-600 transition">
          Search
        </Link>

        <Link href="/about" className="hover:text-blue-600 transition">
          About
        </Link>

      </div>

      {/* Mobile btn */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden">
        {open ? (
          <X className="w-7 h-7" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>

        </div>

        {/* Mobile Menu */}
        {open && (

          <div className=" lg:hidden flex flex-col gap-4 mt-6 pb-4">

            <Link href="/">Home</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/search">Search</Link>
            <Link href="/about">About</Link>

          </div>
        )}

      </nav>
    </header>
  )
}