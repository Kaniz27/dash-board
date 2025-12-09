import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Sidebar from "../Sidebar";
import { FaCheckCircle, FaUser, FaTruck, FaMoneyBillWave, FaShoppingBag } from "react-icons/fa";

const OrderConfirm = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/orderlists.json")  
      .then((res) => res.json())
      .then((data) => {
        const foundOrder = data.orders.find((o) => o.orderId === orderId);
        setOrderData(foundOrder || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-600">
        ❌ Order Not Found!
      </div>
    );
  }

  const totalAmount = orderData.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ⬅️ FIXED SIDEBAR */}
      <div className="fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* PAGE CONTENT */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-xl border">

          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <FaCheckCircle className="text-green-600 text-3xl" />
            <h1 className="text-3xl font-bold">Order Confirmation</h1>
          </div>

          <p className="text-gray-600 mb-6 text-lg">
            Your order has been successfully placed.
            <span className="font-semibold text-gray-800"> Order ID: {orderData.orderId}</span>
          </p>

          {/* Customer Info */}
          <div className="bg-gray-50 p-5 rounded-xl border mb-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-3">
              <FaUser className="text-blue-600" /> Customer Information
            </h2>
            <p><strong>Name:</strong> {orderData.customer}</p>
            <p><strong>Phone:</strong> {orderData.phone}</p>
            <p><strong>Email:</strong> {orderData.email}</p>
          </div>

          {/* Shipping */}
          <div className="bg-gray-50 p-5 rounded-xl border mb-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-3">
              <FaTruck className="text-orange-600" /> Shipping Details
            </h2>
            <p><strong>Address:</strong> {orderData.shippingAddress}</p>
            <p><strong>Delivery:</strong> {orderData.deliveryMethod}</p>
          </div>

          {/* Payment */}
          <div className="bg-gray-50 p-5 rounded-xl border mb-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-3">
              <FaMoneyBillWave className="text-green-600" /> Payment Information
            </h2>
            <p><strong>Status:</strong> {orderData.paymentStatus}</p>
            <p><strong>Method:</strong> {orderData.paymentMethod}</p>
          </div>

          {/* Items */}
          <div className="bg-gray-50 p-5 rounded-xl border mb-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <FaShoppingBag className="text-purple-600" /> Order Items
            </h2>

            {orderData.items.map((item, index) => (
              <div key={index} className="flex justify-between bg-white p-3 rounded-lg shadow-sm border mb-2">
                <p className="font-medium">{item.name} (x{item.qty})</p>
                <p className="font-semibold">{item.price * item.qty} TK</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="text-right text-2xl font-bold mb-6">
            Total: {totalAmount} TK
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
