import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import Categories from "../categories/Categories";
import "./Filter.scss";

function Filter() {
  const [openFilter, setOpenFilter] = useState(false);
  console.log(openFilter);
  return (
    <div className="filter">
      <div className="filter-component">
        <div
          className="filter-option"
          onClick={() => setOpenFilter(!openFilter)}
        >
          <FiFilter />
        </div>
        <div className="category-component">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Filter;
