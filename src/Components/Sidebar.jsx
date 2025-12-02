// Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaComments,
  FaEnvelope,
  FaThLarge,
  FaShoppingCart,
  FaHospital,
  FaUserFriends,
  FaFileInvoice,
  FaBoxOpen, // Product List icon
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const menu = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Calendar", icon: <FaCalendarAlt />, path: "/calendar" },
    { name: "Chat", icon: <FaComments />, path: "/chat" },
    { name: "Email", icon: <FaEnvelope />, path: "/email" },
    { name: "Kanban Board", icon: <FaThLarge />, path: "/kanban" },
    { name: "Ecommerce", icon: <FaShoppingCart />, path: "/ecommerce" },
    { name: "Hospital", icon: <FaHospital />, path: "/hospital" },
    { name: "CRM", icon: <FaUserFriends />, path: "/crm" },
    { name: "Invoice", icon: <FaFileInvoice />, path: "/invoice" },
    { name: "Product List", icon: <FaBoxOpen />, path: "/products" },
  ];

  return (
    <div className="bg-violet-100 shadow-sm h-screen p-5 border-r flex flex-col w-64">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-purple-600">AQUIRY</span>
      </h1>

      <div className="flex-1 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setActive(item.path)}
            className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-all
              ${active === item.path
                ? "bg-violet-300 text-gray-700"
                : "hover:bg-violet-200 hover:text-gray-700"
              }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
