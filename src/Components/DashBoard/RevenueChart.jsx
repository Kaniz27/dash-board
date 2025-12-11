
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 20000, refunds: 10000 },
  { month: "Feb", revenue: 28000, refunds: 18000 },
  { month: "Mar", revenue: 18000, refunds: 9000 },
  { month: "Apr", revenue: 20000, refunds: 24000 },
  { month: "May", revenue: 16000, refunds: 12000 },
  { month: "Jun", revenue: 22000, refunds: 14000 },
  { month: "Jul", revenue: 28000, refunds: 6000 },
  { month: "Aug", revenue: 21000, refunds: 21000 },
  { month: "Sep", revenue: 20000, refunds: 12000 },
  { month: "Oct", revenue: 28000, refunds: 16000 },
  { month: "Nov", revenue: 16000, refunds: 10000 },
  { month: "Dec", revenue: 28000, refunds: 18000 },
];

export default function RevenueChart() {
  const [hoverData, setHoverData] = useState({
    revenue: data[0].revenue,
    refunds: data[0].refunds,
  });
  const [activePeriod, setActivePeriod] = useState("Monthly");

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Header */}
      <div className=" p-4 rounded mb-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-gray-700 font-semibold text-lg">Revenue Statistics</h2>
            <div className="flex gap-8 mt-2">
              <div>
                <p className="text-gray-500 text-sm">Total Revenue</p>
                <p className="text-black text-start font-semibold text-xl"><span className="font-serif">৳</span>85,24k</p>
                <p className="font-bold text-lg"><span className="font-serif">৳</span> {hoverData.revenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Refunds</p>
                <p className="text-black text-start font-semibold text-xl"><span className="font-serif">৳</span>4,125</p>
                <p className="font-bold text-lg"><span className="font-serif">৳</span> {hoverData.refunds.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Download + Period Buttons */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <button className="bg-[#01cdcc] hover:bg-[#006766] text-white px-4 py-2 rounded">
              Download
            </button>
            <div className="flex gap-2 mt-2">
              {["Monthly", "Weekly", "Yearly"].map((period) => (
                <button
                  key={period}
                  onClick={() => setActivePeriod(period)}
                  className={`px-3 py-1 rounded font-medium text-sm ${
                    activePeriod === period
                      ? "bg-[#01cdcc] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
  <LineChart
    data={data}
    onMouseMove={(state) => {
      if (state.isTooltipActive) {
        setHoverData(state.activePayload[0].payload);
      }
    }}
  >
    {/* Background rectangle */}
    <rect x={0} y={0} width="100%" height="100%" fill="#f0f9ff" />

    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis
      domain={[0, 30000]}
      ticks={[0, 5000, 10000, 15000, 20000, 25000, 30000]}
      tickFormatter={(value) => `৳${value / 1000}k`}
    />
    <Tooltip formatter={(value) => `৳ ${value.toLocaleString()}`} />
    <Line type="monotone" dataKey="revenue" stroke="#2dd4bf" strokeWidth={2} dot={{ r: 4 }} />
    <Line type="monotone" dataKey="refunds" stroke="#a78bfa" strokeWidth={2} dot={{ r: 4 }} />
  </LineChart>
</ResponsiveContainer>


    </div>
  );
}
