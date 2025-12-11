import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../Sidebar";

const CourierList = () => {
  const [couriers, setCouriers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourier, setSelectedCourier] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/couriers.json")
      .then((res) => res.json())
      .then((data) => {
        setCouriers(data.courierList || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleContinue = () => {
    if (!selectedCourier) return;
    navigate(`/courier/${selectedCourier}/bookings`);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Courier List</h1>

        <div className="space-y-4 max-w-6xl mx-auto">
          {/* Header Row */}
          <div className="hidden md:flex justify-between bg-gray-200 rounded-lg p-3 font-semibold">
            <span className="w-1/6 text-left">ID</span>
            <span className="w-1/5 text-left">Courier Name</span>
            <span className="w-1/5 text-left">Phone</span>
            <span className="w-1/6 text-left">Status</span>
            <span className="w-1/6 text-left">Select</span>
          </div>

          {couriers.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition-all"
            >
              <span className="w-1/6 text-left font-medium">{c.id}</span>
              <span className="w-1/5 text-left font-medium">{c.name}</span>
              <span className="w-1/5 text-left">{c.phone}</span>
              <span
                className={`w-1/6 font-semibold ${
                  c.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {c.status}
              </span>
              <label className="w-1/6 flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="selectCourier"
                  value={c.id}
                  checked={selectedCourier === c.id}
                  onChange={() => setSelectedCourier(c.id)}
                  className="w-5 h-5 accent-[#01cdcc]"
                />
                <span className="text-gray-700">Select</span>
              </label>
            </div>
          ))}

         
        </div>
      </div>
    </div>
  );
};

export default CourierList;
