import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';
import Image from "../Images/Logo.png";
import Button from '../Button/Button';
import './Navbar.css';
import { useContext,useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Navbar = (props) => {
    // const [searchQuery, setSearchQuery] = useState('');
    const {isSignedUp,isSignedIn,signupHandler,signinHandler} = useContext(AuthContext);
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
            <div className='left' onClick={props.on}>
                <ul>
                    <li><Link to="/"><img src={Image} style={imageStyle} alt='' /></Link></li>
                    <li className='links'><NavLink to="/" activeClassName='active'>Home</NavLink></li>
                    <li className='links'><NavLink to="/shop" activeClassName='active'>Shop</NavLink></li>
                    <li className='links'><NavLink to="/featured" activeClassName='active'>Featured</NavLink></li>
                    <li className='links'><NavLink to="/recommended" activeClassName='active'>Recommended</NavLink></li>
                </ul>
            </div>
            <div className='middle'>
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" placeholder='search product...' onChange={(e)=>{props.searchQueryHandler(e.target.value)}} />
            </form>
            <div className='cart-button'>
            <button onClick={props.onOpen}><FontAwesomeIcon icon={faShoppingBasket} className='icon' /></button>
            <span style={props.cartItems.length > 0 ? notifyStyle : null}>{props.cartItems.length > 0 ? props.cartItems.length : null}</span>
            </div>
            </div>
            <div className='right'>
                {/* {!props.signupCheck && <Button text="Sign Up" id="signup" onClick={props.signupfunc} />} */}
                {/* {!props.signinCheck && <Button text="Sign In" id="signin" signinfunc={props.signinfunc} />} */}
                <Link to="/signup">{!isSignedUp && <Button id="signup" onClick={signupHandler}>Signup</Button>}</Link>
                <Link to="/signin">{!isSignedIn && <Button id="signin" onClick={signinHandler}>Signin</Button>}</Link>
            </div>
        </div>
    );
};

export default Navbar;
