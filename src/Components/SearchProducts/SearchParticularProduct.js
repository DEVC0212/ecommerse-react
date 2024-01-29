import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './SearchProducts.css';
import { useContext } from 'react';
import AddToCart from '../Context/AddToCart';
const SearchParticularProduct = (props) => {
    const {addToCartHandler,shopDetailsHandler} = useContext(AddToCart);
    const imageStyle = {
        width: '160px',
        height: '90px'
    }
    return(
        <>
            <div className='boxSearch'>
            <Link to='/shop/product' style={{textDecoration: 'none'}}>
            <section onClick={()=>{shopDetailsHandler(props)}}>
            <div className='imageSearch'><img src={props.img} style={imageStyle} /></div>
                <div className='textSearch'>
                    <h2>{props.name}</h2>
                    <i>{props.style}</i>
                </div>
                <div className='priceSearch'>
                    <h3>${props.price}.00</h3>
                </div>
            </section>
            </Link>
                <div className='basketSearch'>
                    <p><Button onClick={()=>{addToCartHandler(props)}}>Add to basket</Button></p>
                </div>
            </div>
        </>
    )
}

export default SearchParticularProduct;