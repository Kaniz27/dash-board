import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FiEdit3, FiMail, FiPhone, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/public/profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-gray-600 text-lg p-5">Loading...</div>;

  return (
    <div className="flex  bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-5 mt-6 flex justify-center">
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">

          {/* Left Column: Profile Header + Contact */}
          <div className="bg-white rounded-2xl shadow p-6 w-full md:w-1/2 flex flex-col items-center">
            <img
              src={profile.avatar || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="Avatar"
              className="w-40 h-40 rounded-full border-2 border-[#00c9c8] shadow mb-4"
            />
            <h2 className="text-2xl font-bold">{profile.first_name} {profile.last_name}</h2>
            <p className="text-gray-500 text-sm">{profile.organization}</p>
            <button
              onClick={() => navigate("/edit-profile")}
              className="mt-3 flex items-center gap-1 bg-[#00c9c8] text-white px-3 py-1.5 rounded-lg shadow hover:bg-[#00b5b4] text-sm"
            >
              <FiEdit3 size={16} /> Edit Profile
            </button>

            {/* Email & Phone */}
            <div className="mt-4 bg-gray-50 p-3 rounded-xl w-full flex flex-col gap-2 text-sm shadow">
              <div className="flex items-center gap-2">
                <FiMail size={16} /> <span className="font-medium">{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={16} /> <span className="font-medium">{profile.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Info + Security */}
          <div className="bg-white rounded-2xl shadow p-6 w-full md:w-1/2 flex flex-col gap-4">
            {/* User Info */}
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">User ID:</span> {profile.id}</p>
              <p><span className="font-medium">Role:</span> {profile.roles}</p>
              <p><span className="font-medium">Last Login:</span> {new Date(profile.last_login).toLocaleString()}</p>
              <p><span className="font-medium">Date Joined:</span> {new Date(profile.date_joined).toLocaleDateString()}</p>
            </div>

            {/* Security & Access */}
            <div className="border-t border-gray-200 pt-3 text-sm">
              <p className="font-medium">Security & Access</p>
              <p className="text-gray-500 text-xs mt-1">
                Manage your password and two-factor authentication settings.
              </p>
            </div>

            {/* Change Password Button */}
            <div className="flex justify-center mt-2">
              <button className="bg-[#00c9c8] text-white px-4 py-1.5 rounded-lg hover:bg-[#00b5b4] flex items-center gap-1 text-sm">
                <FiLock size={16} /> Change Password
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
