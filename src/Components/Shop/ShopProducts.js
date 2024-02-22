import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import "./ShopProducts.css";
import { Link } from "react-router-dom";
import AddToCart from "../Context/AddToCart";
import { IoCheckmark } from "react-icons/io5";
import { hover } from "@testing-library/user-event/dist/hover";

const ShopProducts = (props) => {
  const {addToCartHandler,removeFromCartHandler,shopDetailsHandler,enableRemoveFromBasketButton,setEnableRemoveFromBasketButton} = useContext(AddToCart);
  const [removeFromBasketButton, setRemoveFromBasketButton] = useState(enableRemoveFromBasketButton);
  const [rightTick, setRightTick] = useState(false);
  const imageStyle = {
    width: "160px",
    height: "90px",
  };

  const tickStyle = {
    position: 'absolute',
    right: '0',
    top: '0',
    color: 'green',
    fontSize: '22px',
    zIndex: '1'
  }
  const boxTickStyle = {
    border: rightTick && '1px solid black'
  }
  const style = {
    backgroundColor: removeFromBasketButton ? "grey" : "black",
    transition: "0.5s ease"
  };

  return (
    <>
      <div className="box" style={boxTickStyle}>
      {rightTick && <IoCheckmark style={tickStyle} />}
        <Link to={`/shop/product/${props.id}`} style={{textDecoration: 'none'}}><section onClick={()=>shopDetailsHandler(props)}>
        <div className="image">
          <img src={props.image} style={imageStyle} alt={props.name} />
        </div>
        <div className="text">
          <h2>{props.name}</h2>
          <i>{props.style}</i>
        </div>
        <div className="price">
          <h3>${props.price}.00</h3>
        </div>
        </section></Link>
        <div className="basket">
          {(!removeFromBasketButton && !enableRemoveFromBasketButton) ? (
            <Button
              onClick={() => {
                addToCartHandler({
                  id: props.id,
                  name: props.name,
                  style: props.style,
                  image: props.image,
                  price: props.price,
                  quantity: props.quantity,
                });
                // props.displayBasketButtonHandler();
                setRemoveFromBasketButton(true);
                setEnableRemoveFromBasketButton(true);
                setRightTick(true);
              }}
            >
              Add to basket
            </Button>
          ) : enableRemoveFromBasketButton ?  (
            <Button
              onClick={() => {
                removeFromCartHandler({
                  id: props.id,
                  name: props.name,
                  style: props.style,
                  image: props.image,
                  price: props.price},
                  props.quantity);
                // props.notDisplayBasketHandler()
                setRemoveFromBasketButton(false);
                setEnableRemoveFromBasketButton(false);
                setRightTick(false);
              }}
              style={style}
            >
              Remove from basket
            </Button>
          ): null}
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
