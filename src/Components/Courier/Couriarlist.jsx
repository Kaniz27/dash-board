import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Sidebar from "../Sidebar";

const CourierList = () => {
  const [couriers, setCouriers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/couriers.json")
      .then(res => res.json())
      .then(data => {
        setCouriers(data.courierList || []);
        setLoading(false);
      })
      .catch(err => {
        console.log("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Courier List</h1>
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Courier Name</th>
                <th className="p-3 border-b">Phone</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {couriers.map(c => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{c.id}</td>
                  <td className="p-3 font-medium">{c.name}</td>
                  <td className="p-3">{c.phone}</td>
                  <td className={`p-3 font-semibold ${c.status === "Active" ? "text-green-600" : "text-red-600"}`}>{c.status}</td>
                  <td className="p-3">
                    <Link
                      to={`/courier/${c.id}/bookings`}
                      className="text-blue-600 hover:underline"
                    >
                      View Bookings
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourierList;
