import React, { useState, useEffect } from "react";

import "./Categories.scss";
import { useNavigate } from "react-router";

function Categories({ colors, type, gender, onTypes, onGender, onColor }) {
  // const [types, setTypes] = useState(null);
  // const [color, setColor] = useState(null);
  // const [genders, setGenders] = useState(null);
  // const navigate = useNavigate();
  // console.log(colors, type, gender);
  // const products = useSelector((state) => state.productReducer.products);

  // function handleChangeType(event) {
  //   console.log(event.target.value);
  //   event.preventDefault()

  //   onTypes{()=>(event.target.value)};
  // }
  // function handleChangeColor(event) {
  //   console.log(event.target.value);
  //   setColor(event.target.value);
  // }
  // function handleChangeGender(event) {
  //   console.log(event.target.value);
  //   setGenders(event.target.value);
  // }
  // console.log(color, genders, types);

  // useEffect(() => {
  //   const productsArray = products.filter((item) => item.color !== color);
  //   console.log(productsArray);
  // }, [color]);
  // useEffect(() => {
  //   const productsArray = products.filter((item) => item.type !== types);
  //   console.log(productsArray);
  // }, [types]);
  // useEffect(() => {
  //   const productsArray = products.filter((item) => item.gender !== genders);
  //   console.log(productsArray);
  // }, [genders]);

  // useEffect(() => {
  //   console.log(genders, color, types);
  //   if (color !== null && genders !== null && types !== null) {
  //     const productsArray = products.filter(
  //       (item) =>
  //         item.color === color && item.gender === genders && item.type === types
  //     );
  //     console.log(productsArray);
  //   }
  // }, [color, genders, types]);

  return (
    <div>
      <section className="categories">
        <div className="color-category">
          <h5>Color</h5>
          {colors?.map((color, id) => (
            <div className="colors" key={id}>
              <input
                type="radio"
                value={color}
                id={color}
                name={colors}
                // onChange={handleChangeColor}
                onChange={(event) => {
                  // event.preventDefault();
                  console.log(event.target.value);
                  onColor(event.target.value);
                }}
                // onClick={() => navigate(`/collections/${color}`)}
              />
              <label htmlFor={color} name={colors}>
                {color}
              </label>
            </div>
          ))}

          {/* <input type="radio" />
          <input type="radio" /> */}
        </div>
        <div className="gender-category">
          <h5>Gender</h5>
          {gender?.map((gen, id) => (
            <div className="gender" key={id}>
              <input
                type="radio"
                value={gen}
                id={gen}
                name={gender}
                // onChange={handleChangeGender}
                onChange={(event) => {
                  // event.preventDefault();
                  onGender(event.target.value);
                }}
                // onClick={() => navigate(`/collections/${gen}`)}
              />
              <label htmlFor={gen} name={gender}>
                {gen}
              </label>
            </div>
          ))}
        </div>
        <div className="type-category">
          <h5>Type</h5>
          {type?.map((item, id) => (
            <div className="types" key={id}>
              <input
                type="radio"
                value={item}
                id={item}
                name={type}
                // checked={item}
                // onChange={handleChangeType}
                onChange={(event) => {
                  // event.preventDefault();
                  onTypes(event.target.value);
                }}
                // onClick={() => navigate(`/collections/${item}`)}
              />
              <label htmlFor={item} name={type}>
                {item}
              </label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Categories;
