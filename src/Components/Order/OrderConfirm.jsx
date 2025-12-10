import React from "react";
import Sidebar from "../Sidebar"; // Sidebar import

const OrderConfirm = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4">Order Confirmation Page</h1>
        <p>Your order details will be displayed here.</p>
      </div>
    </div>
  );
};

export default OrderConfirm;
