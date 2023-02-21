import React from "react";
import "./Products.scss";

function Product({ product }) {
  return (
    <>
      <div className="product-component">
        <div className="product">
          <div className="product-title">{product?.name}</div>
          <div className="product-image-container">
            <img src={product?.imageURL} />
          </div>
          <div className="product-price-cart">
            <div className="product-price">{product?.price}</div>
            <div className="add-to-cart">Add To Cart</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
