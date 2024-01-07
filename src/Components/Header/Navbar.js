import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Image from "../Images/Logo.png";
import Button from '../Button/Button';
import './Navbar.css';

const Navbar = (props) => {
    const imageStyle = {
        width: '150px',
        height: '50px'
    };

    return (
        <div className="navbar">
            <div className='left'>
                <ul>
                    <li><Link to="/"><img src={Image} style={imageStyle} alt='' /></Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><a href="/">Featured</a></li>
                    <li><a href="/">Recommended</a></li>
                </ul>
            </div>
            <div className='middle'>
                <input type="text" placeholder='search product...' />
                <a href="/"><FontAwesomeIcon icon={faShoppingBasket} className='icon' /></a>
            </div>
            <div className='right'>
                {!props.signupCheck && <Button text="Sign Up" id="signup" signupfunc={props.signupfunc} />}
                {!props.signinCheck && <Button text="Sign In" id="signin" signinfunc={props.signinfunc} />}
            </div>
        </div>
    );
};

export default Navbar;
