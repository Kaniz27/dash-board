import React, { useState } from "react";
import Sidebar from "../Sidebar";

const Tracking = () => {
  const allOrders = [
    { id: "ORD-1001", customer: "Rahim Uddin", status: 2, price: 1250 },
    { id: "ORD-1002", customer: "Sadia Akter", status: 3, price: 950 },
    { id: "ORD-1003", customer: "Hasan Ali", status: 1, price: 2150 },
    { id: "ORD-1004", customer: "Mehedi Hasan", status: 4, price: 1870 },
    { id: "ORD-1005", customer: "Jannat Ara", status: 0, price: 1450 },
  ];

  const steps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const [searchId, setSearchId] = useState("");
  const [currentOrder, setCurrentOrder] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const order = allOrders.find(
      (o) => o.id.toLowerCase() === searchId.toLowerCase()
    );
    if (order) {
      setCurrentOrder(order);
      setError("");
    } else {
      setCurrentOrder(null);
      setError("Order ID not found");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Fixed */}
      <div className="fixed top-0 left-0 h-full z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col items-center p-6 mt-8 overflow-x-hidden">
        <h2 className="text-3xl font-bold mb-8 text-center">Order Tracking</h2>

        {/* Search Bar */}
        <div className="flex w-full max-w-md mb-8 mx-auto">
          <input
            type="text"
            placeholder="Enter Order ID..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-[#01cdcc] text-white rounded-r-md hover:bg-blue-500 transition-colors duration-300"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 mb-6">{error}</p>}

        {/* Step Tracker / Graph */}
        {currentOrder && (
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative flex justify-between items-center">
              {/* Full line behind circles */}
              <div className="absolute top-7 left-0 w-full h-2 bg-gray-300 rounded-full z-0"></div>

              {steps.map((step, index) => {
                const isCompleted = index <= currentOrder.status; // completed + current
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center relative z-10"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 ${
                        isCompleted
                          ? "bg-[#01cdcc]"
                          : "bg-gray-300"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`mt-3 text-center text-sm font-medium transition-colors duration-300 ${
                        isCompleted ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Order Details Card */}
            <div className="bg-white shadow-lg rounded-xl p-8 mt-10 w-full max-w-md flex flex-col items-center space-y-4">
              <h3 className="text-xl font-semibold mb-2 text-center">
                Order Details
              </h3>
              <div className="w-full text-center text-gray-700">
                <p>
                  <span className="font-medium">Order ID:</span> {currentOrder.id}
                </p>
                <p>
                  <span className="font-medium">Customer:</span> {currentOrder.customer}
                </p>
                <p>
                  <span className="font-medium">Price:</span> ${currentOrder.price}
                </p>
                <p>
                  <span className="font-medium">Status:</span> {steps[currentOrder.status]}
                </p>
              </div>
            </div>
          </div>
        )}

        {!currentOrder && !error && (
          <p className="text-gray-500 mt-4 text-center">
            Enter an Order ID above to track its status.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tracking;
