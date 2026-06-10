import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://goel-homeopathy-backend-1.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.href = "/";
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#02140f] via-[#052e2b] to-[#041b18] flex items-center justify-center px-4 overflow-hidden relative">

      
{/* Glow Effects */}
<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[140px] rounded-full animate-pulse"></div>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-400/10 blur-[140px] rounded-full animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-400/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="backdrop-blur-2xl bg-white/5 border border-emerald-400/20 rounded-3xl p-8 shadow-2xl">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              CureNest
            </h1>

            <p className="text-gray-300 text-sm">
              Premium Homeopathy & Healthcare Platform
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

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
              className="w-full bg-gradient-to-r from-emerald-500 to-green-400 hover:scale-[1.02] transition-all duration-300 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:scale-[1.02]"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-300 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
