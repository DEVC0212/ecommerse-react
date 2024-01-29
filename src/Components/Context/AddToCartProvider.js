import {useState} from 'react';
import AddToCart from "./AddToCart";

export const AddToCartProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [productDetail, setProductDetail] = useState({});
    const [filteredProduct , setFilteredProduct] = useState([]);
    const [newRemoveFromBasketButton, setNewRemoveFromBasketButton] = useState(false);

    const removeBasketHandler = () => {
        setNewRemoveFromBasketButton(true);
    }
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
            return [...prev, product];
          } 
          else {
            setTotalAmount((prev) => prev > 0 ? prev + product.price : prev );
            return prev;
          }
        });
      };

      const removeFromCartHandler = (product,quantity) => {
        setTotalAmount((prev) => prev - quantity * product.price);
        const filterdItems = cartItems.filter((item) => item.id !== product.id);
        setCartItems(filterdItems);
      };

      const minusButtonTotalAmountHandler = (quantity, price) => {
        setTotalAmount((prev) => (quantity > 1 ? prev - price : prev));
      };

      const clearBasketHandler = () => {
        setCartItems([]);
        setTotalAmount(0);
      };

      const shopDetailsHandler = (product) => {
        setProductDetail(product);
      };

      

      return(
        <AddToCart.Provider value={{showCart,cartItems,totalAmount,filteredProduct,setFilteredProduct,productDetail,showCartHandler,closeCartHandler,addToCartHandler,removeFromCartHandler,minusButtonTotalAmountHandler,clearBasketHandler,shopDetailsHandler}}>   
        {children}
        </AddToCart.Provider>
      )
}

// export default AddToCartProvider;