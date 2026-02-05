// const express = require("express");
// const router = express.Router();
// const Transaction = require("../models/Transaction");


// // ADD TRANSACTION
// router.post("/", async (req, res) => {
//   try {
//     const tx = new Transaction(req.body);
//     await tx.save();
//     res.status(201).json(tx);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });


// // GET ALL TRANSACTIONS (with date filter)
// router.get("/", async (req, res) => {
//   const { from, to } = req.query;

//   let filter = {};
//   if (from && to) {
//     filter.dateTime = {
//       $gte: new Date(from),
//       $lte: new Date(to),
//     };
//   }

//   const transactions = await Transaction.find(filter).sort({ dateTime: -1 });
//   res.json(transactions);
// });


// // UPDATE TRANSACTION (12-hour restriction)
// router.put("/:id", async (req, res) => {
//   const tx = await Transaction.findById(req.params.id);
//   if (!tx) return res.status(404).json({ message: "Not found" });

//   const twelveHours = 12 * 60 * 60 * 1000;
//   if (Date.now() - tx.createdAt.getTime() > twelveHours) {
//     return res.status(403).json({ message: "Edit not allowed after 12 hours" });
//   }

//   Object.assign(tx, req.body);
//   await tx.save();
//   res.json(tx);
// });
// // DELETE TRANSACTION
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Transaction.findByIdAndDelete(req.params.id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Transaction not found" });
//     }

//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const Transaction = require("../models/Transaction");


// // ADD TRANSACTION (user-specific)
// router.post("/", async (req, res) => {
//   try {
//     const { userId, ...data } = req.body;

//     if (!userId) {
//       return res.status(400).json({ message: "User ID required" });
//     }

//     const tx = new Transaction({
//       ...data,
//       userId,
//     });

//     await tx.save();
//     res.status(201).json(tx);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });


// // GET ALL TRANSACTIONS FOR A USER (with date filter)
// router.get("/:userId", async (req, res) => {
//   const { from, to } = req.query;
//   const { userId } = req.params;

//   let filter = { userId };

//   if (from && to) {
//     filter.dateTime = {
//       $gte: new Date(from),
//       $lte: new Date(to),
//     };
//   }

//   const transactions = await Transaction.find(filter).sort({
//     dateTime: -1,
//   });

//   res.json(transactions);
// });


// // UPDATE TRANSACTION (user-specific + 12-hour restriction)
// router.put("/:id", async (req, res) => {
//   const { userId } = req.body;

//   if (!userId) {
//     return res.status(400).json({ message: "User ID required" });
//   }

//   const tx = await Transaction.findOne({
//     _id: req.params.id,
//     userId,
//   });

//   if (!tx) {
//     return res.status(404).json({ message: "Transaction not found" });
//   }

//   const twelveHours = 12 * 60 * 60 * 1000;
//   if (Date.now() - tx.createdAt.getTime() > twelveHours) {
//     return res
//       .status(403)
//       .json({ message: "Edit not allowed after 12 hours" });
//   }

//   Object.assign(tx, req.body);
//   await tx.save();
//   res.json(tx);
// });


// // DELETE TRANSACTION (user-specific)
// router.delete("/:id", async (req, res) => {
//   try {
//     const { userId } = req.body;

//     if (!userId) {
//       return res.status(400).json({ message: "User ID required" });
//     }

//     const deleted = await Transaction.findOneAndDelete({
//       _id: req.params.id,
//       userId,
//     });

//     if (!deleted) {
//       return res.status(404).json({ message: "Transaction not found" });
//     }

//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// ADD TRANSACTION
router.post("/", async (req, res) => {
  try {
    const { userId, ...data } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID required" });
    }

    const tx = new Transaction({
      ...data,
      userId,
    });

    await tx.save();
    res.status(201).json(tx);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET TRANSACTIONS FOR USER
router.get("/:userId", async (req, res) => {
  const { from, to } = req.query;
  const { userId } = req.params;

  const filter = { userId };

  if (from && to) {
    filter.dateTime = {
      $gte: new Date(from),
      $lte: new Date(to),
    };
  }

  const transactions = await Transaction.find(filter).sort({
    dateTime: -1,
  });

  res.json(transactions);
});

// UPDATE TRANSACTION
router.put("/:id", async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID required" });
  }

  const tx = await Transaction.findOne({
    _id: req.params.id,
    userId,
  });

  if (!tx) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  const twelveHours = 12 * 60 * 60 * 1000;
  if (Date.now() - tx.createdAt.getTime() > twelveHours) {
    return res
      .status(403)
      .json({ message: "Edit not allowed after 12 hours" });
  }

  const allowedFields = [
    "type",
    "amount",
    "category",
    "division",
    "description",
    "dateTime",
  ];

  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      tx[field] = req.body[field];
    }
  });

  await tx.save();
  res.json(tx);
});

// DELETE TRANSACTION
router.delete("/:id", async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID required" });
  }

  const deleted = await Transaction.findOneAndDelete({
    _id: req.params.id,
    userId,
  });

  if (!deleted) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  res.json({ message: "Deleted successfully" });
});

module.exports = router;
