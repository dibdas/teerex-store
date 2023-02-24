import React from "react";
import Cart from "../../components/cart/Cart";
import "./Payments.scss";

function Payments(props) {
  return (
    <div className="payments">
      <h1 className="shopping-cart">Shopping Cart</h1>
      <Cart />
    </div>
  );
}

export default Payments;
