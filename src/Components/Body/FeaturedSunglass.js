import { Link } from 'react-router-dom';
import './FeaturedSunglass.css';
import { useContext } from 'react';
import AddToCart from '../Context/AddToCart';

const FeaturedSunglass = (props) => {
    const {shopDetailsHandler} = useContext(AddToCart);
    const imageStyle = {
        width: '350px',
        height: '200px'
    }
    return (
        <>
            <Link to='/shop/product' style={{textDecoration: 'none'}}><div className='container' onClick={()=>{shopDetailsHandler(props.productName)}}>
                <div className='photo'><img src={props.img} style={imageStyle} /></div>
                <div className='sentence'>
                    <h2>{props.productName.name}</h2>
                    <i>{props.productName.style}</i>
                </div>
            </div></Link>
        </>
    )
}

export default FeaturedSunglass;