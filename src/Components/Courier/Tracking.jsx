import React from 'react';
import Sidebar from '../Sidebar'; // <-- Sidebar Import

const Tracking = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-4">Tracking</h2>
                
                {/* Your page content here */}
            </div>
        </div>
    );
};

export default Tracking;
