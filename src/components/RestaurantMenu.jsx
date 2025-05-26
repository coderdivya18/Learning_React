import React, {useState} from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/Custom Hooks/useRestaurantMenu";
import RestaurantMenuByCategory from "./RestaurantMenuByCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState();

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
        sla: {deliveryTime},
    } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="max-w-5xl mx-auto px-4 py-6 font-manrope">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <div className="flex items-center text-gray-600 text-sm space-x-2 mb-1">
                <span className="text-pink-600 font-semibold">⭐ {avgRating}</span>
                <span className="text-xl">•</span>
                <span className="text-green-600 font-semibold">{totalRatingsString}</span>
                <span className="text-xl">•</span>
                <span className="text-blue-700 font-semibold">{deliveryTime} mins</span>
            </div>
            <p className="text-gray-600 text-sm font-semibold">{cuisines.join(", ")}</p>
            <p className="text-gray-500 text-sm font-semibold mb-6">{costForTwoMessage} • {locality}</p>


            {categories?.map((category, index) => (
                    <RestaurantMenuByCategory
                        data={category?.card?.card}
                        isOpen={index === showIndex}
                        setShowIndex={() => setShowIndex(index)}
                        key={index}
                    />
                )
            )}

        </div>
    )
};

export default RestaurantMenu
