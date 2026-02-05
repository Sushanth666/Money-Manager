// import { useState } from "react";
// import Dashboard from "./components/Dashboard";
// import TransactionModal from "./components/TransactionModal";
// import Filters from "./components/Filters";
// import History from "./components/History";

// export default function Home() {
//   const [open, setOpen] = useState(false);

//   return (
//   <div className="min-h-screen w-full 
//                 bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50 
//                 px-6 py-6">
//                    <div className="w-full">
//       <div className="flex justify-between items-center mb-6">
//   <h1 className="text-3xl font-extrabold tracking-tight text-indigo-700">
//   💰 Money Manager
// </h1>

// <button
//   className="bg-linear-to-r from-indigo-600 to-purple-600 
//              hover:from-indigo-700 hover:to-purple-700 
//              transition text-black px-5 py-2 rounded-full shadow-lg"
//   onClick={() => setOpen(true)}
// >
//   + Add Transaction
// </button>
// </div>
// </div>

//     <div className="space-y-6">
//   <Dashboard />
//   <Filters />
//   <History />
// </div>


//       {open && <TransactionModal close={() => setOpen(false)} />}
//     </div>
//   );
// }
// import { useState } from "react";
// import Dashboard from "./components/Dashboard";
// import TransactionModal from "./components/TransactionModal";
// import Filters from "./components/Filters";
// import History from "./components/History";
// import IncomeExpenseChart from "./components/IncomeExpenseChart";


// export default function Home() {
//   const [open, setOpen] = useState(false);
//   const [transactions, setTransactions] = useState([]);

//   const addTransaction = (data) => {
//     setTransactions((prev) => [...prev, data]);
//   };

//   return (
//     <div className="min-h-screen w-full bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-extrabold text-indigo-700">
//           💰 Money Manager
//         </h1>
//         <button
//           onClick={() => setOpen(true)}
//           className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full"
//         >
//           + Add Transaction
//         </button>
//       </div>

//       <Dashboard transactions={transactions} />
//       <IncomeExpenseChart transactions={transactions} />
//       <Filters />
//       <History transactions={transactions} />

//       {open && (
//         <TransactionModal
//           close={() => setOpen(false)}
//           onSave={addTransaction}
//         />
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import Dashboard from "./components/Dashboard";
// import TransactionModal from "./components/TransactionModal";
// import Filters from "./components/Filters";
// import History from "./components/History";
// import IncomeExpenseChart from "./components/IncomeExpenseChart";

// export default function Home() {
//   const [open, setOpen] = useState(false);
//   const [transactions, setTransactions] = useState([]);
//   const [editingTx, setEditingTx] = useState(null);

//   const addTransaction = (data) => {
//     setTransactions((prev) => [...prev, data]);
//   };

//   const updateTransaction = (updatedTx) => {
//     setTransactions((prev) =>
//       prev.map((t) => (t.id === updatedTx.id ? updatedTx : t))
//     );
//   };

//   return (
//     <div className="min-h-screen w-full bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-extrabold text-indigo-700">
//           💰 Money Manager
//         </h1>

//         <button
//           onClick={() => {
//             setEditingTx(null);
//             setOpen(true);
//           }}
//           className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full"
//         >
//           + Add Transaction
//         </button>
//       </div>

//       <Dashboard transactions={transactions} />
//       <IncomeExpenseChart transactions={transactions} />
//       <Filters />

//       <History
//         transactions={transactions}
//         onEdit={(tx) => {
//           setEditingTx(tx);
//           setOpen(true);
//         }}
//       />

//       {open && (
//         <TransactionModal
//           close={() => setOpen(false)}
//           onSave={editingTx ? updateTransaction : addTransaction}
//           existingData={editingTx}
//         />
//       )}
//     </div>
//   );
// }

// import Dashboard from "./components/Dashboard";
// import TransactionModal from "./components/TransactionModal";
// import Filters from "./components/Filters";
// import History from "./components/History";
// import IncomeExpenseChart from "./components/IncomeExpenseChart";
// import API from "./services/api";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";



// export default function Home() {
//   const [open, setOpen] = useState(false);
//   const [transactions, setTransactions] = useState([]);
//   const [editingTx, setEditingTx] = useState(null);
//   const [category, setCategory] = useState("");
// const [division, setDivision] = useState("");
// const [fromDate, setFromDate] = useState("");
// const [toDate, setToDate] = useState("");
// const navigate = useNavigate();

// useEffect(() => {
//   fetchTransactions();
// }, []);

// const filteredTransactions = transactions.filter((t) => {
//   if (category && t.category !== category) return false;
//   if (division && t.division !== division) return false;

//   const txDate = new Date(t.dateTime);

//   if (fromDate) {
//     const from = new Date(fromDate);
//     from.setHours(0, 0, 0, 0);
//     if (txDate < from) return false;
//   }

//   if (toDate) {
//     const to = new Date(toDate);
//     to.setHours(23, 59, 59, 999);
//     if (txDate > to) return false;
//   }

//   return true;
// });

// const deleteTransaction = async (id) => {
//   const ok = window.confirm("Are you sure you want to delete this transaction?");
//   if (!ok) return;
//   try {
//     console.log("Deleting ID:",id);

//     await API.delete(`/api/transactions/${id}`);

//     setTransactions((prev) =>
//       prev.filter((t) => t._id !== id)
//     );
//   } catch (err) {
//     console.error("DELETE ERROR:", err.response || err.message);
//     alert(err.response?.data?.message || err.message);
//   }
// };
// const fetchTransactions = async () => {
//   try {
//     const res = await API.get("/api/transactions");
//     setTransactions(res.data);
//   } catch (err) {
//     alert("Failed to fetch transactions");
//   }
// };
//  const addTransaction = async (data) => {
//   try {
//     const res = await API.post("/api/transactions", data);
//     setTransactions((prev) => [...prev, res.data]);
//   } catch (err) {
//     console.error("ADD ERROR:", err.response || err.message);
//     alert(
//       err.response?.data?.message ||
//       err.message ||
//       "Failed to add transaction"
//     );
//   }
// };
//   const updateTransaction = async (updatedTx) => {
//   try {
//     const res = await API.put(
//       `/api/transactions/${updatedTx._id}`,
//       updatedTx
//     );

//     setTransactions((prev) =>
//       prev.map((t) => (t._id === res.data._id ? res.data : t))
//     );
//   } catch (err) {
//     alert(err.response?.data?.message || "Edit not allowed");
//   }
// };
// const resetFilters = () => {
//   setCategory("");
//   setDivision("");
//   setFromDate("");
//   setToDate("");
// };
// const handleLogout = () => {
//   const ok = window.confirm("Are you sure you want to logout?");
//   if (!ok) return;

//   // clear auth (adjust if you use something else)
//   localStorage.removeItem("user");
//   localStorage.removeItem("token");

//   window.location.href = "/login";
// };
// <button
//   onClick={() => navigate("/profile")}
//   className="px-4 py-2 rounded-lg border border-indigo-300"
// >
//   Profile
// </button>




//   return (
//     <div className="min-h-screen w-screen bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-extrabold text-indigo-700">
//           💰 Money Manager
//         </h1>

//         <button
//           onClick={() => {
//             setEditingTx(null);
//             setOpen(true);
//           }}
//           className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-lg"
//         >
//           + Add Transaction
//         </button>
//          <div className="flex gap-3">
//     <button
//       onClick={() => alert("Profile page coming soon")}
//       className="px-4 py-2 rounded-lg border border-indigo-300
//                  text-indigo-700 font-medium
//                  hover:bg-indigo-50 transition"
//     >
//       Profile
//     </button>

//     <button
//       onClick={handleLogout}
//       className="px-4 py-2 rounded-lg bg-rose-500
//                  text-white font-semibold
//                  hover:bg-rose-600 transition"
//     >
//       Logout
//     </button>
//   </div>
//       </div>

//       <Dashboard transactions={filteredTransactions} />
// <IncomeExpenseChart transactions={filteredTransactions} />


//       <Filters
//   category={category}
//   setCategory={setCategory}
//   division={division}
//   setDivision={setDivision}
//   fromDate={fromDate}
//   setFromDate={setFromDate}
//   toDate={toDate}
//   setToDate={setToDate}
//   onReset={resetFilters}
// />
//       <History
//         transactions={filteredTransactions}
//         onEdit={(tx) => {
//           setEditingTx(tx);
//           setOpen(true);
//         }}
//         onDelete={deleteTransaction}
//       />

//       {open && (
//         <TransactionModal
//           close={() => setOpen(false)}
//           onSave={editingTx ? updateTransaction : addTransaction}
//           existingData={editingTx}
//         />
//       )}
//     </div>
//   );
// }
// import Dashboard from "./components/Dashboard";
// import TransactionModal from "./components/TransactionModal";
// import Filters from "./components/Filters";
// import History from "./components/History";
// import IncomeExpenseChart from "./components/IncomeExpenseChart";
// import API from "./services/api";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const [open, setOpen] = useState(false);
//   const [transactions, setTransactions] = useState([]);
//   const [editingTx, setEditingTx] = useState(null);

//   const [category, setCategory] = useState("");
//   const [division, setDivision] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const user = JSON.parse(localStorage.getItem("user"));

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const res = await API.get("/api/transactions");
//       setTransactions(res.data);
//     } catch {
//       alert("Failed to fetch transactions");
//     }
//   };

//   const filteredTransactions = transactions.filter((t) => {
//     if (category && t.category !== category) return false;
//     if (division && t.division !== division) return false;

//     const txDate = new Date(t.dateTime);

//     if (fromDate) {
//       const from = new Date(fromDate);
//       from.setHours(0, 0, 0, 0);
//       if (txDate < from) return false;
//     }

//     if (toDate) {
//       const to = new Date(toDate);
//       to.setHours(23, 59, 59, 999);
//       if (txDate > to) return false;
//     }

//     return true;
//   });

//   const addTransaction = async (data) => {
//     try {
//       const res = await API.post("/api/transactions", data);
//       setTransactions((prev) => [...prev, res.data]);
//     } catch (err) {
//       alert(err.response?.data?.message || "Add failed");
//     }
//   };

//   const updateTransaction = async (updatedTx) => {
//     try {
//       const res = await API.put(
//         `/api/transactions/${updatedTx._id}`,
//         updatedTx
//       );

//       setTransactions((prev) =>
//         prev.map((t) => (t._id === res.data._id ? res.data : t))
//       );
//     } catch (err) {
//       alert(err.response?.data?.message || "Edit not allowed");
//     }
//   };

//   const deleteTransaction = async (id) => {
//     const ok = window.confirm("Are you sure you want to delete this transaction?");
//     if (!ok) return;

//     try {
//       await API.delete(`/api/transactions/${id}`);
//       setTransactions((prev) => prev.filter((t) => t._id !== id));
//     } catch (err) {
//       alert(err.response?.data?.message || "Delete failed");
//     }
//   };

//   const resetFilters = () => {
//     setCategory("");
//     setDivision("");
//     setFromDate("");
//     setToDate("");
//   };

//   const handleLogout = () => {
//     const ok = window.confirm("Are you sure you want to logout?");
//     if (!ok) return;

//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen w-screen bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50 p-6">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-extrabold text-indigo-700">
//           💰 Money Manager
//         </h1>
//           <button
//             onClick={() => {
//               setEditingTx(null);
//               setOpen(true);
//             }}
//             className="bg-linear-to-r from-indigo-600 to-purple-600
//                        text-white px-5 py-2 rounded-full shadow-lg"
//           >
//             + Add Transaction
//           </button>
//             <div className="flex gap-3">
//           <button
//             onClick={() => navigate("/profile")}
//             className="px-4 py-2 rounded-lg border border-indigo-300
//                        text-indigo-700 font-medium
//                        hover:bg-indigo-50 transition"
//           >
//             Profile
//           </button>

//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 rounded-lg bg-rose-500
//                        text-white font-semibold
//                        hover:bg-rose-600 transition"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* DASHBOARD */}
//       <Dashboard transactions={filteredTransactions} />
//       <IncomeExpenseChart transactions={filteredTransactions} />

//       {/* FILTERS */}
//       <Filters
//         category={category}
//         setCategory={setCategory}
//         division={division}
//         setDivision={setDivision}
//         fromDate={fromDate}
//         setFromDate={setFromDate}
//         toDate={toDate}
//         setToDate={setToDate}
//         onReset={resetFilters}
//       />

//       {/* HISTORY */}
//       <History
//         transactions={filteredTransactions}
//         onEdit={(tx) => {
//           setEditingTx(tx);
//           setOpen(true);
//         }}
//         onDelete={deleteTransaction}
//       />

//       {/* MODAL */}
//       {open && (
//         <TransactionModal
//           close={() => setOpen(false)}
//           onSave={editingTx ? updateTransaction : addTransaction}
//           existingData={editingTx}
//         />
//       )}
//     </div>
//   );
// }
import Dashboard from "./components/Dashboard";
import TransactionModal from "./components/TransactionModal";
import Filters from "./components/Filters";
import History from "./components/History";
import IncomeExpenseChart from "./components/IncomeExpenseChart";
import API from "./services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [editingTx, setEditingTx] = useState(null);

  const [category, setCategory] = useState("");
  const [division, setDivision] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔴 SAFETY CHECK
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchTransactions();
  }, []);

  // ✅ FETCH ONLY USER TRANSACTIONS
  const fetchTransactions = async () => {
    try {
      const res = await API.get(
        `/api/transactions/${user._id}`
      );
      setTransactions(res.data);
    } catch {
      alert("Failed to fetch transactions");
    }
  };

  // FILTERING
  const filteredTransactions = transactions.filter((t) => {
    if (category && t.category !== category) return false;
    if (division && t.division !== division) return false;

    const txDate = new Date(t.dateTime);

    if (fromDate) {
      const from = new Date(fromDate);
      from.setHours(0, 0, 0, 0);
      if (txDate < from) return false;
    }

    if (toDate) {
      const to = new Date(toDate);
      to.setHours(23, 59, 59, 999);
      if (txDate > to) return false;
    }

    return true;
  });

  // ✅ ADD TRANSACTION (WITH userId)
  const addTransaction = async (data) => {
    try {
      const res = await API.post("/api/transactions", {
        ...data,
        userId: user._id,
      });
      setTransactions((prev) => [...prev, res.data]);
    } catch (err) {
      alert(err.response?.data?.message || "Add failed");
    }
  };

  // ✅ UPDATE TRANSACTION (WITH userId)
  const updateTransaction = async (updatedTx) => {
    try {
      const res = await API.put(
        `/api/transactions/${updatedTx._id}`,
        {
          ...updatedTx,
          userId: user._id,
        }
      );

      setTransactions((prev) =>
        prev.map((t) =>
          t._id === res.data._id ? res.data : t
        )
      );
    } catch (err) {
      alert(err.response?.data?.message || "Edit not allowed");
    }
  };

  // ✅ DELETE TRANSACTION (WITH userId)
  const deleteTransaction = async (id) => {
    const ok = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (!ok) return;

    try {
      await API.delete(`/api/transactions/${id}`, {
        data: { userId: user._id },
      });

      setTransactions((prev) =>
        prev.filter((t) => t._id !== id)
      );
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  const resetFilters = () => {
    setCategory("");
    setDivision("");
    setFromDate("");
    setToDate("");
  };

  const handleLogout = () => {
    const ok = window.confirm("Are you sure you want to logout?");
    if (!ok) return;

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-indigo-700">
          💰 Money Manager
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setEditingTx(null);
              setOpen(true);
            }}
            className="bg-linear-to-r from-indigo-600 to-purple-600
                       text-white px-5 py-2 rounded-full shadow-lg"
          >
            + Add Transaction
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="px-4 py-2 rounded-lg border border-indigo-300
                       text-indigo-700 font-medium hover:bg-indigo-50"
          >
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-rose-500
                       text-white font-semibold hover:bg-rose-600"
          >
            Logout
          </button>
        </div>
      </div>

      <Dashboard transactions={filteredTransactions} />
      <IncomeExpenseChart transactions={filteredTransactions} />

      <Filters
        category={category}
        setCategory={setCategory}
        division={division}
        setDivision={setDivision}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        onReset={resetFilters}
      />

      <History
        transactions={filteredTransactions}
        onEdit={(tx) => {
          setEditingTx(tx);
          setOpen(true);
        }}
        onDelete={deleteTransaction}
      />

      {open && (
        <TransactionModal
          close={() => setOpen(false)}
          onSave={
            editingTx ? updateTransaction : addTransaction
          }
          existingData={editingTx}
        />
      )}
    </div>
  );
}
