import { IoPersonOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import './ProfileAndLogout.css';
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
import AddToCart from "./Context/AddToCart";
const ProfileAndLogout = () => {
  const {setSignup, setInvalidCredentials} = useContext(AuthContext);
  const {setViewSignOut} = useContext(AddToCart);
  const navigate = useNavigate();
  return (
    <>
      <div className="signout">
        <div className="signout__view">
          <p>View Account</p>
          <IoPersonOutline style={{fontSize: '20px'}} />
        </div>
        <div className="signout__signout" onClick={()=>{setSignup(false);localStorage.removeItem('token');setViewSignOut(false);navigate('/signin'); setInvalidCredentials(false)}}>
          <p>Sign Out</p>
          <LiaSignOutAltSolid style={{fontSize: '20px'}} />
        </div>
      </div>
    </>
  );
};

export default ProfileAndLogout;
