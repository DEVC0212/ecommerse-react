import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Signin.css";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import IncorrectCredentials from "../IncorrectCredentials";
const Signin = () => {
  const navigate = useNavigate();
  const { setSignup, invalidCredentials, setInvalidCredentials,email,password,setEmail,setPassword, setFullName } = useContext(AuthContext);
  const spanEle = <span>&rarr;</span>;
  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:4000/signin", {
        Email: email,
        Password: password,
      });
      console.log(response)
      if (response.status === 200) {
        setSignup(true);
        navigate("/");
        localStorage.setItem("token", response.data.token);
        setFullName(response.data.user.FullName);
      }
    } catch (e) {
      console.log(e);
      if(e.response && e.response.status === 404){
        console.log("in else");
        setInvalidCredentials(true);
        return setEmail(email) && setPassword(password)
      }
    }
  };
  const style = {
    border: '1px solid red'
  }
  return (
    <>
    {invalidCredentials && <IncorrectCredentials />}
      <form onSubmit={signinHandler}>
        <div className="signin" style={invalidCredentials ? style : {}}>
          <div className="heading">
            <h2>Sign In to Salinaka</h2>
          </div>
          <div className="name">
            <p id="email">*Email</p>
            <input
              type="email"
              placeholder="dev@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="name">
            <p>*Password</p>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button id="signin" spanEle={spanEle}>
            Sign In
          </Button>
          <div className="already">
            <div className="already_account">
              <p>Not have an account?</p>
              <Link to={"/signup"}>
                <Button id="signup">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
