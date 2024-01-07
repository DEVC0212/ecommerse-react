const Button = (props) => {
    const handleClick = () => {
        if (props.signupfunc) {
            props.signupfunc();
        } else if (props.signinfunc) {
            props.signinfunc();
        }
    };

    return (
        <>
            <button id={props.id} onClick={handleClick}>{props.text} {props.spanEle}</button>
        </>
    );
}

export default Button;
