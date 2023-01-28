import React from "react";

function Categories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories.map((singleCat, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(singleCat)}
          >
            {singleCat}
          </button>
        );
      })}
      {/* <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button> */}
    </div>
  );
}

export default Categories;
