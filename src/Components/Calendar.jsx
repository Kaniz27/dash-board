
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaCalendarAlt } from "react-icons/fa";

export default function CalendarPage() {
  const [month] = useState("December 2025");

  const currentEvents = [
    { title: "Meeting with team", time: "10:00 AM - 11:00 AM", place: "Office" },
  ];

  const upcomingEvents = [
    { type: "Important", title: "Project Deadline: Mobile App", time: "9:00 AM - 10:00 AM", place: "Office", color: "bg-red-500" },
    { type: "Confirmed", title: "Client Call: Smith Corp", time: "11:30 AM - 12:00 PM", place: "Zoom", color: "bg-green-500" },
    { type: "Casual", title: "Lunch with Marketing Team", time: "1:00 PM - 2:00 PM", place: "City Café", color: "bg-yellow-500" },
    { type: "Learning", title: "Workshop: UI/UX Trends 2025", time: "3:00 PM - 4:30 PM", place: "Conference Hall B", color: "bg-blue-500" },
    { type: "Webinar", title: "AI in Modern Development", time: "5:00 PM - 6:00 PM", place: "Online", color: "bg-purple-500" },
  ];

  return (
    <div className="flex h-screen bg-violet-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">

        <div className="flex justify-between gap-6">

          {/* Left Panel - 40% */}
          <div className="w-[40%] flex flex-col gap-6">

            {/* Current Events */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Current Events :</h2>
              {currentEvents.map((event, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow flex gap-4 mb-4">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/40?img=1" className="w-10 h-10 rounded-full" />
                    <img src="https://i.pravatar.cc/40?img=2" className="w-10 h-10 rounded-full" />
                    <img src="https://i.pravatar.cc/40?img=3" className="w-10 h-10 rounded-full" />
                    <img src="https://i.pravatar.cc/40?img=4" className="w-10 h-10 rounded-full" />
                    <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-sm font-bold">3+</div>
                  </div>
                  <div>
                    <h3 className="font-bold">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.time} at {event.place}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Upcoming Events :</h2>
              <div className="space-y-4">
                {upcomingEvents.map((ev, i) => (
                  <div key={i} className={`bg-white p-4 rounded-lg shadow border-l-8 flex items-center gap-4`} style={{ borderColor: ev.color }}>
                    <span className={`px-3 py-1 text-white rounded ${ev.color}`}>{ev.type}</span>
                    <div>
                      <h3 className="font-bold">{ev.title}</h3>
                      <p className="text-sm text-gray-600">{ev.time} at {ev.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel - 60% */}
          <div className="w-[60%] bg-white p-6 rounded-lg shadow">

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-purple-600 text-3xl" />
                <h1 className="text-2xl font-bold">{month}</h1>
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">
                Today
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-semibold text-gray-700">{day}</div>
              ))}
              {[...Array(35)].map((_, i) => (
                <div key={i} className="h-20 border rounded-lg bg-white hover:bg-violet-100 transition p-2">
                  <p className="text-sm text-gray-500">{i - 1 > 0 ? i - 1 : ""}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
