import { Link, useLocation } from 'react-router-dom';
import './FeaturedSunglass.css';
import { useContext, useEffect } from 'react';
import AddToCart from '../Context/AddToCart';

const FeaturedSunglass = (props) => {
    const {shopDetailsHandler, setProductDetail} = useContext(AddToCart);
    const location = useLocation();
    // useEffect(() => {
    //     const product = localStorage.getItem("productDetails");
    //     if (product) {
    //       setProductDetail(JSON.parse(product));
    //     }
    //     return () =>{
    //       localStorage.removeItem("productDetails");
    //     }
    // }, [location.pathname]);
    const imageStyle = {
        width: '350px',
        height: '200px'
    }
    return (
        <>
            <Link to={`/shop/product/${props.productName.id}`} style={{textDecoration: 'none'}}><div className='container' onClick={()=>{shopDetailsHandler(props.productName); localStorage.setItem('productDetails',JSON.stringify(props.productName))}}>
                <div className='photo'><img src={props.productName.image} style={imageStyle} /></div>
                <div className='sentence'>
                    <h2 style={{textDecoration: 'none'}}>{props.productName.name}</h2>
                    <i style={{textDecoration: 'none'}}>{props.productName.style}</i>
                </div>
            </div></Link>
        </>
    )
}

export default FeaturedSunglass;