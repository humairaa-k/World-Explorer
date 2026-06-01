import { Country } from '@/types/country';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPinned } from 'lucide-react';
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    code: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`,
    { cache: "no-store" }
  );

  if (!res.ok) return { title: "Country not found | World Explorer" };

  const data = await res.json();
  const country = data[0];

  if (!country) return { title: "Country not found | World Explorer" };

  return {
    title: `${country.name.common} | World Explorer`,
    description: `Explore details about ${country.name.common}, including capital, population, region, languages and more.`,
  };
}

export default async function CountryDetailsPage({ params }: PageProps) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,region,subregion,population,flags,languages,currencies,timezones,maps`,
    { cache: 'no-store' }
  );

  if (!res.ok) notFound();

  const data = await res.json();
  const country: Country = Array.isArray(data) ? data[0] : data;

  if (!country) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/countries"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Countries
        </Link>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <img
                src={country.flags.svg}
                alt={country.flags.alt || country.name.common}
                className="h-full w-full object-cover min-h-[320px]"
              />
              <span className="absolute top-6 right-6 bg-black/70 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                {country.region}
              </span>
            </div>

            <div className="p-10 flex flex-col gap-3">
              <h1 className="text-4xl font-black text-gray-900">{country.name.common}</h1>
              <p className="text-gray-500 text-lg mb-4">{country.name.official}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Info title="Capital" value={country.capital?.[0] || 'N/A'} />
                <Info title="Population" value={country.population.toLocaleString()} />
                <Info title="Subregion" value={country.subregion || 'N/A'} />
                <Info
                  title="Languages"
                  value={country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
                />
                <Info
                  title="Currencies"
                  value={
                    country.currencies
                      ? Object.values(country.currencies)
                          .map((c) => `${c.name} (${c.symbol})`)
                          .join(', ')
                      : 'N/A'
                  }
                />
                <Info title="Timezone" value={country.timezones.join(', ') || 'N/A'} />
              </div>

              
              <a href={country.maps.googleMaps}
                target="_blank"
                className="mt-6 bg-gray-900 hover:bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold transition w-fit inline-flex items-center gap-2"
              >
                <MapPinned className="w-5 h-5" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
      <p className="text-xs uppercase text-gray-400 mb-1">{title}</p>
      <p className="text-gray-900 font-semibold">{value}</p>
    </div>
  );
}