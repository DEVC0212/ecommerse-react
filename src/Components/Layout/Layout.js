// import {useEffect} from 'react';
import Navbar from "../Header/Navbar";

const Layout = ({ children, signupCheck, signinCheck, signupfunc, signinfunc }) => {
  return (
    <>
      <div>
        <Navbar
          signupfunc={signupfunc}
          signupCheck={signupCheck}
          signinfunc={signinfunc}
          signinCheck={signinCheck}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
