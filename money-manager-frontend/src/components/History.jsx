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
