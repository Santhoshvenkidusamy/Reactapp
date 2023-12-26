import { useEffect, useState } from "react"
import {ImageSwiggy, appLogo} from '../components/constants';
import { Link, useParams, useNavigate} from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantMenuItem from "./RestrauntMenuItem";
import Shimmer from "./Shimmer";
import star from '../Images/star.png'
import clock from '../Images/clock.svg'
import rupee from '../Images/rupee.svg'
import RestaurantCategory from "./Category";
import MenuCarousel from "./MenuCarousel";
import location from '../Images/location.png'
import NestedCategory from "./NestedCategory";

const RestaurantMenu = () =>{
  const {id} = useParams();
    const navigate = useNavigate()
    const menu = useRestrauntMenu(id);
    if (menu === null) {
        return <Shimmer />;
      }
   

    const categories = menu?.data?.cards
    ?.filter((y) => y?.groupedCard)
    ?.map((z) => {
      return z?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (a) =>
          a?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

    const nestedCategories = menu?.data?.cards
    ?.filter((y) => y?.groupedCard)
    ?.map((z) => {
      return z?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (a) =>
          a?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" 
      );
    });

   
     let carousel = [];
    carousel = menu?.data?.cards
    ?.filter((y) => y?.groupedCard)
    ?.map((z) => {
      return z?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (a) =>
          a?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
      );
    });

    const restaurantData = menu?.data?.cards?.filter(
      (y) =>
        y?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const license = menu?.data?.cards
    ?.filter((y) => y?.groupedCard)
    ?.map((z) => {
      return z?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (a) =>
          a?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
      );
    });


    const address = menu?.data?.cards
    ?.filter((y) => y?.groupedCard)
    ?.map((z) => {
      return z?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (a) =>
          a?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
      );
    });

  // if (!categories) {
  //   return window.location.reload();
  // }
   
    const offers = menu?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const {
        name,
        areaName,
        avgRating,
        totalRatingsString,
        labels,
        sla,
        costForTwoMessage,
      } = restaurantData[0]?.card?.card?.info;
     
      const { message } = labels[2];
      const { lastMileTravelString,deliveryTime } = sla;
         return(
        (menu?.length===0? (<Shimmer />):
       ( <div className='flex justify-center'>
            <div className="flex flex-col w-[90%] md:w-[65%]  p-3 items-between">
            <div className="mt-2 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="border p-2 border-red-400 rounded-md font-bold text-md"
          >
            BACK
          </button>
          </div>
          <div>
          <div className="flex justify-between">
            <div>
              <p
                style={{ color: "#282C3F" }}
                className="text-xl font-bold w-11/12"
              >
                {name}
              </p>
              <p style={{ color: "#7E808C" }} className="text-[13px]">
                {message}
              </p>
              <p style={{ color: "#7E808C" }} className="text-[13px]">
                {areaName}, {lastMileTravelString}
              </p>
            </div>
            <div className="flex flex-col items-center border justify-center text-xs min-w-[70px] text-center rounded-md h-[70px] shadow-md ">
              <div>
                {avgRating >= 4 ? (
                  <p className=" bg-green-500 px-1 font-bold rounded-md text-center my-1 text-white flex justify-between items-center">
                    <span className="font-sans text-xs pr-[2px]">
                      {avgRating}
                    </span>
                    <span>
                      <img className="w-2 h-2" src={star} alt="star" />
                    </span>
                  </p>
                ) : (
                  <p className=" bg-orange-400  px-1 font-bold rounded-md text-center my-1 text-white flex justify-between items-center">
                    <span className="font-sans text-xs pr-[2px]">
                      {avgRating}
                    </span>
                    <span>
                      <img className="w-2 h-2" src={star} alt="star" />
                    </span>
                  </p>
                )}
              </div>
              <div className="border my-2 w-12"></div>
              <div
                style={{ color: "#8B8D97" }}
                className="text-[11px] font-semibold tracking-tighter"
              >
                {totalRatingsString}
              </div>
              </div>
        </div>
            </div>
            <div className="border my-3"></div>
            <div
            style={{ color: "#3E4152" }}
            className="flex my-5 text-[15px] font-bold"
          >
            <p className="mr-7 flex items-center">
              <span>
                <img className="w-4 h-4 mr-2" src={clock} alt="clock" />
              </span>
              <span>{deliveryTime} MINS</span>
            </p>
            <p className="mr-7 flex items-center">
              <span>
                <img src={rupee} alt="rupee" className="w-4 h-4 mr-2" />
              </span>
              <span>{costForTwoMessage}</span>
            </p>
          </div>
            <div>
            <div className="flex overflow-x-auto">
            {offers?.map((offer, index) => (
              <div
                className="border min-w-[15rem] h-16 rounded-lg mr-4 text-center flex justify-center items-center"
                key={index}
              >
                <div>
                  <h1
                    style={{ color: "#686B78" }}
                    className="text-sm font-bold"
                  >
                    {offer.info.header}
                  </h1>
                  <p
                    style={{ color: "#93959F" }}
                    className="text-xs font-semibold"
                  >
                    {offer.info.couponCode} | {offer.info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border"></div>
          {carousel.length > 0 && carousel[0].length> 0 && 
          <div className="hidden md:block">
           <MenuCarousel data={carousel}/>
           <div className="mt-12 border"></div>
           </div>
           }
           { categories[0]?.map((category,index) =>{
              return (
              <RestaurantCategory
              key={index}
              category={category}
            />
           )})
        }
        { nestedCategories[0]?.map((category,index) =>{
              return (
              <NestedCategory
              key={index}
              category={category}
            />
           )})
        }
            </div>
            <div className="mt-2 h-52" style={style.color}>
              <div className="ml-4 py-4 flex">
                <img  className='w-10 h-8'src={appLogo +license[0][0]?.card?.card?.imageId} />
               <span className=" text-sm ml-2 mt-2" style={style.textColor}>{license[0][0]?.card?.card?.text[0]}</span>
            </div>
            <div className=" mx-2  border bg-slate-400"></div>
            <div className="p-3" style={style.textColor} >
            <div className=" font-bold text-sm">{address[0][0]?.card?.card?.name}</div>
            <div className='text-sm'>(Outlet:{address[0][0]?.card?.card?.area})</div>
            <div className="flex mt-1">
              <img  className='w-4 h-3 mt-1'src={location} />
            <div className="text-sm" >{address[0][0]?.card?.card?.completeAddress}</div>
            </div>
            </div>
        </div>
        </div>
        </div>
       )
    ))
}
export default RestaurantMenu;

const style = {
  color: {
    backgroundColor: "#f1f1f6",
  },
  textColor:{
    color:'#93959f',

  }
};