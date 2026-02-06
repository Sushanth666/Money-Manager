
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
