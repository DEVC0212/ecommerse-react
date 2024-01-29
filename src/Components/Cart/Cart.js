import { useState, useEffect, useContext } from 'react';
import CartItems from './CartItems';
import './CartItems.css';
import AddToCart from '../Context/AddToCart';
const Cart = (props) => {
    const {showCartHandler,closeCartHandler,cartItems,totalAmount,clearBasketHandler} = useContext(AddToCart);
    const cartStyle = {
        width: '38%',
        position: 'fixed',
        right: showCartHandler ? '0%' : '-100%',  // Use props.isOpen to control right position
        top: '0%',
        backgroundColor: 'white',
        height: '100%',
        zIndex: 10,
        transition: 'right 1s ease',
    };
    const buttonStyle = {
        cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
        color: cartItems.length === 0 ? 'grey' : 'black'
    }
    // const addTotalAmount = (price) => {
    //     setTotalAmount((prev)=>{
    //         return prev + price;
    //     })
    // }
    // const minusTotalAmount = (product) => {
    //     setTotalAmount((prev)=>{
    //         console.log(prev);
    //         if(prev > 0){
    //             return prev - product.price;
    //         }
    //         else{
    //             props.removeFromCartHandler(product.id);
    //             setTotalAmount(0);
    //         }
    //     })
    // }
    return (
        <>
            <div className="cart" style={cartStyle}>
                <div className="cart__top">
                    <div className='cart__top__heading'>
                        <span id='head'>My Basket</span>
                        <span>({cartItems.length} item)</span>
                    </div>
                    <div className='cart__top__heading'>
                        <button onClick={closeCartHandler}>Close</button>
                        <button onClick={()=>{clearBasketHandler()}} style={buttonStyle}>Clear Basket</button>
                    </div>
                </div>
                {/* <div>Your basket is empty</div> */}
                {
                    cartItems.map((product) => <CartItems key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} quantity={product.quantity} />)
                }
                <div className='border'></div>
                <div className="cart__bottom">
                    <div className='total'>
                        <p>Subtotal Amount:</p>
                        <h3>${totalAmount}.00</h3>
                    </div>
                    <div>
                        <button>CHECK OUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;