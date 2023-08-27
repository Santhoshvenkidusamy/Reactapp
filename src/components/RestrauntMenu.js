import { useEffect, useState } from "react"
import {ImageSwiggy} from '../components/constants';
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantMenuItem from "./RestrauntMenuItem";

const RestaurantMenu = () =>{
  const {id} = useParams();
    const menu = useRestrauntMenu(id);
   // const cartdata = useSelector(store=>store.cart.items);
    const itemCards = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(data => data?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    .flatMap(data => data?.card?.card?.itemCards?.map(itemData => itemData?.card?.info));
    console.log(itemCards);

    return(
        (menu?.length===0?(<Shimmer />):
       ( <div>
            <div className="flex">
                <img src={ImageSwiggy+menu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} className="h-56 mt-2 ml-4" />
                <div className="font-bold m-2">{menu?.data?.cards[0]?.card?.card?.info?.name}</div>
                <div className="flex flex-col">{menu?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</div>
                <div>{menu?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
            </div>
            <div>
           { itemCards?.map((data,index) =>{
              return <RestaurantMenuItem key={index} data={data}/>
            })
        }
            </div>
        </div>
       )
    ))
}
export default RestaurantMenu;