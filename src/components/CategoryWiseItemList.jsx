import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "../utils/redux/slices/cartSlice";

const CategoryWiseItemList = ({itemCards}) => {
    //console.log(itemCards);

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }
    return (
        <div className="mb-8">
            {itemCards?.map((item) => {
                const info = item.card.info;
                return (
                    <div
                        key={info.id}
                        className="flex flex-col md:flex-row items-start justify-between border-b py-4 gap-4 my-3"
                    >
                        <div className="flex-1">

                            <h3 className="text-base font-semibold">{info.name}</h3>
                            <div className="text-sm text-green-500 mt-1 font-semibold">
                                {info?.ratings?.aggregatedRating?.rating ?
                                    (<span
                                        className="text-pink-600 font-semibold mr-2">⭐ {info?.ratings?.aggregatedRating?.rating}{" "}
                                        ({info?.ratings?.aggregatedRating?.ratingCountV2})</span>) : ""}
                                <span>₹{(info?.price || info?.defaultPrice) / 100}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                {info.description}
                            </p>
                        </div>

                        {info.imageId && (
                            <div className="relative w-32 h-28 shrink-0">
                                <img
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info.imageId}`}
                                    alt={info.name}
                                    className="w-full h-full object-cover rounded-md shadow"
                                />
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white border text-sm font-bold border-gray-300 px-4 py-1 rounded shadow hover:bg-gray-100 text-green-800">
                                    ADD
                                </button>
                                {/*<p className="text-xs text-center text-gray-400 mt-6">Customisable</p>*/}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>


    );
};

export default CategoryWiseItemList;