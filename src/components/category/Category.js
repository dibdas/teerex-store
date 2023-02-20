import React from "react";
import "./Category.scss";

function Category(props) {
  return (
    <div>
      <section className="categories">
        <div className="color-category">
          <h5>Color</h5>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="color-category">
          <h5>Gender</h5>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="color-category">
          <h5>Type</h5>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </section>
    </div>
  );
}

export default Category;
