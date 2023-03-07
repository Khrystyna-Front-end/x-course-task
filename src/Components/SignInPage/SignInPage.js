import React from "react";
// import { Route, Routes } from "react-router-dom";
import SignInNav from "./SignInNav";
import Header from "../Header&Footer/Header.js";
import SignInMain from "./SignInMain.js";
import Footer from "../Header&Footer/Footer.js";

function SignInPage() {
  return (
    <>
      <SignInNav />
      <Header />
      <SignInMain />
      <Footer />
    </>
  );
}

export default SignInPage;
