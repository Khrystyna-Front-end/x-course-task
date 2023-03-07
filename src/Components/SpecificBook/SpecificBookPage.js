import React from "react";
import { books } from "../.././data.js";
import Nav from "../Nav/Nav.js";
import Header from "../Header&Footer/Header.js";
import SpecificBook from "./SpecificBook.js";
import Footer from "../Header&Footer/Footer.js";

function SpecificBookPage() {
  return (
    <>
      <Nav />
      <Header />
      <SpecificBook data={books} />
      <Footer />
    </>
  );
}

export default SpecificBookPage;
