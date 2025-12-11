import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

const Sells = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/public/orderlist.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const platformIcon = (platform) => {
    switch ((platform || "website").toLowerCase()) {
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

  const filteredOrders = orders.filter(
    (o) =>
      o.order_id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6 mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Sales Overview</h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by Order ID or Customer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Sales Table */}
        {loading ? (
          <p className="text-center text-gray-500">Loading orders...</p>
        ) : (
          <div className="max-w-6xl mx-auto space-y-2">
            {/* Table Header */}
            <div className="grid grid-cols-7 bg-gray-200 p-3 rounded-lg font-semibold text-gray-700 text-center">
              <div>ID</div>
              <div>Customer</div>
              <div>Location</div>
              <div>Contact</div>
              <div>Price</div>
              <div>Platform</div>
              <div>Status</div>
            </div>

            {/* Table Rows */}
            {filteredOrders.map((order) => (
              <div
                key={order.order_id}
                className="grid grid-cols-7 items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition text-center"
              >
                <div>{order.order_id}</div>
                <div>{order.customer}</div>
                <div>{order.location}</div>
                <div>{order.contact}</div>
                <div>${order.price}</div>
                <div className="flex items-center justify-center gap-1">
                  {platformIcon(order.platform)}
                  <span className="capitalize">{order.platform || "Website"}</span>
                </div>
                <div>Confirmed</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sells;
