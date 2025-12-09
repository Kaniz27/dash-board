import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { FaUser, FaPhoneAlt, FaIdBadge } from "react-icons/fa";

const CallGeneration = () => {
  const [receiverName, setReceiverName] = useState("");
  const [code, setCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ receiverName, code, mobileNumber });
  };

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 p-6 w-full flex justify-center items-start min-h-screen bg-gray-50">
        <form
          className="bg-white shadow p-6 rounded-xl w-full max-w-2xl space-y-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">
            AI Call Campaign Generator
          </h2>

          {/* Select Voice Agent */}
          <div className="space-y-1">
            <label className="block font-medium text-sm">Select Voice Agent</label>
            <select className="w-full text-[12px] border border-gray-300 rounded px-2 py-1 h-8">
              <option>Select AI Voice Agent</option>
            </select>
          </div>

          {/* Select Source Number */}
          <div className="space-y-1">
            <label className="block font-medium text-sm">Select Source Number</label>
            <select className="w-full text-[12px] border border-gray-300 rounded px-2 py-1 h-8">
              <option>Select your source phone number</option>
            </select>
          </div>

          {/* Target Recipients */}
          <div className="space-y-1">
            <label className="block font-medium text-sm">Target Recipients</label>
            <p className="text-gray-500 text-xs">Switch to Multi Numbers</p>
          </div>

          {/* Single Number Call */}
          <div className="space-y-1">
            <label className="block font-medium text-sm">Single Number Call</label>
            <p className="text-gray-500 text-xs">
              Enter a single mobile number below for an immediate call.
            </p>
          </div>

          {/* Receiver Code + Mobile Number */}
          <div className="flex gap-3">
            {/* Code */}
            <div className="flex items-center border border-gray-300 rounded px-2 h-8 w-1/2 text-sm gap-2">
              <FaIdBadge className="text-gray-500 text-base" />
              <input
                type="text"
                placeholder="Code"
                className="flex-1 focus:outline-none text-sm"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="flex items-center border border-gray-300 rounded px-2 h-8 w-1/2 text-sm gap-2">
              <FaPhoneAlt className="text-gray-500 text-base" />
              <input
                type="text"
                placeholder="Mobile Number"
                className="flex-1 focus:outline-none text-sm"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Receiver Name */}
          <div className="flex items-center border border-gray-300 rounded px-2 h-8 text-sm gap-2">
            <FaUser className="text-gray-500 text-base" />
            <input
              type="text"
              placeholder="Receiver Name"
              className="flex-1 focus:outline-none text-sm"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#01cdcc] hover:bg-[#009b9b] text-white font-semibold py-2 rounded-lg shadow mt-2 text-sm"
          >
            Start Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallGeneration;
