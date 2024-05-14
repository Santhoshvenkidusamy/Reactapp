import RestrauntCard from '../components/RestrauntCard';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Carousell from './Carousal';
import SmallCarosuel from './SmallCarousel';
import HomeFooter from './HomeFooter';
import OnlineCarousal from './onlineCarousal';
import Spin from './Spin';
import Shimmer from './Shimmer';
import Footer from './Footer';
import useWindowSize from '../utils/useWindowSize';
const Body = () => {
  const size = useWindowSize()
  
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    setLoading(true);
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/"+"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0614369&lng=80.2408444&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
          setFilteredRestaurant(relevantData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } else if (relevantData.card.card.id === 'restaurant_grid_listing') {
          setRestaurant(relevantData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurant(relevantData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
      }
      if(items.card.card.id === 'topical_banner'){
        setCarousel(items?.card?.card?.gridElements?.infoWithStyle?.info)
      }
      if(items.card.card.id === "whats_on_your_mind"){
        setSmallCarousel(items?.card?.card?.gridElements?.infoWithStyle?.info)
      }
      if(items.card.card.id === "restaurant_grid_listing")
      {
        setOnlineDelivery(items?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      if(items.card.card.id === "app_install_links")
      {
        setAppInfo(items?.card?.card);
      }
    });
    setLoading(false);
  };

  const [search, setSearch] = useState('');
  const [appInfo, setAppInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [onlineDelivery, setOnlineDelivery] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [smallCarousel, setSmallCarousel] = useState([]);

  return (
        loading ? [<Spin />,<Shimmer />] :
        <div className=''>
          <div className='m-4 mt-10'>
          { carousel.length > 0 && size?.width>=1175 &&(
            <div >
            <Carousell data={carousel}/>
            <div className="mt-20 border mx-10"></div>
            </div>
            )}
            {size?.width<1175 &&(
            <div className="flex justify-center  lg:h-0 overflow-hidden" >
        <img
          className="w-[90%]"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/faxdufvkcllzse67eqry"
          alt="home-carousel"
        />
      </div>
            )}
            { (smallCarousel.length > 0 && size?.width>=1000) &&(
              <>
            <SmallCarosuel data={smallCarousel}/>
            <div className="mt-20 border mx-10"></div>
            </>
            )}
             { onlineDelivery.length > 0 && size?.width>=1000 &&(
            <OnlineCarousal data={onlineDelivery}/>)}
           <div className="flex justify-center mt-20" id="visible-part">
        <div className="flex flex-col justify-center w-[90%] ">
          <div className="flex justify-between items-center ">
            <div>
              <div
                style={{ color: "#020609eb" }}
                className="font-bold text-[28px] flex"
              >
                <p>Top Restaurants</p>
              </div>
            </div>
            <div className="invisible lg:visible overflow-hidden hover:cursor-pointer">
              <ul className="flex gap-0 lg:gap-8">
                <li
                  className="mx-1 text-[16px] font-medium"
                  style={{ color: "#686B78" }}
                  onClick={() => {
                    setFilteredRestaurant(restaurant);
                  }}
                >
                  Relevance
                </li>
                <li
                  style={{ color: "#686B78" }}
                  className="mx-1 text-[16px] font-medium"
                  onClick={() => {
                    const filteredDeliveryTime = restaurant
                      .slice()
                      .sort(
                        (a, b) =>
                          a?.info?.sla?.deliveryTime -
                          b?.info?.sla?.deliveryTime
                      )
                      .slice();
                    setFilteredRestaurant(filteredDeliveryTime);
                  }}
                >
                  Delivery Time
                </li>
                <li
                  className="mx-1 text-[16px] font-medium"
                  style={{ color: "#686B78" }}
                  onClick={() => {
                    const filteredRating = restaurant
                      .slice()
                      .sort((a, b) => b?.info?.avgRating - a?.info?.avgRating)
                      .slice();
                    setFilteredRestaurant(filteredRating);
                  }}
                >
                  Rating
                </li>
                <li
                  style={{ color: "#686B78" }}
                  className="mx-1 text-[16px] font-medium"
                  onClick={() => {
                    const filteredLowToHight = restaurant
                      .slice() //shallow copy of listOfRestaurant into filteredLowToHight. It is not changing the original "listOfRestaurant" array.
                      .sort(
                        (a, b) =>
                          a?.info?.costForTwo?.match(/\d+/)[0] -
                          b?.info?.costForTwo?.match(/\d+/)[0]
                      )
                      .slice();
                    setFilteredRestaurant(filteredLowToHight);
                  }}
                >
                  Cost: Low To High
                </li>
                <li
                  style={{ color: "#686B78" }}
                  className="mx-1 text-[16px] font-medium"
                  onClick={() => {
                    const filteredHightToLow = restaurant
                      .slice()
                      .sort(
                        (a, b) =>
                          b?.info?.costForTwo?.match(/\d+/)[0] -
                          a?.info?.costForTwo?.match(/\d+/)[0]
                      )
                      .slice();
                    setFilteredRestaurant(filteredHightToLow);
                  }}
                >
                  Cost: High To Low
                </li>
              </ul>
            </div>
          </div>
           <div className='border'></div>
           </div>
      </div>
            {/* <div className='flex justify-center'> 
              <input
                className='justify-center w-72 p-2 rounded-l-full border border-b-gray-300'
                placeholder='Search'
                value={search}
                type='text'
                onChange={(e) => Filters(e)}
              />
              <button
                className='p-2 px-4 rounded-r-full border border-b-gray-300'
                onClick={Filters}
              >
                <span role='img' aria-label='Search' className=''>
                  🔍
                </span>
              </button>
            </div> */}
          </div>
            <div className='flex flex-wrap justify-center'>
              {filteredRestaurant?.map((restaurant) => {
                return (
                  <div id="visible-part" className='m-1' key={restaurant?.info?.id}>
                    <Link to={`restaurant/${restaurant?.info?.id}`}>
                      <RestrauntCard {...restaurant?.info} key={restaurant?.info?.id} />
                    </Link>
                  </div>
                );
              })}
              </div>
           {/* <div className='border my-4'></div> */}
          <HomeFooter appInfo={appInfo}/>
          <Footer />
        </div>
  );
};

export default Body;
