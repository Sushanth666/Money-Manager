// import { useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../services/api";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!name || !email || !password) {
//       setMessage("All fields are required");
//       return;
//     }

//     try {
//       await API.post("/api/auth/register", { name, email, password });
//       setMessage("Registration successful. You can login now.");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center
//                     bg-gradient-to-br from-indigo-50 via-slate-100 to-purple-50">

//       {/* Decorative blur */}
//       <div className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 top-10 right-10"></div>
//       <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 bottom-10 left-10"></div>

//       <div className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200">
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Start managing your money smarter
//         </p>

//         {message && (
//           <p className="text-center text-sm text-indigo-600 mb-3">
//             {message}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 rounded-lg border border-indigo-300
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

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
//             Register
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-5">
//           Already have an account?{" "}
//           <Link
//             to="/"
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Login
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

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       await API.post("/api/auth/register", { name, email, password });
//       setMessage("Registration successful. Please login.");
//     } catch {
//       setMessage("Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center
//                     bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50">

//       {/* Background glow */}
//       <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 right-10" />
//       <div className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 bottom-10 left-10" />

//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200"
//       >
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Start managing your money smarter
//         </p>

//         {message && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-indigo-600 text-sm mb-3 text-center"
//           >
//             {message}
//           </motion.p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      bg-white text-indigo-700 font-medium
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

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
//             className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
//                      bg-white text-indigo-700 font-medium
//                      focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             Register
//           </motion.button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-5">
//           Already have an account?{" "}
//           <Link to="/" className="text-indigo-600 font-semibold">
//             Login
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

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       await API.post("/api/auth/register", { name, email, password });
//       setMessage("Registration successful. Please login.");
//     } catch {
//       setMessage("Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen w-screen relative flex items-center justify-center
//                     bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50">

//       {/* Floating background blobs */}
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//         className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 right-10"
//       />
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//         className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 bottom-10 left-10"
//       />

//       {/* Register Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50, scale: 0.9 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200"
//       >
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Start managing your money smarter
//         </p>

//         {message && (
//           <motion.p
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-indigo-600 text-sm mb-4 text-center"
//           >
//             {message}
//           </motion.p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <motion.input
//             whileFocus={{ scale: 1.02 }}
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border border-indigo-300 w-full p-2 rounded-lg
//                        bg-white text-indigo-700 font-medium
//                        focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

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
//             Register
//           </motion.button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-5">
//           Already have an account?{" "}
//           <Link
//             to="/"
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Login
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

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      await API.post("/api/auth/register", {
        name,
        email,
        password,
      });

      setMessage("Registration successful. Redirecting to login...");
      setIsError(false);

      // redirect after short delay
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Registration failed"
      );
      setIsError(true);
    }
  };

  return (
    <div
      className="min-h-screen w-screen relative flex items-center justify-center
                 bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50"
    >
      {/* Floating background blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 right-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 bottom-10 left-10"
      />

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Start managing your money smarter
        </p>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm mb-4 text-center ${
              isError ? "text-red-500" : "text-emerald-600"
            }`}
          >
            {message}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-indigo-300 w-full p-2 rounded-lg
                       bg-white text-indigo-700 font-medium
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

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
            Register
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
