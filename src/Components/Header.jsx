import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
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

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Fetch Fake Profile Data
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
        <img src={Logo} alt="Logo" className="w-36 h-auto" />

        <button className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-2 rounded-lg">
          <FiChevronDown />
          <span>Apps</span>
        </button>

        <button className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-2 rounded-lg">
          <FiChevronDown />
          <span>Features</span>
        </button>
      </div>

      {/* CENTER + RIGHT */}
      <div className="flex items-center flex-1 justify-end gap-6">

        {/* SEARCH BAR */}
        <div className="relative w-1/3">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full px-10 py-2 bg-[#f6f7f9]"
            placeholder="Search anything..."
          />
        </div>

        {/* BALANCE */}
        {!loading && profile && (
          <div className="flex items-center bg-gradient-to-r from-[#01cdcc] to-[#009b9b] text-white px-3 py-1.5 rounded-xl shadow-md gap-2 min-w-max">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <FiDollarSign size={16} />
            </div>
            <div>
              <p className="opacity-80 text-sm">Balance</p>
              <p className="font-semibold">${profile.balance}</p>
            </div>
          </div>
        )}

        {/* ICONS */}
        <FiBell size={20} className="text-gray-500 cursor-pointer" />
        <FiSettings size={20} className="text-gray-500 cursor-pointer" />

        {/* PROFILE + DROPDOWN */}
        <div className="relative border-l border-gray-200 pl-4" ref={menuRef}>

          {/* PROFILE BUTTON */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing instantly
              setOpenMenu(!openMenu); // Toggle dropdown
            }}
          >
            <img
              src={
                profile?.profile_pic
                  ? profile.profile_pic.startsWith("http")
                    ? profile.profile_pic
                    : `/public/${profile.profile_pic}`
                  : "https://i.pravatar.cc/40"
              }
              className="w-10 h-10 rounded-full border-2 border-[#01cdcc] object-cover shadow"
              alt="avatar"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-gray-700 font-semibold">
                {profile?.first_name} {profile?.last_name}
              </span>
              <span className="text-gray-400 text-xs">{profile?.email}</span>
            </div>
          </div>

          {/* DROPDOWN MENU */}
          {openMenu && (
            <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg w-40 py-2 border animate-fadeIn">
              <Link
                to="/login"
                onClick={() => setOpenMenu(false)}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Login
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
