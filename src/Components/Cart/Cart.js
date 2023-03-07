import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import cart from "../../images/cart.svg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div className="block">
      <button
        type="submit"
        className="purchaseActive d-block btn btn-secondary shadow-sm p-3 rounded"
        onClick={clearCart}
        disabled={cartItems.length === 0}
      >
        Purchase
      </button>
      <button
        type="button"
        className="btn btn-outline-dark btn-sm d-block "
        id="button-back"
      >
        <Link to="/books" className="link-back text-decoration-none">
          &larr; Back
        </Link>
      </button>
      {cartItems.length >= 0 && (
        <table className="w-75 mb-5">
          <thead>
            <tr>
              <th className="border">Name</th>
              <th className="border">Price ($)</th>
              <th className="border">Count</th>
              <th className="border">Total Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <>
                <tr>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.price * item.count}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length === 0 && (
        <>
          <img
            src={cart}
            alt="Empty Cart"
            className="cartEmptyLogo shadow-md p-3 bg-body rounded text-center w-25"
          />
          <p className="textCartEmpty">Cart empty...</p>
        </>
      )}
    </div>
  );
};

export default Cart;
