import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Categories.scss";

function Category({ colors, type, gender }) {
  const [types, setTypes] = useState("");
  // console.log(colors, type, gender);
  const products = useSelector((state) => state.productReducer.products);
  const productsArray = products.filter((item) => item.type !== types);
  console.log(productsArray);
  function handleChange(event) {
    console.log(event.target.value);
    setTypes(event.target.value);
  }

  useEffect(() => {}, [type, gender]);
  return (
    <div>
      <section className="categories">
        <div className="color-category">
          <h5>Color</h5>
          {colors.map((color, id) => (
            <div className="colors" key={id}>
              <input type="radio" value={color} id={color} name={colors} />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}

          {/* <input type="radio" />
          <input type="radio" /> */}
        </div>
        <div className="gender-category">
          <h5>Gender</h5>
          {gender.map((item, id) => (
            <div className="gender" key={id}>
              <input type="radio" value={item} id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
        <div className="type-category">
          <h5>Type</h5>
          {type.map((item, id) => (
            <div className="types" key={id}>
              <input
                type="radio"
                value={item}
                id={item}
                name={type}
                // checked={item}
                onChange={handleChange}
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

export default Category;
