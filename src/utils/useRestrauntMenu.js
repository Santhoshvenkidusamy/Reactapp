import { useEffect, useState } from "react"
const useRestrauntMenu = (id) =>{
    const [menu,setMenu]=useState();
    useEffect(()=>{
        getMenuItem();
    },[])
    const getMenuItem = async() =>{
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.061436790959643&lng=80.24084452539682&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setMenu(json);
    }
    // const itemCards =  menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((data)=>{
    //     if (data?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'){
    //          return data?.card?.card?.itemCards.map((data) => data?.card?.info?.name);
    //        // console.log(data?.card);
    //       } 
    // })
    // console.log(itemCards);

  return menu;
}
export default useRestrauntMenu;