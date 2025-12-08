import React, { useState } from "react";
import Sidebar from "../Sidebar";

export default function VoiceAgent() {
  const [assistantName, setAssistantName] = useState("");
  const [firstMessageMode, setFirstMessageMode] = useState("Assistant speaks first");
  const [firstMessage, setFirstMessage] = useState("Welcome to HSBLCO LLC");
  const [systemPrompt, setSystemPrompt] = useState(
    "Hi I'm Callum! I'm here and ready to help with any questions you have or tasks you need assistance. Feel free to ask!"
  );

  const [voice, setVoice] = useState("Callum (en)");
  const [language, setLanguage] = useState("English (United States)");
  const [agentEnabled, setAgentEnabled] = useState(false);

  const [primaryColor, setPrimaryColor] = useState("#01cdcc");
  const [secondaryColor, setSecondaryColor] = useState("#006766");
  const [accentColor, setAccentColor] = useState("#2563eb");

  const [keywords, setKeywords] = useState("");
  const [crisisPrompt, setCrisisPrompt] = useState("");
  const [description, setDescription] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [configJSON, setConfigJSON] = useState("{}");

  const [showModal, setShowModal] = useState(false);
  const [intentText, setIntentText] = useState("");

  const handleSave = () => {
    const config = {
      assistantName,
      firstMessageMode,
      firstMessage,
      systemPrompt,
      voice,
      language,
      agentEnabled,
      themeColors: {
        primaryColor,
        secondaryColor,
        accentColor,
      },
      keywords,
      crisisPrompt,
      description,
      avatarURL,
      configJSON: JSON.parse(configJSON),
    };

    console.log("Saved Configuration:", config);
    alert("Configuration saved! Check console for details.");
  };

  const handleGeneratePrompt = () => {
    if (!intentText.trim()) return;
    const generated = `System Prompt based on: ${intentText}`;
    setSystemPrompt(generated);
    setShowModal(false);
    setIntentText("");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64 p-6">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Create Agent</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Assistant Name */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-gray-700">Assistant Name</span>
              <input
                type="text"
                value={assistantName}
                onChange={(e) => setAssistantName(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50"
              />
            </label>

            {/* First Message Mode */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-gray-700">First Message Mode</span>
              <select
                value={firstMessageMode}
                onChange={(e) => setFirstMessageMode(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50"
              >
                <option>Assistant speaks first</option>
                <option>User speaks first</option>
              </select>
            </label>

            {/* First Message */}
            <label className="md:col-span-2 flex flex-col">
              <span className="mb-2 font-medium text-gray-700">First Message</span>
              <textarea
                value={firstMessage}
                onChange={(e) => setFirstMessage(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 resize-none"
                rows={3}
              />
            </label>

            {/* System Prompt */}
            <label className="md:col-span-2 flex flex-col">
              <span className="flex mb-2 justify-between items-center font-medium text-gray-700">
                System Prompt
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="bg-[#01cdcc] text-white px-4 py-2 rounded-lg hover:bg-[#006766]"
                >
                  Generate
                </button>
              </span>
              <textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-200 bg-gray-50 resize-none"
                rows={5}
              />
            </label>

            {/* Voice, Language, Enabled */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Voice</span>
                <select
                  value={voice}
                  onChange={(e) => setVoice(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50"
                >
                  <option>Callum (en)</option>
                  <option>Olivia (en)</option>
                </select>
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Language</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50"
                >
                  <option>English (United States)</option>
                  <option>Spanish (Spain)</option>
                </select>
              </label>

              <label className="flex items-center space-x-3 mt-6">
                <input
                  type="checkbox"
                  checked={agentEnabled}
                  onChange={(e) => setAgentEnabled(e.target.checked)}
                  className="border border-gray-200"
                />
                <span className="font-medium text-gray-700">Agent Enabled</span>
              </label>
            </div>

            {/* Theme Colors */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Primary Color</span>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-12 h-8 border border-gray-200 rounded"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Secondary Color</span>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-12 h-8 border border-gray-200 rounded"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Accent Color</span>
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-12 h-8 border border-gray-200 rounded"
                />
              </label>
            </div>

            {/* Keywords */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-gray-700">Keywords</span>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50"
              />
            </label>

            {/* Crisis Prompt */}
            <label className="md:col-span-2 flex flex-col">
              <span className="mb-2 font-medium text-gray-700">Crisis Prompt</span>
              <textarea
                value={crisisPrompt}
                onChange={(e) => setCrisisPrompt(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50 resize-none"
                rows={3}
              />
            </label>

            {/* Description */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-gray-700">Description</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50 resize-none"
                rows={1}
              />
            </label>

            {/* Avatar URL */}
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-gray-700">Avatar URL</span>
              <input
                type="text"
                value={avatarURL}
                onChange={(e) => setAvatarURL(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50"
              />
            </label>

            {/* Config JSON */}
            <label className="md:col-span-2 flex flex-col">
              <span className="mb-2 font-medium text-gray-700">Config JSON</span>
              <textarea
                value={configJSON}
                onChange={(e) => setConfigJSON(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 font-mono resize-none"
                rows={6}
              />
            </label>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="bg-[#01cdcc] text-white px-6 py-3 rounded-lg hover:bg-[#006766]"
          >
            Save Configuration
          </button>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl shadow-xl w-96 space-y-4 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Generate System Prompt</h2>

                <textarea
                  value={intentText}
                  onChange={(e) => setIntentText(e.target.value)}
                  placeholder="Describe your intent"
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                  rows={4}
                />

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-lg border border-gray-200"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleGeneratePrompt}
                    className="px-4 py-2 rounded-lg bg-[#01cdcc] text-white hover:bg-[#006766]"
                  >
                    Generate Prompt
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
