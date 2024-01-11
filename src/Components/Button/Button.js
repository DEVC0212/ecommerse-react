import {Link} from 'react-router-dom';
const Button = (props) => {
    const handleClick = () => {
        if (props.signupfunc) {
            props.signupfunc();
        } else if (props.signinfunc) {
            props.signinfunc();
        }
    };
    const path = props.signupfunc ? "/signup" : props.signinfunc ? "/signin" : "/";
    return (
        <>
            <Link to={path}><button id={props.id} onClick={handleClick}>{props.text} {props.spanEle}</button></Link>
        </>
    );
}

export default Button;
