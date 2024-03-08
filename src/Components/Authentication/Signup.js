import { useContext, useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from '../Button/Button';
import './Signup.css';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

const Signup = () => {
    const spanEle = <span>&rarr;</span>;
    
    const {setSignup,fullName,email,password,setEmail,setFullName,setPassword} = useContext(AuthContext);
    const navigate = useNavigate();


    const signupHandler = async (e) => {
        e.preventDefault();
        try{
            console.log("in try");
            const response = await axios.post('http://127.0.0.1:4000/signup',{
                FullName : fullName,
                Email : email,
                Password: password
            })
            if(response){
                setSignup(true);
                navigate('/');
                localStorage.setItem('token',response.data.token);
                setFullName(response.data.user.FullName);
            }
        }catch(e){
            console.log(e); 
        }
    }

    const fullNameHandler = (e) => {
        setFullName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="signup">
            <form onSubmit={signupHandler}>
                <div className='heading'>
                    <h2>Sign Up to Salinaka</h2>
                </div>
                <div className='name'>
                    <p>*Full Name</p>
                    <input type="text" value={fullName} onChange={fullNameHandler} placeholder='Dev Chauhan' required/>
                </div>
                <div className='name'>
                    <p id='email'>*Email</p>
                    <input type="email" value={email} onChange={emailHandler} placeholder='dev@gmail.com' required/>
                </div>
                <div className='name'>
                    <p>*Password</p>
                    <input type="password" value={password} onChange={passwordHandler} placeholder='Your Password' required/>
                </div>
                <Button id="signup" spanEle={spanEle} type='submit'>SignUp</Button>
                <div className='already'>
                    <div className='already_account'>
                        <p>Already have an account?</p>
                        <Link to={"/signin"}><Button id="signin">Sign In</Button></Link>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default Signup;