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

        <div className="overflow-x-auto max-w-7xl mx-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Bill ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {bills.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{bill.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bill.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bill.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${bill.amount}</td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap font-semibold ${
                      bill.status === "Paid"
                        ? "text-green-600"
                        : bill.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {bill.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="text-gray-700 hover:text-[#01cdcc]">
                      <FiEye size={20} />
                    </button>
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

export default Bill;
