import { useState } from "react";
import AddToCart from "./AddToCart";

export const AddToCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [productDetail, setProductDetail] = useState({});
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [productsInCart, setProductsInCart] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [viewSignOut, setViewSignOut] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };

  const addToCartHandler = (product) => {
    setCartItems((prev) => {
      const isProduct = prev.some((item) => item.id === product.id);
      if (!isProduct) {
        setTotalAmount((prev) => prev + product.price);
        setProductsInCart((prevState) => ({
          ...prevState,
          [product.id]: true,
        }));
        setProductQuantities((prev) => ({
          ...prev,
          [product.id]: (prev[product.id] || 0) + 1,
        }));
        return [...prev, product];
      } 
      else {
        setTotalAmount((prev) => (prev + product.price));
        return prev;
      }
    });
  };

  const removeFromCartHandler = (product) => {
    setTotalAmount((prev) =>prev - productQuantities[product.id] * product.price);
    const filterdItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filterdItems);
    setProductsInCart((prevState) => ({ ...prevState, [product.id]: false }));
    setProductQuantities((prev) => {
      const { [product.id]: _, ...rest } = prev;
      return rest;
    });
  };

  const minusButtonTotalAmountHandler = (product) => {
    setTotalAmount((prev) =>prev - product.price);
    setProductQuantities((prev) => ({
      ...prev,
      [product.id]: prev[product.id] - 1,
    }));
  };

  const clearBasketHandler = () => {
    setCartItems([]);
    setTotalAmount(0);
  };

  const shopDetailsHandler = (product) => {
    setProductDetail(product);
  };

  return (
    <AddToCart.Provider
      value={{
        showCart,
        cartItems,
        totalAmount,
        filteredProduct,
        setFilteredProduct,
        productDetail,
        showCartHandler,
        closeCartHandler,
        addToCartHandler,
        removeFromCartHandler,
        minusButtonTotalAmountHandler,
        clearBasketHandler,
        shopDetailsHandler,
        productsInCart,
        setProductsInCart,
        setProductDetail,
        productQuantities,
        viewSignOut,
        setViewSignOut
      }}
    >
      {children}
    </AddToCart.Provider>
  );
};
