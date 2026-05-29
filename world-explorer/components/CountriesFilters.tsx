type FiltersProps = {
  selectedRegion: string
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>

  sortOrder: string
  setSortOrder: React.Dispatch<React.SetStateAction<string>>
}

export default function CountriesFilters( {selectedRegion, setSelectedRegion,
                                           sortOrder, setSortOrder,}: FiltersProps)
 {
  return (
   <div>
     <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 sm:justify-end gap-4 mb-15">

  <div className="flex flex-col gap-2  w-full sm:w-64">
    
    <label
      htmlFor="region-select"
      className="text-sm font-semibold text-slate-700">
      Filter by Region
    </label>

    <select
      id="region-select"
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
      className="
      w-full bg-white
      border border-slate-200
      rounded-2xl
      px-5
      py-2.5
      mt-2.5
      text-sm text-slate-800
      shadow-sm
      outline-none
      focus:border-blue-500
      focus:ring-4 focus:ring-blue-100
      cursor-pointer">

       <option value="All">All Regions</option>
       <option value="Asia">Asia</option>
       <option value="Africa">Africa</option>
       <option value="Europe">Europe</option>
       <option value="Americas">Americas</option>
       <option value="Oceania">Oceania</option>
    </select>

  </div>

  {/* population sorting */}
  <div className="w-full sm:w-64">
     <label className="text-sm font-semibold text-slate-700">
       Sort by Population
     </label>

     <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="
      w-full bg-white
      border border-slate-200
      rounded-2xl
      px-5
      py-2.5
      mt-2.5
      text-sm text-slate-800
      shadow-sm
      outline-none
      focus:border-blue-500
      focus:ring-4 focus:ring-blue-100
      cursor-pointer"
      >

      <option value="default">Default</option>
      <option value="high">Highest Population</option>
      <option value="low">Lowest Population</option>

     </select>
  </div>

</div>
   </div>
  )
}

