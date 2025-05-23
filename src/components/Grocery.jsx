import React from 'react';

const Grocery = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50 font-manrope">
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Grocery Page
                </h2>
                <p className="text-gray-600 text-lg">
                    This page demonstrates the lazy loading mechanism.
                </p>
            </div>
        </div>
    );
};

export default Grocery;
