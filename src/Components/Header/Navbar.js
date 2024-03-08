import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import Image from "../Images/Logo.png";
import Button from "../Button/Button";
import "./Navbar.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import AddToCart from "../Context/AddToCart";
import {FaSearch} from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = (props) => {
  // const [searchQuery, setSearchQuery] = useState('');
  const {setViewSignOut, viewSignOut} = useContext(AddToCart);

  useEffect(()=>{
    localStorage.getItem('signup');
  })
  

  const location = useLocation();
  const { showCartHandler, closeCartHandler, cartItems } =
    useContext(AddToCart);
    const {signup,fullName} = useContext(AuthContext);

  const imageStyle = {
    width: "150px",
    height: "50px",
  };
  const notifyStyle = {
    position: 'absolute',
    right: '10px',
    top: '0',
    color: "white",
    fontSize: "10px",
    backgroundColor: "red",
    borderRadius: "100%",
    padding: "5px",
  };
  const basketStyle = {
    cursor: 'not-allowed',
    opacity: '0.6',
    PointerEvent: 'none'
  }
  // const submitSearchQuery = (e) => {
  //     e.preventDefault();
  //     props.searchQueryHandler(searchQuery);
  // }

//   useEffect(() => {
//     localStorage.setItem('isSignedUp', JSON.stringify(isSignedUp));
//     localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
// }, [isSignedUp, isSignedIn]);
  return (
    <div className="navbar">
      <div className="left" onClick={closeCartHandler}>
        <ul>
          <li className="exclude">
            <Link to="/">
              <img src={Image} style={imageStyle} alt="dev" />
            </Link>
          </li>
          <li className="links">
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/shop" activeclassname="active">
              Shop
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/featured" activeclassname="active">
              Featured
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/recommended" activeclassname="active">
              Recommended
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="middle">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={closeCartHandler}
        >
        <FaSearch />
          <input
            type="text"
            placeholder="search product..."
            onChange={(e) => {
              props.searchQueryHandler(e.target.value);
            }}
          />
        </form>
      </div>
        <div className="cart-button" >
          <button 
          onClick={showCartHandler} 
          style={location.pathname === '/signup' || location.pathname === '/signin' ? basketStyle : null}
          disabled={location.pathname === '/signup' || location.pathname === '/signin'}>
            <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
          </button>
          <span style={cartItems.length > 0 ? notifyStyle : null}>
            {cartItems.length > 0 ? cartItems.length : null}
          </span>
        </div>
      <div className="right">
      { !signup && <>
        <Link to="/signup">
          {location.pathname !== '/signup' && (
            <Button
              id="signup"
              onClick={() => {
              }}
            >
              Signup
            </Button>
          )}
        </Link>
        <Link to="/signin">
          {location.pathname !== '/signin' && (
            <Button
              id="signin"
              onClick={() => {
              }}
            >
              Signin
            </Button>
          )}
        </Link> </> }
        { signup &&
        <div className="profilePicture" onClick={()=>{setViewSignOut(!viewSignOut);}}>
        <span>{fullName}</span>
        <CgProfile style={{fontSize: '30px'}} />
        <MdOutlineKeyboardArrowDown style={{fontSize: '25px'}} />
        </div> }
      </div>
    </div>
  );
};

export default Navbar;
