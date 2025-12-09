import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const PostGeneration = () => {
  const [postText, setPostText] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const socialPlatforms = [
    { name: "Facebook", icon: <FaFacebookF /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "LinkedIn", icon: <FaLinkedinIn /> },
    { name: "YouTube", icon: <FaYoutube /> },
  ];

  const togglePlatform = (name) => {
    if (selectedPlatforms.includes(name)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== name));
    } else {
      setSelectedPlatforms([...selectedPlatforms, name]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ postText, selectedPlatforms });
    alert("Post Scheduled Successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex-1 p-6 flex justify-center items-start pt-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Social Media Post Generation</h2>

          {/* Post Textarea */}
          <div>
            <label className="block text-sm font-medium mb-1">Post Content</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
              placeholder="Write your post here..."
              rows={5}
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              required
            />
          </div>

          {/* Select Platforms */}
          <div>
            <label className="block text-sm font-medium mb-2">Select Platforms</label>
            <div className="flex gap-4">
              {socialPlatforms.map((platform) => (
                <button
                  type="button"
                  key={platform.name}
                  onClick={() => togglePlatform(platform.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition 
                    ${selectedPlatforms.includes(platform.name)
                      ? "bg-[#01cdcc] text-white border-[#01cdcc]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {platform.icon}
                  <span className="text-sm">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Time */}
          <div>
            <label className="block text-sm font-medium mb-1">Schedule Time</label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#01cdcc] hover:bg-[#009b9b] text-white py-3 rounded-lg font-semibold shadow text-lg transition"
          >
            Schedule Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostGeneration;
