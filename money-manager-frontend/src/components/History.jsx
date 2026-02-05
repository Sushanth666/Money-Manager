// export default function History() {
//   return (
//    <div className="bg-white p-4 rounded-xl shadow">
//   <h2 className="font-semibold mb-4 text-lg text-indigo-700">
//   Transaction History
// </h2>
//   <div className="flex justify-between items-center py-3 border-b hover:bg-gray-50 px-2 rounded">
//     <div>
//       <p className="font-medium text-slate-800">Fuel</p>
//       <small className="text-gray-500">Office • 03 Feb 2026</small>
//     </div>

//     <div className="text-rose-600 font-semibold text-lg">
//   - ₹500
// </div>

//   </div>
// </div>

//   );
// }
// export default function History({ transactions }) {
//   if (!transactions.length) {
//     return (
//       <div className="bg-white p-4 rounded-xl shadow text-gray-500">
//         No transactions yet
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 py-2 rounded-lg border border-gray-300
//                      text-gray-600 hover:bg-gray-100 transition">
//       <h2 className="font-semibold mb-4 text-indigo-700">
//         Transaction History
//       </h2>

//       {transactions.map((t) => (
//         <div
//           key={t.id}
//           className="flex justify-between items-center border-b py-2"
//         >
//           <div>
//             <p className="font-medium">{t.category}</p>
//             <small className="text-gray-500">
//               {t.division} • {new Date(t.dateTime).toLocaleDateString()}
//             </small>
//           </div>
//           <div
//             className={`font-semibold ${
//               t.type === "income"
//                 ? "text-emerald-600"
//                 : "text-rose-600"
//             }`}
//           >
//             {t.type === "income" ? "+" : "-"} ₹{t.amount}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default function History({ transactions }) {
//   const TWELVE_HOURS = 12 * 60 * 60 * 1000;

//   return (
//     <div className="px-4 py-2 rounded-lg border border-gray-300
//                       text-gray-600 hover:bg-gray-100 transition">
//       <h2 className="font-semibold mb-4 text-indigo-700">
//         Transaction History
//       </h2>

//       {transactions.map((t) => {
//         const isEditable =
//           Date.now() - new Date(t.dateTime).getTime() <= TWELVE_HOURS;

//         return (
//           <div
//             key={t.id}
//             className="flex justify-between items-center border-b py-3"
//           >
//             <div>
//               <p className="font-medium">{t.category}</p>
//               <small className="text-gray-500">
//                 {t.division} •{" "}
//                 {new Date(t.dateTime).toLocaleString()}
//               </small>
//             </div>

//             <div className="flex items-center gap-3">
//               <span
//                 className={`font-semibold ${
//                   t.type === "income"
//                     ? "text-emerald-600"
//                     : "text-rose-600"
//                 }`}
//               >
//                 {t.type === "income" ? "+" : "-"} ₹{t.amount}
//               </span>

//               <button
//                 disabled={!isEditable}
//                 className={`text-sm px-3 py-1 rounded ${
//                   isEditable
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default function History({ transactions, onEdit }) {
//   const TWELVE_HOURS = 12 * 60 * 60 * 1000;

//   return (
//       <div className="px-4 py-2 rounded-lg border border-gray-300
// //                       text-gray-600 hover:bg-gray-100 transition">
//       <h2 className="font-semibold mb-4 text-indigo-700">
//         Transaction History
//       </h2>

//       {transactions.map((t) => {
//         const isEditable =
//           Date.now() - new Date(t.dateTime).getTime() <= TWELVE_HOURS;

//         return (
//           <div
//             key={t._id}
//             className="flex justify-between items-center border-b py-3"
//           >
//             <div>
//               <p className="font-medium">{t.category}</p>
//               <small className="text-gray-500">
//                 {t.division} • {new Date(t.dateTime).toLocaleString()}
//               </small>
//             </div>

//             <div className="flex items-center gap-3">
//               <span
//                 className={`font-semibold ${
//                   t.type === "income"
//                     ? "text-emerald-600"
//                     : "text-rose-600"
//                 }`}
//               >
//                 {t.type === "income" ? "+" : "-"} ₹{t.amount}
//               </span>

//               <button
//                 disabled={!isEditable}
//                 onClick={() => onEdit(t)}
//                 className={`text-sm px-3 py-1 rounded ${
//                   isEditable
//                     ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
//                     : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// console.log("History rendered");
// export default function History({ transactions, onEdit,onDelete }) {
//   if (transactions.length === 0) {
//     return (
//       <p className="text-center text-gray-500 mt-6">
//         No transactions found
//       </p>
//     );
//   }

//   return (
//     <div className="bg-white p-4 rounded-xl shadow">
//       <h3 className="font-bold text-indigo-700 mb-4">
//         Transaction History
//       </h3>

//       <ul className="space-y-3">
//         {transactions.map((t) => (
//           <li
//             key={t._id}
//             className="flex justify-between items-center border p-3 rounded-lg"
//           >
//             <div>
//               <p className="font-medium text-indigo-700">
//                 {t.category} ({t.division})
//               </p>
//               <p className="text-sm text-gray-500">
//                 {new Date(t.dateTime).toLocaleString()}
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
             
//               <div className="flex items-center gap-3">
//   <p
//     className={`font-semibold ${
//       t.type === "income" ? "text-emerald-600" : "text-rose-600"
//     }`}
//   >
//     ₹{t.amount}
//   </p>

//   {onEdit && (
//     <button
//       onClick={() => onEdit(t)}
//       className="text-sm text-indigo-600 hover:underline"
//     >
//       Edit
//     </button>
//   )}

//   {onDelete && (
//     <button
//       onClick={() => onDelete(t._id)}
//       className="text-sm text-rose-600 hover:underline"
//     >
//       Delete
//     </button>
//   )}
// </div>

//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// console.log("History rendered");

// export default function History({ transactions, onEdit, onDelete }) {
//   const TWELVE_HOURS = 12 * 60 * 60 * 1000;

//   if (transactions.length === 0) {
//     return (
//       <p className="text-center text-gray-500 mt-6">
//         No transactions found
//       </p>
//     );
//   }

//   return (
//     <div className="bg-white p-4 rounded-xl shadow">
//       <h3 className="font-bold text-indigo-700 mb-4">
//         Transaction History
//       </h3>

//       <ul className="space-y-3">
//         {transactions.map((t) => {
//           // ✅ SAFE createdAt
//           const createdAt = t.createdAt
//             ? new Date(t.createdAt)
//             : new Date(t.dateTime);

//           const timeDiff = Date.now() - createdAt.getTime();
//           const isEditExpired = timeDiff > TWELVE_HOURS;

//           return (
//             <li
//               key={t._id}
//               className="flex justify-between items-center border p-3 rounded-lg"
//             >
//               <div>
//                 <p className="font-medium text-indigo-700">
//                   {t.category} ({t.division})
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {new Date(t.dateTime).toLocaleString()}
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <p
//                   className={`font-semibold ${
//                     t.type === "income"
//                       ? "text-emerald-600"
//                       : "text-rose-600"
//                   }`}
//                 >
//                   ₹{t.amount}
//                 </p>

//                 {onEdit && (
//                   <button
//                     onClick={() => {
//                       if (!isEditExpired) onEdit(t);
//                     }}
//                     disabled={isEditExpired}
//                     className={`text-sm font-medium ${
//                       isEditExpired
//                         ? "text-gray-400 cursor-not-allowed"
//                         : "text-indigo-600 hover:underline"
//                     }`}
//                   >
//                     {isEditExpired ? "Edit expired" : "Edit"}
//                   </button>
//                 )}

//                 {onDelete && (
//                   <button
//                     onClick={() => onDelete(t._id)}
//                     className="text-sm text-rose-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

console.log("History rendered");

export default function History({ transactions, onEdit, onDelete }) {
  const TWELVE_HOURS = 12 * 60 * 60 * 1000;

  if (transactions.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No transactions found
      </p>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold text-indigo-700 mb-4">
        Transaction History
      </h3>

      <ul className="space-y-3">
        {transactions.map((t) => {
          const createdAt = t.createdAt ? new Date(t.createdAt) : null;

          // ✅ ONLY creation time decides edit
          const isEditAllowed =
            createdAt &&
            Date.now() - createdAt.getTime() <= TWELVE_HOURS;

          return (
            <li
              key={t._id}
              className="flex justify-between items-center border p-3 rounded-lg"
            >
              <div>
                <p className="font-medium text-indigo-700">
                  {t.category} ({t.division})
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(t.dateTime).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <p
                  className={`font-semibold ${
                    t.type === "income"
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  ₹{t.amount}
                </p>

                {onEdit && (
                  <button
                    onClick={() => isEditAllowed && onEdit(t)}
                    disabled={!isEditAllowed}
                    className={`text-sm font-medium ${
                      isEditAllowed
                        ? "text-indigo-600 hover:underline"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    title={
                      isEditAllowed
                        ? "Edit transaction"
                        : "Editing allowed only within 12 hours of creation"
                    }
                  >
                    {isEditAllowed ? "Edit" : "Edit expired"}
                  </button>
                )}

                {onDelete && (
                  <button
                    onClick={() => onDelete(t._id)}
                    className="text-sm text-rose-600 hover:underline"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
