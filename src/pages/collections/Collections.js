import React from "react";
import Product from "../../components/Products/Product";
import Categories from "../../components/categories/Categories";
import { useParams } from "react-router";
import Search from "../../components/search/Search";

function Collections(props) {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div className="home-container">
        <div className="search-container">
          <Search />
        </div>

        <div className="category-product-container">
          <div className="category-container">
            <Categories />
          </div>
          <div className="product-container">
            {/* {products?.map((item, id) => { */}
            {/* return <Product product={item} key={id} />; */}
            {/* })} */}
            <Product />
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Collections;
