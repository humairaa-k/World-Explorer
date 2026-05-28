import { Flag } from "lucide-react"
import { Lightbulb } from "lucide-react"
import { Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-black text-slate-900 mb-6">
        About World Explorer
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed mb-8">
        World Explorer is a Next.js project that allows users to explore countries around the world.
        Users can view country flags, capitals, populations, currencies, languages, and time zones
        in a clean and interactive interface.
      </p>

      <div className="space-y-6">

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="flex items-center gap-2  text-xl font-bold text-slate-900 mb-2">
            <Globe className="w-5 h-5 text-blue-600" /> 
             API Used
          </h2>
          <p className="text-slate-600">
            This project uses the REST Countries API:
            <br />
            https://restcountries.com/v3.1/all
          </p>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-2">
          <Lightbulb className="w-5 h-5 text-blue-600" />
           What I Learned
          </h2>

          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Next.js App Router structure</li>
            <li>File-based routing</li>
            <li>Server Components vs Client Components</li>
            <li>Dynamic routes ([code])</li>
            <li>Data fetching with async/await</li>
            <li>Static vs dynamic rendering</li>
            <li>REST API integration</li>
          </ul>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-2">
           <Flag className="w-5 h-5 text-blue-600" />
           Project Goal
         </h2>
          <p className="text-slate-600">
            The goal of this project is to build a real-world country explorer using modern Next.js
            features while practicing API integration and clean & responsive UI design.
          </p>
        </section>

      </div>

    </main>
  )
}

