import Button from '../Button/Button';
import './Signup.css';
const Signup = (props) => {
    const spanEle = <span>&rarr;</span>;
    return (
        <>
            <div className="signup">
            <form action='/'>
                <div className='heading'>
                    <h2>Sign Up to Salinaka</h2>
                </div>
                <div className='name'>
                    <p>*Full Name</p>
                    <input type="text" placeholder='Dev Chauhan' />
                </div>
                <div className='name'>
                    <p id='email'>*Email</p>
                    <input type="email" placeholder='dev@gmail.com' />
                </div>
                <div className='name'>
                    <p>*Password</p>
                    <input type="password" placeholder='Your Password' />
                </div>
                <Button text="Sign Up" id="signup" spanEle={spanEle} />
                <div className='already'>
                    <div className='already_account'>
                        <p>Already have an account?</p>
                        <Button text="Sign In" id="signin" signinfunc={props.switchToSignin} />
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default Signup;