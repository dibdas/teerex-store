import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/categories/Categories";
import Product from "../../components/Products/Product";
import Search from "../../components/search/Search";
import { fetchData } from "../../redux/productSlice";
import "./Home.scss";

function Home(props) {
  const dispatch = useDispatch();
  const [typesFilter, setTypesFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);
  const [gendersFilter, setGendersFilter] = useState(null);
  const [colorArray, setColorArray] = useState([]);
  const [typesArray, setTypesArray] = useState([]);
  const [genderArray, setGenderArray] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  const [check, setCheck] = useState(0);
  // console.log(searchInput);
  // const searchInputArray = searchInput?.split(" ") || ["Pink"];
  // console.log(searchInputArray);
  console.log(colorFilter);
  console.log(typesFilter);
  console.log(gendersFilter);
  const products = useSelector((state) => state?.productReducer?.products);
  // console.log(products);
  const colors = [...new Set(products?.map((item) => item.color))];
  // console.log(colors);
  const type = [...new Set(products?.map((item) => item.type))];
  // console.log(type);
  const gender = [...new Set(products?.map((item) => item.gender))];
  // console.log(gender);

  function filterGender() {
    const productsArray = products.filter(
      (item) => item.gender === gendersFilter
    );
    console.log(productsArray);
    setGenderArray(productsArray);
  }

  function filterType() {
    const productsArray = products.filter((item) => item.type === typesFilter);
    console.log(productsArray);
    setTypesArray(productsArray);
  }

  function filterColor() {
    const productsArray = products.filter((item) => item.color === colorFilter);
    console.log(productsArray);
    setColorArray(productsArray);
  }

  function filtering() {
    console.log(colorFilter, gendersFilter, typesFilter);
    if (
      colorFilter !== null &&
      gendersFilter !== null &&
      typesFilter !== null
    ) {
      const productsArray = products.filter(
        (item) =>
          item.color === colorFilter &&
          item.gender === gendersFilter &&
          item.type === typesFilter
      );
      setFilterArray(productsArray);
      console.log(productsArray);
    }
    if (
      colorFilter !== null &&
      gendersFilter !== null &&
      typesFilter === null
    ) {
      const productsArray = products.filter(
        (item) => item.color === colorFilter && item.gender === gendersFilter
      );
      setFilterArray(productsArray);
      console.log(filterArray);
    }
    if (
      colorFilter === null &&
      gendersFilter !== null &&
      typesFilter !== null
    ) {
      const productsArray = products.filter(
        (item) => item.gender === gendersFilter && item.type === typesFilter
      );
      setFilterArray(productsArray);
      console.log(filterArray);
    }
    if (
      colorFilter !== null &&
      gendersFilter === null &&
      typesFilter !== null
    ) {
      const productsArray = products.filter(
        (item) => item.color === colorFilter && item.type === typesFilter
      );
      setFilterArray(productsArray);
      console.log(filterArray);
    }
  }
  function checking() {
    console.log("jkhk");
    if (
      typesFilter !== null &&
      colorFilter !== null &&
      gendersFilter !== null
    ) {
      filtering();
      setCheck(1);
    }
    if (
      typesFilter !== null &&
      colorFilter !== null &&
      gendersFilter === null
    ) {
      setCheck(2);
      filtering();
    }
    if (
      typesFilter === null &&
      colorFilter !== null &&
      gendersFilter !== null
    ) {
      setCheck(3);
      filtering();
    }
    if (
      typesFilter !== null &&
      colorFilter === null &&
      gendersFilter !== null
    ) {
      setCheck(4);
      filtering();
    }
  }
  console.log(check);
  console.log(filterArray);

  useEffect(() => {
    filterGender();
  }, [gendersFilter]);

  useEffect(() => {
    filterColor();
  }, [colorFilter]);

  useEffect(() => {
    filterType();
  }, [typesFilter]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    checking();
  }, [check, typesFilter, colorFilter, gendersFilter]);

  if ((colorFilter || gendersFilter || typesFilter) === null) {
    return (
      <div className="home-container">
        <div className="category-product-container">
          <div className="category-container">
            <Categories
              colors={colors}
              type={type}
              gender={gender}
              onTypes={setTypesFilter}
              onColor={setColorFilter}
              onGender={setGendersFilter}
            />
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

  if (colorFilter !== null && gendersFilter === null && typesFilter === null) {
    return (
      <div className="home-container">
        <div className="category-product-container">
          <div className="category-container">
            <Categories
              colors={colors}
              type={type}
              gender={gender}
              onTypes={setTypesFilter}
              onColor={setColorFilter}
              onGender={setGendersFilter}
            />
          </div>

          <div className="product-container">
            {colorArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        </div>
      </div>
    );
  }

  if (typesFilter !== null && gendersFilter === null && colorFilter === null) {
    return (
      <div className="home-container">
        <div className="category-product-container">
          <div className="category-container">
            <Categories
              colors={colors}
              type={type}
              gender={gender}
              onTypes={setTypesFilter}
              onColor={setColorFilter}
              onGender={setGendersFilter}
            />
          </div>

          <div className="product-container">
            {typesArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
  if (gendersFilter !== null && colorFilter === null && typesFilter === null) {
    return (
      <div className="home-container">
        <div className="category-product-container">
          <div className="category-container">
            <Categories
              colors={colors}
              type={type}
              gender={gender}
              onTypes={setTypesFilter}
              onColor={setColorFilter}
              onGender={setGendersFilter}
            />
          </div>

          <div className="product-container">
            {genderArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-container">
        <div className="category-product-container">
          <div className="category-container">
            <Categories
              colors={colors}
              type={type}
              gender={gender}
              onTypes={setTypesFilter}
              onColor={setColorFilter}
              onGender={setGendersFilter}
            />
          </div>

          <div className="product-container">
            {filterArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

//   return (
//     <div className="home-container">
//       <div className="search-container">
//         <Search />
//       </div>

//       <div className="category-product-container">
//         <div className="category-container">
//           <Categories
//             colors={colors}
//             type={type}
//             gender={gender}
//             onTypes={setTypesFilter}
//             onColor={setColorFilter}
//             onGender={setGendersFilter}
//           />
//         </div>

//         <div className="product-container">
//           {genderArray?.map((item, id) => {
//             return <Product product={item} key={id} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

{
  /* 
        {gendersFilter !== null && colorFilter && typesFilter === null && (
          <div className="product-container">
            {genderArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        )}

        {(colorFilter || typesFilter || gendersFilter) === null && (
          <div className="product-container">
            {products?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        )} */
}
{
  /* 
        {gendersFilter && colorFilter && typesFilter === null && (
          <div className="product-container">
            {colorArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        )} */
}

{
  /* {colorFilter !== null && typesFilter && gendersFilter === null && (
          <div className="product-container">
            {colorArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        )}
        {typesFilter !== null && colorFilter && gendersFilter === null && (
          <div className="product-container">
            {typesArray?.map((item, id) => {
              return <Product product={item} key={id} />;
            })}
          </div>
        )} */
}

export default Home;
