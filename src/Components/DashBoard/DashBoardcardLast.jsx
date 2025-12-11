import React from "react";
import { FaPaypal, FaWallet, FaCreditCard, FaTruck } from "react-icons/fa";

const DashboardcardLast = () => {
  const transactions = [
    { name: "John Doe", method: "PayPal Payment", amount: "+৳250", icon: <FaPaypal />, color: "text-[#01cdcc]" }, 
    { name: "Alice Johnson", method: "Credit Card Payment", amount: "+৳1,200", icon: <FaCreditCard />, color: "text-[#01cdcc]" },
    { name: "Daniel Carter", method: "Wallet Payment", amount: "-৳350", icon: <FaWallet />, color: "text-[#01cdcc]" },
    { name: "Emma Wilson", method: "Bank Transfer", amount: "+৳720", icon: <FaWallet />, color: "text-[#01cdcc]" },
    { name: "Liam Johnson", method: "Cash on Delivery", amount: "-$450", icon: <FaTruck />, color: "text-[#01cdcc]" },
    { name: "Sophia Martinez", method: "PayPal Payment", amount: "-৳680", icon: <FaPaypal />, color: "text-[#01cdcc]" },
    { name: "Chris Green", method: "Wallet Payment", amount: "+৳140", icon: <FaWallet />, color: "text-[#01cdcc]" },
    { name: "Mia Brown", method: "Bank Transfer", amount: "-৳200", icon: <FaTruck />, color: "text-[#01cdcc]" },
    { name: "David Clark", method: "Credit Card Payment", amount: "+৳400", icon: <FaCreditCard />, color: "text-[#01cdcc]" },
    { name: "Victoria Lee", method: "PayPal Payment", amount: "-৳120", icon: <FaPaypal />, color: "text-[#01cdcc]" },
  ];

  // Weekly, Monthly, Yearly data
  const weeklyBars = [10, 20, 30, 40, 50, 60, 70];
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const monthlyBars = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const yearlyBars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 60, 80];
  const years = [2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024];

  return (
    <div className="min-h-screen flex gap-6">
      {/* LEFT SUMMARY SECTION */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Weekly Orders */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-700 font-bold"><span className="font-serif">৳</span> 845k</p>
            <p className="text-[#01cdcc] font-semibold">+8.1%</p>
          </div>
          <h3 className="text-xl font-semibold mt-3">Weekly Orders</h3>
          <div className="mt-4 h-36 flex items-end justify-between gap-2 overflow-hidden">
            {weeklyBars.map((h, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-sm mb-1">{weekDays[i]}</span>
                <div className="w-6 bg-[#01cdcc] rounded" style={{ height: `${h}px` }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Earnings */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-700 font-bold"><span className="font-serif">৳</span> 694k</p>
            <p className="text-[#01cdcc] font-semibold">+7.2%</p>
          </div>
          <h3 className="text-xl font-semibold mt-3">Monthly Earnings</h3>
          <div className="mt-4 h-36 flex items-end justify-between gap-2 overflow-hidden">
            {monthlyBars.map((h, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-sm mb-1">{months[i]}</span>
                <div className="w-4 bg-[#01cdcc] rounded" style={{ height: `${h}px` }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly Earnings */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-700 font-bold"><span className="font-serif">৳</span> 1038K</p>
            <p className="text-[#01cdcc] font-semibold">+9.2%</p>
          </div>
          <h3 className="text-xl font-semibold mt-3">Yearly Earnings</h3>
          <div className="mt-4 h-36 flex items-end justify-between gap-2 overflow-hidden">
            {yearlyBars.map((h, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-sm mb-1">{years[i]}</span>
                <div className="w-4 bg-[#01cdcc] rounded" style={{ height: `${h}px` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className="flex-1 bg-white p-5 shadow-lg rounded-xl overflow-y-auto">
        <h3 className="text-xl font-semibold mb-4">Transactions</h3>
        <div className="space-y-4">
          {transactions.map((t, i) => (
            <div key={i} className="flex justify-between items-center p-3 border-b">
              <div className="flex items-center gap-4">
                <div className="text-[#01cdcc] text-2xl">{t.icon}</div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.method}</p>
                </div>
              </div>
              <p className={`font-bold ${t.color}`}><span className="font-serif">{t.amount}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardcardLast;
