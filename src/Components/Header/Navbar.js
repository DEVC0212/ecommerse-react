import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';
import Image from "../Images/Logo.png";
import Button from '../Button/Button';
import './Navbar.css';
import { useContext,useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import AddToCart from '../Context/AddToCart';

const Navbar = (props) => {
    // const [searchQuery, setSearchQuery] = useState('');
    const {isSignedUp,isSignedIn,signupHandler,signinHandler, showSignupHandler, showSigninHandler} = useContext(AuthContext);
    const {showCartHandler,closeCartHandler,cartItems} = useContext(AddToCart);

    const imageStyle = {
        width: '150px',
        height: '50px'
    };
    const notifyStyle = {
        color: 'white',
        marginLeft: '-15px',
        marginBottom: '20px',
        fontSize: '10px',
        backgroundColor: 'red',
        borderRadius: '100%',
        padding: '5px'
    }
    // const submitSearchQuery = (e) => {
    //     e.preventDefault();
    //     props.searchQueryHandler(searchQuery);
    // }
    return (
        <div className="navbar">
            <div className='left' onClick={closeCartHandler}>
                <ul>
                    <li><Link to="/"><img src={Image} style={imageStyle} alt='' /></Link></li>
                    <li className='links'><NavLink to="/" activeclassname='active'>Home</NavLink></li>
                    <li className='links'><NavLink to="/shop" activeclassname='active'>Shop</NavLink></li>
                    <li className='links'><NavLink to="/featured" activeclassname='active'>Featured</NavLink></li>
                    <li className='links'><NavLink to="/recommended" activeclassname='active'>Recommended</NavLink></li>
                </ul>
            </div>
            <div className='middle'>
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" placeholder='search product...' onChange={(e)=>{props.searchQueryHandler(e.target.value)}} />
            </form>
            <div className='cart-button'>
            <button onClick={showCartHandler}><FontAwesomeIcon icon={faShoppingBasket} className='icon' /></button>
            <span style={cartItems.length > 0 ? notifyStyle : null}>{cartItems.length > 0 ? cartItems.length : null}</span>
            </div>
            </div>
            <div className='right'>
                {/* {!props.signupCheck && <Button text="Sign Up" id="signup" onClick={props.signupfunc} />} */}
                {/* {!props.signinCheck && <Button text="Sign In" id="signin" signinfunc={props.signinfunc} />} */}
                <Link to="/signup">{!isSignedUp && <Button id="signup" onClick={()=>{signupHandler(); showSignupHandler()}}>Signup</Button>}</Link>
                <Link to="/signin">{!isSignedIn && <Button id="signin" onClick={()=>{signinHandler();showSigninHandler()}}>Signin</Button>}</Link>
            </div>
        </div>
    );
};

export default Navbar;
