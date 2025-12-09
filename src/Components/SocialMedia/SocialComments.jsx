import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { FaUserCircle, FaThumbsUp, FaReply } from "react-icons/fa";

const SocialComments = () => {
  const [comments, setComments] = useState([]);

  // Sample comments data (JSON না থাকলেও)
  useEffect(() => {
    const sampleComments = [
      {
        user: "Sifat Ali",
        text: "This is a great post! Really helpful.",
        time: "2 hours ago"
      },
      {
        user: "Kaniz Fatema",
        text: "Thanks for sharing this information!",
        time: "1 hour ago"
      },
      {
        user: "Rafi Ahmed",
        text: "I have a question about this topic.",
        time: "30 minutes ago"
      }
    ];
    setComments(sampleComments);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Social Comments</h1>

        <div className="space-y-4 max-w-4xl mx-auto">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-gray-400 w-10 h-10" />
                <div>
                  <p className="font-semibold">{comment.user}</p>
                  <p className="text-gray-400 text-xs">{comment.time}</p>
                </div>
              </div>
              <p className="text-gray-600 ml-13">{comment.text}</p>
              {/* Like / Reply buttons */}
              <div className="flex gap-4 ml-13 text-gray-400 text-sm">
                <button className="flex items-center gap-1 hover:text-[#01cdcc]">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex items-center gap-1 hover:text-[#01cdcc]">
                  <FaReply /> Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialComments;
