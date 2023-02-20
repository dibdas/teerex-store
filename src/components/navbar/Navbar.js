import React from "react";
import "./Navbar.scss";
import { BsCart3 } from "react-icons/bs";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="nav-left">
            <h4>TeeRex Store</h4>
          </div>
          <div className="nav-right">
            <h4 className="products">Products</h4>
            <div className="cart-container">
              <div className="icons">
                <BsCart3 />
              </div>
              <strong className="cart-count">99</strong>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
