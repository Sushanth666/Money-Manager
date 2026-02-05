// import { useState } from "react";

// export default function Dashboard() {
//   const [view, setView] = useState("monthly");

//   return (
//     <div className="bg-white p-4 rounded shadow mb-4">
//       <div className="flex justify-between mb-4">
//         <h2 className="font-semibold">Dashboard</h2>
//         <select
//           className="border border-indigo-300 
//              text-indigo-700 font-semibold
//              bg-white rounded-lg px-3 py-2
//              focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           value={view}
//           onChange={(e) => setView(e.target.value)}
//         >

//           <option className="text-indigo-700 font-medium">Monthly</option>
//           <option className="text-indigo-700 font-medium">Weekly</option>
//           <option className="text-indigo-700 font-medium">Yearly</option>
//         </select>
//       </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//   {/* Income */}
//   <div className="bg-white rounded-2xl p-5 shadow-md 
//                   border-l-4 border-emerald-500
//                   hover:shadow-xl transition">
//     <p className="text-gray-500">Total Income</p>
//     <h3 className="text-2xl font-bold text-emerald-600 mt-1">
//       ₹ 0
//     </h3>
//   </div>

//   {/* Expense */}
//   <div className="bg-white rounded-2xl p-5 shadow-md 
//                   border-l-4 border-rose-500
//                   hover:shadow-xl transition">
//     <p className="text-gray-500">Total Expense</p>
//     <h3 className="text-2xl font-bold text-rose-600 mt-1">
//       ₹ 0
//     </h3>
//   </div>
// </div>

//       </div>
//   );
// }
export default function Dashboard({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="bg-white p-5 rounded-2xl shadow mb-6">
      <h2 className="text-lg font-semibold text-indigo-700 mb-4">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 border-l-4 border-emerald-500 shadow">
          <p className="text-gray-500">Total Income</p>
          <h3 className="text-2xl font-bold text-emerald-600">
            ₹ {totalIncome}
          </h3>
        </div>

        <div className="bg-white rounded-xl p-5 border-l-4 border-rose-500 shadow">
          <p className="text-gray-500">Total Expense</p>
          <h3 className="text-2xl font-bold text-rose-600">
            ₹ {totalExpense}
          </h3>
        </div>
      </div>
    </div>
  );
}
