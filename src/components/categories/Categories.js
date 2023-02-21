import React from "react";
import "./Categories.scss";

function Category({ colors, type, gender }) {
  console.log(colors, type, gender);
  return (
    <div>
      <section className="categories">
        <div className="color-category">
          <h5>Color</h5>
          {colors.map((color, id) => (
            <div className="colors" key={id}>
              <input type="radio" value={color} id={id} />
              <label htmlFor="">{color}</label>
            </div>
          ))}

          {/* <input type="radio" />
          <input type="radio" /> */}
        </div>
        <div className="gender-category">
          <h5>Gender</h5>
          {gender.map((item, id) => (
            <div className="gender" key={id}>
              <input type="radio" value={item} />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
        <div className="type-category">
          <h5>Type</h5>
          {type.map((item, id) => (
            <div className="types" key={id}>
              <input type="radio" value={item} />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Category;
