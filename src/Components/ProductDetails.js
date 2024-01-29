import { Link } from 'react-router-dom';
// import Image from './Images/img1.png';
import './ProductDetails.css';
import { useContext } from 'react';
import AddToCart from './Context/AddToCart';
const ProductDetails = () => {
    const {addToCartHandler,productDetail} = useContext(AddToCart);
    return (
        <>
        <Link to='/shop'><div className='backDetail'>&larr;Back to Shop</div></Link>
            <div className="product-detail">
                <div className="leftDetail">
                    <div className="imageDetail"><img src={productDetail.image} /></div>
                </div>
                <div className="middleDetail"><img src={productDetail.image} /></div>
                <div className="rightDetail">
                    <span>{productDetail.style}</span>
                    <h1>{productDetail.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.</p>
                    <hr />
                    <span id='lensDetail'>Lens Width and Frame Size</span>
                    <div className='selectDetail'>
                    <select>
                        <option>--Select Size--</option>
                        <option>36mm</option>
                        <option>28mm</option>
                        <option>26mm</option>
                    </select>
                    </div>
                    <span id='colorDetail'>Choose a color</span>
                    <div className='colorsDetail'>
                        <div id='div1'></div>
                        <div id='div2'></div>
                        <div id='div3'></div>
                        <div id='div4'></div>
                        <div id='div5'></div>
                    </div>
                    <h1 id='priceDetail'>${productDetail.price}.00</h1>
                    <button id='shopdetail' onClick={()=>{addToCartHandler(productDetail)}}>Add to Basket</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;