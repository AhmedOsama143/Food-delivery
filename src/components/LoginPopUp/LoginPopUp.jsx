// eslint-disable-next-line no-unused-vars
import React from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const LoginPopUp = (setShowLogin) => {
  const [currState, setCurrState] = useState("Log In");
  return (
    <div className="login-popup">
      <form className="login-form-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Log In" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By creating an account, I agree to the Terms & Privacy Policy</p>
        </div>
        {currState === "Log In" ? (
          <p>
            Create new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            {" "}
            Already have an account ?{" "}
            <span onClick={() => setCurrState("Log In")}>Log In</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
