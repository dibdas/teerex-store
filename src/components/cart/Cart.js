import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import "./Cart.scss";
import { BsFillCartPlusFill } from "react-icons/bs";

function Cart(props) {
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  return (
    <div className="cart">
      <div className="heading"></div>
      <div className="display-cart_items">
        {cart.map((item, id) => {
          return <CartItem cartItem={item} key={id} />;
        })}
      </div>
      {cart.length === 0 && (
        <div className="empty-cart">
          <div className="empty-icon">
            <BsFillCartPlusFill />
          </div>
          <h2>Cart Empty</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
