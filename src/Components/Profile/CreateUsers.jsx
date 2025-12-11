import React from 'react';
import Sidebar from '../Sidebar';

const CreateUsers = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full flex justify-center items-center p-8">
        {/* User Form Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300 w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Create User</h1>
          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Role</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]">
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="agent">Agent</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#01cdcc] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#009b9b] transition"
              >
                Create User
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default CreateUsers;
