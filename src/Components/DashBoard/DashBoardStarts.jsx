import { FaDollarSign, FaChartLine, FaShoppingCart, FaUserPlus } from "react-icons/fa";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Total Sales */}
      <div className="bg-white p-6 rounded shadow flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 font-medium">Total Sales</h3>
          <p className="text-[#01cdcc] text-sm pb-8">
            8.5% vs <span className="text-gray-400">last week</span>
          </p>
          <p className="text-xl font-semibold mt-1">
            $35,780 <span className="text-sm text-gray-400 font-normal">weekly</span>
          </p>
        </div>
        <FaDollarSign className="text-3xl text-[#01cdcc]" />
      </div>

      {/* Revenue */}
      <div className="bg-white p-6 rounded shadow flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 font-medium">Revenue</h3>
          <p className="text-[#01cdcc] text-sm pb-8">
            5.7% vs <span className="text-gray-400">last week</span>
          </p>
          <p className="text-xl font-semibold mt-1">
            $2,458 <span className="text-sm text-gray-400 font-normal">weekly</span>
          </p>
        </div>
        <FaChartLine className="text-3xl text-[#01cdcc]" />
      </div>

      {/* Total Orders */}
      <div className="bg-white p-6 rounded shadow flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 font-medium">Total Orders</h3>
          <p className="text-[#01cdcc] text-sm pb-8">
            2.1% vs <span className="text-gray-400">last week</span>
          </p>
          <p className="text-xl font-semibold mt-1">
            1,245 <span className="text-sm text-gray-400 font-normal">weekly</span>
          </p>
        </div>
        <FaShoppingCart className="text-3xl text-[#01cdcc]" />
      </div>

      {/* New Customers */}
      <div className="bg-white p-6 rounded shadow flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 font-medium">New Customers</h3>
          <p className="text-[#01cdcc] text-sm pb-8">
            12% vs <span className="text-gray-400 ">last week</span>
          </p>
          <p className="text-xl font-semibold mt-1">
            320 <span className="text-sm text-gray-400 font-normal">weekly</span>
          </p>
        </div>
        <FaUserPlus className="text-3xl text-[#01cdcc]" />
      </div>
    </div>
  );
}
