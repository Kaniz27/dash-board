import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  FaTachometerAlt,
  FaPhoneAlt,
  FaRobot,
  FaUsers,
  FaFileInvoice,
  FaCalendarAlt,
  FaComments,
  FaEnvelope,
  FaShoppingCart,
  FaHospital,
  FaPlusCircle,
  FaImage,
  FaKey,
  FaRegCalendarAlt,
  FaCommentDots
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
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
      ],
    },
    {
      title: "Number",
      items: [
        { name: "Active Number", icon: <FaPhoneAlt />, path: "/activenumber" },
        { name: "By Number", icon: <FaPhoneAlt />, path: "/bynumber" },
        { name: "SIP Registration", icon: <FaPhoneAlt />, path: "/sipregistration" },
        { name: "Call Generation", icon: <FaPhoneAlt />, path: "/call" },
      ],
    },
    {
      title: "AI Agent",
      items: [
        { name: "Voice Library", icon: <FaRobot />, path: "/voicelibrary" },
        { name: "Create Agent", icon: <FaRobot />, path: "/createagent" },
        { name: "UnPublished Agent", icon: <FaRobot />, path: "/unpublishedagent" },
        { name: "Published Agent", icon: <FaRobot />, path: "/publishedagent" },
        { name: "System Trained", icon: <FaRobot />, path: "/systemtrainded" },
      ],
    },
    {
      title: "Social Media",
      items: [
        {
          name: "Post Generation",
          icon: <FaPlusCircle />,
          path: "/post",
          children: [
            { name: "Create", icon: <FaPlusCircle />, path: "/post/create" },
            { name: "Image", icon: <FaImage />, path: "/post/image" },
            { name: "Keyword", icon: <FaKey />, path: "/post/keyword" },
            { name: "Schedule Post", icon: <FaRegCalendarAlt />, path: "/post/schedule" },
          ],
          collapsible: true, 
        },
        { name: "Add Social Media", icon: <FaUsers />, path: "/socialmedia", children: [], collapsible: false },
        { name: "Chat Bot", icon: <FaRobot />, path: "/chatbot", children: [], collapsible: false },
        { name: "Comments", icon: <FaCommentDots />, path: "/comments", children: [], collapsible: false },
        { name: "Call Generation", icon: <FaPhoneAlt />, path: "/callsm", children: [], collapsible: false },
      ],
    },
    {
      title: "Apps",
      items: [
        { name: "Ecommerce", icon: <FaShoppingCart />, path: "/ecommerce", children: [], collapsible: false },
        { name: "Hospital", icon: <FaHospital />, path: "/hospital", children: [], collapsible: false },
        { name: "CRM", icon: <FaUsers />, path: "/crm", children: [], collapsible: false },
        { name: "Invoice", icon: <FaFileInvoice />, path: "/invoice", children: [], collapsible: false },
      ],
    },
  ];

  return (
    <div
      className={`bg-white shadow-sm h-screen flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Hamburger & Logo */}
      <div className="flex items-center justify-between p-3">
        {!collapsed && <img src={Logo} alt="Logo" className="w-40 h-auto" />}
        <button onClick={toggleCollapsed}>
          <FaShoppingCart size={20} className="text-gray-300" />
        </button>
      </div>

      <div className="flex-1 overflow-auto mt-2">
        {!collapsed ? (
          <div className="flex flex-col">
            {sections.map((section) => (
              <div key={section.title}>
                <span className="font-medium text-gray-400 px-3 py-2 mt-2">{section.title}</span>
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div
                      onClick={() => item.collapsible ? setOpenMenu(openMenu === item.name ? null : item.name) : setActive(item.path)}
                      className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-[#f6f2f9] ${
                        active === item.path ? "bg-[#f6f2f9]" : ""
                      }`}
                    >
                      <span className="text-gray-500">{item.icon}</span>
                      <span className="text-gray-500">{item.name}</span>
                      {item.collapsible && <span className="ml-auto">{openMenu === item.name ? "-" : "+"}</span>}
                    </div>

                    {/* Children */}
                    {item.children && (!item.collapsible || openMenu === item.name) && (
                      <div className="ml-6 flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={() => setActive(child.path)}
                            className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-[#f6f2f9] ${
                              active === child.path ? "bg-[#f6f2f9]" : ""
                            }`}
                          >
                            <span className="text-gray-500">{child.icon}</span>
                            <span className="text-gray-500">{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-2">
            {sections.flatMap(section =>
              section.items.flatMap(item => [item, ...(item.children || [])])
            ).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActive(item.path)}
                className="p-2 rounded cursor-pointer hover:bg-[#f6f2f9]"
                title={item.name}
              >
                <span className="text-gray-500">{item.icon}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
