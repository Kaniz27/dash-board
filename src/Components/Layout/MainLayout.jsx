// src/Layouts/MainLayout.jsx
import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header"; // যদি থাকে

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
