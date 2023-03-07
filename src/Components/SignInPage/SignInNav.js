import React from "react";
import logo from "../.././images/logo.jpeg";
import "./SignInNav.css";

function SignInNav() {
  return (
    <div className="navSign">
      <img src={logo} alt="Logo" width="42" height="38" className="logoSign" />
      <h1 className="logoName">JS BAND STORE / Your full name</h1>
    </div>
  );
}
export default SignInNav;
