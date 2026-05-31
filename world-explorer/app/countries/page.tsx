import { Country } from '@/types/country';
import CountriesList from '@/components/CountriesList';

// This page can be statically rendered and cached.

export default async function CountriesPage() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3',
    {
      cache: 'force-cache',
    }
  );

  const countries: Country[] = await res.json();
  console.log(countries);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Explore Countries</h1>
      <CountriesList countries={countries} />
    </main>
  );
}
