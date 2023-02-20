import React from "react";
import { BsSearch } from "react-icons/bs";
import "./search.scss";

function Search(props) {
  return (
    <div className="search">
      <div className="search-component">
        <div className="input">
          <input type="text" />
        </div>
        <div className="icon">
          <BsSearch />
        </div>
      </div>
    </div>
  );
}

export default Search;
