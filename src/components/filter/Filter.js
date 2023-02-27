import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import Categories from "../categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.scss";

function Filter({ onClose }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="filter">
      <div className="filter-component">
        <div className="filter-option" onClick={() => onClose(false)}>
          <FiFilter />
        </div>
        {/* 
        {openFilter && (
          <div className="category-component">
            <div className="close-open-container">
              <Categories colors={colors} type={type} gender={gender} />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Filter;
