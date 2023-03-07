import "./App.css";

import { Route, Routes } from "react-router-dom";

import SignInPage from "./Components/SignInPage/SignInPage.js";

import SpecificBookPage from "./Components/SpecificBook/SpecificBookPage.js";
import BookListPage from "./Components/BookList/BookListPage.js";
import CartPage from "./Components/Cart/CartPage.js";

import Page404Page from "./Components/Page404/Page404Page.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInPage />} />

        <Route path="books" element={<BookListPage />} />
        <Route path="books/:id" element={<SpecificBookPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Page404Page />} />
      </Routes>
    </div>
  );
}

export default App;
