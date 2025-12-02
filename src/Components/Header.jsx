import { FiBell, FiSettings, FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-full h-16 bg-white border-b shadow-sm flex items-center justify-between px-24">
      {/* Left Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-violet-200 hover:bg-violet-300 text-purple-700 px-3 py-1 rounded transition-all">
          Button 1
        </button>
        <button className="bg-violet-200 hover:bg-violet-300 text-purple-700 px-3 py-1 rounded transition-all">
          Button 2
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-full px-10 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <FiBell size={20} className="text-gray-600 hover:text-violet-600 transition-colors cursor-pointer" />
        <FiSettings size={20} className="text-gray-600 hover:text-violet-600 transition-colors cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40?img=30"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-violet-200 shadow-sm"
        />
      </div>
    </div>
  );
}
