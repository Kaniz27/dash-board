import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/bookings.json")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.bookings || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="flex justify-center items-center h-screen text-gray-600 text-lg">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Booking List</h1>

        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-300 max-w-6xl mx-auto">
          
          {/* Table Header */}
          <div className="flex justify-between bg-gray-100 p-3 rounded-t-lg font-semibold text-gray-700">
            <div className="flex-1">Booking ID</div>
            <div className="flex-1">Courier ID</div>
            <div className="flex-1">Customer</div>
            <div className="flex-1">Items</div>
            <div className="flex-1">Status</div>
          </div>

          {/* Table Rows */}
          {bookings.map((b) => (
            <div
              key={b.id}
              className="flex justify-between items-center border-b border-gray-200 p-3 hover:bg-gray-50"
            >
              <div className="flex-1">{b.id}</div>
              <div className="flex-1">{b.courierId}</div>
              <div className="flex-1">{b.customer}</div>
              <div className="flex-1">{b.items}</div>
              <div className={`flex-1 font-semibold ${
                b.status === "Pending"
                  ? "text-yellow-600"
                  : b.status === "Shipped"
                  ? "text-blue-600"
                  : "text-green-600"
              }`}>
                {b.status}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BookingList;
