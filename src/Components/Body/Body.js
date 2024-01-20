import './Body.css';
import Image from '../Images/girl.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Body = () => {
    const imageStyle = {
        width : '650px',
        height: '400px'
    }
    const spanEle = <span id='arrow'>&rarr;</span>;
    return (
        <>
            <div className='body'>
                <div className='content'>
                    <h1 id='h1'><span className='see'>See</span> everything with <span className='see'>Clarity</span></h1>
                    <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
                    <Link to='/shop'><Button spanEle={spanEle}>Shop Now</Button></Link>
                </div>
                <div className='image'>
                    <img src={Image} style={imageStyle} />
                </div>
            </div>
        </>
    )
}

export default Body;