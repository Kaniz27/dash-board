import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Social Media Chatbot. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const socialPlatforms = [
    { name: "Facebook", icon: <FaFacebookF /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "LinkedIn", icon: <FaLinkedinIn /> }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // Bot reply simulation
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "Got it! Your message has been noted." }]);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 mt-10">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 flex-1 p-6 flex flex-col items-center">

        {/* Chat Card */}
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl flex flex-col h-[80vh]">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-[#01cdcc] text-white p-4 rounded-t-2xl">
            <h2 className="text-lg font-semibold">Social Media Chatbot</h2>
            <div className="flex gap-3">
              {socialPlatforms.map((platform) => (
                <div key={platform.name} className="w-8 h-8 flex items-center justify-center bg-white text-[#01cdcc] rounded-full">
                  {platform.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-xs ${msg.sender === "bot" ? "bg-gray-200 self-start" : "bg-[#01cdcc] text-white self-end"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="flex p-4 gap-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
            <button type="submit" className="bg-[#01cdcc] text-white px-4 py-2 rounded-full hover:bg-[#009b9b] transition">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
