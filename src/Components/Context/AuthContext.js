import {createContext,useState,useEffect} from 'react';

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    // see here 
    const [signup,setSignup] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    // const [signin,setSignin] = useState(false);

    const signupHandler = () => {
        setIsSignedUp(true);
        setIsSignedIn(false);
    }
    const signinHandler = () => {
        setIsSignedIn(true);
        setIsSignedUp(false);   
    }
    const showSignupHandler = () => {
        setIsSignedUp(false);
        setIsSignedIn(false);
    }
    const showSigninHandler = () => {
        setIsSignedIn(false);
        setIsSignedUp(false);
    }
    const contextValue = {isSignedUp,isSignedIn,setIsSignedIn,setIsSignedUp,signupHandler,signinHandler,showSignupHandler,showSigninHandler,signup,setSignup, invalidCredentials, setInvalidCredentials, fullName,email,password,setFullName,setEmail,setPassword};
    return(
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}