import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaPlay } from "react-icons/fa";
import Sidebar from "../Sidebar";

export default function UnPublished() {
  const [collapsed, setCollapsed] = useState(false);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchAgents = async () => {
      try {
        const res = await fetch("/public/published.json");
        const data = await res.json();
        setAgents(data.data);
      } catch (err) {
        console.error("Error fetching agents:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const playPreview = (voiceId) => {
   
    const url = `https://storage.googleapis.com/eleven-public-prod/premade/voices/${voiceId}/preview.mp3`;
    if (audioRef.current) audioRef.current.pause();
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.play();
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} />

      <div className={`flex-1 p-6 transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"}`}>
        <h1 className="text-2xl font-bold mb-6 text-center">Unpublished Agent List</h1>

        {loading ? (
          <p className="text-center text-lg font-semibold mt-10">Loading agents...</p>
        ) : agents.length === 0 ? (
          <div className="flex flex-col items-center mt-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No agents"
              className="w-32 h-32 mb-4"
            />
            <p className="text-gray-500 text-lg">No agents found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white border border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FaUserCircle className={`text-3xl ${agent.enabled ? "text-[#01cdcc]" : "text-gray-400"}`} />
                    <p className="font-semibold text-lg">{agent.name}</p>
                  </div>
                  <button
                    onClick={() => playPreview(agent.id)}
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
                  >
                    <FaPlay className="text-[#01cdcc]" />
                  </button>
                </div>

                {/* Language + Voice ID */}
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="uppercase font-medium">{agent.language}</span>
                  <span className="font-mono">{agent.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
