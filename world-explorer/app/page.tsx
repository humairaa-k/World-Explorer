import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

     {/* Hero Section */}
    <HeroSection/>
    
      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <h2 className="text-4xl font-black text-gray-900">195+</h2>
            <p className="text-gray-500 mt-1">Countries</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <h2 className="text-4xl font-black text-gray-900">7</h2>
            <p className="text-gray-500 mt-1">Regions</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <h2 className="text-4xl font-black text-gray-900">8B+</h2>
            <p className="text-gray-500 mt-1">Population</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <h2 className="text-4xl font-black text-gray-900">100+</h2>
            <p className="text-gray-500 mt-1">Languages</p>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pt-6 pb-16">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">What You Can Explore</h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <span className="text-4xl">🏳️</span>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Flags</h3>
            <p className="text-gray-500">View the official flag of every country in the world.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <span className="text-4xl">🏛️</span>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Capitals</h3>
            <p className="text-gray-500">Discover the capital cities of every nation.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <span className="text-4xl">👥</span>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Population</h3>
            <p className="text-gray-500">Learn about the population of each country.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <span className="text-4xl">💰</span>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Currencies</h3>
            <p className="text-gray-500">Find out what currency each country uses.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <span className="text-4xl">🗣️</span>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Languages</h3>
            <p className="text-gray-500">Explore the languages spoken around the world.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <span className="text-4xl">🗺️</span>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Maps</h3>
            <p className="text-gray-500">Open any country directly in Google Maps.</p>
          </div>

        </div>
      </section>

    </main>
  )
}
