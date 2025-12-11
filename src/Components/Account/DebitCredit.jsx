import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const DebitCredit = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/debitcredit.json")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalDebit = transactions
    .filter((t) => t.type === "Debit")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalCredit = transactions
    .filter((t) => t.type === "Credit")
    .reduce((acc, t) => acc + t.amount, 0);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading transactions...
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
        

        {/* Total Credit & Debit */}
        <div className="flex justify-end gap-6 mb-6 max-w-6xl mx-auto">
          <div className="bg-green-100 px-4 py-2 rounded-lg font-semibold">
            Total Credit: <span className="text-green-700">${totalCredit}</span>
          </div>
          <div className="bg-red-100 px-4 py-2 rounded-lg font-semibold">
            Total Debit: <span className="text-red-700">${totalDebit}</span>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-3 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between bg-gray-200 rounded-lg p-3 font-semibold text-gray-700">
            <span className="flex-1">Voucher</span>
            <span className="flex-1">Date</span>
            <span className="flex-1">Customer</span>
            <span className="flex-1">Type</span>
            <span className="flex-1">Amount</span>
            <span className="flex-1">Status</span>
            <span className="flex-1 text-center">Action</span>
          </div>

          {/* Rows */}
          {transactions.map((t) => (
            <div
              key={t.voucher}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all"
            >
              <span className="flex-1 font-medium">{t.voucher}</span>
              <span className="flex-1">{t.date}</span>
              <span className="flex-1">{t.customer}</span>
              <span
                className={`flex-1 font-medium ${
                  t.type === "Debit" ? "text-red-600" : "text-green-600"
                }`}
              >
                {t.type}
              </span>
              <span className="flex-1 font-medium">${t.amount}</span>
              <span
                className={`flex-1 font-semibold ${
                  t.status === "Completed" ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.status}
              </span>
              <div className="flex-1 flex justify-center gap-3 text-gray-600 cursor-pointer">
                <FiEdit size={18} className="hover:text-blue-500" />
                <FiTrash2 size={18} className="hover:text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DebitCredit;
