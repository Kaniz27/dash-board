import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function ProfilePanel() {
  return (
    <div className="w-70 mx-auto mt-3 bg-violet-200 rounded-xl shadow-lg overflow-hidden  hover:shadow-2xl transition-shadow duration-300">
      {/* Header / Avatar */}
      <div className="flex flex-col items-center p-6 bg-violet-100">
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Cody Fisher"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">Cody Fisher</h2>
        <p className="text-gray-600">Software Engineer</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {/* Personal Information */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-2">Personal Information:</h3>
          <div className="flex items-center text-gray-600 mb-1">
            <FiMail className="mr-2 text-violet-500" /> eleanorpena@gmail.com
          </div>
          <div className="flex items-center text-gray-600">
            <FiPhone className="mr-2 text-violet-500" /> +1 (555) 123-4567
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-2">Description:</h3>
          <p className="text-gray-600">
            Marketing Manager with 5+ years of experience in digital campaigns, brand strategy, and team leadership.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">
            <FaLinkedin className="w-5 h-5"/>
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200">
            <FaTwitter className="w-5 h-5"/>
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors duration-200">
            <FaGithub className="w-5 h-5"/>
          </a>
        </div>
      </div>
    </div>
  );
}
