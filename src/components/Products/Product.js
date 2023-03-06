import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import "./Products.scss";

function Product({ product }) {
  // console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);
  const quantity = cart.find((item) => item.id === product?.id)?.quantity || 0;
  function handleClickIncrease() {
    // console.log(product);
    dispatch(addToCart(product));
  }
  function handleClickDecrease() {
    // console.log(product);
    dispatch(deleteFromCart(product));
  }
  if (quantity > 9) {
    return (
      <>
        <div className="product-component">
          <div className="product">
            <div className="product-title">{product?.name}</div>
            <div
              className="product-image-container"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img src={product?.imageURL} alt="" />
            </div>
            <div className="product-price-cart">
              <div className="product-price">{product?.price}</div>
              {quantity < 1 && (
                <div className="add-to-cart" onClick={handleClickIncrease}>
                  Add To Cart
                </div>
              )}
              {quantity > 0 && (
                <div className="quantity-selector">
                  <button
                    className="increament"
                    disabled
                    onClick={handleClickIncrease}
                  >
                    +
                  </button>
                  <strong className="quantity">{quantity}</strong>
                  <button className="decreament" onClick={handleClickDecrease}>
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="product-component">
          <div className="product">
            <div className="product-title">{product?.name}</div>
            <div
              className="product-image-container"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img src={product?.imageURL} alt="" />
            </div>
            <div className="product-price-cart">
              <div className="product-price">{product?.price}</div>
              {quantity < 1 && (
                <div className="add-to-cart" onClick={handleClickIncrease}>
                  Add To Cart
                </div>
              )}
              {quantity > 0 && (
                <div className="quantity-selector">
                  <button className="increament" onClick={handleClickIncrease}>
                    +
                  </button>
                  <strong className="quantity">{quantity}</strong>
                  <button className="decreament" onClick={handleClickDecrease}>
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
