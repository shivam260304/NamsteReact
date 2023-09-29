import React from "react";
import ReactDOM from "react-dom";

/**
 * HEADER
 *  - logo
 *  - nav intems
 * BODY
 *  - Search
 *  - reastaurant container
 *   - reastaurant cards
 *    - image
 *    - star rating
 *    -name of res, delivery time
 * FOOTER
 *  -copyrights
 *  -address
 *  -contacts
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1
        Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
        />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// PROPS(properties) CONCEPT

// CONFLIG DRIVEN UI
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rescontainer">
        <Restaurantcard
          resname = "Shivam Foods"
          cuisines = "burger,North Indian,Asian"
          ratings = "4.4"
        />
        <Restaurantcard
          resname = "kfc"
          cuisines = "pizza,Non-veg,Western"
          ratings ="4.5"
        />
      </div>
    </div>
  );
};

const Restaurantcard = (props) => {
  const {resname,cuisines,ratings} = props
    return(
        <div className="rescard">
            <img className="img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
            <h3>{resname}</h3>
            <h4>{cuisines}</h4>
            <h4>{ratings}</h4>
        </div>
    );
}
