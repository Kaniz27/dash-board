import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const ProfitLoss = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/profitloss.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.profit_loss || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading Profit & Loss...
      </div>
    );

  const totalRevenue = data.reduce((acc, d) => acc + d.revenue, 0);
  const totalExpenses = data.reduce((acc, d) => acc + d.expenses, 0);
  const totalNetProfit = data.reduce((acc, d) => acc + d.net_profit, 0);

  return (
    <div className="flex min-h-screen bg-gray-100 mt-6">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8">
        

        {/* Totals */}
        <div className="flex justify-end gap-6 mb-6 max-w-6xl mx-auto">
          <div className="bg-green-100 px-4 py-2 rounded-lg font-semibold">
            Total Revenue: <span className="text-green-700">${totalRevenue}</span>
          </div>
          <div className="bg-red-100 px-4 py-2 rounded-lg font-semibold">
            Total Expenses: <span className="text-red-700">${totalExpenses}</span>
          </div>
          <div className={`px-4 py-2 rounded-lg font-semibold ${
            totalNetProfit >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            Net Profit: ${totalNetProfit}
          </div>
        </div>

        {/* Table Header */}
        <div className="flex justify-between bg-gray-200 rounded-lg p-3 font-semibold text-gray-700 max-w-6xl mx-auto">
          <span className="flex-1">Date</span>
          <span className="flex-1">Revenue</span>
          <span className="flex-1">Expenses</span>
          <span className="flex-1">Gross Profit</span>
          <span className="flex-1">Operating Expenses</span>
          <span className="flex-1">Net Profit</span>
          <span className="flex-1">Status</span>
        </div>

        {/* Table Rows */}
        <div className="space-y-3 max-w-6xl mx-auto mt-2">
          {data.map((d) => (
            <div
              key={d.id}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all"
            >
              <span className="flex-1">{d.date}</span>
              <span className="flex-1 font-medium">${d.revenue}</span>
              <span className="flex-1 font-medium">${d.expenses}</span>
              <span className="flex-1 font-medium">${d.gross_profit}</span>
              <span className="flex-1 font-medium">${d.operating_expenses}</span>
              <span
                className={`flex-1 font-semibold ${
                  d.net_profit >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ${d.net_profit}
              </span>
              <span
                className={`flex-1 font-semibold ${
                  d.status === "Profit" ? "text-green-600" : "text-red-600"
                }`}
              >
                {d.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
