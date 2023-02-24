import React from "react";
import "./CartItem.scss";
import { AiTwotoneDelete } from "react-icons/ai";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  console.log(cartItem);
  function handleClickIncrease() {
    // console.log(product);
    dispatch(addToCart(cartItem));
  }
  function handleClickDecrease() {
    // console.log(product);
    dispatch(deleteFromCart(cartItem));
  }
  return (
    <div className="cart-items">
      <div className="items">
        <div className="cart-item-image">
          <img src={cartItem.imageURL} alt="" />
        </div>
        <div className="item-name">{cartItem.name}</div>

        <div className="cart-item-price">Rs.{cartItem.price}</div>
        <div className="quantity-selector">
          <button className="increament" onClick={handleClickIncrease}>
            +
          </button>
          <strong className="quantity"> {cartItem.quantity}</strong>
          <button className="decreament" onClick={handleClickDecrease}>
            -
          </button>
        </div>

        <div className="delete-item">
          <AiTwotoneDelete />
        </div>
      </div>
    </div>
  );
}
export default CartItem;
