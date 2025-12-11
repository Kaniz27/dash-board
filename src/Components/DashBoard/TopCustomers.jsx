import React from "react";

export default function TopCustomers() {
  const customers = [
    {
      name: "Alice Johnson",
      type: "Premium Customer - 45 Orders",
      amount: "৳ 12,500",
      avatar: "👩",
    },
    {
      name: "Daniel Carter",
      type: "Regular Customer - 32 Orders",
      amount: "৳ 8,200",
      avatar: "🧑",
    },
    {
      name: "Emma Wilson",
      type: "Premium Customer - 28 Orders",
      amount: "৳ 9,750",
      avatar: "👩",
    },
    {
      name: "Liam Johnson",
      type: "Regular Customer - 20 Orders",
      amount: "৳ 5,400",
      avatar: "🧑",
    },
    {
      name: "Olivia Brown",
      type: "Premium Customer - 15 Orders",
      amount: "৳ 3,900",
      avatar: "👩",
    },
    {
      name: "Noah Smith",
      type: "Regular Customer - 12 Orders",
      amount: " ৳ 2,750",
      avatar: "🧑",
    },
    {
      name: "Sophia Miller",
      type: "Premium Customer - 10 Orders",
      amount: " ৳ 3,200",
      avatar: "👩",
    },
    {
      name: "James Anderson",
      type: "Regular Customer - 18 Orders",
      amount: "৳ 4,900",
      avatar: "🧑",
    },
    {
      name: "Harper Davis",
      type: "Premium Customer - 22 Orders",
      amount: "৳ 6,700",
      avatar: "👩",
    },
    {
      name: "Michael Brown",
      type: "Regular Customer - 14 Orders",
      amount: "৳ 3,150",
      avatar: "🧑",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Top Customers</h2>
        <span className="text-sm text-gray-500 cursor-pointer">Monthly ▼</span>
      </div>

      {/* Customer List */}
      <div className="flex flex-col gap-6">
        {customers.map((c, i) => (
          <div className="flex items-center justify-between" key={i}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {c.avatar}
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">{c.name}</h4>
                <p className="text-sm text-gray-500">{c.type}</p>
              </div>
            </div>

            <span className="font-semibold text-gray-700"><span className="font-serif">{c.amount}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
