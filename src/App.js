import { useState } from "react";
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
import { AuthContextProvider } from "./Components/Context/AuthContext";
import ProductDetails from "./Components/ProductDetails";
import SearchProducts from "./Components/SearchProducts/SearchProducts";

const App = (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredProduct , setFilteredProduct] = useState([{}]);
    const [showCart, setShowCart] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cartItem, setCartItem] = useState([]);
    const [removeFromBasketButton, setRemoveFromBasketButton] = useState(false);
    const searchQueryHandler = (searchQuery) => {
      const filtered = props.productNames.filter(item=>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredProduct(filtered);
        setSearchQuery(searchQuery);
        console.log(filtered)
    }
  // const [shopDetails, setShopDetails] = useState(false);/
  const [productDetail, setProductDetail] = useState({});

  // const displayBasketButtonHandler = () => {
  //   setRemoveFromBasketButton(true);
  // }
  // const notDisplayBasketHandler = () =>{
  //   setRemoveFromBasketButton(false);
  // }
  const showCartHandler = () => {
    setShowCart(true);
    // console.log('True');
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  const addToCartHandler = (product) => {
    setCartItem((prev) => {
      const isProduct = prev.some((item) => item.id === product.id);
      if (!isProduct) {
        setRemoveFromBasketButton(true);
        setTotalAmount((prev) => prev + product.price);
        return [...prev, product];
      } else {
        setTotalAmount((prev) => prev + product.price);
        return prev;
      }
    });
  };
  const removeFromCartHandler = (product, quantity) => {
    setRemoveFromBasketButton(false);
    setTotalAmount((prev) => prev - quantity * product.price);
    const filterdItems = cartItem.filter((item) => item.id !== product.id);
    setCartItem(filterdItems);
  };
  const minusButtonTotalAmountHandler = (quantity, price) => {
    setTotalAmount((prev) => (quantity > 1 ? prev - price : prev));
  };
  const clearBasketHandler = () => {
    setCartItem([]);
    setTotalAmount(0);
    setRemoveFromBasketButton(false);
  };
  const shopDetailsHandler = (product) => {
    // setShopDetails(true);
    setProductDetail(product);
  };
  // const backToShopHandler = () => {
  //   setShopDetails(false);
  // }
  return (
    <>
      {/* <RouterProvider router={router}></RouterProvider> */}
      {showCart && (
        <Cart
          onClose={closeCartHandler}
          onOpen={showCartHandler}
          cartItems={cartItem}
          totalAmount={totalAmount}
          addToCartHandler={addToCartHandler}
          minusButtonTotalAmountHandler={minusButtonTotalAmountHandler}
          removeFromCartHandler={removeFromCartHandler}
          clearBasketHandler={clearBasketHandler}
          // notDisplayBasketHandler={notDisplayBasketHandler}
        />
      )} 
      <Router>
        <AuthContextProvider>
          <Navbar
            onOpen={showCartHandler}
            cartItems={cartItem}
            onClick={closeCartHandler}
            searchQueryHandler={searchQueryHandler}
          />
        </AuthContextProvider>
        { !searchQuery && <Routes>
          <Route
            path="/"
            element={
                <Home
                  productNames={props.productNames}
                  onClick={closeCartHandler}
                  shopDetailsHandler={shopDetailsHandler}
                />
            }
            // element={<Home productNames={props.productNames} />}
          />
          <Route
            path="/shop"
            element={
                <Shop
                  productNames={props.productNames}
                  addToCartHandler={addToCartHandler}
                  removeFromCartHandler={removeFromCartHandler}
                  removeFromBasketButton={removeFromBasketButton}
                  shopDetailsHandler={shopDetailsHandler}
                  // displayBasketButtonHandler={displayBasketButtonHandler}
                  // notDisplayBasketHandler={notDisplayBasketHandler}
                />
            }
          />
          <Route path="/shop/product" element={<ProductDetails product={productDetail}
                  addToCartHandler={addToCartHandler} />} />
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        }
        {searchQuery && <SearchProducts filteredProduct={filteredProduct} />}
        <Footer />
      </Router>
    </>
  );
};

export default App;
