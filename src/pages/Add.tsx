import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "styles/pages/Add.sass";
import Input from "../components/UI/Input";
import { categories, toggleInfoBtns } from "../data/dummy";
import { InfoType } from "../models/models";

const Add = () => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<InfoType>("Expences");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesBtnRef = useRef<HTMLButtonElement>(null);
  const [category, setCategory] = useState<string | "No category">("No category");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target !== categoriesBtnRef.current) {
        setIsCategoriesOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const categoriesBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCategoriesOpen((prev) => !prev);
  };

  const setCategoryHahdler = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
    e.preventDefault();
    setCategory(value);
  };

  const changeTypeHandler = (e: React.MouseEvent<HTMLButtonElement>, type: InfoType) => {
    e.preventDefault();
    setType(type);
  };

  return (
    <div className="add">
      <h1 className="add__title">Add {type}</h1>
      <form className="add__form">
        <div className="add__form-toggle">
          {toggleInfoBtns.map((item) => (
            <button
              className={clsx(type === item.value ? "active" : "")}
              onClick={(e) => changeTypeHandler(e, item.value)}
              key={item.id}
            >
              {item.value}
            </button>
          ))}
        </div>
        <Input
          InputClassName="add__form-title"
          id="form-name-input"
          label="Title"
          value={title}
          onChange={setTitle}
          helperText={"Length - 5- 20 chars"}
        />
        <Input
          BoxClassName="add__form-amount-box"
          InputClassName="add__form-amount"
          label="Amount (USD)"
          type={"number"}
          id={"form-amount-input"}
          value={amount}
          onChange={setAmount}
          helperText={"0 - 500 000"}
        />
        <div className="add__categories">
          <h3>Category</h3>
          <div className="add__categories-box">
            <button
              onClick={categoriesBtnHandler}
              className={clsx(isCategoriesOpen ? "open" : "")}
              ref={categoriesBtnRef}
            >
              {category} <IoIosArrowBack className="arrow" />
            </button>
            {isCategoriesOpen && (
              <ul className="add__categories-list">
                {[{ id: "no-category", title: "No category" }, ...categories].map(
                  ({ id, title }) => (
                    <li className="add__categories-item" key={id}>
                      <button
                        className={clsx(title === category ? "current" : null)}
                        onClick={(e) => setCategoryHahdler(e, title)}
                      >
                        {title}
                      </button>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
        <button className="add__submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
