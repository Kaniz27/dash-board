import React, { useState } from "react";
import Sidebar from "../Sidebar";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [receiverName, setReceiverName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");

  const handlePay = () => {
    if (!receiverName || !product || !quantity || !amount) {
      return alert("Please fill in all fields");
    }

    alert(
      `Payment of $${amount} for ${quantity} x ${product} to ${receiverName} via ${paymentMethod.toUpperCase()} successful!`
    );

    // Reset form
    setReceiverName("");
    setProduct("");
    setQuantity("");
    setAmount("");
    setPaymentMethod("credit");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6 mt-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Make a Payment</h2>

        {/* Payment Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>

          {/* Receiver Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Receiver Name</label>
            <input
              type="text"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter receiver name"
            />
          </div>

          {/* Product */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Product</label>
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product name"
            />
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter quantity"
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter amount"
            />
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Select Payment Method</label>
            <div className="flex justify-between gap-3">
              <button
                onClick={() => setPaymentMethod("credit")}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition ${
                  paymentMethod === "credit"
                    ? "bg-[#01cdcc] text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod("bkash")}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition ${
                  paymentMethod === "bkash"
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Bkash
              </button>
              <button
                onClick={() => setPaymentMethod("rocket")}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition ${
                  paymentMethod === "rocket"
                    ? "bg-purple-500 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Rocket
              </button>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePay}
            className="w-full py-2 bg-[#01cdcc] hover:bg-[#006766] text-white font-bold rounded-md hover:opacity-90 transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
