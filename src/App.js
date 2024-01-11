import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Authentication/Signup';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Signin from './Components/Authentication/Signin';
import Shop from './Components/Shop';
import FeaturedPageSection from './Components/FeaturedPages/FeaturedPageSection';
import RecommendedPageSection from './Components/RecommendedPages/RecommendedPageSection';
import {Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12} from './Components/Images/Images';

const App = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  const productNames = [
    {
      name: 'Burnikk',
      style: 'Sexbomb',
      image: Image1
    },
    {
      name: 'Kibal Batal',
      style: 'Kibal Black',
      image: Image2
    },
    {
      name: 'Very Nice',
      style: 'Salt Maalat',
      image: Image3
    },
    {
      name: 'Buldit',
      style: 'Salt Maalat',
      image: Image4
    },
    {
      name: 'Balakubak',
      style: 'Betsin Maalat',
      image: Image5
    },
    {
      name: 'Tiktilaok Manok',
      style: 'Sexbomb',
      image: Image6
    },
    {
      name: 'Burnikk',
      style: 'Sexbomb',
      image: Image7
    },
    {
      name: 'Kibal Batal',
      style: 'Kibal Black',
      image: Image8
    },
    {
      name: 'Very Nice',
      style: 'Salt Maalat',
      image: Image9
    },
    {
      name: 'Kulangot',
      style: 'Salt',
      image: Image10
    },
    {
      name: 'Sipon Malapot',
      style: 'Salt',
      image: Image11
    },
    {
      name: 'Pitaklan',
      style: 'Black Kibal',
      image: Image12
    },
  ]

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
        signinfunc={signinHandler}>
          <Home resetHandler={resetHandler} productNames={productNames} />
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
      <FeaturedPageSection resetHandler={resetHandler} productNames={productNames} />
    <Footer />
  </Layout> },
    { path: '/recommended', element: <Layout
    signupCheck={signup}
    signinCheck={signin}
    signupfunc={signupHandler}
    signinfunc={signinHandler}>
      <RecommendedPageSection resetHandler={resetHandler} productNames={productNames} />
    <Footer />
  </Layout> }
  ]);

  return <RouterProvider router={router} />;
};

export default App;