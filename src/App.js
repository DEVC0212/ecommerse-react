import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/Authentication/Signup";
import Home from "./Components/Home/Home";
import Signin from "./Components/Authentication/Signin";
import Shop from "./Components/Shop/Shop";
import FeaturedPageSection from "./Components/FeaturedPages/FeaturedPageSection";
import RecommendedPageSection from "./Components/RecommendedPages/RecommendedPageSection";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Header/Navbar";
import { AuthContext } from "./Components/Context/AuthContext";
import ProductDetails from "./Components/ProductDetails";
import SearchProducts from "./Components/SearchProducts/SearchProducts";
import AddToCart from "./Components/Context/AddToCart";
import ProfileAndLogout from "./Components/ProfileAndLogout";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}
const App = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { signup, signin, setSignup } = useContext(AuthContext);
  const { showCart, setFilteredProduct, viewSignOut } = useContext(AddToCart);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setSignup(true);
    }
  });

  const searchQueryHandler = (searchQuery) => {
    const filtered = props.productNames.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filtered);
    setFilteredProduct(filtered);
    setSearchQuery(searchQuery);
  };
  return (
    <>
      {showCart && <Cart />}
      <Router>
        <ScrollToTop />
        <Navbar searchQueryHandler={searchQueryHandler} />

        {viewSignOut && <ProfileAndLogout />}
        {!searchQuery && (
          <Routes>
            <Route
              path="/"
              element={<Home productNames={props.productNames} />}
            />
            <Route
              path="/shop"
              element={<Shop productNames={props.productNames} />}
            />
            {props.productNames.map((product) => (
              <Route
                key={product.id}
                path={`/shop/product/${product.id}`}
                element={<ProductDetails product={product} />}
              />
            ))}
            <Route
              path="/featured"
              element={
                <FeaturedPageSection productNames={props.productNames} />
              }
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
        )}
        {searchQuery && <SearchProducts />}
        <Footer />
      </Router>
    </>
  );
};

export default App;
