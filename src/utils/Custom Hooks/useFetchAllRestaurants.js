import {useEffect, useState} from "react";

const useFetchAllRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    // console.log(resData);
    // let mockResList =
    //     resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    useEffect(() => {
        fetchAllRestaurants()
    }, []);

    const fetchAllRestaurants = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json?.data);
            const restaurants =
                json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(restaurants || []);
        } catch (err) {
            console.log(err);
        }

    };
    return listOfRestaurants
}

export default useFetchAllRestaurants;