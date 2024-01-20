import React, { useState } from "react";
import Button from "../Button/Button";
import "./ShopProducts.css";
import { Link } from "react-router-dom";

const ShopProducts = (props) => {
  const [removeFromBasketButton, setRemoveFromBasketButton] = useState(false);

  const imageStyle = {
    width: "160px",
    height: "90px",
  };

  const style = {
    backgroundColor: removeFromBasketButton ? "grey" : "black",
    transition: "0.5s ease",
  };

  return (
    <>
      <div className="box">
        <Link to='/shop/product' style={{textDecoration: 'none'}}><section onClick={()=>props.shopDetailsHandler({price: props.price, image: props.image, name:props.name, style:props.style})}>
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
          {!removeFromBasketButton && !props.removeFromBasketButton ? (
            <Button
              onClick={() => {
                props.addToCartHandler({
                  id: props.id,
                  name: props.name,
                  style: props.style,
                  image: props.image,
                  price: props.price,
                  quantity: props.quantity,
                });
                // props.displayBasketButtonHandler();
                setRemoveFromBasketButton(true);
              }}
            >
              Add to basket
            </Button>
          ) : (
            <Button
              onClick={() => {
                props.removeFromCartHandler({
                  id: props.id,
                  name: props.name,
                  style: props.style,
                  image: props.image,
                  price: props.price,
                },props.quantity);
                // props.notDisplayBasketHandler()
                setRemoveFromBasketButton(false);
              }}
              style={style}
            >
              Remove from basket
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
