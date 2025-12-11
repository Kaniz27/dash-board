import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiEdit3, FiSave } from "react-icons/fi";
import Sidebar from "../Sidebar";

const EditProfile = () => {
  const [form, setForm] = useState({
    fullName: "Stratezik",
    email: "dave@stratezik.com",
    phone: "+1 782 830 5969",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved Data:", form);
    alert("Profile saved successfully!");
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Form container */}
      <div className="ml-64 w-full flex justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6 justify-center">
            <FiEdit3 size={20} className="text-gray-700" />
            <h2 className="text-xl font-semibold">Edit Profile</h2>
          </div>

          <form onSubmit={handleSave} className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Full Name</label>
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                <FiUser size={16} className="text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Email Address</label>
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                <FiMail size={16} className="text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                <FiPhone size={16} className="text-gray-400" />
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#00c9c8] text-white px-5 py-2 rounded-lg hover:bg-[#00b5b4] text-sm"
              >
                <FiSave size={16} /> Save Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
