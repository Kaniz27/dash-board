import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/users.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>

        {loading ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li
                  key={user.user_id}
                  className="flex justify-between items-center p-4 hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="text-sm text-gray-600">{user.role}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
