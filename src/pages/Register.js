import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://goel-homeopathy-backend-1.onrender.com/api/auth/register",
        formData
      );

      alert("Registration successful");
      window.location.href = "/login";
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#081120] via-[#0f172a] to-[#10243d] flex items-center justify-center px-4 overflow-hidden relative">
      
      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h1>

            <p className="text-gray-300 text-sm">
              Join CureNest Healthcare
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Full Name
              </label>

              <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4">
                <FiUser className="text-cyan-400 text-lg" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Email Address
              </label>

              <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4">
                <FiMail className="text-cyan-400 text-lg" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Password
              </label>

              <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4">
                <FiLock className="text-cyan-400 text-lg" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:scale-[1.02]"
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-gray-300 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;