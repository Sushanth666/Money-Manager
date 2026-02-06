const express = require("express");
const router = express.Router();
const User = require("../models/User");
// TEMP user store (hackathon-safe)
// Later you can replace with MongoDB User model
const users = [];

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    res.json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router; // 🔴 REQUIRED
