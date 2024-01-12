// import {useEffect} from 'react';
import Navbar from "../Header/Navbar";

const Layout = ({ children, signupCheck, signinCheck, signupfunc, signinfunc, searchQueryHandler, productNames }) => {
  return (
    <>
      <div>
        <Navbar
          signupfunc={signupfunc}
          signupCheck={signupCheck}
          signinfunc={signinfunc}
          signinCheck={signinCheck}
          searchQueryHandler={searchQueryHandler}  
          productNames={productNames}/>
        {children}
      </div>
    </>
  );
};

export default Layout;
