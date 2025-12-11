import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

const OrderCancel = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/cancel.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Platform icon
  const platformIcon = (platform) => {
    const size = "w-5 h-5";

    if (!platform) platform = "website";

    const icons = {
      facebook: <FaFacebookF className={`${size} text-blue-600`} />,
      instagram: <FaInstagram className={`${size} text-pink-600`} />,
      tiktok: <FaTiktok className={`${size} text-black`} />,
      website: <FaGlobe className={`${size} text-gray-600`} />,
    };

    return icons[platform.toLowerCase()] || icons["website"];
  };

  // Status badge - এখন Cancel
  const getStatusBadge = () => (
    <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
      Cancel
    </span>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6 mt-8">
        {loading ? (
          <p className="text-gray-500 text-lg">Loading orders...</p>
        ) : (
          <div className="space-y-2 max-w-6xl mx-auto">

            {/* Table Header */}
            <div className="flex justify-between bg-gray-200 p-3 rounded-lg font-semibold text-gray-700">
              <div className="flex-1">ID</div>
              <div className="flex-1">Customer</div>
              <div className="flex-1">Location</div>
              <div className="flex-1">Contact</div>
              <div className="flex-1">Price</div>
              <div className="flex-1">Platform</div>
              <div className="flex-1">Status</div>
            </div>

            {/* Table Rows */}
            {orders.map((order) => (
              <div
                key={order.order_id}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex-1">{order.order_id}</div>
                <div className="flex-1">{order.customer}</div>
                <div className="flex-1">{order.location}</div>
                <div className="flex-1">{order.contact}</div>
                <div className="flex-1 font-medium">${order.price}</div>
                <div className="flex-1 flex items-center gap-2">
                  {platformIcon(order.platform)}
                  <span className="capitalize">{order.platform || "Website"}</span>
                </div>
                <div className="flex-1">{getStatusBadge()}</div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCancel;
