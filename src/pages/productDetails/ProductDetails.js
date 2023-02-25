import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

import "./ProductDetails.scss";

function ProductDetails(props) {
  const params = useParams();
  const productId = params.productParamsId;
  console.log(productId);
  const cart = useSelector((state) => state?.cartReducer?.cart);
  const quantity = cart.find((item) => item.id == productId)?.quantity || 0;
  const products = useSelector((state) => state?.productReducer?.products);
  console.log(products);
  const [productDetails, setProductDetails] = useState(null);
  function productData() {
    console.log("j");
    const product = products.find((item) => item.id == productId);
    console.log(product);
    setProductDetails(product);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    setProductDetails(null);
    console.log("jk");
    productData();
  }, [params]);

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-image">
          <img src={productDetails?.imageURL} alt={productDetails?.name} />
        </div>
        <div className="product-info">
          <div className="product-name">{productDetails?.name} </div>
          <div className="product-price">Rs. {productDetails?.price} </div>
          <div className="product-price">{productDetails?.type} </div>
        </div>
        <div className="quantity-selector">
          <button
            className="increament"
            onClick={() => dispatch(addToCart(productDetails))}
          >
            +
          </button>
          <strong className="quantity">{quantity}</strong>
          <button
            className="decreament"
            onClick={() => dispatch(deleteFromCart(productDetails))}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
