// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { books } from "../.././data.js";
import { Link, useParams } from "react-router-dom";
import "./BookForm.css";
// import { Link } from "react-router-dom";

const BookForm = () => {
  const [singleBook, setSingleBook] = useState([]);
  const [count, setCount] = useState(1);
  const bookCost = singleBook.price;
  const [totalBookCost, setTotalBookCost] = useState(bookCost);

  const { id } = useParams();
  useEffect(() => {
    const findBook = () => {
      const newBook = books[id - 1];
      setSingleBook(newBook);
    };
    findBook();
  }, [id]);

  function handleAdding() {
    let title = singleBook.title;
    let price = Number(singleBook.price);
    // let count = Number(count);
    let book = [title, Number(price)];

    const cartItems = JSON.parse(localStorage.getItem("cart")) || {};

    // cartItems.push(book);
    cartItems[book] = Number(count);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  function handleChange(event) {
    event.preventDefault();

    if (count > 0 && count <= 42) {
      setTotalBookCost((count * bookCost).toFixed(2));
    } else {
      setCount(1);
    }
  }

  return (
    <form
      action="#"
      method="get"
      className=" section price-block col-3 shadow p-3 mb-2 bg-body-tertiary rounded"
      id="pay-form"
      onSubmit={handleChange}
    >
      <div className="price-book d-flex justify-content-between mb-3">
        <h4 className="sidebar-title">Price,$</h4>
        <p className="book-cost" id="cost" key={bookCost}>
          {bookCost}
        </p>
      </div>
      <section className="price d-flex justify-content-between mb-3">
        <label for="count" className="form-label ">
          Count
        </label>
        <input
          type="number"
          id="count"
          className="form-control"
          value={count}
          onKeyup={handleChange}
          onKeydown={handleChange}
          onClick={handleChange}
          onChange={(e) => setCount(e.target.value)}
          data-test-id="numberInput"
        />
      </section>

      <div className="price-book d-flex justify-content-between mb-5">
        <h4 className="total-price fw-bold fs-5">Total price </h4>
        <p className="total-book-cost" id="total">
          {totalBookCost}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-dark btn-sm d-block "
          id="button-back"
        >
          <Link to="/books" className="link-back text-decoration-none">
            &larr; Back
          </Link>
        </button>
        <button
          className="adding btn btn-info d-block text-end"
          id="button-adding"
          type="submit"
          onClick={handleAdding}
        >
          Add to cart
        </button>
      </div>
    </form>
  );

  function changeCount() {
    setCount((count) => Number(count));
  }
};

export default BookForm;
