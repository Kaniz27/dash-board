import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [toastType, setToastType] = useState("success"); // success or error

  useEffect(() => {
    fetch("/orderlist.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Platform icon
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
      delivered: "bg-green-100 text-green-600",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          classes[status.toLowerCase()] || "bg-gray-200 text-gray-600"
        }`}
      >
        {status}
      </span>
    );
  };

  // Handlers
  const handleConfirm = (orderId) => {
    setToast(`Order ${orderId} confirmed!`);
    setToastType("success");
    setTimeout(() => setToast(null), 3000);
  };

  const handleCancel = (orderId) => {
    setToast(`Order ${orderId} canceled!`);
    setToastType("error");
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative">

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg z-50 text-white animate-bounce ${
            toastType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast}
        </div>
      )}

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex-1 p-6 mt-8">
        {loading ? (
          <p className="text-gray-500">Loading orders...</p>
        ) : (
          <div className="space-y-2 max-w-6xl mx-auto">

            {/* Header Row */}
            <div className="flex justify-between bg-gray-200 p-3 rounded-lg font-semibold text-gray-700 items-center">
              <div className="flex-1">ID</div>
              <div className="flex-1">Customer</div>
              <div className="flex-1">Platform</div>
              <div className="flex-1">Price</div>
              <div className="flex-1">Status</div>
              <div className="flex-none">Actions</div>
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

                {/* Buttons inline */}
                <div className="flex gap-2 flex-none">
                  <button
                    onClick={() => handleConfirm(order.order_id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleCancel(order.order_id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
