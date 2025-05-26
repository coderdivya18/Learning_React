import RestaurantCard, {PromotedLabelRestCard} from "./RestaurantCard";
import {useContext, useState} from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/Custom Hooks/useOnlineStatus";
import useFetchAllRestaurants from "../utils/Custom Hooks/useFetchAllRestaurants";
import UserContext from "../utils/UserContext";

const Body = () => {
    const listOfRestaurants = useFetchAllRestaurants();
    const [filteredList, setFilteredList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //userContext
    const {loggedInUser, setUsername} = useContext(UserContext);

    //Higher orderComponent
    const RestCardPromoted = PromotedLabelRestCard(RestaurantCard)
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

    if (listOfRestaurants?.length === 0) {
        return <ShimmerRestaurantCard/>;
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-center p-5">
                <h2 className="text-xl font-semibold text-gray-700">Looks like you're offline!</h2>
                <p className="text-gray-500 mt-2">Please check your internet connection and try again.</p>
            </div>
        );
    }

    return (
        <div className="px-5 md:px-10 lg:px-20 font-manrope">
            <div className="my-12 flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                <div className="flex gap-3 flex-wrap">
                    <button
                        onClick={filterTopRatedRestaurant}
                        className="border border-gray-300 rounded px-4 py-2 text-base font-medium hover:bg-gray-100"
                    >
                        Top Rated Restaurants
                    </button>
                    <button
                        onClick={filterVegOnlyRestaurant}
                        className="border border-gray-300 rounded px-4 py-2 text-base font-medium hover:bg-gray-100"
                    >
                        Veg Only
                    </button>
                    <button
                        onClick={() => setFilteredList([])}
                        className="border border-gray-300 rounded px-4 py-2 text-base font-medium hover:bg-gray-100"
                    >
                        Clear Filters
                    </button>
                    <input type="text"
                           className="border border-gray-300 rounded px-4 py-2 text-base font-medium hover:bg-gray-100"
                           placeholder="Enter username"
                           value={loggedInUser}
                           onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((restaurant) =>
                                restaurant?.info?.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            );
                            setFilteredList(filtered);
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-8">
                {(filteredList.length > 0 ? filteredList : listOfRestaurants)?.map((res) => (
                    <Link to={`/restaurants/${res?.info?.id}`} key={res?.info?.id}>
                        <RestaurantCard resData={res}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
