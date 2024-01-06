import { useRef, useState } from "react";
import "./register.css";
import logo from "../../images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // console.log(window.URL);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
  };
  const handleFinish = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    window.location.href = "/";
    // navigate("./");
    // window.URL("/");
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="" />
          {/* <button className="loginButton">Sign In</button> */}
          <NavLink className="loginButton" to="/netflix-react/Login">
            Sign In
          </NavLink>
        </div>
      </div>
      <div className="content-items">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <input
              type="submit"
              value="Get Started"
              className="registerButton"
              onClick={(e) => handleStart(e)}
            />
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <input
              type="submit"
              value="Start"
              className="registerButton"
              onClick={(e) => handleFinish(e)}
            />
          </form>
        )}
      </div>
    </div>
  );
}
