import {CDN_URL} from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        locality,
        sla,
    } = resData?.info;

    return (
        <div
            className="w-60 rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 font-manrope">
            <div className="w-full h-44 overflow-hidden">
                <img
                    className="object-cover w-full h-full"
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                />
            </div>
            <div className="p-4 space-y-1">
                <h2 className="text-lg font-semibold truncate text-gray-800">{name}</h2>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                    <span>⭐ {avgRating}</span>
                    <span className="text-gray-400">•</span>
                    <span>{sla?.deliveryTime} mins</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
                <p className="text-sm text-gray-600">{costForTwo}</p>
                <p className="text-xs text-gray-400">{locality}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
