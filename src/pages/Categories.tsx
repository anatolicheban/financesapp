import { useRef, useState, useEffect } from "react";
import "styles/pages/Categories.sass";
import CategoryItem from "../components/CategoryItem";
import Input from "../components/UI/Input";
import { categoriesList, categoriesTypes } from "../data/dummy";
import { InfoType } from "../models/models";
import clsx from "clsx";

const Categories = () => {
  const [category, setCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categoryType, setCategoryType] = useState<InfoType>("Income");
  const categoryBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target !== categoryBtnRef.current) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const categoryBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="categories">
      <h1 className="categories__title">Categories</h1>
      <form className="categories__form">
        <Input
          // error="d"
          helperText="5-15 symbols"
          value={category}
          label="New Category"
          id="categories__form"
          onChange={setCategory}
        />
        <div className="categories__dropdown">
          <button onClick={categoryBtnHandler} ref={categoryBtnRef}>
            {categoryType}
          </button>
          {isDropdownOpen && (
            <ul>
              {categoriesTypes.map(({ id, value }) => (
                <li
                  onClick={() => setCategoryType(value)}
                  className={clsx(value === categoryType ? "active" : "")}
                  key={id}
                >
                  {value}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button>Add</button>
      </form>
      <div className="categories__lists">
        <div className="categories__income">
          <h2>Income Categories</h2>
          <ul>
            {categoriesList.map((item) => (
              <CategoryItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className="categories__expences">
          <h2>Expences Categories</h2>
          <ul>
            {categoriesList.map((item) => (
              <CategoryItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
