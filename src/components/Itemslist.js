import React from "react";
import RestaurantMenuItem from "./RestrauntMenuItem";

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((item,index) => (
        <div key={item.card.info.id}>
        <RestaurantMenuItem  data={item} />
        <div className="my-4 border"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;