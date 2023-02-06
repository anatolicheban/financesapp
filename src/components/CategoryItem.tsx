import React from "react";
import "styles/components/CategoryItem.sass";
import { CategoryItemType } from "../models/models";
import { MdDeleteOutline } from "react-icons/md";

type CategoryItemProps = {} & CategoryItemType;

const CategoryItem = ({ id, title }: CategoryItemProps) => {
  return (
    <li>
      <button className="categories__item">
        <span className="categories__item-title">{title}</span>
        <span className="categories__item-delete">
          <MdDeleteOutline />
        </span>
      </button>
    </li>
  );
};

export default CategoryItem;
