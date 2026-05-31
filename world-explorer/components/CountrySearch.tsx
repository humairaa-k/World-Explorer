'use client';
import { useState } from 'react';
import { Country } from '@/types/country';
import CountryCard from './CountryCard';
import { Search } from 'lucide-react';

type CountryProp = { countries: Country[] };

export default function CountrySearch({ countries }: CountryProp) {
  const [search, setSearch] = useState('');

  const filteredCountries =
    search.trim() === ''
      ? []
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 px-6 py-12">
      <div className="max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">Search Any Country</h1>

          <p className="mt-4 text-slate-600 text-lg">
            Find countries by name and explore their capitals, regions, populations, and more.
          </p>
        </div>

        {/* inpuut */}
        <div className="relative max-w-2xl mx-auto mt-10">
          <Search className="absolute left-5 top-5 z-10 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Afghanistan, Japan..."
            className="
            w-full
            rounded-full
            border border-slate-200
            bg-white/80
            backdrop-blur-sm
            py-4
            pl-12
            pr-6
            text-slate-800
            shadow-lg
            outline-none
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            placeholder:text-slate-400"
          />
        </div>

        {/* empty search State */}
        {search.trim() === '' && (
          <p className="text-center text-slate-500 mt-12 text-lg">
            Start typing to search for a country.
          </p>
        )}

        {/* no resultss */}
        {search.trim() !== '' && filteredCountries.length === 0 && (
          <p className="text-center text-red-500 mt-14 text-lg font-medium">No countries found.</p>
        )}

        {/* contiriess showing*/}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {filteredCountries.map((country) => (
            <div key={country.cca3}>
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
