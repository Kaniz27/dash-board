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
       
        <div className="overflow-x-auto max-w-6xl mx-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Courier Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Select</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {couriers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{c.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{c.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{c.phone}</td>
                  <td className={`px-6 py-4 whitespace-nowrap font-semibold ${c.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                    {c.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="flex items-center gap-2 cursor-pointer">
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
