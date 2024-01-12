import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Authentication/Signup';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Signin from './Components/Authentication/Signin';
import Shop from './Components/Shop';
import FeaturedPageSection from './Components/FeaturedPages/FeaturedPageSection';
import RecommendedPageSection from './Components/RecommendedPages/RecommendedPageSection';
import SearchProducts from './Components/SearchProducts';

const App = (props) => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProduct , setFilteredProduct] = useState({});

  const signupHandler = () => {
    setSignup(true);
    setSignin(false);
  };

  const signinHandler = () => {
    setSignin(true);
    setSignup(false);
  };

  const switchToSignup = () => {
    setSignup(true);
    setSignin(false);
  };

  const switchToSignin = () => {
    setSignin(true);
    setSignup(false);
  };
  const resetHandler = () => {
    setSignup(false);
    setSignin(false);
  }
  const searchQueryHandler = (searchQuery) => {
    setSearchQuery(searchQuery);   
  }
  useEffect(()=>{
    const filtered = props.productNames.filter(item=>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredProduct(filtered);
  },[searchQuery,props.productNames]);
  const router = createBrowserRouter([
    { path: '/signup', element: 
    <Layout
    signupCheck={signup}
    signinCheck={signin}
    signupfunc={signupHandler}
    signinfunc={signinHandler}><Signup switchToSignin={switchToSignin} /></Layout> },
    { path: '/signin', element: 
    <Layout
        signupCheck={signup}
        signinCheck={signin}
        signupfunc={signupHandler}
        signinfunc={signinHandler}><Signin switchToSignup={switchToSignup} /></Layout> },
    {
      path: '/', element: <Layout
        signupCheck={signup}
        signinCheck={signin}
        signupfunc={signupHandler}
        signinfunc={signinHandler}
        searchQueryHandler={searchQueryHandler}>
          <Home resetHandler={resetHandler} productNames={props.productNames} />
        <Footer />
      </Layout>
    },
    {
      path: '/shop', element: <Layout
        signupCheck={signup}
        signinCheck={signin}
        signupfunc={signupHandler}
        signinfunc={signinHandler}>
          <Shop resetHandler={resetHandler} />
        <Footer />
      </Layout>
    },
    { path: '/featured', element: <Layout
    signupCheck={signup}
    signinCheck={signin}
    signupfunc={signupHandler}
    signinfunc={signinHandler}>
      <FeaturedPageSection resetHandler={resetHandler} productNames={props.productNames} />
    <Footer />
  </Layout> },
    { path: '/recommended', element: <Layout
    signupCheck={signup}
    signinCheck={signin}
    signupfunc={signupHandler}
    signinfunc={signinHandler}>
      <RecommendedPageSection resetHandler={resetHandler} productNames={props.productNames} />
    <Footer />
  </Layout> },
    { path: '/search', element: <Layout
    signupCheck={signup}
    signinCheck={signin}
    signupfunc={signupHandler}
    signinfunc={signinHandler}
    productNames={props.productNames}>
      <SearchProducts resetHandler={resetHandler} productNames={props.productNames} filteredProduct={filteredProduct}  />
    <Footer />
  </Layout> }

  ]);

  return <RouterProvider router={router} />;
};

export default App;