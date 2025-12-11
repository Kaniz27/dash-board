import React, { useState } from "react";
import { useNavigate } from "react-router"; 

const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login Successful!");
      navigate("/dashboard"); // example
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label>Email *</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded-lg mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password *</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded-lg mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-[#01cdcc] text-white py-2 rounded-lg">
            Sign In
          </button>

          <p className="text-center text-sm mt-3">
            Not registered yet?
            <button
              type="button"
              className="text-blue-500 ml-1"
              onClick={() => navigate("/register")} // <-- FIXED
            >
              Create Account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
