import React from "react";
import RestaurantMenuItem from "./RestrauntMenuItem";

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <>
        <RestaurantMenuItem key={item.card.info.id} data={item} />
        <div className="my-4 border"></div>
        </>
      ))}
    </div>
  );
};

export default ItemList;