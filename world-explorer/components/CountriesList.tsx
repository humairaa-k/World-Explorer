"use client"

import { useState } from "react"
import CountryCard from "./CountryCard"
import { Country } from "@/types/country"
import CountriesFilters from "./CountriesFilters"

type CountryProp = { countries: Country[] }

export default function CountriesList({countries} : CountryProp) {
    const [selectedRegion, setSelectedRegion ] = useState("All")
    const [sortOrder, setSortOrder ] = useState("default")

    let filteredCountries = 
      selectedRegion === "All" 
      ? countries 
      : countries.filter(
        (country) => country.region === selectedRegion
      )

      if(sortOrder === "high") {
        filteredCountries = [...filteredCountries].sort(
          (a, b) => b.population - a.population
        )
      }

      if(sortOrder === "low") {
        filteredCountries = [...filteredCountries].sort(
          
        )
      }

  return (
   <>
    <CountriesFilters
    selectedRegion={selectedRegion}
    setSelectedRegion={setSelectedRegion}
    sortOrder={sortOrder}
    setSortOrder={setSortOrder}
    />

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {filteredCountries.slice(0, 20).map((country) => (
      <CountryCard key={country.cca3} country={country} />
    ))}
  </div>
   </>
   
   
  )
}

