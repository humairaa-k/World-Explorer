import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className=" bg-white relative max-w-6xl mx-auto px-8 pt-20 pb-16 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <Image src="/map.png" alt="world map" fill className="object-cover " />
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Explore Every Country In One Place
          </h1>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Search countries, check capitals, population, currencies, and discover facts from around
            the world.
          </p>

          <div className="mt-8">
            <Link
              href="/countries"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800 transition-colors"
            >
              Browse Countries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
