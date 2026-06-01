import { Country } from "@/types/country"
import Link from "next/link"

interface FavoriteCountriesProps {
  countries: Country[]
}

export default function FavoriteCountries({ countries }: FavoriteCountriesProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[15px] font-semibold tracking-tight text-gray-900">
          Favorite Countries
        </h2>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
          {countries.length} saved
        </span>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {countries.map((country) => (
            <Link
              key={country.cca3}
              href={`/countries/${country.cca3}`}
              className="group flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 no-underline"
            >
              <div className="w-[42px] h-[30px] rounded-md overflow-hidden border border-gray-200 flex-shrink-0">
                <img
                  src={country.flags.svg}
                  alt={`${country.name.common} flag`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-gray-900 truncate">
                  {country.name.common}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  {country.region}
                </p>
              </div>

             <svg
                className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 flex-shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg> 
            </Link>
          ))}
        </div>
    
    </div>
  )
}