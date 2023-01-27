import React from "react";
import "styles/pages/Categories.sass";

const Categories = () => {
  return (
    <div className="categories">
      <h1 className="categories__title">Categories</h1>
      <form className="categories__form">
        <input type={"text"} placeholder={" "} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Categories;
