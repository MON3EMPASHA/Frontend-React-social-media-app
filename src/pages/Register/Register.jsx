import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
function Register() {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/Logout");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mon3em Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Monem Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="Text" className="loginInput" />
            <input placeholder="Email" type="Email" className="loginInput" />
            <input
              placeholder="Password"
              type="Password"
              className="loginInput"
            />
            <input
              placeholder="Confirm Password"
              type="Password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegister" onClick={HandleClick}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
