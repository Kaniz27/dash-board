import { FiBell, FiSettings, FiSearch, FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6">
      
      {/* Left: Apps & Features buttons */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-1 rounded hover:bg-[#006766] transition-all">
          <FiChevronDown />
          <span className="">Apps</span>
        </button>
        <button className="flex items-center gap-2 bg-[#01cdcc] text-white px-4 py-1 rounded hover:bg-[#006766] transition-all">
          <FiChevronDown />
          <span className="">Features</span>
        </button>
      </div>

      {/* Right: Search + Activity + Settings + Avatar */}
      <div className="flex items-center gap-4 flex-1 ml-6 justify-end">
        {/* Search Bar */}
        <div className="relative w-1/3">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-full px-10 py-2 bg-[#f6f7f9] focus:outline-none focus:ring-2 focus:ring-violet-300"
          />
        </div>

        {/* Activity & Settings */}
        <FiBell size={20} className="text-gray-500 hover:text-violet-600 transition-colors cursor-pointer" />
        <FiSettings size={20} className="text-gray-500 hover:text-violet-600 transition-colors cursor-pointer" />

        {/* Avatar + Name */}
        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
          <img
            src="https://i.pravatar.cc/40?img=30"
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-violet-200 shadow-sm"
          />
          <span className="text-gray-500 font-medium">Kaniz</span>
        </div>
      </div>
    </div>
  );
}
