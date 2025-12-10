import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import ProfilePanel from "./ProfilePanel";
import { FiSearch, FiCircle, FiPhone, FiVideo, FiSend } from "react-icons/fi";

export default function ChatPage() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetch("/chat.json")
      .then(res => res.json())
      .then(data => {
        // data is already array
        // Add lastMessage and time for each chat
        const chatsWithLastMessage = data.map(chat => {
          const lastMsg = chat.messages[chat.messages.length - 1];
          return {
            ...chat,
            lastMessage: lastMsg?.text || "",
            time: lastMsg?.time || lastMsg?.timestamp || ""
          };
        });
        setChats(chatsWithLastMessage);
      })
      .catch(err => console.error(err));
  }, []);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (chat.lastMessage && chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const message = { from: "me", text: newMessage, time: "Now" };

    const updatedChats = chats.map(chat => {
      if (chat.id === selectedChat.id) {
        const messages = chat.messages ? [...chat.messages, message] : [message];
        return {
          ...chat,
          messages,
          lastMessage: newMessage,
          time: "Now"
        };
      }
      return chat;
    });

    setChats(updatedChats);
    setSelectedChat(prev => ({
      ...prev,
      messages: prev.messages ? [...prev.messages, message] : [message],
      lastMessage: newMessage,
      time: "Now"
    }));

    setNewMessage("");

    // AI reply simulation
    setTimeout(() => {
      const aiReply = { from: "them", text: "Got your message!", time: "Now" };
      const newChats = updatedChats.map(chat => {
        if (chat.id === selectedChat.id) {
          const messages = chat.messages ? [...chat.messages, aiReply] : [aiReply];
          return { ...chat, messages, lastMessage: aiReply.text, time: "Now" };
        }
        return chat;
      });
      setChats(newChats);
      setSelectedChat(prev => ({
        ...prev,
        messages: prev.messages ? [...prev.messages, aiReply] : [aiReply],
        lastMessage: aiReply.text,
        time: "Now"
      }));
    }, 1000);
  };

  const otherPerson = selectedChat
    ? { ...selectedChat, name: selectedChat.name, avatar: selectedChat.avatar }
    : null;

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64 flex gap-4 p-4">
        {/* Chat List */}
        <div className="w-2/5 bg-white border border-gray-300 flex flex-col p-4 rounded-lg shadow">
          <div className="flex items-center mb-4 bg-[#01cdcc] p-2 rounded">
            <FiSearch className="mr-2 text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="border-none rounded px-2 py-1 w-full focus:outline-none bg-[#01cdcc] text-white placeholder-white"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-1 overflow-y-auto space-y-2">
            {filteredChats.map(chat => (
              <div
                key={chat.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 border-b border-gray-300
                  ${selectedChat?.id === chat.id ? "bg-[#01cdcc] text-white" : "hover:bg-gray-100"}`}
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

        {/* Messenger Panel */}
        <div className="w-3/5 flex flex-col bg-white rounded-lg shadow">
          {selectedChat ? (
            <>
              <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-50 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={otherPerson?.avatar}
                    alt={otherPerson?.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{otherPerson?.name}</h3>
                    <span className="text-sm text-green-500">
                      {selectedChat.active ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 text-gray-600">
                  <FiPhone className="w-5 h-5 cursor-pointer hover:text-[#01cdcc]" />
                  <FiVideo className="w-5 h-5 cursor-pointer hover:text-[#01cdcc]" />
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                {selectedChat.messages?.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-end gap-2 ${msg.from === "me" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.from !== "me" && (
                      <img src={otherPerson?.avatar} className="w-8 h-8 rounded-full" alt="avatar" />
                    )}
                    <div className={`p-3 rounded-lg max-w-md break-words ${msg.from === "me" ? "bg-[#01cdcc] text-white" : "bg-gray-200 text-gray-800"}`}>
                      {msg.text}
                      {msg.from === "me" && <span className="ml-1 text-xs">✔</span>}
                      <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>
                    </div>
                    {msg.from === "me" && (
                      <img src={otherPerson?.avatar} className="w-8 h-8 rounded-full opacity-0" alt="avatar" />
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>

              <div className="flex items-center p-3 border-t border-gray-300 gap-2 bg-gray-50 rounded-b-lg">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-[#01cdcc] focus:border-[#01cdcc]"
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  onKeyDown={e => { if(e.key === 'Enter') handleSendMessage(); }}
                />
                <button
                  className="bg-[#01cdcc] p-2 rounded-full text-white hover:bg-[#006766]"
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

        {otherPerson && <ProfilePanel profile={otherPerson} />}
      </div>
    </div>
  );
}
