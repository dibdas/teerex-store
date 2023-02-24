import React from "react";
import "./Navbar.scss";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalItem = 0;
  cart.forEach((item) => (totalItem = totalItem + item.quantity));

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="nav-left" onClick={() => navigate("/")}>
            <h4>TeeRex Store</h4>
          </div>
          <div className="nav-right">
            <h4 className="products">Products</h4>
            <div className="cart-container">
              <div className="icons" onClick={() => navigate("/cart")}>
                <BsCart3 />
              </div>
              <strong className="cart-count">{totalItem}</strong>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
