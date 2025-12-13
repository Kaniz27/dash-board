import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { FiBell, FiSettings, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/Fontliner_Logo.png";

export default function Header() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openSettingsMenu, setOpenSettingsMenu] = useState(false);

  const profileRef = useRef();
  const settingsRef = useRef();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfileMenu(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setOpenSettingsMenu(false);
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

  const MenuItem = ({ to, label }) => (
    <Link
      to={to}
      onClick={() => {
        setOpenProfileMenu(false);
        setOpenSettingsMenu(false);
      }}
      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
    >
      {label}
    </Link>
  );

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

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        {/* BALANCE */}
        {!loading && profile && (
          <div className="flex items-center bg-gradient-to-r from-[#01cdcc] to-[#009b9b] text-white px-3 py-1.5 rounded-xl shadow-md gap-2 min-w-max">
            <div className="flex gap-2 items-center">
              <p className="opacity-80 text-xl font-semibold">Balance</p>
              <p className="font-normal"><span className="font-serif">৳</span>{profile.balance}</p>
            </div>
          </div>
        )}

        {/* NOTIFICATION */}
        <FiBell size={20} className="text-gray-500 cursor-pointer" />

        {/* SETTINGS DROPDOWN */}
        <div className="relative" ref={settingsRef}>
          <FiSettings
            size={20}
            className="text-gray-600 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setOpenSettingsMenu(!openSettingsMenu);
              setOpenProfileMenu(false);
            }}
          />

          {openSettingsMenu && (
            <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg w-44 py-2 border animate-fadeIn">
              <MenuItem to="/login" label="Login" />
              <MenuItem to="/logout" label="Logout" />
            </div>
          )}
        </div>

        {/* PROFILE + DROPDOWN */}
        <div
          className="relative border-l border-gray-200 pl-4"
          ref={profileRef}
        >
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setOpenProfileMenu(!openProfileMenu);
              setOpenSettingsMenu(false);
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
             
            </div>
          </div>

          {/* PROFILE DROPDOWN */}
          {openProfileMenu && (
            <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg w-44 py-2 border animate-fadeIn">
              <MenuItem to="/setup/profile" label="My Profile" />

              <MenuItem to="/logout" label="Logout" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
