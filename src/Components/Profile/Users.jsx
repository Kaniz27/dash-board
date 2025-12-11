import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.business_users || []); // JSON key
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading users...
      </div>
    );

  // Status Badge Component
  const StatusBadge = ({ status }) => (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </span>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Business Users</h1>

        <div className="space-y-3 max-w-6xl mx-auto">

          {/* Header Row */}
          <div className="flex justify-between bg-gray-200 rounded-lg p-3 font-semibold text-gray-700">
            <span className="flex-1">UID</span>
            <span className="flex-1">Name</span>
            <span className="flex-1">Email</span>
            <span className="flex-1">Role</span>
            <span className="flex-1">Status</span>
            <span className="flex-1 text-center">Select</span>
          </div>

          {/* User Rows */}
          {users.map((user) => (
            <div
              key={user.uid}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all"
            >
              <span className="flex-1 font-medium">{user.uid}</span>
              <span className="flex-1 font-medium">{user.name}</span>
              <span className="flex-1 text-gray-700">{user.email}</span>
              <span className="flex-1 font-medium">{user.role}</span>

              {/* Status Badge */}
              <span className="flex-1">
                <StatusBadge status={user.status} />
              </span>

              <div className="flex-1 flex justify-center">
                <input
                  type="radio"
                  name="selectUser"
                  value={user.uid}
                  checked={selectedUser === user.uid}
                  onChange={() => setSelectedUser(user.uid)}
                  className="w-5 h-5 accent-[#01cdcc]"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default UserList;
