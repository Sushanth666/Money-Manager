// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // GET PROFILE
// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // UPDATE PROFILE
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     ).select("-password");

//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET PROFILE
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// UPDATE PROFILE
router.put("/:id", async (req, res) => {
  try {
    const { name, password, avatar } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (password) updateData.password = password;
    if (avatar) updateData.avatar = avatar;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: "Profile update failed" });
  }
});

module.exports = router;
