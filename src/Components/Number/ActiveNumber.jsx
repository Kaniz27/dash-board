import React from "react";
import Sidebar from "../Sidebar";
import { FaShoppingCart, FaPhone, FaCheckCircle, FaUserTie, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

const ActiveNumber = () => {

  const navigate = useNavigate();

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 p-6 w-full">

        {/* Title + Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Available Phone Numbers (1)</h2>

          <button
            onClick={() => navigate("/number/buy")}
            className="flex items-center gap-2 bg-[#01cdcc] hover:bg-[#009b9b] text-white px-4 py-2 rounded-lg shadow"
          >
            <FaShoppingCart />
            Buy a Number
          </button>
        </div>

        {/* Header Section */}
        <div className="bg-gray-200 p-3 rounded-lg font-semibold flex justify-between items-center">
          <div className="flex items-center gap-2 w-1/4">
            Number
          </div>

          <div className="flex items-center  gap-2 w-1/4">
            <FaCheckCircle />
            Status
          </div>

          <div className="flex items-center gap-2 w-1/4">
            <FaUserTie />
            Agent
          </div>

          <div className="flex items-center gap-2 w-1/4">
            <FaCalendarAlt />
            Create Date
          </div>
        </div>

        {/* Actual Row */}
        <div className="mt-2 bg-white shadow p-3 rounded-lg flex justify-between items-center">

          <div className="flex items-center gap-2 w-1/4">
            <FaPhone className="text-gray-600" />
            (+1) 782-830-5969
          </div>

          <div className="flex items-center gap-2 w-1/4 text-green-600">
            <FaCheckCircle />
            ACTIVE
          </div>

          <div className="flex items-center gap-2 w-1/4">
            <FaUserTie />
            Insectica Voice Agent
          </div>

          <div className="flex items-center gap-2 w-1/4">
            <FaCalendarAlt />
            2025-10-10
          </div>

        </div>

      </div>
    </div>
  );
};

export default ActiveNumber;
