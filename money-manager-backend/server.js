// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI);

// app.use("/api/transactions", require("./routes/transactions"));

// app.listen(5000, () => console.log("Server running"));
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();          // 🔴 MUST be first
// connectDB();              // 🔴 THEN connect

// const app = express();


// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/transactions", require("./routes/transactions"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const profileRoutes = require("./routes/profile");

// app.use("/api/profile", profileRoutes);
// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/transactions", require("./routes/transactions"));
// app.use("/api/auth", require("./routes/auth")); // 🔴 REQUIRED



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables FIRST
dotenv.config();

// Create app FIRST
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/profile", require("./routes/profile")); // only if file exists

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
