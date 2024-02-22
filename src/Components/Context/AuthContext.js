import {createContext,useState} from 'react';

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [signup,setSignup] = useState(false);
    const [signin,setSignin] = useState(false);

    const signupHandler = () => {
        setIsSignedUp(true);
        setIsSignedIn(false);
    }
    const signinHandler = () => {
        setIsSignedIn(true);
        setIsSignedUp(false);   
    }
    const showSignupHandler = () => {
        setSignup(true);
        setSignin(false);
    }
    const showSigninHandler = () => {
        setSignin(true);
        setSignup(false);
    }
    const contextValue = {isSignedUp,isSignedIn,setIsSignedIn,setIsSignedUp,signup,signin,signupHandler,signinHandler,showSignupHandler,showSigninHandler}
    return(
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}