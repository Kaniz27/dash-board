import { useEffect, useState } from "react";
import {
  FiBell,
  FiSettings,
  FiSearch,
  FiChevronDown,
  FiDollarSign,
} from "react-icons/fi";
import Logo from "../assets/FL_Logo1.png";

export default function Header() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile JSON
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
    <div className="w-full h-24 bg-white shadow-md flex items-center justify-between px-6 fixed top-0 z-50">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-8">
        {/* Logo Bigger */}
        <img src={Logo} alt="Logo" className="w-36 h-auto" />

        <button className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-2 rounded-lg hover:bg-[#006766] transition">
          <FiChevronDown />
          <span>Apps</span>
        </button>

        <button className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-2 rounded-lg hover:bg-[#006766] transition">
          <FiChevronDown />
          <span>Features</span>
        </button>
      </div>

      {/* CENTER + RIGHT */}
      <div className="flex items-center flex-1 justify-end gap-6">

        {/* SEARCH BAR CENTERED */}
        <div className="relative w-1/3">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full border border-gray-300 rounded-full px-10 py-2 bg-[#f6f7f9] focus:outline-none focus:ring-2 focus:ring-[#01cdcc] transition"
          />
        </div>

        {/* BALANCE CARD */}
        {!loading && (
          <div className="flex items-center bg-gradient-to-r from-[#01cdcc] to-[#009b9b] text-white px-3 py-1.5 rounded-xl shadow-md gap-2 min-w-max">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <FiDollarSign size={16} />
            </div>
            <div className="text-sm text-white">
              <p className="opacity-80">Balance</p>
              <p className="font-semibold">${profile?.balance}</p>
            </div>
          </div>
        )}

        {/* ICONS */}
        <FiBell size={20} className="text-gray-500 hover:text-[#01cdcc] cursor-pointer" />
        <FiSettings size={20} className="text-gray-500 hover:text-[#01cdcc] cursor-pointer" />

        {/* PROFILE */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          {/* Avatar */}
          {loading ? (
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
          ) : (
            <img
              src={profile?.profile_pic || "https://i.pravatar.cc/40?img=1"}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-[#01cdcc] object-cover shadow"
            />
          )}

          {/* Name + Email */}
          <div className="flex flex-col leading-tight">
            <span className="text-gray-700 font-semibold">
              {loading ? "Loading..." : `${profile?.first_name} ${profile?.last_name}`}
            </span>
            {!loading && profile?.email && (
              <span className="text-gray-400 text-xs">{profile.email}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
