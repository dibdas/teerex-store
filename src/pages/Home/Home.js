import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/categories/Categories";
import Product from "../../components/Products/Product";
import Search from "../../components/search/Search";
import { fetchData } from "../../redux/productSlice";
import "./Home.scss";

function Home(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.productReducer?.products);
  const colors = [...new Set(products?.map((item) => item.color))];
  console.log(colors);
  const type = [...new Set(products?.map((item) => item.type))];
  console.log(type);
  const gender = [...new Set(products?.map((item) => item.gender))];
  console.log(gender);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="home-container">
      <div className="search-container">
        <Search />
      </div>

      <div className="category-product-container">
        <div className="category-container">
          <Categories colors={colors} type={type} gender={gender} />
        </div>
        <div className="product-container">
          {products?.map((item, id) => {
            return <Product product={item} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
