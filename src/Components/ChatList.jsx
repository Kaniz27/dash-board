// ChatPage.jsx
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { FiSearch, FiCircle, FiPhone, FiVideo, FiSend } from "react-icons/fi";
import ProfilePanel from "./ProfilePanel";

export default function ChatPage() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetch("/chat.json")
      .then(res => res.json())
      .then(data => setChats(data))
      .catch(err => console.error(err));
  }, []);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    const updatedChats = chats.map(chat => {
      if (chat.id === selectedChat.id) {
        return {
          ...chat,
          messages: [...chat.messages, { from: "me", text: newMessage, time: "Now" }],
          lastMessage: newMessage,
        };
      }
      return chat;
    });
    setChats(updatedChats);
    setSelectedChat(prev => ({
      ...prev,
      messages: [...prev.messages, { from: "me", text: newMessage, time: "Now" }],
      lastMessage: newMessage,
    }));
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 p-4 flex gap-4">

        {/* Left Panel - Chat List */}
        <div className="w-2/5 bg-white border border-gray-300 flex flex-col p-4 rounded-lg shadow">
          {/* Search Bar */}
          <div className="flex items-center mb-4 bg-violet-200 p-2 rounded">
            <FiSearch className="mr-2 text-gray-600"/>
            <input
              type="text"
              placeholder="Search..."
              className="border-none rounded px-2 py-1 w-full focus:outline-none bg-violet-200"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto space-y-2">
            {filteredChats.map(chat => (
              <div
                key={chat.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 border-b border-gray-300
                  ${selectedChat?.id === chat.id ? "bg-violet-200" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedChat(chat)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="w-12 h-12 rounded-full"
                    />
                    {chat.active && <FiCircle className="text-green-500 absolute bottom-0 right-0 w-4 h-4" />}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold">{chat.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Messenger */}
        <div className="w-3/5 flex flex-col bg-white rounded-lg shadow">
          {selectedChat ? (
            <>
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-50 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{selectedChat.name}</h3>
                    <span className="text-sm text-green-500">{selectedChat.active ? "Online" : "Offline"}</span>
                  </div>
                </div>
                <div className="flex gap-4 text-gray-600">
                  <FiPhone className="w-5 h-5 cursor-pointer hover:text-blue-500"/>
                  <FiVideo className="w-5 h-5 cursor-pointer hover:text-blue-500"/>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                {selectedChat.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg max-w-md break-words 
                      ${msg.from === "me" ? "bg-violet-200 self-end" : "bg-gray-200 self-start"}`}
                  >
                    {msg.text}
                    <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>
                  </div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>

              {/* Input */}
              <div className="flex items-center p-3 border-t border-gray-300 gap-2 bg-gray-50 rounded-b-lg">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  onKeyDown={e => { if(e.key === 'Enter') handleSendMessage(); }}
                />
                <button
                  className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600"
                  onClick={handleSendMessage}
                >
                  <FiSend />
                </button>
              </div>
            </>
          ) : (
            <div className="text-gray-500 text-center mt-20">Select a chat to view messages</div>
          )}
        </div>

      </div>
      <ProfilePanel></ProfilePanel>
    </div>
  );
}
