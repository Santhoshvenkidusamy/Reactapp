import React, { useState } from "react";
import {FaAngleDown,FaAngleUp} from 'react-icons/fa';
import ItemList from "./Itemslist";
const RestaurantCategory = ({ category }) => {
  
  const { title, itemCards } = category?.card?.card;
  const [showItem, setShowItem] = useState(false);
  if (!itemCards) {
    return null;
  }

  return (
    <div>

      <div
        id="visible-parts"
        className="flex justify-between my-4 p-3 hover:cursor-pointer"
        onClick={()=>setShowItem(!showItem)}
      >
        <span style={{ color: "#3E4152" }} className="text-lg font-bold">
          {title} ({itemCards?.length})
        </span>
        <span>{showItem ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      {showItem && <ItemList data={itemCards} />}
      <div className="bg-gray-100 shadow-sm h-3"></div>
    </div>
  );
};

export default RestaurantCategory;