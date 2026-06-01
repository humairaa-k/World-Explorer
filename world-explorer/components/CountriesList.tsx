'use client';

import { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import { Country } from '@/types/country';
import CountriesFilters from './CountriesFilters';
import FavoriteCountries from './FavoriteCountries';

type CountryProp = { countries: Country[] };

type SortOrder = 'default' | 'high' | 'low';

export default function CountriesList({ countries }: CountryProp) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('default');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded ] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  let filteredCountries =
    selectedRegion === 'All'
      ? countries
      : countries.filter((country) => country.region === selectedRegion);

  if (sortOrder === 'high') {
    filteredCountries = [...filteredCountries].sort((a, b) => b.population - a.population);
  }

  if (sortOrder === 'low') {
    filteredCountries = [...filteredCountries].sort((a, b) => (a.population - b.population));
  }
 
   const favoriteCountries = countries.filter((country) => 
   favorites.includes(country.cca3));


  const toggleFavorite = ((id: string) => {
   if(favorites.includes(id)) {
    setFavorites(
        favorites.filter((favoriteId) => favoriteId !== id)
      );
   } else {
    setFavorites([...favorites, id]) 
   }
  })

   useEffect(() => {
   const storedFavorites = localStorage.getItem("favorites");
   if(storedFavorites) {
    setFavorites(JSON.parse(storedFavorites))
   }

   setIsLoaded(true)
  },[])

  useEffect(() => {
    if(!isLoaded) return;
   localStorage.setItem("favorites", JSON.stringify(favorites));
 }, [favorites, isLoaded]);

 

  return (
    <>
      <CountriesFilters
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        showFavorites={showFavoritesOnly}
        setShowFavorites={setShowFavoritesOnly}
      />

    {showFavoritesOnly ? (
      favoriteCountries.length > 0 ? (
      <FavoriteCountries
       countries={favoriteCountries}/>
      ) : (
      <div className="text-center py-8 px-4 border border-dashed border-gray-200 rounded-xl text-sm text-gray-400 mb-8">
          No favorites yet
        </div>
      ) 
    ) : null }
    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCountries.slice(0, 20).map((country) => (
          <CountryCard 
          key={country.cca3}
          country={country} 
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          />
        ))}
      </div>
    </>
  );
}
