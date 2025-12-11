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
  FaChartLine,
  FaCreditCard,
  FaArrowUp,
} from "react-icons/fa";

export default function Dashboard() {
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
            { name: "Dashboard Home", icon: <FaTachometerAlt />, path: "/dashboard/main" },
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
             { name: "Create Agent", icon: <FaRobot />, path: "/aiagent/create" },
            { name: "Voice Library", icon: <FaComments />, path: "/aiagent/voice-library" },
           
            { name: "UnPublished Agent", icon: <FaRobot />, path: "/aiagent/unpublished" },
            { name: "Published Agent", icon: <FaRobot />, path: "/aiagent/published" },
            { name: "System Trained", icon: <FaRobot />, path: "/aiagent/system-trained" },
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
            { name: "Buy Number", icon: <FaPhoneAlt />, path: "/number/buy" },
            { name: "SIP Registration", icon: <FaClipboardList />, path: "/number/sip" },
            { name: "Call Generation", icon: <FaPhoneAlt />, path: "/number/call" },
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
              name: "Add Social Media",
              icon: <FaImage />,
              path: "/socialmedia/add",
              children: [
                { name: "Create", icon: <FaImage />, path: "/socialmedia/post/create" },
                { name: "Image", icon: <FaImage />, path: "/socialmedia/post/image" },
                { name: "Keyword", icon: <FaClipboardList />, path: "/socialmedia/post/keyword" },
                { name: "Schedule Post", icon: <FaCalendarAlt />, path: "/socialmedia/post/schedule" },
              ],
            },
            { name: "Post Generation", icon: <FaUsers />, path: "/socialmedia/post" },
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
            { name: "Booking List", icon: <FaTruck />, path: "/courier/:courierId/bookings" },
            { name: "Tracking", icon: <FaTruck />, path: "/courier/tracking" },
            { name: "Refund List", icon: <FaMoneyBillAlt />, path: "/courier/refund" },
          ],
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          name: "Account",
          icon: <FaChartLine />,
          path: "/account",
          children: [
            { name: "Income", icon: <FaArrowUp />, path: "/account/income" },
            { name: "Sells", icon: <FaClipboardList />, path: "/account/sells" },
            { name: "Refund", icon: <FaMoneyBillAlt />, path: "/account/refund" },
            { name: "Payment", icon: <FaWallet />, path: "/account/payment" },
            { name: "Debit Credit", icon: <FaCreditCard />, path: "/account/debit-credit" },
            { name: "Profit & Loss", icon: <FaChartLine />, path: "/account/profit-loss" },
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
            { name: "Create InVoice", icon: <FaComments />, path: "/payment/voice" },
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
            { name: "Create User", icon: <FaUserCircle />, path: "/setup/createuser" },
            { name: "User Management", icon: <FaUsers />, path: "/setup/users" },
          ],
        },
      ],
    },
  ];

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.name}>
        <div className="flex items-center">
          <Link
            to={item.path}
            onClick={() => setActive(item.path)}
            className={`flex items-center gap-3  p-2 rounded cursor-pointer w-full 
              hover:bg-gray-100 hover:text-[#01cdcc]
              ${active === item.path ? "bg-gray-100 text-[#01cdcc]" : "text-gray-600"}`}
          >
            <span className={`${active === item.path ? "text-[#01cdcc]" : "text-gray-500"} group-hover:text-[#01cdcc]`}>
              {item.icon}
            </span>
            <span className={`text-[16px] ${active === item.path ? "text-[#01cdcc]" : "text-gray-600"}`}>
              {item.name}
            </span>
          </Link>

          {item.children && (
            <button
              onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
              className="px-2 text-gray-600 hover:text-[#01cdcc]"
            >
              {openMenu === item.name ? "-" : "+"}
            </button>
          )}
        </div>

        {item.children && openMenu === item.name && (
          <div className="ml-6">{renderItems(item.children)}</div>
        )}
      </div>
    ));

  return (
    <div className="flex">
  {/* Sidebar */}
  <div
    className={`bg-white shadow-sm flex flex-col transition-all duration-300 fixed top-16 ${
      collapsed ? "w-20" : "w-64"
    } h-[calc(100vh-4rem)]`}
  >
    {/* Collapse Toggle */}
    <div className="flex items-center justify-end p-2">
      <button onClick={toggleCollapsed} className="p-2 rounded hover:bg-gray-200">
        <FaBars size={20} className="text-gray-700" />
      </button>
    </div>

    {/* Menu Items */}
    <div className="flex-1 flex flex-col overflow-auto px-2 mb-3">
      {!collapsed
        ? sections.map((section) => (
            <div key={section.title} className="mb-3">
              <span className="font-medium text-[14px] text-gray-300 px-2">
                {section.title}
              </span>
              {renderItems(section.items)}
            </div>
          ))
        : sections
            .flatMap((s) => s.items.flatMap((i) => [i, ...(i.children || [])]))
            .map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className="p-2 hover:bg-gray-100 rounded hover:text-[#01cdcc] flex justify-center"
                title={item.name}
              >
                {item.icon}
              </Link>
            ))}
    </div>

    {/* Logout at Bottom */}
    <div className="p-3 border-t flex-shrink-0 mt-auto">
      <Link
        to="/logout"
        className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 hover:text-[#01cdcc]"
      >
        <FaSignOutAlt size={18} />
        {!collapsed && <span>Logout</span>}
      </Link>
    </div>
  </div>
</div>

  );
}
