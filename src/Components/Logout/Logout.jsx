import React, { useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../Sidebar";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleLogout = () => {
    setClicked(true);


    setTimeout(() => {
      navigate("/login"); 
    }, 700); 
  };

  return (
    <div className="flex">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Center Content */}
      <div className="ml-64 w-full min-h-screen flex justify-center items-center bg-gray-50">

        {/* Logout Card */}
        <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl text-center">

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full shadow">
              <FiLogOut className="text-red-600 text-4xl" />
            </div>
          </div>

          <h1 className="text-3xl font-semibold mb-2">Logout</h1>
          <p className="text-gray-600 mb-6">
            Are you sure you want to log out?
          </p>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`w-full py-2 rounded-lg text-white text-lg font-medium transition-all shadow 
            ${clicked ? "bg-green-500" : "bg-[#01cdcc] hover:bg-[#006766]"}`}
          >
            {clicked ? "Redirecting to Login..." : "Logout"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Logout;
