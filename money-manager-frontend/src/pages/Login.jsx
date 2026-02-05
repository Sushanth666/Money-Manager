// import { useState } from "react";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // simple validation
//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     // 🔹 TEMP: frontend-only login
//     // Later you can replace this with backend API call
//     if (email === "admin@gmail.com" && password === "admin123") {
//       onLogin();
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center
//                     bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50">
//       <div className="bg-white p-8 w-96 rounded-2xl shadow-2xl border border-indigo-200">
        
//         <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
//           Money Manager Login
//         </h2>

//         {error && (
//           <p className="text-red-500 text-sm mb-3 text-center">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-indigo-300 w-full p-2 mb-4 rounded-lg
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-indigo-300 w-full p-2 mb-6 rounded-lg
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <button
//             type="submit"
//             className="w-full py-2 rounded-lg text-white font-semibold
//                        bg-linear-to-r from-indigo-600 to-purple-600
//                        hover:from-indigo-700 hover:to-purple-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../services/api";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     try {
//       const res = await API.post("/api/auth/login", { email, password });
//       if (res.data.success) onLogin();
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center
//                     bg-gradient-to-br from-indigo-50 via-slate-100 to-purple-50">

//       {/* Decorative blur */}
//       <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
//       <div className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

//       <div className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200">
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
//           💰 Money Manager
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Login to manage your finances
//         </p>

//         {error && (
//           <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 rounded-lg border border-indigo-300
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 rounded-lg border border-indigo-300
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <button
//             type="submit"
//             className="w-full py-2 rounded-lg text-white font-semibold
//                        bg-gradient-to-r from-indigo-600 to-purple-600
//                        hover:from-indigo-700 hover:to-purple-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-5">
//           Don’t have an account?{" "}
//           <Link
//             to="/register"
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import API from "../services/api";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await API.post("/api/auth/login", { email, password });
//       if (res.data.success) onLogin();
//     } catch {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center
//                     bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50">

//       {/* Background glow */}
//       <div className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 top-10 left-10" />
//       <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 bottom-10 right-10" />

//       {/* Animated Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200"
//       >
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
//           💰 Money Manager
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Login to manage your finances
//         </p>

//         {error && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-500 text-sm mb-3 text-center"
//           >
//             {error}
//           </motion.p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      bg-white text-indigo-700 font-medium
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      bg-white text-indigo-700 font-medium
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="w-full py-2 rounded-lg text-white font-semibold
//                        bg-linear-to-r from-indigo-600 to-purple-600"
//           >
//             Login
//           </motion.button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-5">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-indigo-600 font-semibold">
//             Register
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import API from "../services/api";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   localStorage.setItem("user", JSON.stringify(res.data.user));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await API.post("/api/auth/login", { email, password });
//       if (res.data.success) onLogin();
//     } catch {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen w-screen relative flex items-center justify-center
//                     bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50">

//       {/* Floating background blobs */}
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//         className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 top-10 left-10"
//       />
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//         className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 bottom-10 right-10"
//       />

//       {/* Login Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50, scale: 0.9 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200"
//       >
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
//           💰 Money Manager
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Login to manage your finances
//         </p>

//         {error && (
//           <motion.p
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-red-500 text-sm mb-4 text-center"
//           >
//             {error}
//           </motion.p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <motion.input
//             whileFocus={{ scale: 1.02 }}
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-indigo-300 w-full p-2 rounded-lg
//                        bg-white text-indigo-700 font-medium
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <motion.input
//             whileFocus={{ scale: 1.02 }}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-indigo-300 w-full p-2 rounded-lg
//                        bg-white text-indigo-700 font-medium
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full py-2 rounded-lg text-white font-semibold
//                        bg-linear-to-r from-indigo-600 to-purple-600"
//           >
//             Login
//           </motion.button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-5">
//           Don’t have an account?{" "}
//           <Link
//             to="/register"
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../services/api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });

      // ✅ store logged-in user safely
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token || "dummy");

      // optional callback (if you still use it)
      if (onLogin) onLogin();

      // redirect to home
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <div className="min-h-screen w-screen relative flex items-center justify-center
                    bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50">

      {/* Floating background blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 top-10 left-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 bottom-10 right-10"
      />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          💰 Money Manager
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to manage your finances
        </p>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mb-4 text-center"
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-indigo-300 w-full p-2 rounded-lg
                       bg-white text-indigo-700 font-medium
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-indigo-300 w-full p-2 rounded-lg
                       bg-white text-indigo-700 font-medium
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold
                       bg-linear-to-r from-indigo-600 to-purple-600"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
