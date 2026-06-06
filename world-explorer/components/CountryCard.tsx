'use client';
import { Country } from '@/types/country';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
import { Heart } from "lucide-react";
import { useFavorites } from '@/context/FavoritesContext';

interface CountryCardProps {
  country: Country;
}


export default function CountryCard({ country}: CountryCardProps) {
  const {favorites, toggleFavorite } = useFavorites();

   const isFavorite = favorites.includes(country.cca3)

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-400 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-1.5 py-1.5 rounded-full">
          {country.region}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">

       <div className='flex justify-between items-center'>
           <h2 className="text-xl font-bold text-gray-900 leading-tight">{country.name.common}</h2>

           <button onClick={()=> toggleFavorite(country.cca3)}>
             <Heart 
             size={20}
              className={
                isFavorite ?
                "text-red-500 fill-red-500"
                : "text-gray-400"
              }/>
           </button>
       </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>🏛️</span>
            <span>{country.capital?.[0] || 'No capital'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>👥</span>
            <span>{country.population.toLocaleString()}</span>
          </div>
        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="mt-auto flex items-center justify-center gap-2 w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-2xl hover:bg-blue-600 transition-colors duration-300"
        >
          Explore Country
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
