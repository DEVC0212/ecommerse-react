import Button from '../Button/Button';
import './Signin.css';
const Signin = (props) => {
    const spanEle = <span>&rarr;</span>;
    return (
        <>
            <div className="signin">
                <div className='heading'>
                    <h2>Sign In to Salinaka</h2>
                </div>
                <div className='name'>
                    <p id='email'>*Email</p>
                    <input type="email" placeholder='dev@gmail.com' />
                </div>
                <div className='name'>
                    <p>*Password</p>
                    <input type="password" placeholder='Your Password' />
                </div>
                <Button text="Sign In" id="signin" spanEle={spanEle} />
                <div className='already'>
                    <div className='already_account'>
                        <p>Not have an account?</p>
                        <Button text="Sign Up" id="signup" signupfunc={props.switchToSignup} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;