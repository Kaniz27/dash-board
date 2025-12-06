import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export default function OrderStatisticsCard() {
  const [selectedClient, setSelectedClient] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    { name: "A", value: 30 },
    { name: "B", value: 22 },
    { name: "C", value: 45 },
    { name: "D", value: 15 },
    { name: "E", value: 38 },
  ];

  const avatars = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3",
    "https://i.pravatar.cc/100?img=4",
  ];

  const clients = [
    { name: "John Doe", phone: "+1 234 567 890", email: "john@example.com" },
    { name: "Alice Johnson", phone: "+1 987 654 321", email: "alice@example.com" },
    { name: "Daniel Carter", phone: "+1 555 123 456", email: "daniel@example.com" },
    { name: "Emma Wilson", phone: "+1 444 987 123", email: "emma@example.com" },
    { name: "Liam Johnson", phone: "+1 333 222 111", email: "liam@example.com" },
  ];

  // Filtered clients
  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(selectedClient.toLowerCase())
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 relative overflow-hidden">
      <h2 className="text-gray-600 font-semibold">Order Statistics :</h2>

      {/* Earnings Header */}
      <div className="mt-3 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">৳71.5k</h1>
          <p className="text-gray-400 text-sm">Monthly Earnings</p>
        </div>
        <div className="flex items-center gap-1 text-[#01cdcc] text-sm mt-1">
          <AiOutlineArrowUp className="text-lg" />
          <span>25% Increased</span>
        </div>
      </div>

      {/* Area Chart */}
      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="purpleFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#01cdcc" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#006766" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#A855F7"
              fill="url(#purpleFill)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Avatars */}
      <div className="mt-5">
        <h3 className="text-gray-600 font-semibold mb-3"> Client wise Products :</h3>

        <div className="flex items-center gap-3 mb-4">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-10 h-10 rounded-full border shadow-sm object-cover"
              alt={`avatar ${i + 1}`}
            />
          ))}
          <button className="w-10 h-10 rounded-full bg-gray-200 text-3xl flex items-center justify-center font-light">+</button>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search Now..."
          className="w-full border rounded-md px-3 py-2 text-gray-600"
          value={selectedClient}
          onChange={(e) => {
            setSelectedClient(e.target.value);
            setIsModalOpen(e.target.value.length > 0); // 
          }}
        />

        {/* Button (Optional) */}
        <button
          className="w-full mt-4 bg-[#01cdcc] hover:bg-[#006766] text-white py-3 rounded-md"
          onClick={() => setIsModalOpen(selectedClient.length > 0)}
        >
          Find People
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-40">
          <div className="bg-[#01cdcc] rounded-lg p-6 w-96 shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>

            <div className="max-h-64 overflow-y-auto">
              {filteredClients.length > 0 ? (
                filteredClients.map((client, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => {
                      setSelectedClient(client.name);
                      setIsModalOpen(false);
                    }}
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${idx + 1}`}
                      alt={client.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{client.name}</p>
                      <p className="text-gray-500 text-sm">{client.phone}</p>
                      <p className="text-gray-500 text-sm">{client.email}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No results found</p>
              )}
            </div>

            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
