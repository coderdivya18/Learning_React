import RestaurantCard from "./RestaurantCard";

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <button>Search</button>
      </div>
      <div className="restaurants-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
