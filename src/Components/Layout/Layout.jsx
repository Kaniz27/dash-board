import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"}`}>
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-4 pt-20">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
