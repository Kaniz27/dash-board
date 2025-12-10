import React from 'react';
import Sidebar from '../Sidebar'; // <-- Sidebar import (path ঠিক থাকলে)

const Refund = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-4">Refund</h2>

                {/* Your refund content here */}
            </div>
        </div>
    );
};

export default Refund;
