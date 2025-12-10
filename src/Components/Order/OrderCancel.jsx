import React from "react";
import Sidebar from "../Sidebar"; // Sidebar import

const OrderCancel = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">
        <h1 className="text-2xl font-semibold mb-4">Order Cancel Page</h1>
        <p>Here you can handle order cancellations.</p>
      </div>
    </div>
  );
};

export default OrderCancel;
