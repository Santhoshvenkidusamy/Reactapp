import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import OffersCard from "./OffersCard";
import Shimmer from "./Shimmer";
import Spin from "./Spin";

const Offers = ()=>{
    useEffect(() => {
        getRestaurants();
      }, []);
    const [restaurant,setRestaurant] =useState([]);
    const [loading,setLoading] = useState(false);
      const getRestaurants = async () => {
        setLoading(true);
        const data = await fetch(
          `${process.env.REACT_APP_URL}/api/restaurants`);
        const json = await data.json();
       
      const relevantData = json.data.cards.find(
        (items) =>
          items?.card?.card?.id === 'top_brands_for_you' ||
          items?.card?.card?.id === 'restaurant_grid_listing'
      );
    
        json.data.cards.map((items) => {
          if (relevantData) {
            if (relevantData.card.card.id === 'top_brands_for_you') {
              setRestaurant(relevantData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } else if (relevantData.card.card.id === 'restaurant_grid_listing') {
              setRestaurant(relevantData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
          }})
          setLoading(false);
}
return(
    loading? [<Spin />,<Shimmer />]:
    <div className="">
        <div  className=' ml-16 mt-8'style={{color:'#282C3F'}}>Home/<span style={{color:'#02060C99'}}>Offers</span></div>
         <div  className="text-2xl font-bold my-4 ml-16" style={{color:'#282C3F'}}>
         Restaurants With Great Offers Near Me
      </div>
      <div className='flex flex-wrap justify-center'>
              {restaurant?.map((restaurant) => {
                return (
                  <div id="visible-part" className='m-1' key={restaurant?.info?.id}>
                    <Link to={`/restaurant/${restaurant?.info?.id}`}>
                      <OffersCard {...restaurant?.info} key={restaurant?.info?.id} />
                    </Link>
                  </div>
                );
              })}
              </div>
              <Footer />
    </div>
)
}
export default Offers;