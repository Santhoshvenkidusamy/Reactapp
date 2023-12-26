
import React, { useState } from "react";
import {FaAngleDown,FaAngleUp} from 'react-icons/fa';
import ItemList from "./Itemslist";


const NestedCategory = ({category}) => {
 
    const [showItem, setShowItem] = useState(false);
    const { title, categories } = category?.card?.card;
  return (
    <div>
       <div>
       <div style={{ color: "#3E4152" }} className="text-lg font-bold my-4 p-3">
          {title}
        </div>
        {categories.map((categories,index)=>{
          return(
            <div key={index}>
        <div
        className="flex justify-between my-4 p-3 hover:cursor-pointer"
        onClick={()=>setShowItem(!showItem)}
      >
        <span style={{ color: "#3E4152" }} className="text-lg">
          {categories?.title} ({categories?.itemCards?.length})
        </span>
        <span>{showItem ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      {showItem && <ItemList data={categories?.itemCards} />}
      {showItem ? null :<div className="border"></div>}
      </div>
          )
        })}
        <div className="bg-gray-100 shadow-sm h-3"></div>
      </div>
    </div>
  )
}

export default NestedCategory