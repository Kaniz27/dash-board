import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaGlobe
} from "react-icons/fa";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders
  useEffect(() => {
    fetch("/orderlist.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Map platform to icon
  const platformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FaFacebookF className="text-blue-600 w-5 h-5" />;
      case "instagram":
        return <FaInstagram className="text-pink-500 w-5 h-5" />;
      case "tiktok":
        return <FaTiktok className="text-black w-5 h-5" />;
      case "website":
        return <FaGlobe className="text-gray-600 w-5 h-5" />;
      default:
        return <FaGlobe className="text-gray-600 w-5 h-5" />;
    }
  };

  // Status badge
  const getStatusBadge = (status) => {
    const classes = {
      pending: "bg-yellow-100 text-yellow-600",
      "on packaging": "bg-blue-100 text-blue-600",
      shipped: "bg-indigo-100 text-indigo-600",
      "on delivery": "bg-purple-100 text-purple-600",
      delivered: "bg-green-100 text-green-600"
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm ${classes[status.toLowerCase()] || "bg-gray-200 text-gray-600"}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center py-6">Order List</h1>

        {loading ? (
          <p className="text-gray-500">Loading orders...</p>
        ) : (
          <div className="space-y-2 max-w-6xl mx-auto">

            {/* Header Row */}
            <div className="flex justify-between bg-gray-200 p-3 rounded-lg font-semibold text-gray-700">
              <div className="flex-1">ID</div>
              <div className="flex-1">Customer</div>
              <div className="flex-1">Platform</div>
              <div className="flex-1">Price</div>
              <div className="flex-1">Status</div>
            </div>

            {/* Order Rows */}
            {orders.map((order) => (
              <div
                key={order.order_id}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
              >
                <div className="flex-1">{order.order_id}</div>
                <div className="flex-1">{order.customer}</div>
                <div className="flex-1 flex items-center gap-2">
                  {platformIcon(order.platform)}
                  <span className="capitalize">{order.platform}</span>
                </div>
                <div className="flex-1">${order.order_price}</div>
                <div className="flex-1">{getStatusBadge(order.status)}</div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
