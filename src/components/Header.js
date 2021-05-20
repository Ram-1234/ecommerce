import React from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        {/* <img
          className="header__logo"
           src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
           src="https://s3images.coroflot.com/user_files/individual_files/large_1034266_a6053hjeuro6eezybm3mmlckh.jpg"
        /> */}
       <h1 className="header__logo" style={{textDecoration:"none"}}>{`ECOMM...`}</h1>
      </Link>

      <div className="header__search">
        {/* <input className="header__searchInput" type="text" /> */}
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>

      <div className="header__nav">
        <Link to='/login' className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">{!user? "Guest" : user.email}</span>
            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
          </Link>

          {/* <div className="header__nav">
            <Link to='/signup' className="header__link">
              <span className="header__signup">Signup</span>
            </Link>
          </div> */}
    

        <Link to="/checkout">
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;