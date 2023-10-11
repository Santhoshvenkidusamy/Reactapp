import { useEffect, useState } from "react"
const useRestrauntMenu = (id) =>{
    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        getMenuItem();
    },[])
    const getMenuItem = async() =>{
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.061436790959643&lng=80.24084452539682&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setMenu(json);
    }

  return menu;
}
export default useRestrauntMenu;