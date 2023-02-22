import React from "react";
import Product from "../../components/Products/Product";
import Categories from "../../components/categories/Categories";
import { useParams } from "react-router";
import Search from "../../components/search/Search";
import "./Collections.scss";

function Collections(props) {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div className="collection-component">
        <div className="search-component">
          <Search />
        </div>

        <div className="category-product-component">
          <div className="category-component">
            <Categories />
          </div>
          <div className="product-component">
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
