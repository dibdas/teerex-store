import React from "react";
import Category from "../../components/category/Category";
import Product from "../../components/Products/Product";
import Search from "../../components/search/Search";
import "./Home.scss";

function home(props) {
  return (
    <div className="home-container">
      <div className="search-container">
        <Search />
      </div>

      <div className="category-product-container">
        <div className="category-container">
          <Category />
        </div>
        <div className="product-container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default home;
