import React from "react";
import Nav from "../Nav/Nav.js";
import Header from "../Header&Footer/Header.js";
import BookList from "./BookList.js";

import Footer from "../Header&Footer/Footer.js";

function BookListPage() {
  return (
    <>
      <Nav />
      <Header />
      <BookList />
      <Footer />
    </>
  );
}

export default BookListPage;
