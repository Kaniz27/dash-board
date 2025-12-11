import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/orderlist.json")
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
            <div className="grid grid-cols-6 bg-gray-200 p-3 rounded-lg font-semibold text-gray-700">
              <div>ID</div>
              <div>Customer</div>
              <div>Location</div>
              <div>Contact</div>
              <div>Price</div>
              <div>Platform</div>
            </div>

            {/* Table Rows */}
            {orders.map((order) => (
              <div
                key={order.order_id}
                className="grid grid-cols-6 items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div>{order.order_id}</div>
                <div>{order.customer}</div>
                <div>{order.location}</div>
                <div>{order.contact}</div>
                <div className="font-medium">${order.price}</div>
                <div className="flex items-center gap-2 capitalize">
                  {platformIcon(order.platform)}
                  {order.platform || "Website"}
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
