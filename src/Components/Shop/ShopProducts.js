import React, { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./ShopProducts.css";
import { Link } from "react-router-dom";
import AddToCart from "../Context/AddToCart";
import { IoCheckmark } from "react-icons/io5";

const ShopProducts = (props) => {
  const {
    addToCartHandler,
    removeFromCartHandler,
    shopDetailsHandler,
    productsInCart,
  } = useContext(AddToCart);
  const productInCart = productsInCart[props.id] || false;
  const imageStyle = {
    width: "160px",
    height: "90px",
  };
  const tickStyle = {
    position: "absolute",
    right: "0",
    top: "0",
    color: "green",
    fontSize: "22px",
    zIndex: "1",
  };
  const boxTickStyle = {
    border: productInCart && "1px solid black",
  };
  const style = {
    backgroundColor: productInCart ? "grey" : "black",
    transition: "0.5s ease",
  };

  return (
    <>
      <div className="box" style={boxTickStyle}>
        {productInCart && <IoCheckmark style={tickStyle} />}
        <Link
          to={`/shop/product/${props.id}`}
          style={{ textDecoration: "none" }}
        >
          <section onClick={() => {shopDetailsHandler(props); localStorage.setItem('productDetails',JSON.stringify(props))}}>
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
          </section>
        </Link>
        <div className="basket">
          {!productInCart ? (
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
              }}
            >
              Add to basket
            </Button>
          ) : (
            <Button
              onClick={() => {
                removeFromCartHandler({
                  id: props.id,
                  name: props.name,
                  style: props.style,
                  image: props.image,
                  price: props.price,
                });
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
