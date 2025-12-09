import React from "react";
import Sidebar from "../Sidebar";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  return (
    <div className="flex">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Center Content */}
      <div className="ml-64 w-full min-h-screen flex justify-center items-center bg-gray-100">

        {/* Login Card */}
        <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-100">

          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-700">
            Welcome Back
          </h1>

          {/* Form */}
          <form className="space-y-4">

            {/* Email Field */}
            <div className="flex items-center border-2 rounded-xl p-1 gap-3 hover:border-[#01cdcc] transition">
              <FiMail className="text-[#01cdcc] text-2xl" />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 outline-none text-gray-700 text-lg"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center border-2 rounded-xl p-1 gap-3 hover:border-[#01cdcc] transition">
              <FiLock className="text-[#01cdcc] text-2xl" />
              <input
                type="password"
                placeholder="Password"
                className="flex-1 outline-none text-gray-700 text-lg"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#01cdcc] to-[#00b1b1] hover:opacity-90 transition text-white py-1 rounded-xl text-xl shadow-md"
            >
              Login
            </button>
          </form>

          {/* Forgot Password */}
          <p className="mt-5 text-center text-gray-600 text-sm cursor-pointer hover:text-[#01cdcc] transition">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
