// import { useState } from "react";

// export default function TransactionModal({ close }) {
//   const [type, setType] = useState("income");

//   return (
//     <div className="bg-white p-6 w-96 rounded-2xl shadow-2xl border border-indigo-100">
//       <div className="bg-white p-6 w-96 rounded">
//         <div className="flex justify-between mb-4">
//           <button
//   className={`px-3 py-1 rounded ${
//     type === "income"
//       ? "bg-emerald-100 text-emerald-700 font-semibold"
//       : "text-gray-500"
//   }`}
// >
//   Income
// </button>

//           <button
//   className={`px-3 py-1 rounded ${
//     type === "expense"
//       ? "bg-rose-100 text-rose-700 font-semibold"
//       : "text-gray-500"
//   }`}
// >
//   Expense
// </button>

//         </div>

//         <input className="border w-full p-2 mb-2" placeholder="Amount" />
//         <input className="border w-full p-2 mb-2" placeholder="Description" />

//         <select className="border w-full p-2 mb-2">
//           <option>Fuel</option>
//           <option>Food</option>
//           <option>Movie</option>
//           <option>Loan</option>
//           <option>Medical</option>
//         </select>

//         <select className="border w-full p-2 mb-2">
//           <option>Office</option>
//           <option>Personal</option>
//         </select>

//         <input type="datetime-local" className="border w-full p-2 mb-4" />

//         <div className="flex justify-between">
//           <button onClick={close}>Cancel</button>
//           <button className="bg-linear-to-r from-indigo-600 to-purple-600
//                    hover:from-indigo-700 hover:to-purple-700
//                    transition text-white px-4 py-2 rounded-lg">
//   Save
// </button>

//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";

// export default function TransactionModal({ close }) {
//   const [type, setType] = useState("income");

//   return (
//     <div className="bg-white p-6 w-96 rounded-2xl shadow-2xl border border-indigo-200">
      
//       {/* Tabs */}
//       <div className="flex justify-between mb-5 bg-indigo-50 rounded-lg p-1">
//         <button
//           onClick={() => setType("income")}
//           className={`w-1/2 py-2 rounded-lg transition font-semibold ${
//             type === "income"
//               ? "bg-emerald-500 text-white shadow"
//               : "text-gray-500"
//           }`}
//         >
//           Income
//         </button>

//         <button
//           onClick={() => setType("expense")}
//           className={`w-1/2 py-2 rounded-lg transition font-semibold ${
//             type === "expense"
//               ? "bg-rose-500 text-white shadow"
//               : "text-gray-500"
//           }`}
//         >
//           Expense
//         </button>
//       </div>

//       {/* Amount */}
//       <input
//         className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400
//                    text-indigo-700"
//         placeholder="Amount"
//         type="number"
//       />

//       {/* Description */}
//       <input
//         className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400
//                    text-indigo-700"
//         placeholder="Description"
//       />

//       {/* Category */}
//       <select
//         className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    bg-white text-indigo-700 font-medium
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                    placeholder="All Categories"
//       >
//         <option>Fuel</option>
//         <option>Food</option>
//         <option>Movie</option>
//         <option>Loan</option>
//         <option>Medical</option>
//       </select>

//       {/* Division */}
//       <select
//         className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    bg-white text-indigo-700 font-medium
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400"
//       >
//         <option>Office</option>
//         <option>Personal</option>
//       </select>

//       {/* Date & Time */}
//       <input
//         type="datetime-local"
//         className="border border-indigo-300 w-full p-2 mb-5 rounded-lg
//                    text-indigo-700
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400"
//       />

//       {/* Actions */}
//       <div className="flex justify-end gap-3">
//         <button
//           onClick={close}
//           className="px-4 py-2 rounded-lg border border-gray-300
//                      text-gray-600 hover:bg-gray-100 transition"
//         >
//           Cancel
//         </button>

//         <button
//           className={`px-5 py-2 rounded-lg text-white font-semibold transition
//             ${
//               type === "income"
//                 ? "bg-emerald-500 hover:bg-emerald-600"
//                 : "bg-rose-500 hover:bg-rose-600"
//             }`}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";

// export default function TransactionModal({ close, onSave }) {
//   const [type, setType] = useState("income");
//   const [amount, setAmount] = useState("");
//   const [category, setCategory] = useState("Fuel");
//   const [division, setDivision] = useState("Office");
//   const [description, setDescription] = useState("");
//   const [dateTime, setDateTime] = useState("");

//   const handleSave = () => {
//     if (!amount || !dateTime) {
//       alert("Amount and Date are required");
//       return;
//     }

//     onSave({
//       id: Date.now(),
//       type,
//       amount: Number(amount),
//       category,
//       division,
//       description,
//       dateTime,
//     });

//     close();
//   };

//   return (
//     <div className="bg-white p-6 w-96 rounded-2xl shadow-2xl border border-indigo-200">
//       {/* Tabs */}
//       <div className="flex mb-5 bg-indigo-50 rounded-lg p-1">
//         <button
//           onClick={() => setType("income")}
//           className={`w-1/2 py-2 rounded-lg font-semibold ${
//             type === "income"
//               ? "bg-emerald-500 text-white"
//               : "text-gray-500"
//           }`}
//         >
//           Income
//         </button>
//         <button
//           onClick={() => setType("expense")}
//           className={`w-1/2 py-2 rounded-lg font-semibold ${
//             type === "expense"
//               ? "bg-rose-500 text-white"
//               : "text-gray-500"
//           }`}
//         >
//           Expense
//         </button>
//       </div>

//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400
//                    text-indigo-700"
//       />

//       <input
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//          className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400
//                    text-indigo-700"

//       />

//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//          className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    bg-white text-indigo-700 font-medium
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400"
//       >
//         <option>Fuel</option>
//         <option>Food</option>
//         <option>Movie</option>
//         <option>Loan</option>
//         <option>Medical</option>
//         <option>Salary</option>
//       </select>

//       <select
//         value={division}
//         onChange={(e) => setDivision(e.target.value)}
//        className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                    bg-white text-indigo-700 font-medium
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400"
//       >
//         <option>Office</option>
//         <option>Personal</option>
//       </select>

//       <input
//         type="datetime-local"
//         value={dateTime}
//         onChange={(e) => setDateTime(e.target.value)}
//          className="border border-indigo-300 w-full p-2 mb-5 rounded-lg
//                    text-indigo-700
//                    focus:outline-none focus:ring-2 focus:ring-indigo-400"
//       />

//       <div className="flex justify-end gap-3">
//         <button onClick={close} className="px-4 py-2 rounded-lg border border-gray-300
//                      text-gray-600 hover:bg-gray-100 transition">
//           Cancel
//         </button>
//         <button
//           onClick={handleSave}
//           className={`px-5 py-2 rounded-lg text-white font-semibold ${
//             type === "income"
//               ? "bg-emerald-500"
//               : "bg-rose-500"
//           }`}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";

// export default function TransactionModal({ close, onSave, existingData }) {
//   const [type, setType] = useState("income");
//   const [amount, setAmount] = useState("");
//   const [category, setCategory] = useState("Fuel");
//   const [division, setDivision] = useState("Office");
//   const [description, setDescription] = useState("");
//   const [dateTime, setDateTime] = useState("");

//     useEffect(() => {
//     if (existingData) {
//       setType(existingData.type);
//       setAmount(existingData.amount);
//       setCategory(existingData.category);
//       setDivision(existingData.division);
//       setDescription(existingData.description || "");
//       setDateTime(
//         new Date(existingData.dateTime).toISOString().slice(0, 16)
//       );
//     }
//   }, [existingData]);

//   const handleSave = () => {
//     if (!amount || !dateTime) {
//       alert("Please enter amount and date");
//       return;
//     }

//     onSave({
//       _id: existingData ? existingData._id : undefined,
//       type,
//       amount: Number(amount),
//       category,
//       division,
//       description,
//       dateTime,
//     });

//     close();
//   };

//   return (
//     /* 🔹 Fullscreen overlay */
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      
//       <div className="bg-white p-6 w-96 rounded-2xl shadow-2xl border border-indigo-200">

//         {/* Tabs */}
//         <div className="flex mb-5 bg-indigo-50 rounded-lg p-1">
//           <button
//             onClick={() => setType("income")}
//             className={`w-1/2 py-2 rounded-lg font-semibold transition ${
//               type === "income"
//                 ? "bg-emerald-500 text-white shadow"
//                 : "text-gray-500"
//             }`}
//           >
//             Income
//           </button>
//           <button
//             onClick={() => setType("expense")}
//             className={`w-1/2 py-2 rounded-lg font-semibold transition ${
//               type === "expense"
//                 ? "bg-rose-500 text-white shadow"
//                 : "text-gray-500"
//             }`}
//           >
//             Expense
//           </button>
//         </div>

//         {/* Amount */}
//         <input
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400
//                      text-indigo-700"
//         />

//         {/* Description */}
//         <input
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400
//                      text-indigo-700"
//         />

//         {/* Category */}
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      bg-white text-indigo-700 font-medium
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         >
//           {type === "income" ? (
//             <>
//               <option>Salary</option>
//               <option>Bonus</option>
//               <option>Freelance</option>
//             </>
//           ) : (
//             <>
//               <option>Fuel</option>
//               <option>Food</option>
//               <option>Movie</option>
//               <option>Loan</option>
//               <option>Medical</option>
//             </>
//           )}
//         </select>

//         {/* Division */}
//         <select
//           value={division}
//           onChange={(e) => setDivision(e.target.value)}
//           className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      bg-white text-indigo-700 font-medium
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         >
//           <option>Office</option>
//           <option>Personal</option>
//         </select>

//         {/* Date */}
//         <input
//           type="datetime-local"
//           value={dateTime}
//           onChange={(e) => setDateTime(e.target.value)}
//           className="border border-indigo-300 w-full p-2 mb-5 rounded-lg
//                      text-indigo-700
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         {/* Actions */}
//         <div className="flex justify-end gap-3">
//           <button
//             onClick={close}
//             className="px-4 py-2 rounded-lg border border-gray-300
//                        text-gray-600 hover:bg-gray-100 transition"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSave}
//             className={`px-5 py-2 rounded-lg text-white font-semibold transition
//               ${
//                 type === "income"
//                   ? "bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
//                   : "bg-linear-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
//               }`}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

export default function TransactionModal({ close, onSave, existingData }) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Fuel");
  const [division, setDivision] = useState("Office");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");

  // 🔹 Populate form when editing
  useEffect(() => {
    if (existingData) {
      setType(existingData.type);
      setAmount(existingData.amount);
      setCategory(existingData.category);
      setDivision(existingData.division);
      setDescription(existingData.description || "");
      setDateTime(
        new Date(existingData.dateTime).toISOString().slice(0, 16)
      );
    }
  }, [existingData]);

  const handleSave = () => {
    if (!amount || !dateTime) {
      alert("Please enter amount and date");
      return;
    }

    onSave({
      _id: existingData ? existingData._id : undefined,
      type,
      amount: Number(amount),
      category,
      division,
      description,
      dateTime,
    });

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-96 rounded-2xl shadow-2xl border border-indigo-200">

        {/* Tabs */}
        <div className="flex mb-5 bg-indigo-50 rounded-lg p-1">
          <button
            onClick={() => setType("income")}
            disabled={!!existingData}
            className={`w-1/2 py-2 rounded-lg font-semibold transition ${
              type === "income"
                ? "bg-emerald-500 text-white shadow"
                : "text-gray-500"
            } ${existingData ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            Income
          </button>

          <button
            onClick={() => setType("expense")}
            disabled={!!existingData}
            className={`w-1/2 py-2 rounded-lg font-semibold transition ${
              type === "expense"
                ? "bg-rose-500 text-white shadow"
                : "text-gray-500"
            } ${existingData ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            Expense
          </button>
        </div>

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-400
                     text-indigo-700"
        />

        {/* Description */}
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-400
                     text-indigo-700"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
                     bg-white text-indigo-700 font-medium
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {type === "income" ? (
            <>
              <option>Salary</option>
              <option>Bonus</option>
              <option>Freelance</option>
            </>
          ) : (
            <>
              <option>Fuel</option>
              <option>Food</option>
              <option>Movie</option>
              <option>Loan</option>
              <option>Medical</option>
            </>
          )}
        </select>

        {/* Division */}
        <select
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
                     bg-white text-indigo-700 font-medium
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option>Office</option>
          <option>Personal</option>
        </select>

        {/* Date */}
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="border border-indigo-300 w-full p-2 mb-5 rounded-lg
                     text-indigo-700
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={close}
            className="px-4 py-2 rounded-lg border border-gray-300
                       text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
              type === "income"
                ? "bg-linear-to-r from-emerald-500 to-emerald-600"
                : "bg-linear-to-r from-rose-500 to-rose-600"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
