import React, { useEffect, useState, useRef } from "react";
import { FaMicrophone, FaPlay } from "react-icons/fa";
import Sidebar from "../Sidebar";

export default function VoiceLibrary() {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVoice, setActiveVoice] = useState(null); // 🎵 currently playing
  const audioRef = useRef(null);

  const fetchVoices = async () => {
    try {
      const res = await fetch("https://engine.careon.io/api/voices/");
      const data = await res.json();
      setVoices(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching voices:", error);
      setLoading(false);
    }
  };

  const playPreview = (voice) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(voice.preview_url);
    audioRef.current = audio;
    setActiveVoice(voice.voice_id);
    audio.play();

    audio.onended = () => setActiveVoice(null);
  };

  useEffect(() => {
    fetchVoices();
  }, []);

  return (
    <div className="flex">
      
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Voice Library</h2>

        {loading ? (
          <p className="text-lg font-semibold">Loading voices...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {voices.map((voice) => (
              <div
                key={voice.voice_id}
                className={`border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-colors duration-200 ${
                  activeVoice === voice.voice_id ? "bg-blue-50" : "bg-white"
                }`}
              >
                {/* Top Section */}
                <div className="flex border-b border-gray-300 pb-4 items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaMicrophone className="text-red-500 text-lg" />
                    <span className="text-lg font-semibold">{voice.name}</span>
                  </div>

                  <button
                    onClick={() => playPreview(voice)}
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <FaPlay className="text-[#01cdcc]" />
                  </button>
                </div>

                {/* Language */}
                <div className="flex gap-2 items-center">
                  <p className="text-gray-500 font-bold text-sm">
                    Language:{" "}
                    <span className="font-medium uppercase">{voice.language}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
