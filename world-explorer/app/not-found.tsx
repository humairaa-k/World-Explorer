import Link from 'next/link';
import { Globe, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-6">
          <div className="bg-slate-800 p-5 rounded-3xl shadow-lg">
            <Globe className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-7xl font-black text-slate-900 mb-4">404</h1>

        <h2 className="text-3xl font-bold text-slate-800 mb-4">Country Not Found</h2>

        <p className="text-slate-600 leading-relaxed mb-8">
          Looks like the page you are trying to explore does not exist or may have been removed.
        </p>

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            shadow-lg
            hover:bg-blue-700
            transition-colors
            duration-300
          "
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
