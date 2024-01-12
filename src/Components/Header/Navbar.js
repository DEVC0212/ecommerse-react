import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {NavLink,Link} from 'react-router-dom';
import Image from "../Images/Logo.png";
import Button from '../Button/Button';
import './Navbar.css';
import { useState } from 'react';

const Navbar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const imageStyle = {
        width: '150px',
        height: '50px'
    };
    const submitSearchQuery = (e) => {
        e.preventDefault();
        props.searchQueryHandler(searchQuery);
    }
    return (
        <div className="navbar">
            <div className='left'>
                <ul>
                    <li><Link to="/"><img src={Image} style={imageStyle} alt='' /></Link></li>
                    <li><NavLink to="/" activeclassname="activeLink">Home</NavLink></li>
                    <li><NavLink to="/shop" activeclassname="activeLink">Shop</NavLink></li>
                    <li><NavLink to="/featured" activeclassname="activeLink">Featured</NavLink></li>
                    <li><NavLink to="/recommended" activeclassname="activeLink">Recommended</NavLink></li>
                </ul>
            </div>
            <div className='middle'>
            <form onSubmit={submitSearchQuery}>
            <input type="text" placeholder='search product...' onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} />
                <a href="/"><FontAwesomeIcon icon={faShoppingBasket} className='icon' /></a>
            </form>
            </div>
            <div className='right'>
                {!props.signupCheck && <Button text="Sign Up" id="signup" signupfunc={props.signupfunc} />}
                {!props.signinCheck && <Button text="Sign In" id="signin" signinfunc={props.signinfunc} />}
            </div>
        </div>
    );
};

export default Navbar;
