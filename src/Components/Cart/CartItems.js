import { useContext, useState } from 'react';
import './CartItems.css';
import AddToCart from '../Context/AddToCart';
const CartItems = (props) => {
    const {addToCartHandler,minusButtonTotalAmountHandler,removeFromCartHandler,setEnableRemoveFromBasketButton} = useContext(AddToCart);
    const [quantity, setQuantity] = useState(1);
    // const [isClicked, setISClicked] = useState(false);
    const imageStyle = {
        maxWidth: '70px',
        height: '50px',
        objectFit: 'cover'
    }
    // const totalAmountHandler = () => {
    //     setTotalAmount(()=>{
    //     })
    // }
    const addQuantityHandler = () => {
        setQuantity((prev)=> prev + 1);
    }
    const minusQuantityHandler = () => {
        setQuantity((prev)=>prev > 1 ? prev - 1 : prev);
    }
    const buttonStyle = {
        cursor : quantity === 1 ? 'not-allowed' : 'pointer'
    }
    
    return (
        <>
            <div className='cart__items'>
                    <div className='buttons'>
                        <div><button onClick={()=>{addToCartHandler(props); addQuantityHandler() }}>+</button></div>
                        <div><button id='minus' style={buttonStyle} onClick={()=>{minusQuantityHandler(); minusButtonTotalAmountHandler(quantity,props.price) }}>-</button></div>
                    </div>
                    <div className='image'>
                        <img src={props.image} style={imageStyle} />
                    </div>
                    <div className='cartname'>
                        <h4>{props.name}</h4>
                        <p>Quantity</p>
                        <p>{quantity}</p>
                    </div>
                    <div className='size'>
                    <h4 style={{visibility: 'hidden'}}>Kulangot</h4>
                        <p>Size</p>
                        <p>28mm</p>
                    </div>
                    <div className='color'>
                    <h4 style={{visibility: 'hidden'}}>Kulangot</h4>
                    <p>Color</p>
                    <p>black</p>
                    </div>
                    <div className='price'>
                        <h4>${quantity * props.price}.00</h4>
                    </div>
                    <div className='clear'>
                        <button onClick={()=>{removeFromCartHandler(props,quantity);}}>X</button>
                    </div>
                </div>
        </>
    )
}

export default CartItems;