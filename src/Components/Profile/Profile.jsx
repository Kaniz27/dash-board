import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/header.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 pt-10">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex-1 p-6 flex justify-center items-start">
        {loading ? (
          <div className="text-gray-500">Loading profile...</div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center">
            <img
              src={profile.profile_pic}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-[#01cdcc] shadow-md"
            />
            <h2 className="mt-4 text-2xl font-semibold">
              {profile.first_name} {profile.last_name}
            </h2>
            <p className="text-gray-500 mt-1">{profile.email}</p>
            <div className="mt-4 bg-[#01cdcc] text-white px-4 py-2 rounded-full shadow">
              Balance: ${profile.balance}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
