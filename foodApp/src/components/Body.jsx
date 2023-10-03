import Restaurantcard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filterButton">Top Rated Restaurants</button>
      </div>
      <div className="rescontainer">
        <Restaurantcard
          resname="Shivam Foods"
          cuisines="burger,North Indian,Asian"
          ratings="4.9"
        />
        <Restaurantcard
          resname="kfc"
          cuisines="pizza,Non-veg,Western"
          ratings="4.5"
        />
        <Restaurantcard
          resname="kannur fod Point"
          cuisines="kerela,chinese"
          ratings="3.8"
        />
        <Restaurantcard
          resname="Megna Foods"
          cuisines="Biryani,seafood"
          ratings="4.4"
        />
        <Restaurantcard
          resname="Call Me Chow"
          cuisines="Chinese,Pan-Asian"
          ratings="4.3"
        />
        <Restaurantcard
          resname="Roti Wala"
          cuisines="Home Food, North Indian"
          ratings="4.1"
        />
        <Restaurantcard
          resname="Real Pepprica"
          cuisines="Gujarati&Punjabi Thali"
          ratings="4.7"
        />
      </div>
    </div>
  );
};

export default Body;
