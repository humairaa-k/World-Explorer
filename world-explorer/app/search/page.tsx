import { Country } from '@/types/country';
import CountrySearch from '@/components/CountrySearch';
import { notFound } from "next/navigation";

export default async function SearchPage() {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3',
    {
      cache: 'force-cache',
    }
  );

  if (!response.ok) notFound()

  const countries: Country[] = await response.json();

  return (
    <>
      <CountrySearch countries={countries} />
    </>
  );
}
