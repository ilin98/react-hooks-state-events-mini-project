import React from "react";

function CategoryFilter({ onSearchChange, onCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Code">Code</option>
        <option value="Food">Food</option>
        <option value="Money">Money</option>
        <option value="Misc">Misc</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
