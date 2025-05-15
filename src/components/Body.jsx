import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockResListData.json";
import { useState } from "react";

//Body Component
const Body = () => {
  let resList =
    resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log(listOfRestaurants);

  const filterTopRatedRestaurant = (e) => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4,
    );
    setFilteredRestaurant(filteredList);
    console.log(filteredList);
  };

  return (
    <div className="body">
      <div className="features-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={(e) => filterTopRatedRestaurant}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <button>Search</button>
        </div>
      </div>

      <div className="restaurants-container">
        {listOfRestaurants?.map((res) => {
          return <RestaurantCard resData={res} key={res.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
