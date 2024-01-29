import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/Authentication/Signup";
// import Layout from './Components/Layout/Layout';
import Home from "./Components/Home/Home";
import Signin from "./Components/Authentication/Signin";
import Shop from "./Components/Shop/Shop";
import FeaturedPageSection from "./Components/FeaturedPages/FeaturedPageSection";
import RecommendedPageSection from "./Components/RecommendedPages/RecommendedPageSection";
// import SearchProducts from './Components/SearchProducts';
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Header/Navbar";
import { AuthContextProvider,AuthContext } from "./Components/Context/AuthContext";
import ProductDetails from "./Components/ProductDetails";
import SearchProducts from "./Components/SearchProducts/SearchProducts";
import AddToCart from "./Components/Context/AddToCart";

const App = (props) => {
    
    // const [showCart, setShowCart] = useState(false);
    // const [totalAmount, setTotalAmount] = useState(0);
    // const [cartItem, setCartItem] = useState([]);
    // const [removeFromBasketButton, setRemoveFromBasketButton] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')
    const {signup,signin} = useContext(AuthContext);
    
  // const [shopDetails, setShopDetails] = useState(false);/
  
  

  const {showCart,setFilteredProduct} = useContext(AddToCart);
  // const displayBasketButtonHandler = () => {
  //   setRemoveFromBasketButton(true);
  // }
  // const notDisplayBasketHandler = () =>{
  //   setRemoveFromBasketButton(false);
  // }
  // const showCartHandler = () => {
  //   setShowCart(true);
  // };
  // const closeCartHandler = () => {
  //   setShowCart(false);
  // };
  // const addToCartHandler = (product) => {
  //   setCartItem((prev) => {
  //     const isProduct = prev.some((item) => item.id === product.id);
  //     if (!isProduct) {
  //       setRemoveFromBasketButton(true);
  //       setTotalAmount((prev) => prev + product.price);
  //       return [...prev, product];
  //     } else {
  //       setTotalAmount((prev) => prev > 0 ? prev + product.price : prev );
  //       return prev;
  //     }
  //   });
  // };
  // const removeFromCartHandler = (product, quantity) => {
  //   setRemoveFromBasketButton(false);
  //   setTotalAmount((prev) => prev - quantity * product.price);
  //   const filterdItems = cartItem.filter((item) => item.id !== product.id);
  //   setCartItem(filterdItems);
  // };
  
  // const backToShopHandler = () => {
  //   setShopDetails(false);
  // }
  const searchQueryHandler = (searchQuery) => {
    const filtered = props.productNames.filter(item=>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      console.log(filtered)
      setFilteredProduct(filtered);
      setSearchQuery(searchQuery);
  }
  return (
    <>
      {/* <RouterProvider router={router}></RouterProvider> */}
      {showCart && (
        <Cart
          // onClose={closeCartHandler}
          // onOpen={showCartHandler}
          // cartItems={cartItem}
          // totalAmount={totalAmount}
          // addToCartHandler={addToCartHandler}
          // minusButtonTotalAmountHandler={minusButtonTotalAmountHandler}
          // removeFromCartHandler={removeFromCartHandler}
          // clearBasketHandler={clearBasketHandler}
        />
      )} 
      <Router>
          <Navbar
            // onOpen={showCartHandler}
            // cartItems={cartItem}
            // onClick={closeCartHandler}
            searchQueryHandler={searchQueryHandler}
            // showSignupHandler={showSignupHandler}
            // showSigninHandler={showSigninHandler}
          />
        
        { !searchQuery && <Routes>
          <Route
            path="/"
            element={
                <Home
                  productNames={props.productNames}
                  // onClick={closeCartHandler}
                  // shopDetailsHandler={shopDetailsHandler}
                />
            }
            // element={<Home productNames={props.productNames} />}
          />
          <Route
            path="/shop"
            element={
                <Shop
                  productNames={props.productNames}
                  // addToCartHandler={addToCartHandler}
                  // removeFromCartHandler={removeFromCartHandler}
                  // removeFromBasketButton={removeFromBasketButton}
                  // shopDetailsHandler={shopDetailsHandler}
                  // displayBasketButtonHandler={displayBasketButtonHandler}
                  // notDisplayBasketHandler={notDisplayBasketHandler}
                />
            }
          />
          <Route path="/shop/product" element={<ProductDetails
          //  product={productDetail}
                  // addToCartHandler={addToCartHandler} 
                  />} />
          <Route
            path="/featured"
            element={<FeaturedPageSection productNames={props.productNames} />}
          />
          <Route
            path="/recommended"
            element={
              <RecommendedPageSection productNames={props.productNames} />
            }
          />
          <Route path="/signup" element={signup ? <Signup /> : <Signup />} />
          <Route path="/signin" element={signin ? <Signin /> : <Signin />} />
        </Routes>
        }
        {searchQuery && <SearchProducts />}
        <Footer />
      </Router>
    </>
  );
};

export default App;
