import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../services/api";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  if (!user) {
    return <p className="text-center mt-10">Please login again</p>;
  }

  useEffect(() => {
    API.get(`/api/profile/${user._id}`).then((res) => {
      setForm({
        name: res.data.name || "",
        email: res.data.email || "",
        password: "",
        avatar: res.data.avatar || "",
      });
    });
  }, [user._id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        avatar: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      const payload = {
        name: form.name,
        avatar: form.avatar,
      };

      if (form.password.trim()) {
        payload.password = form.password;
      }

      const res = await API.put(`/api/profile/${user._id}`, payload);
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Profile updated");

      setForm((prev) => ({ ...prev, password: "" }));
    } catch {
      alert("Update failed");
    }
  };
  const navigate = useNavigate();


  return (
    <div className="min-h-screen w-screen relative flex items-center justify-center
                    bg-linear-to-br from-indigo-50 via-slate-100 to-purple-50 px-4">

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
<button
  onClick={() => navigate(-1)}
  className="absolute top-4 left-4 text-indigo-600
             hover:text-indigo-800 transition"
>
  ← Back
</button>
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white w-96 p-8 rounded-2xl shadow-2xl border border-indigo-200"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          Profile
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Manage your account details
        </p>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-5">
          <img
            src={
              form.avatar ||
              "https://ui-avatars.com/api/?name=" +
                encodeURIComponent(form.name)
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4
                       border-indigo-200 shadow mb-3"
          />

          <label className="cursor-pointer text-sm text-indigo-600 font-medium hover:underline">
            Change Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border border-indigo-300 w-full p-2 mb-3 rounded-lg
                     bg-white text-indigo-700 font-medium
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Email */}
        <input
          value={form.email}
          disabled
          className="border border-indigo-200 w-full p-2 mb-3 rounded-lg
                     bg-gray-100 text-gray-500"
        />

        {/* Password */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="password"
          name="password"
          placeholder="New Password (optional)"
          value={form.password}
          onChange={handleChange}
          className="border border-indigo-300 w-full p-2 mb-4 rounded-lg
                     bg-white text-indigo-700 font-medium
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="w-full py-2 rounded-lg text-white font-semibold
                     bg-linear-to-r from-indigo-600 to-purple-600"
        >
          Save Changes
        </motion.button>
      </motion.div>
    </div>
  );
}
