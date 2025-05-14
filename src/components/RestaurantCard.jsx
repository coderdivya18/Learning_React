//Restaurant Card Component
const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img
          className="restaurant-image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/60984e31-da50-4f8e-ae83-c1eff5f721c5_460379.jpg"
          alt="Burger"
          width="230px"
          height="180px"
        />
      </div>
      <div className="card-content">
        <h2 className="restaurant-name">Burger King</h2>
        <div className="details">
          <span className="rating">⭐ 4.2</span>
          <span className="dot">•</span>
          <span className="time">40–45 mins</span>
        </div>
        <p className="cuisine">Burgers, American</p>
        <p className="location">Madhapur</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
