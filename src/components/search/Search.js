import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import "./search.scss";

function Search({ onSearch }) {
  // console.log(onSearch);
  const [input, setInput] = useState("l");
  console.log(input);
  // setSearchInput(input);
  function handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    if (event.target.value === "") {
      setInput("Men");
    }
    onSearch(input);
  }
  return (
    <div className="search">
      <div className="search-component">
        <div className="input">
          <input
            type="text"
            placeholder="search for products"
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
        <div className="icon">
          <BsSearch onClick={() => onSearch(input)} />
        </div>
        <div className="filter-option">
          <FiFilter />
        </div>
      </div>
    </div>
  );
}

export default Search;
