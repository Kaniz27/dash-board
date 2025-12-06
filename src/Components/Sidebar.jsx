import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  FaTachometerAlt,
  FaPhoneAlt,
  FaRobot,
  FaUsers,
  FaFileInvoice,
  FaComments,
  FaImage,
  FaCalendarAlt,
  FaSignOutAlt,
  FaBars,
  FaWallet,
  FaUserCircle,
  FaClipboardList,
  FaTruck,
  FaMoneyBillAlt,
} from "react-icons/fa";
import Logo from "../assets/FL_Logo1.png";

export default function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  const sections = [
    {
      title: "Dashboard",
      items: [
        {
          name: "Dashboard",
          icon: <FaTachometerAlt />,
          path: "/dashboard",
          children: [
            { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard/main" },
          ],
        },
      ],
    },
    {
      title: "Number",
      items: [
        {
          name: "Number",
          icon: <FaPhoneAlt />,
          path: "/number",
          children: [
            { name: "Active Number", icon: <FaPhoneAlt />, path: "/number/active" },
            { name: "By Number", icon: <FaPhoneAlt />, path: "/number/by" },
            { name: "SIP Registration", icon: <FaClipboardList />, path: "/number/sip" },
            { name: "Call Generation", icon: <FaPhoneAlt />, path: "/number/call" },
          ],
        },
      ],
    },
    {
      title: "AI Agent",
      items: [
        {
          name: "AI Agent",
          icon: <FaRobot />,
          path: "/aiagent",
          children: [
            { name: "Voice Library", icon: <FaComments />, path: "/aiagent/voice-library" },
            { name: "Create Agent", icon: <FaRobot />, path: "/aiagent/create" },
            { name: "UnPublished Agent", icon: <FaRobot />, path: "/aiagent/unpublished" },
            { name: "Published Agent", icon: <FaRobot />, path: "/aiagent/published" },
            { name: "System Trained", icon: <FaRobot />, path: "/aiagent/system-trained" },
          ],
        },
      ],
    },
    {
      title: "Social Media",
      items: [
        {
          name: "Social Media",
          icon: <FaUsers />,
          path: "/socialmedia",
          children: [
            {
              name: "Post Generation",
              icon: <FaImage />,
              path: "/socialmedia/post",
              children: [
                { name: "Create", icon: <FaImage />, path: "/socialmedia/post/create" },
                { name: "Image", icon: <FaImage />, path: "/socialmedia/post/image" },
                { name: "Keyword", icon: <FaClipboardList />, path: "/socialmedia/post/keyword" },
                { name: "Schedule Post", icon: <FaCalendarAlt />, path: "/socialmedia/post/schedule" },
              ],
            },
            { name: "Add Social Media", icon: <FaUsers />, path: "/socialmedia/add" },
            { name: "Chat Bot", icon: <FaRobot />, path: "/socialmedia/chatbot" },
            { name: "Comments", icon: <FaComments />, path: "/socialmedia/comments" },
            { name: "Call Generation", icon: <FaPhoneAlt />, path: "/socialmedia/call" },
          ],
        },
      ],
    },
    {
      title: "Order Management",
      items: [
        {
          name: "Order Management",
          icon: <FaClipboardList />,
          path: "/orders",
          children: [
            { name: "Order List", icon: <FaClipboardList />, path: "/orders/list" },
            { name: "Confirm Order", icon: <FaClipboardList />, path: "/orders/confirm" },
            { name: "Reject/Cancel Order", icon: <FaClipboardList />, path: "/orders/reject" },
          ],
        },
      ],
    },
    {
      title: "Courier Service",
      items: [
        {
          name: "Courier Service",
          icon: <FaTruck />,
          path: "/courier",
          children: [
            { name: "Courier List", icon: <FaTruck />, path: "/courier/list" },
            { name: "Booking List", icon: <FaTruck />, path: "/courier/booking" },
            { name: "Tracking", icon: <FaTruck />, path: "/courier/tracking" },
            { name: "Refund List", icon: <FaMoneyBillAlt />, path: "/courier/refund" },
          ],
        },
      ],
    },
    {
      title: "Payment",
      items: [
        {
          name: "Payment",
          icon: <FaWallet />,
          path: "/payment",
          children: [
            { name: "Bill", icon: <FaWallet />, path: "/payment/bill" },
            { name: "Creating Voice", icon: <FaComments />, path: "/payment/voice" },
            { name: "Topup/Recharge", icon: <FaMoneyBillAlt />, path: "/payment/topup" },
            { name: "Transaction History", icon: <FaFileInvoice />, path: "/payment/transactions" },
            { name: "Courier History", icon: <FaFileInvoice />, path: "/payment/courier-history" },
          ],
        },
      ],
    },
    {
      title: "Basic Setup",
      items: [
        {
          name: "Basic Setup",
          icon: <FaUserCircle />,
          path: "/setup",
          children: [
            { name: "Profile", icon: <FaUserCircle />, path: "/setup/profile" },
            { name: "User Management", icon: <FaUsers />, path: "/setup/users" },
          ],
        },
      ],
    },
  ];

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.name}>
        <div
          onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
          className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-100 ${
            active === item.path ? "bg-gray-100" : ""
          }`}
        >
          <span className="text-gray-500">{item.icon}</span>
          <span className="text-gray-500 text-[16px]">{item.name}</span>
          {item.children && <span className="ml-auto">{openMenu === item.name ? "-" : "+"}</span>}
        </div>

        {item.children && openMenu === item.name && (
          <div className="ml-6 flex flex-col">{renderItems(item.children)}</div>
        )}
      </div>
    ));

  return (
    <div
      className={`bg-white shadow-sm h-screen flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-3">
        {!collapsed && <img src={Logo} alt="Logo" className="w-40 h-auto" />}
        <button onClick={toggleCollapsed} className="p-2 rounded hover:bg-gray-200 focus:outline-none">
          <FaBars size={20} className="text-gray-700" />
        </button>
      </div>

      <div className="flex-1 overflow-auto mt-2">
        {!collapsed ? (
          <div className="flex flex-col">
            {sections.map((section) => (
              <div key={section.title}>
                <span className="font-medium text-[14px] text-gray-300 px-3 py-2 mt-2">{section.title}</span>
                {renderItems(section.items)}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-2">
            {sections
              .flatMap((section) => section.items.flatMap((item) => [item, ...(item.children || [])]))
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActive(item.path)}
                  className="p-2 rounded cursor-pointer hover:bg-gray-100"
                  title={item.name}
                >
                  <span className="text-gray-500">{item.icon}</span>
                </Link>
              ))}
          </div>
        )}
      </div>

      <div className="p-3 border-t">
        <Link
          to="/logout"
          className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-100 text-gray-700"
        >
          <FaSignOutAlt />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );
}
