import React from "react";
import Sidebar from "../Sidebar";

const CallGeneration = () => {
  return (
    <div className="flex">

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="ml-64 p-6 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Call Generation
        </h2>

        <div className="bg-white shadow p-4 rounded-lg">
          {/* Your Call Generation content goes here */}
        </div>
      </div>

    </div>
  );
};

export default CallGeneration;
