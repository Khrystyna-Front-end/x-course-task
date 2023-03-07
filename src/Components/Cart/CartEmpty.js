import React from "react";
import cart from "../../images/cart.svg";
import "./CartEmpty.css";

function CartEmpty() {
  return (
    <div className="cartEmpty">
      <button
        type="submit"
        className="purchase d-block btn btn-outline-secondary shadow-sm p-3 mb-3 rounded"
      >
        Purchase
      </button>

      <img
        src={cart}
        alt="Empty Cart"
        className="cartEmptyLogo d-block shadow-md p-3 mb-2 bg-body rounded text-center"
      />
      <p className="textCartEmpty">Cart empty...</p>
    </div>
  );
}

export default CartEmpty;
