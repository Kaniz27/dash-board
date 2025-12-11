import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetch("/public/income.json")
      .then((res) => res.json())
      .then((data) => {
        setIncomeData(data.income || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading income...
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
        <h1 className="text-3xl font-bold mb-6 text-center">Income</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 text-center">
            <p className="text-gray-500">Total Income</p>
            <p className="text-2xl font-bold">$12,500</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 text-center">
            <p className="text-gray-500">Monthly Income</p>
            <p className="text-2xl font-bold">$4,200</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 text-center">
            <p className="text-gray-500">Daily Income</p>
            <p className="text-2xl font-bold">$150</p>
          </div>
        </div>

        {/* Income Table */}
        <div className="space-y-2 max-w-6xl mx-auto">
          <div className="flex justify-between bg-gray-200 rounded-lg p-3 font-semibold text-gray-700">
            <span className="flex-1">Date</span>
            <span className="flex-1">Customer</span>
            <span className="flex-1">Amount</span>
            <span className="flex-1">Payment Method</span>
            <span className="flex-1">Status</span>
          </div>

          {incomeData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition"
            >
              <span className="flex-1">{item.date}</span>
              <span className="flex-1">{item.customer}</span>
              <span className="flex-1 font-medium">${item.amount}</span>
              <span className="flex-1">{item.payment_method}</span>
              <span className={`flex-1 font-semibold ${item.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Income;
