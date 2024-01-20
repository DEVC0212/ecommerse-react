import {createContext,useState} from 'react';

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signupHandler = () => {
        setIsSignedUp(true);
        setIsSignedIn(false);
    }
    const signinHandler = () => {
        setIsSignedIn(true);
        setIsSignedUp(false);   
    }
    const contextValue = {isSignedUp,isSignedIn,signupHandler,signinHandler}
    return(
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}