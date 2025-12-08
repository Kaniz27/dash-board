import React, { useState } from "react";
import { useNavigate } from "react-router"; 
import Sidebar from "../Sidebar";

const UnPublished = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); 

  const handleCreateAgent = () => {
    navigate("/aiagent/create"); 
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
    
      <Sidebar collapsed={collapsed} />

     
      <div className={`flex-1 text-center p-6 transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"}`}>
        <h1 className="text-2xl font-bold mb-6">Unpublished Agent List</h1>

        <div className="flex flex-col items-center justify-center mt-20">
         
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No agents"
            className="w-32 h-32 mb-4 text-[#01cdcc]"
          />

          
          <p className="text-gray-500 text-lg mb-6">No agents found for</p>

        
          <button
            onClick={handleCreateAgent}
            className="px-6 py-2 bg-[#01cdcc] text-white rounded-lg hover:bg-[#006766] transition"
          >
            Create Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnPublished;
