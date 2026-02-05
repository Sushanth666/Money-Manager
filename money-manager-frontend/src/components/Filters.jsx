// export default function Filters() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow mb-4 flex gap-3 flex-wrap items-center">
//   <select
//   className="border border-indigo-300 
//              text-indigo-700 font-medium
//              bg-white rounded-lg px-3 py-2
//              focus:outline-none focus:ring-2 focus:ring-indigo-400"
// >

//     <option>All Categories</option>
//     <option>Fuel</option>
//     <option>Food</option>
//     <option>Movie</option>
//   </select>

//  <select
//   className="border border-indigo-300 
//              text-indigo-700 font-medium
//              bg-white rounded-lg px-3 py-2
//              focus:outline-none focus:ring-2 focus:ring-indigo-400"
// >

//     <option>All Divisions</option>
//     <option>Office</option>
//     <option>Personal</option>
//   </select>

//   <input
//   type="date"
//   className="border border-indigo-300 
//              text-indigo-700
//              rounded-lg px-3 py-2"
// />
//  <input
//   type="date"
//   className="border border-indigo-300 
//              text-indigo-700
//              rounded-lg px-3 py-2"
// />
// </div>

//   );
// }
export default function Filters({
  category,
  setCategory,
  division,
  setDivision,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  onReset,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 flex gap-3 flex-wrap items-center">

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-indigo-300 text-indigo-700 font-medium
                   bg-white rounded-lg px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
       <option value="">All Categories</option>
<option value="Fuel">Fuel</option>
<option value="Food">Food</option>
<option value="Movie">Movie</option>
<option value="Loan">Loan</option>
<option value="Medical">Medical</option>

      </select>

      {/* Division */}
      <select
        value={division}
        onChange={(e) => setDivision(e.target.value)}
        className="border border-indigo-300 text-indigo-700 font-medium
                   bg-white rounded-lg px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="">All Divisions</option>
        <option>Office</option>
        <option>Personal</option>
      </select>

      {/* From Date */}
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        className="border border-indigo-300 text-indigo-700
                   rounded-lg px-3 py-2"
      />

      {/* To Date */}
      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        className="border border-indigo-300 text-indigo-700
                   rounded-lg px-3 py-2"
      />
  <button
    onClick={onReset}
    className="border border-indigo-300 text-indigo-700
                   rounded-lg px-3 py-2"
  >
    Reset
  </button>


    </div>
  );
}
