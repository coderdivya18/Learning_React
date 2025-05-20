import React, {useEffect, useState} from 'react';
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import {useParams} from "react-router-dom";
import {MENU_API} from "../utils/constants";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        setResInfo(json?.data)
    }

    console.log(resInfo);

    if (resInfo === null) {
        return <ShimmerRestaurantCard/>
    }

    const {
        name,
        cuisines,
        avgRating,
        costForTwoMessage,
        locality,
        totalRatingsString
    } = resInfo?.cards[2]?.card?.card?.info;

    const {deliveryTime} = resInfo?.cards[2]?.card?.card?.info?.sla;
    const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="restaurant-menu">
            <h1 className="rest-name">{name}</h1>
            <div className="details">
                <span className="rating">⭐{avgRating}</span>
                <span className="dot">•</span>
                <span className="count">{totalRatingsString}</span>
                <span className="dot">•</span>
                <span className="time">{deliveryTime} mins</span>
            </div>
            <p className="cuisine">{cuisines.join(", ")}</p>
            <p className="costForTwo">{costForTwoMessage}</p>
            <p className="location">{locality}</p>


            <h2 className="menu-heading">Menu</h2>
            {itemCards?.map((item) => (

                <div className="menu-item" key={item?.card?.info?.id}>
                    <div className="menu-details">
                        {/*<div className="menu-tags">*/}
                        {/*    <span className="bestseller">★ Bestseller</span>*/}
                        {/*</div>*/}

                        <h3 className="item-name">{item?.card?.info?.name}</h3>
                        <div className="price">
                            {item?.card?.info?.ratings?.aggregatedRating?.rating ?
                                (<span
                                    className="rating">★ {item?.card?.info?.ratings?.aggregatedRating?.rating}</span>) : null}

                            <span
                                className="count">{item?.card?.info?.ratings?.aggregatedRating?.rating?.ratingCountV2}</span>
                            <span className="original-price">₹{item?.card?.info?.price / 100}</span>
                        </div>

                        <p className="item-description">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="menu-image-section">
                        <img src={item?.card?.info?.imageId} alt="menu-item image" className="menu-img"/>
                        <button className="add-button">ADD</button>
                        <div className="customisable">Customisable</div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default RestaurantMenu;
