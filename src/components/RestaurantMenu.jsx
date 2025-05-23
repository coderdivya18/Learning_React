import React from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/Custom Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <ShimmerRestaurantCard/>;
    }

    const {
        name,
        cuisines,
        avgRating,
        costForTwoMessage,
        locality,
        totalRatingsString,
    } = resInfo?.cards[2]?.card?.card?.info;

    const {deliveryTime} = resInfo?.cards[2]?.card?.card?.info?.sla;
    const {itemCards} =
        resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="max-w-5xl mx-auto px-4 py-6 font-manrope">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <div className="flex items-center text-gray-600 text-sm space-x-2 mb-1">
                <span>⭐ {avgRating}</span>
                <span className="text-xl">•</span>
                <span>{totalRatingsString}</span>
                <span className="text-xl">•</span>
                <span>{deliveryTime} mins</span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{cuisines.join(", ")}</p>
            <p className="text-gray-500 text-sm mb-1">{costForTwoMessage}</p>
            <p className="text-gray-400 text-sm mb-6">{locality}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 border-b pb-2">Menu</h2>
            {itemCards?.map((item) => (
                <div
                    className="flex flex-col md:flex-row items-start justify-between border-b py-4"
                    key={item?.card?.info?.id}
                >
                    <div className="flex-1 pr-4">
                        <h3 className="text-lg font-medium">{item?.card?.info?.name}</h3>
                        <div className="text-sm text-gray-600 flex gap-2 items-center mt-1">
                            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                                <span
                                    className="text-orange-500">★ {item?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                            )}
                            {item?.card?.info?.ratings?.aggregatedRating?.rating?.ratingCountV2 && (
                                <span
                                    className="text-orange-700">({item?.card?.info?.ratings?.aggregatedRating?.rating?.ratingCountV2})</span>
                            )}
                            <span className="font-semibold text-green-600">
                                ₹{item?.card?.info?.price / 100}
                            </span>
                        </div>
                        {item?.card?.info?.description && (
                            <p className="text-sm text-gray-500 mt-2">
                                {item?.card?.info?.description}
                            </p>
                        )}
                    </div>
                    <div className="relative mt-4 md:mt-0 w-32 h-28">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                            alt="menu item"
                            className="w-full h-full object-cover rounded-md shadow"
                        />
                        <button
                            className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-white border border-gray-300 text-sm px-4 py-1 rounded shadow hover:bg-gray-100">
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;
