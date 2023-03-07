import React, { useState } from "react";
import "./Nav.css";
import avatarMini from "../../images/avatarMini.png";
import cart from "../../images/cart.svg";
import logo from "../../images/logo.jpeg";
import { Link } from "react-router-dom";

function Nav() {
  const Username = localStorage.getItem("Username");

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav>
      <div className="nav d-flex">
        <div className="left-side d-flex">
          <img src={logo} alt="Logo" width="42" height="38" className="logo" />
          <h1>JS BAND STORE / Your full name</h1>
        </div>
        <div className="right-side d-flex">
          <Link to="/cart">
            <img
              src={cart}
              alt="cart"
              className="cart"
              width="80px"
              height="80px"
            />
          </Link>
          <button className="sign-out btn btn-primary" onClick={handleClick}>
            <Link className="link-sign-out" to="/">
              Sign-out
            </Link>
          </button>
          <img
            src={avatarMini}
            alt="Фото"
            width="30px"
            height="30px"
            className="avatarMini"
          />
          <h6 className="userName">{Username ? `${Username}` : "Username"}</h6>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
