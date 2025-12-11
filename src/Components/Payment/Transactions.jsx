// src/Components/Transactions.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch("/public/transaction.json")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data || []);
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
      <div className="ml-64 p-6 w-full">
        <h1 className="text-3xl font-bold mb-6">Transactions</h1>

        {/* Table Container */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">SL No.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">Transaction Id</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">Description</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">Create</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">Payment Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">Payment Method</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200">Amount</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {transactions.map((t) => (
                <tr key={t.transactionId} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{t.slNo}</td>
                  <td className="px-4 py-2 font-medium">{t.transactionId}</td>
                  <td className="px-4 py-2 text-gray-700">{t.description}</td>
                  <td className="px-4 py-2">{t.create}</td>
                  <td className={`px-4 py-2 font-semibold ${t.paymentType === "Credit" ? "text-green-600" : "text-red-600"}`}>
                    {t.paymentType}
                  </td>
                  <td className={`px-4 py-2 font-semibold ${
                    t.status === "Success" ? "text-green-600" : t.status === "Pending" ? "text-yellow-600" : "text-red-600"
                  }`}>
                    {t.status}
                  </td>
                  <td className="px-4 py-2">{t.paymentMethod}</td>
                  <td className="px-4 py-2 font-medium">${t.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
