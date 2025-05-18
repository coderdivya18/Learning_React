import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockResListData.json";
import {useEffect, useState} from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const Body = () => {
    let mockResList =
        resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    const [listOfRestaurants, setListOfRestaurants] = useState(mockResList || []);
    const [filteredList, setFilteredList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    console.log(listOfRestaurants);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            const restaurants =
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(restaurants || []);
        } catch (err) {
            console.log(err);
        }

    };

    const filterTopRatedRestaurant = () => {
        const filtered = listOfRestaurants.filter(
            (res) => parseFloat(res?.info?.avgRating) > 4
        );
        setFilteredList(filtered);
    };

    const filterVegOnlyRestaurant = () => {
        const filtered = listOfRestaurants.filter(
            (res) => res?.info?.veg === true
        );
        setFilteredList(filtered);
    };

    //conditional rendering
    if (listOfRestaurants.length === 0) {
        return <ShimmerRestaurantCard/>;
    }

    return (
        <div className="body">
            <div className="features-container">
                <div className="filters">
                    <button className="filter-btn" onClick={filterTopRatedRestaurant}>
                        Top Rated Restaurants
                    </button>
                    <button className="veg-only-btn" onClick={filterVegOnlyRestaurant}>
                        Veg Only
                    </button>
                    <button onClick={() => setFilteredList([])}>Clear Filters</button>
                </div>

                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-bar" value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button onClick={() => {
                        const filteredRestBySearchTerm = listOfRestaurants.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchTerm.toLowerCase()));
                        setFilteredList(filteredRestBySearchTerm);
                    }}>Search
                    </button>
                </div>
            </div>

            <div className="restaurants-container">
                {(filteredList.length > 0 ? filteredList : listOfRestaurants)?.map((res) => (
                    <RestaurantCard resData={res} key={res?.info?.id}/>
                ))}
            </div>
        </div>
    );
};

export default Body;
