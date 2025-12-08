import React, { useState } from "react";
import Sidebar from "../Sidebar";

const SIPRegistration = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    username: "",
    password: "",
    sipSignalDomain: "",
    signalProtocol: "",
    signalPort: "",
    mediaIP: "",
    mediaPort: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic
    console.log(formData);
    alert("SIP Registration Submitted!");
  };

  return (
    <div className="flex">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex flex-col items-center w-full p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          SIP Trunk Registration
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-6 rounded-lg w-full max-w-md border border-gray-300 flex flex-col gap-4"
        >
          {/* Display Name (Optional) */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">
              Display Name <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="Enter display name"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

          {/* Username (Required) */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

          {/* Password (Required) */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

          {/* SIP Signal Domain/IP */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">
              SIP Signal Domain/IP <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="sipSignalDomain"
              value={formData.sipSignalDomain}
              onChange={handleChange}
              placeholder="Enter SIP domain or IP"
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

          {/* Signal Protocol */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">
              Signal Protocol <span className="text-red-500">*</span>
            </label>
            <select
              name="signalProtocol"
              value={formData.signalProtocol}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            >
              <option value="">Select Protocol</option>
              <option value="UDP">UDP</option>
              <option value="TCP">TCP</option>
              <option value="TLS">TLS</option>
            </select>
          </div>

          {/* Signal Port */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">
              Signal Port <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="signalPort"
              value={formData.signalPort}
              onChange={handleChange}
              placeholder="Enter signal port"
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

          {/* Media IP (Optional) */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">
              Media IP <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              name="mediaIP"
              value={formData.mediaIP}
              onChange={handleChange}
              placeholder="Enter media IP"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

         

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-[#01cdcc] hover:bg-[#009b9b] text-white px-4 py-2 rounded-lg shadow font-semibold"
          >
            Register SIP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SIPRegistration;
