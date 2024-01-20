import { useState, useEffect } from 'react';
import CartItems from './CartItems';
import './CartItems.css';
const Cart = (props) => {
    const cartStyle = {
        width: '38%',
        position: 'fixed',
        right: props.onOpen ? '0%' : '-100%',  // Use props.isOpen to control right position
        top: '0%',
        backgroundColor: 'white',
        height: '100%',
        zIndex: 10,
        transition: 'right 1s ease',
    };
    const buttonStyle = {
        cursor: props.cartItems.length === 0 ? 'not-allowed' : 'pointer',
        color: props.cartItems.length === 0 ? 'grey' : 'black'
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
                        <span>({props.cartItems.length} item)</span>
                    </div>
                    <div className='cart__top__heading'>
                        <button onClick={props.onClose}>Close</button>
                        <button onClick={()=>{props.clearBasketHandler()}} style={buttonStyle}>Clear Basket</button>
                    </div>
                </div>
                {/* <div>Your basket is empty</div> */}
                {
                    props.cartItems.map((product) => <CartItems key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} addToCartHandler={props.addToCartHandler} minusButtonTotalAmountHandler={props.minusButtonTotalAmountHandler} removeFromCartHandler={props.removeFromCartHandler} />)
                }
                <div className='border'></div>
                <div className="cart__bottom">
                    <div className='total'>
                        <p>Subtotal Amount:</p>
                        <h3>${props.totalAmount}.00</h3>
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