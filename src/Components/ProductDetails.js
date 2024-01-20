import { Link } from 'react-router-dom';
// import Image from './Images/img1.png';
import './ProductDetails.css';
const ProductDetails = (props) => {
    return (
        <>
        <Link to='/shop'><div className='back' onClick={props.onClick}>&larr;Back to Shop</div></Link>
            <div className="product-detail">
                <div className="left">
                    <div className="imageDetail"><img src={props.product.image} /></div>
                </div>
                <div className="middle"><img src={props.product.image} /></div>
                <div className="right">
                    <span>{props.product.style}</span>
                    <h1>{props.product.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.</p>
                    <hr />
                    <span id='lens'>Lens Width and Frame Size</span>
                    <div className='select'>
                    <select>
                        <option>--Select Size--</option>
                        <option>36mm</option>
                        <option>28mm</option>
                        <option>26mm</option>
                    </select>
                    </div>
                    <span id='color'>Choose a color</span>
                    <div className='colors'>
                        <div id='div1'></div>
                        <div id='div2'></div>
                        <div id='div3'></div>
                        <div id='div4'></div>
                        <div id='div5'></div>
                    </div>
                    <h1 id='price'>${props.product.price}.00</h1>
                    <button id='shopdetail' onClick={()=>{props.addToCartHandler(props.product)}}>Add to Basket</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;