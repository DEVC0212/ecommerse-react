import Button from '../Button/Button';
import './Signin.css';
const Signin = () => {
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
                <Button id="signin" spanEle={spanEle}>Sign In</Button>
                <div className='already'>
                    <div className='already_account'>
                        <p>Not have an account?</p>
                        <Button id="signup">Sign Up</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;