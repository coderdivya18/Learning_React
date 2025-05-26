import React from 'react';
import CategoryWiseItemList from "./CategoryWiseItemList";

const RestaurantMenuByCategory = ({data, isOpen, setShowIndex}) => {
    const handleClick = (e) => {
        setShowIndex();
    }
    return (
        <div className="border-b">
            <button
                className="w-full text-left flex justify-between items-center py-4 font-semibold text-xl focus:outline-none"
                onClick={handleClick}
            >
                <span>{data?.title} ({data?.itemCards?.length})</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            {isOpen && <div className="pb-4">
                <CategoryWiseItemList itemCards={data?.itemCards}/>
            </div>}
        </div>
    );
};

export default RestaurantMenuByCategory;