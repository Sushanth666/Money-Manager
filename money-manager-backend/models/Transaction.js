const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // 🔴 important
    },
    type: {
      type: String,
      enum: ["income", "expense", "transfer"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: String,
    division: String,
    description: String,
    dateTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true } // gives createdAt (needed for 12-hour rule)
);

module.exports = mongoose.model("Transaction", TransactionSchema);
