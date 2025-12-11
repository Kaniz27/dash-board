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
        setTransactions(data || []); // আপনার JSON array হিসেবে এসেছে
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalDebit = transactions.reduce((acc, t) => acc + (t.debit || 0), 0);
  const totalCredit = transactions.reduce((acc, t) => acc + (t.credit || 0), 0);

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
        <div className="flex justify-end gap-6 mb-6 max-w-7xl mx-auto">
          <div className="bg-green-100 px-4 py-2 rounded-lg font-semibold">
            Total Credit: <span className="text-green-700">${totalCredit}</span>
          </div>
          <div className="bg-red-100 px-4 py-2 rounded-lg font-semibold">
            Total Debit: <span className="text-red-700">${totalDebit}</span>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto max-w-7xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700 font-semibold">
              <tr>
                <th className="py-2 px-4 border-b">Voucher</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Debit</th>
                <th className="py-2 px-4 border-b">Total Debit</th>
                <th className="py-2 px-4 border-b">Voucher Type</th>
                <th className="py-2 px-4 border-b">Status Posted</th>
                <th className="py-2 px-4 border-b">Due Date</th>
                <th className="py-2 px-4 border-b">Credit</th>
                <th className="py-2 px-4 border-b">Total Credit</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, index) => (
                <tr key={index} className="text-center text-gray-600 hover:bg-gray-50 transition-all">
                  <td className="py-2 px-4 border-b">{t.voucher}</td>
                  <td className="py-2 px-4 border-b">{t.date}</td>
                  <td className="py-2 px-4 border-b">{t.customer}</td>
                  <td className="py-2 px-4 border-b text-red-600">{t.debit}</td>
                  <td className="py-2 px-4 border-b">{t.totalDebit}</td>
                  <td className="py-2 px-4 border-b">{t.voucherType}</td>
                  <td className="py-2 px-4 border-b">{t.statusPosted}</td>
                  <td className="py-2 px-4 border-b">{t.dueDate}</td>
                  <td className="py-2 px-4 border-b text-green-600">{t.credit}</td>
                  <td className="py-2 px-4 border-b">{t.totalCredit}</td>
                  <td className="py-2 px-4 border-b">{t.amount}</td>
                  <td className={`py-2 px-4 border-b font-semibold ${t.status === "Paid" ? "text-green-600" : "text-green-600"}`}>
                    {t.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex justify-center gap-3 text-gray-600 cursor-pointer">
                      <FiEdit size={18} className="hover:text-blue-500" />
                      <FiTrash2 size={18} className="hover:text-red-500" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DebitCredit;
