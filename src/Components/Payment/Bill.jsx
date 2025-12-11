import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FiEye } from "react-icons/fi";

const Bill = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/bill.json")
      .then((res) => res.json())
      .then((data) => {
        setBills(data.bills || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading bills...
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Bill List</h1>

        <div className="space-y-3 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between bg-gray-200 rounded-lg p-3 font-semibold text-gray-700">
            <span className="flex-1">Bill ID</span>
            <span className="flex-1">Customer</span>
            <span className="flex-1">Date</span>
            <span className="flex-1">Amount</span>
            <span className="flex-1">Status</span>
            <span className="flex-1 text-center">Action</span>
          </div>

          {/* Bill Rows */}
          {bills.map((bill) => (
            <div
              key={bill.id}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all"
            >
              <span className="flex-1 font-medium">{bill.id}</span>
              <span className="flex-1">{bill.customer}</span>
              <span className="flex-1">{bill.date}</span>
              <span className="flex-1">${bill.amount}</span>
              <span
                className={`flex-1 font-semibold ${
                  bill.status === "Paid"
                    ? "text-green-600"
                    : bill.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {bill.status}
              </span>
              <div className="flex-1 flex justify-center">
                <button className="text-gray-700 hover:text-[#01cdcc]">
                  <FiEye size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bill;
