const ShimmerRestaurantCard = () => {
    return (
        <div
            className="restaurant-card bg-white rounded-lg shadow-md p-4 max-w-sm w-full animate-pulse flex space-x-4 mt-3">
            <div className="shimmer-image bg-gray-300 rounded-md w-56 h-44"/>
            <div className="card-content flex flex-col flex-1 space-y-2 py-1">
                <div className="shimmer-title bg-gray-300 rounded h-6 w-3/4"/>
                <div className="shimmer-subtitle bg-gray-300 rounded h-4 w-1/2"/>
                <div className="shimmer-text bg-gray-300 rounded h-4 w-full"/>
                <div className="shimmer-text short bg-gray-300 rounded h-4 w-1/2"/>
                <div className="shimmer-location bg-gray-300 rounded h-4 w-1/3"/>
            </div>
        </div>
    );
};

export default ShimmerRestaurantCard;
