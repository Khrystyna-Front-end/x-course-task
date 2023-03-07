import React from "react";
import Cart from "./Cart.js";
import Nav from "../Nav/Nav.js";
import Header from "../Header&Footer/Header.js";
import Footer from "../Header&Footer/Footer.js";

function CartPage() {
  return (
    <div>
      <Nav />
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage;
