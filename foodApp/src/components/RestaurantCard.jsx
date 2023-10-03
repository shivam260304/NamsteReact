import { CDN_URL } from "../utils/constants";

const Restaurantcard = (props) => {
    const {resname,cuisines,ratings} = props
      return(
          <div className="rescard">
              <img className="img" src={CDN_URL}/>
              <h3>{resname}</h3>
              <h4>{cuisines}</h4>
              <h4>{ratings}</h4>
          </div>
      );
  };

  export default Restaurantcard;