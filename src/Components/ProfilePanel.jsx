import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function ProfilePanel({ profile }) {
  if (!profile) return null;

  return (
    <div className="w-1/4 bg-white border border-gray-300 p-4 rounded-lg shadow sticky top-6 flex flex-col items-center">
      
      {/* Profile Info */}
      <div className="flex flex-col items-center py-2 ">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-full mb-2"
        />
        <h2 className="text-xl font-bold mb-1 text-center">{profile.name}</h2>
        <p className="text-gray-500 text-sm text-center">{profile.position}</p>
      </div>

      <hr className="w-full my-2 border-gray-300" />

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-2 py-2">
        <p className="text-gray-700 font-medium text-center">{profile.email}</p>
        <p className="text-gray-700 font-medium text-center">{profile.phone}</p>
      </div>

      <hr className="w-full my-2 border-gray-300" />

      {/* Bio */}
      <p className="text-gray-600 text-sm text-center py-2">{profile.bio}</p>

      <hr className="w-full my-2 border-gray-300" />

      {/* Social Links */}
      <div className="flex justify-center gap-4 py-2">
        {profile.social?.facebook && (
          <a
            href={profile.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebookF size={20} />
          </a>
        )}
        {profile.social?.twitter && (
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={20} />
          </a>
        )}
        {profile.social?.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedinIn size={20} />
          </a>
        )}
        {profile.social?.github && (
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black"
          >
            <FaGithub size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
