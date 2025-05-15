//Restaurant Card Component

import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, locality } =
    resData?.info;

  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img
          className="restaurant-image"
          src={CDN_URL + cloudinaryImageId}
          alt="Burger"
          width="230px"
          height="180px"
        />
      </div>
      <div className="card-content">
        <h2 className="restaurant-name">{name}</h2>
        <div className="details">
          <span className="rating">⭐ {avgRating}</span>
          <span className="dot">•</span>
          <span className="time">{resData?.info?.sla?.deliveryTime} mins</span>
        </div>
        <p className="cuisine">{cuisines.join(", ")}</p>
        <p className="costForTwo">{costForTwo}</p>
        <p className="location">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
