import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/Register");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Monem Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="Email" className="loginInput" />
            <input
              placeholder="Password"
              type="Password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegister" onClick={HandleClick}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
