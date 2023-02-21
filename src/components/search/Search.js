import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import "./search.scss";

function Search(props) {
  return (
    <div className="search">
      <div className="search-component">
        <div className="input">
          <input type="text" placeholder="search for products" />
        </div>
        <div className="icon">
          <BsSearch />
        </div>
        <div className="filter-option">
          <FiFilter />
        </div>
      </div>
    </div>
  );
}

export default Search;
