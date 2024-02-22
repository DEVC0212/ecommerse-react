import { useState } from 'react';
import Button from '../Button/Button';
import './Signup.css';
const Signup = () => {
    const spanEle = <span>&rarr;</span>;
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupHandler = (e) => {
        e.preventDefault();
        console.log(fullName);
        setFullName('');
        setEmail('');
        setPassword('');
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
                        <Button id="signin">Sign In</Button>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default Signup;