import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Sidebar from "../Sidebar";

const BookingList = () => {
  const { courierId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/bookings.json")
      .then(res => res.json())
      .then(data => {
        const filtered = data.bookings.filter(b => b.courierId === courierId);
        setBookings(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.log("Fetch error:", err);
        setLoading(false);
      });
  }, [courierId]);

  if (loading) return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Bookings for {courierId}</h1>
        <Link to="/couriers" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Courier List</Link>

        <div className="bg-white rounded-xl shadow-md p-6 border">
          {bookings.length === 0 ? (
            <p className="text-gray-600">No bookings found for this courier.</p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border-b">Booking ID</th>
                  <th className="p-3 border-b">Customer</th>
                  <th className="p-3 border-b">Items</th>
                  <th className="p-3 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{b.id}</td>
                    <td className="p-3 font-medium">{b.customer}</td>
                    <td className="p-3">{b.items}</td>
                    <td className={`p-3 font-semibold ${b.status === "Pending" ? "text-yellow-600" : b.status === "Shipped" ? "text-blue-600" : "text-green-600"}`}>
                      {b.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
