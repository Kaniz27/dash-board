import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FiEye, FiEdit2 } from "react-icons/fi";

const CourierHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/courierhistory.json")
      .then((res) => res.json())
      .then((data) => {
        setHistory(data.courier_history || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading courier history...
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8 mt-10">
        

        <div className="overflow-x-auto max-w-7xl mx-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Booking ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Courier Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pickup → Delivery</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Items</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {history.map((item) => (
                <tr key={item.booking_id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{item.booking_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.courier_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.pickup} → {item.delivery}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.items}</td>
                  <td className={`px-6 py-4 whitespace-nowrap font-semibold ${
                    item.status === "Delivered" ? "text-green-600" :
                    item.status === "Pending" ? "text-yellow-600" :
                    item.status === "Shipped" ? "text-blue-600" :
                    "text-red-600"
                  }`}>
                    {item.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-3">
                    <button className="text-gray-700 hover:text-[#01cdcc]">
                      <FiEye size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-[#ff8c00]">
                      <FiEdit2 size={20} />
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

export default CourierHistory;
