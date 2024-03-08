import { Link, useLocation } from "react-router-dom";
// import Image from './Images/img1.png';
import "./ProductDetails.css";
import { useContext, useEffect, useState } from "react";
import AddToCart from "./Context/AddToCart";
import Button from "./Button/Button";
const ProductDetails = () => {
  const { addToCartHandler, productDetail, setProductDetail, removeFromCartHandler, productsInCart } =
    useContext(AddToCart);
//   const [removeFromBasketButton, setRemoveFromBasketButton] = useState(false);
  const location = useLocation();
//   const removeBasketHandler = () => {
    // setRemoveFromBasketButton(true);
//   };
//   const removeBasketHandlerForTrue = () => {
    // setRemoveFromBasketButton(false);
//   };
const productInCart = productsInCart[productDetail.id] || false;
  useEffect(() => {
      const product = localStorage.getItem("productDetails");
      if (product) {
        setProductDetail(JSON.parse(product));
      }
      return () =>{
        localStorage.removeItem("productDetails");
      }
  }, [location.pathname]);
  const style = {
    backgroundColor: productInCart ? "grey" : "black",
    transition: "0.5s ease",
  };
  return (
    <>
      <Link to="/shop">
        <div className="backDetail">&larr;Back to Shop</div>
      </Link>
      <div className="product-detail">
        <div className="leftDetail">
          <div className="imageDetail">
            <img src={productDetail.image} />
          </div>
        </div>
        <div className="middleDetail">
          <img src={productDetail.image} />
        </div>
        <div className="rightDetail">
          <span>{productDetail.style}</span>
          <h1>{productDetail.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            placeat similique dicta nulla praesentium deserunt. Corporis
            repellendus deleniti dolores eligendi.
          </p>
          <hr />
          <span id="lensDetail">Lens Width and Frame Size</span>
          <div className="selectDetail">
            <select>
              <option>--Select Size--</option>
              <option>36mm</option>
              <option>28mm</option>
              <option>26mm</option>
            </select>
          </div>
          <span id="colorDetail">Choose a color</span>
          <div className="colorsDetail">
            <div id="div1"></div>
            <div id="div2"></div>
            <div id="div3"></div>
            <div id="div4"></div>
            <div id="div5"></div>
          </div>
          <h1 id="priceDetail">${productDetail.price}.00</h1>

          {!productInCart ? (
            <Button
              id="shopdetail"
              onClick={() => {
                addToCartHandler(productDetail);
                // removeBasketHandler();
              }}
            >
              Add to Basket
            </Button>
          ) : (
            <Button
              id="shopdetail"
              onClick={() => {
                removeFromCartHandler(productDetail);
                // removeBasketHandlerForTrue();
              }}
              style={style}
            >
              Remove from Basket
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
