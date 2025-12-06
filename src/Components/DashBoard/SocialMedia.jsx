import React, { useState, useEffect } from "react";
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

export default function SocialMediaList() {
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
    <div className="p-6 bg-gray-100 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Social Platforms</h2>

      <ul className="space-y-4">
        {platforms.map((item, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded shadow flex items-center gap-4"
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
  );
}
