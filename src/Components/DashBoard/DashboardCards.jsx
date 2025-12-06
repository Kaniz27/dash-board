import React from "react";

export default function DashboardCards() {
  const districts = [
    { name: "Dhaka", percent: 78, color: "bg-purple-400" },
    { name: "Chattogram", percent: 65, color: "bg-blue-400" },
    { name: "Rajshahi", percent: 52, color: "bg-red-400" },
    { name: "Khulna", percent: 49, color: "bg-green-400" },
    { name: "Sylhet", percent: 58, color: "bg-cyan-400" },
    { name: "Barishal", percent: 42, color: "bg-yellow-400" },
    { name: "Rangpur", percent: 61, color: "bg-pink-400" },
    { name: "Mymensingh", percent: 70, color: "bg-indigo-400" },
  ];

  const products = [
    {
      title: "Basmati Rice",
      subtitle: "Grocery - 2,450 Units Sold",
      price: "$18,400",
      emoji: "🌾",
      bg: "bg-yellow-100",
    },
    {
      title: "Mobile Phone",
      subtitle: "Electronics - 1,820 Units",
      price: "$220,000",
      emoji: "📱",
      bg: "bg-blue-100",
    },
    {
      title: "LED TV",
      subtitle: "Electronics - 640 Units",
      price: "$145,000",
      emoji: "📺",
      bg: "bg-purple-100",
    },
    {
      title: "Men's Shirt",
      subtitle: "Clothing - 1,350 Units",
      price: "$37,500",
      emoji: "👕",
      bg: "bg-green-100",
    },
    {
      title: "Women's Saree",
      subtitle: "Fashion - 950 Units Sold",
      price: "$52,800",
      emoji: "👗",
      bg: "bg-pink-100",
    },
    {
      title: "Laptop",
      subtitle: "Electronics - 420 Units",
      price: "$310,000",
      emoji: "💻",
      bg: "bg-gray-100",
    },
    {
      title: "Baby Diapers",
      subtitle: "Kids - 1,780 Units",
      price: "$28,900",
      emoji: "🍼",
      bg: "bg-red-100",
    },
    {
      title: "Cooking Oil",
      subtitle: "Grocery - 3,200 Units",
      price: "$39,200",
      emoji: "🛢️",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6  bg-gray-100">

     
      <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Sales by District (Bangladesh)</h2>
          <a href="#" className="text-sm text-[#01cdcc] hover:underline flex items-center gap-1">
            See All →
          </a>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {districts.map((d, i) => (
            <div key={i} className="flex items-center gap-3">
              
              {/* Flag */}
              <img
                src="https://flagcdn.com/bd.svg"
                className="w-6 h-6 rounded-full"
                alt="Bangladesh Flag"
              />

              {/* Name */}
              <span className="text-gray-700 py-4 font-medium w-32">{d.name}</span>

              {/* Percent Number */}
              <span className="text-gray-600 font-medium w-12">{d.percent}%</span>

              {/* Percent Bar */}
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${d.color}`}
                  style={{ width: `${d.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Top Products ================= */}
      <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Top Products</h2>
          <span className="text-sm text-gray-500 flex items-center gap-1 cursor-pointer">
            Weekly ▼
          </span>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          {products.map((p, i) => (
            <div className="flex items-start justify-between" key={i}>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${p.bg}`}
                >
                  {p.emoji}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700">{p.title}</h4>
                  <p className="text-sm text-gray-500">{p.subtitle}</p>
                </div>
              </div>

              <span className="font-semibold text-gray-700">{p.price}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
