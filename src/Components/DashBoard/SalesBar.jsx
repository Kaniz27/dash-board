import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";

export default function SalesBar() {
  const [period, setPeriod] = useState("Monthly");
  const [open, setOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const options = ["Weekly", "Monthly", "Yearly"];

  const salesData = [
    { month: "Jan", sales: 1200 },
    { month: "Feb", sales: 2100 },
    { month: "Mar", sales: 800 },
    { month: "Apr", sales: 1600 },
    { month: "May", sales: 900 },
    { month: "Jun", sales: 1700 },
    { month: "Jul", sales: 2200 },
    { month: "Aug", sales: 1400 },
    { month: "Sep", sales: 1900 },
    { month: "Oct", sales: 2300 },
    { month: "Nov", sales: 2000 },
    { month: "Dec", sales: 2500 },
  ];

  return (
    <div className="bg-white p-6 rounded shadow-sm w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Sales Summary</h2>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
          >
            {period} <FiChevronDown />
          </button>

          {open && (
            <ul className="absolute right-0 mt-1 bg-white border rounded shadow w-32 z-10">
              {options.map((opt) => (
                <li
                  key={opt}
                  onClick={() => {
                    setPeriod(opt);
                    setOpen(false);
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-4 text-gray-500">
        {selectedMonth
          ? `Showing sales for {selectedMonth}`
          : `Showing sales data for ${period}`}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={salesData}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          barGap={5}
          barCategoryGap="40%"
          onClick={(data) => {
            if (data && data.activeLabel) {
              setSelectedMonth(data.activeLabel);
            }
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 2500]} />
          <Tooltip />

          <Bar
            dataKey="sales"
            fill="#01cdcc"
            barSize={20}
            radius={[4, 4, 0, 0]}
          >
            <LabelList
              dataKey="sales"
              position="top"
              style={{ fontSize: 12, fill: "#333", fontWeight: "bold" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {selectedMonth && (
        <button
          onClick={() => setSelectedMonth(null)}
          className="mt-4 bg-[#01cdcc] text-white px-4 py-2 rounded hover:bg-red-400"
        >
          Show All Months
        </button>
      )}
    </div>
  );
}
