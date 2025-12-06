import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { FaInbox, FaStar, FaPaperPlane, FaFileAlt, FaTrash } from "react-icons/fa";

export default function EmailPage() {
  const [mailboxes] = useState([
    { name: "Inbox", count: 21, icon: <FaInbox /> },
    { name: "Important", count: 2, icon: <FaStar /> },
    { name: "Sent", count: 0, icon: <FaPaperPlane /> },
    { name: "Drafts", count: 3, icon: <FaFileAlt /> },
    { name: "Spam", count: 5, icon: <FaTrash /> },
    { name: "Trash", count: 0, icon: <FaTrash /> },
  ]);

  const [folders] = useState([
    { name: "Projects", count: 8 },
    { name: "Clients", count: 3 },
    { name: "Archive", count: 0 },
    { name: "Team Updates", count: 5 },
  ]);

  const [inbox] = useState([
    {
      sender: "Eleanor Pena",
      time: "3:30 PM",
      subject: "You have a new message",
      description:
        "Sent you a detailed message regarding the upcoming project deadline and requested your feedback.",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      sender: "Cameron Williamson",
      time: "2:10 PM",
      subject: "Project proposal updated",
      description:
        "The proposal document has been revised based on your comments. Please review it at your earliest convenience.",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      sender: "Wade Warren",
      time: "11:45 AM",
      subject: "Meeting rescheduled",
      description:
        "Tomorrow’s meeting has been rescheduled to next week due to scheduling conflicts.",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      sender: "Theresa Webb",
      time: "10:15 AM",
      subject: "Invoice for last month",
      description: "Please find attached the invoice for last month’s services rendered.",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      sender: "Jacob Jones",
      time: "Yesterday",
      subject: "Follow-up on contract",
      description:
        "Just following up regarding the pending contract approval — please advise on next steps.",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      sender: "Devon Lane",
      time: "1:15 PM",
      subject: "Weekly Report",
      description:
        "Shared the comprehensive weekly progress report covering completed tasks, pending activities, risks identified, and next steps to align with the project timeline.",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
  ]);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Fixed Sidebar */}
      <div className="w-64 fixed left-0 top-0 bottom-0 bg-white shadow-lg z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">

        {/* Header above Inbox */}
        <Header />

        {/* Inbox & Mailboxes */}
        <div className="flex-1 p-6 flex gap-6 overflow-y-auto">

          {/* Mailboxes & Folders */}
          <div className="w-[30%] bg-white p-4 rounded-lg shadow flex flex-col gap-6">
            <h3 className="text-lg font-bold">Mailboxes</h3>
            <div className="flex flex-col gap-2">
              {mailboxes.map((box, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-2 rounded hover:bg-violet-50 cursor-pointer"
                >
                  <div className="flex items-center gap-2">{box.icon}<span>{box.name}</span></div>
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{box.count}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold mt-4">Folders</h3>
            <div className="flex flex-col gap-2">
              {folders.map((folder, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-2 rounded hover:bg-violet-50 cursor-pointer"
                >
                  <span>{folder.name}</span>
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{folder.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inbox */}
          <div className="w-[70%] flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-4">
              {inbox.map((mail, idx) => (
                <div key={idx} className="flex gap-4 p-3 hover:bg-violet-50 rounded transition">
                  <img src={mail.avatar} className="w-12 h-12 rounded-full" alt={mail.sender} />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{mail.sender}</h4>
                      <span className="text-sm text-gray-500">{mail.time}</span>
                    </div>
                    <h5 className="text-sm font-medium">{mail.subject}</h5>
                    <p className="text-gray-600 text-sm">{mail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
