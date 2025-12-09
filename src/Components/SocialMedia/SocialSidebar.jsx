import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaWeixin,
  FaPinterest
} from "react-icons/fa";

export default function SocialSidebar() {
  const [platforms, setPlatforms] = useState([]);

  // Map icon strings from JSON to actual React Icons
  const icons = {
    FaFacebookF: <FaFacebookF className="text-blue-600 w-6 h-6" />,
    FaInstagram: <FaInstagram className="text-pink-500 w-6 h-6" />,
    FaTwitter: <FaTwitter className="text-blue-400 w-6 h-6" />,
    FaLinkedinIn: <FaLinkedinIn className="text-blue-700 w-6 h-6" />,
    FaYoutube: <FaYoutube className="text-red-600 w-6 h-6" />,
    FaWhatsapp: <FaWhatsapp className="text-green-500 w-6 h-6" />,
    FaWeixin: <FaWeixin className="text-green-600 w-6 h-6" />,
    FaPinterest: <FaPinterest className="text-red-500 w-6 h-6" />
  };

  useEffect(() => {
    fetch("/social.json")
      .then((res) => res.json())
      .then((data) => setPlatforms(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 w-full p-6 flex justify-center items-start">

        <div className="p-6 bg-gray-100 rounded-2xl shadow-md w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Social Platforms</h2>

          <ul className="space-y-4">
            {platforms.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                  {icons[item.icon]}
                </div>

                {/* Name and Details */}
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.orders}</p>

                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#01cdcc] h-2 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status */}
                <span className="px-3 py-1 font-normal bg-green-100 text-[#01cdcc] text-sm rounded-full">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
