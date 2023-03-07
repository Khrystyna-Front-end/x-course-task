import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./Page404Page.css";
import { FaBan } from "react-icons/fa";
import SignInNav from "../SignInPage/SignInNav";
import Header from "../Header&Footer/Header.js";
import Footer from "../Header&Footer/Footer.js";

function Page404Page() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <>
      <SignInNav />
      <Header />
      <div className="error-block">
        <p className="msgError">Oops, something went wrong. </p>
        <br />
        <FaBan style={{ color: "rgb(117, 116, 116)", fontSize: "300%" }} />
        <br />
        <span className="errorMsg">404 error</span>
      </div>
      <Footer />
    </>
  );
}

export default Page404Page;
