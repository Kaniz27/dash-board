import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FiEye } from "react-icons/fi";

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
        

        <div className="space-y-3 max-w-6xl mx-auto">

          {/* Header Row */}
          <div className="flex justify-between bg-gray-200 rounded-lg p-3 font-semibold text-gray-700">
            <span className="flex-1">Booking ID</span>
            <span className="flex-1">Courier Name</span>
            <span className="flex-1">Customer</span>
            <span className="flex-1">Pickup → Delivery</span>
            <span className="flex-1">Items</span>
            <span className="flex-1">Status</span>
            <span className="flex-1 text-center">Action</span>
          </div>

          {/* Data Rows */}
          {history.map((item) => (
            <div
              key={item.booking_id}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all"
            >
              <span className="flex-1 font-medium">{item.booking_id}</span>
              <span className="flex-1">{item.courier_name}</span>
              <span className="flex-1">{item.customer}</span>
              <span className="flex-1">{item.pickup} → {item.delivery}</span>
              <span className="flex-1">{item.items}</span>
              <span className={`flex-1 font-semibold ${
                item.status === "Delivered" ? "text-green-600" :
                item.status === "Pending" ? "text-yellow-600" :
                item.status === "Shipped" ? "text-blue-600" :
                "text-red-600"
              }`}>
                {item.status}
              </span>
              <div className="flex-1 flex justify-center">
                <button className="text-gray-700 hover:text-[#01cdcc]">
                  <FiEye size={20} />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CourierHistory;
