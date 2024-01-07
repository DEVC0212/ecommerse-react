import { useState } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Authentication/Signup';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Signin from './Components/Authentication/Signin';
import Shop from './Components/Shop';

const App = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);

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

  var dataFromChild = null;
  const dataFromChildHandler = (data) => {
    dataFromChild = data;
  }

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout
        signupCheck={signup}
        signinCheck={signin}
        signupfunc={signupHandler}
        signinfunc={signinHandler}
      >
        {signup ? (
          <Signup switchToSignin={switchToSignin} />
        ) : signin ? (
          <Signin switchToSignup={switchToSignup} />
        ) : (
          <Home sendDataToParent={dataFromChildHandler} />
        )}
        <Footer />
      </Layout>
    },
    { path: '/shop', element: <Layout><Shop dataSendToChild={dataFromChild} /> <Footer /></Layout> }
  ]);

  return <RouterProvider router={router} />;
};

export default App;