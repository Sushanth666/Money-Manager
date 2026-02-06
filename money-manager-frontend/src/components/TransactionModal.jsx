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
