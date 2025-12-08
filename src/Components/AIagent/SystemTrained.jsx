import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { FaTimes, FaMagic, FaSave } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SystemTrained = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const [modalInput, setModalInput] = useState("");

  const handleGeneratePrompt = () => {
    if (!modalInput.trim()) {
      toast.error("Prompt cannot be empty");
      return;
    }
    setSystemPrompt(modalInput);
    setIsModalOpen(false);
    setModalInput("");
    toast.success("Prompt generated successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Page Content */}
      <div
        className={`flex-1 flex justify-center items-start p-6 transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        <div className="w-full max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            System Training
          </h1>

          {/* Select Agent */}
          <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-start gap-3 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 border-gray-200">
              Select Agent
            </h2>
            <input
              type="text"
              className="w-full border border-gray-200 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="Type agent name..."
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
            />
          </div>

          {/* System Prompt */}
          <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center gap-3 border border-gray-200 w-full">
            <div className="w-full flex justify-between items-center border-gray-200">
              <h2 className="text-xl font-semibold text-gray-700 border-gray-200">
                System Prompt
              </h2>
              <button
                className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-1 rounded hover:bg-[#006766] transition"
                onClick={() => setIsModalOpen(true)}
              >
                <FaMagic /> Generate
              </button>
            </div>
            <textarea
              className="w-full border border-gray-200 rounded p-4 h-48 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
              placeholder="Write system prompt..."
              value={systemPrompt}
              readOnly
            ></textarea>
          </div>

          {/* Update Button */}
          <div className="flex justify-end mt-4">
            <button className="flex items-center gap-2 px-6 py-1 rounded bg-[#01cdcc] text-white hover:bg-[#006766] transition">
              <FaSave /> Update
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl relative border border-gray-200">
              <button
                className="absolute top-3 right-3 text-gray-500"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <FaMagic /> Generate System Prompt
              </h2>

              <p className="text-gray-600 mb-2 border-gray-200">
                Agent: {selectedAgent || "N/A"}
              </p>
              <p className="text-gray-600 mb-3 border-gray-200">
                Current Prompt:
              </p>
              <textarea
                className="w-full border border-gray-200 rounded p-2 h-24 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Write new prompt here..."
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
              ></textarea>

              <div className="flex justify-end gap-3">
                <button
                  className="flex items-center gap-2 px-4 py- rounded bg-gray-200 hover:bg-gray-300 transition"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaTimes /> Cancel
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-1 rounded bg-[#01cdcc] text-white hover:bg-[#006766] transition"
                  onClick={handleGeneratePrompt}
                >
                  <FaMagic /> Generate Prompt
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SystemTrained;
