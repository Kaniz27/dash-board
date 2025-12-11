import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/transaction.json")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Transactions</h1>

        <div className="space-y-4 max-w-6xl mx-auto">
          {/* Header Row */}
          <div className="hidden md:flex justify-between bg-gray-200 rounded-lg p-3 font-semibold">
            <span className="w-1/12">ID</span>
            <span className="w-2/12">Date</span>
            <span className="w-2/12">Type</span>
            <span className="w-2/12">Amount</span>
            <span className="w-2/12">Method</span>
            <span className="w-2/12">Status</span>
            <span className="w-3/12">Description</span>
          </div>

          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex flex-wrap md:flex-nowrap justify-between items-center bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition-all"
            >
              <span className="w-1/12 font-medium">{t.id}</span>
              <span className="w-2/12">{t.date}</span>
              <span
                className={`w-2/12 font-semibold ${
                  t.type === "Credit" ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.type}
              </span>
              <span className="w-2/12 font-medium">${t.amount}</span>
              <span className="w-2/12">{t.method}</span>
              <span
                className={`w-2/12 font-semibold ${
                  t.status === "Success"
                    ? "text-green-600"
                    : t.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {t.status}
              </span>
              <span className="w-3/12 text-gray-700">{t.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
