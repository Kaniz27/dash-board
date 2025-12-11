// src/Components/InvoiceTable.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FiPlus, FiEdit, FiTrash } from "react-icons/fi";

const CreateInvoice = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("/public/createvoice.json")
      .then((res) => res.json())
      .then((data) => setInvoices(data))
      .catch((err) => console.error("Error fetching invoices:", err));
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 mt-6 border-l border-gray-200">
        {/* Header with Create New Invoice */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-semibold">Invoices</h2>
          <button className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-2 rounded-lg hover:bg-[#006766]">
            <FiPlus /> Create New Invoice
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b border-b-gray-200 text-left">Invoice No.</th>
                <th className="py-2 px-4 border-b border-b-gray-200 text-left">Customer</th>
                <th className="py-2 px-4 border-b border-b-gray-200 text-left">Amount</th>
                <th className="py-2 px-4 border-b border-b-gray-200 text-left">Status</th>
                <th className="py-2 px-4 border-b border-b-gray-200 text-left">Due Date</th>
                <th className="py-2 px-4 border-b border-b-gray-200 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.invoiceNo} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-b-gray-200">{inv.invoiceNo}</td>
                  <td className="py-2 px-4 border-b border-b-gray-200 ">{inv.customer}</td>
                  <td className="py-2 px-4 border-b border-b-gray-200">${inv.amount.toFixed(2)}</td>
                  <td
                    className={`py-2 px-4 border-b border-b-gray-200 font-semibold ${
                      inv.status === "Paid"
                        ? "text-green-600"
                        : inv.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {inv.status}
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-200">{inv.dueDate}</td>
                  <td className="py-2 px-4 border-b border-b-gray-200 flex gap-2">
                    {inv.action.edit && (
                      <button className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded hover:bg-yellow-200">
                        <FiEdit /> Edit
                      </button>
                    )}
                    {inv.action.delete && (
                      <button className="flex items-center gap-1 bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200">
                        <FiTrash /> Delete
                      </button>
                    )}
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

export default CreateInvoice;
