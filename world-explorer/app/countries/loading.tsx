export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="h-10 w-64 bg-slate-200 rounded-xl animate-pulse mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              shadow-sm
              border border-slate-100
              overflow-hidden
              animate-pulse
            "
          >
            <div className="h-48 bg-slate-200" />

            <div className="p-5 space-y-4">
              <div className="h-6 bg-slate-200 rounded-lg w-3/4" />

              <div className="h-4 bg-slate-200 rounded-lg w-full" />

              <div className="h-4 bg-slate-200 rounded-lg w-5/6" />

              <div className="h-4 bg-slate-200 rounded-lg w-2/3" />

              <div className="h-10 bg-slate-200 rounded-2xl w-full mt-6" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
