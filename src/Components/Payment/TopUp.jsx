import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { FiCreditCard, FiXCircle, FiCheckCircle } from "react-icons/fi";

const TopUp = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddMoney = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  const handlePay = (e) => {
    e.preventDefault();
    alert("Top-Up Successful!");
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full flex justify-center items-center p-8">
        <div className="space-y-4">
          {/* Wallet Top-Up Card */}
          <div className="bg-white shadow-xl rounded-xl p-8 text-center max-w-sm mx-auto hover:shadow-2xl transition">
            <FiCreditCard size={60} className="text-[#01cdcc] mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Wallet Top-Up</h2>
            <p className="text-gray-600 mb-4">
              Add money to your wallet using your preferred card.
            </p>
            <button
              onClick={handleAddMoney}
              className="px-6 py-2 bg-[#01cdcc] text-white rounded-lg hover:bg-[#009b9b] flex items-center justify-center gap-2 mx-auto"
            >
              Add Money
            </button>
          </div>
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
              {/* Form Header */}
              <div className="flex flex-col items-center text-center mb-6">
                <FiCreditCard size={50} className="text-[#01cdcc] mb-2" />
                <h2 className="text-xl font-semibold mb-1">Add Money</h2>
                <p className="text-gray-600 text-sm">
                  Fill your card details to top-up.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handlePay}>
                {/* Card Holder Name */}
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Card Holder Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                    required
                  />
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                    required
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                    required
                  />
                </div>

                {/* Expiry & CVC */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-600 font-medium mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-600 font-medium mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="XXX"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                      required
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    <FiXCircle /> Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 bg-[#01cdcc] text-white rounded-lg hover:bg-[#009b9b]"
                  >
                    <FiCheckCircle /> Pay & Top-Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopUp;
