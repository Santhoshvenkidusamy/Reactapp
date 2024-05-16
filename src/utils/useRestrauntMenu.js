import { useEffect, useState } from "react"
const useRestrauntMenu = (id) =>{
    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        getMenuItem();
    },[])
    const getMenuItem = async() =>{
        const data = await fetch(`${process.env.REACT_APP_URL}/api/restaurantMenu/${id}`);
        const json = await data.json();
       
        setMenu(json);
    }

  return menu;
}
export default useRestrauntMenu;