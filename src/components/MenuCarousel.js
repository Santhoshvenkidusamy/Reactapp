import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageSwiggy, appLogo, carouselImage } from "./constants";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1440 },
    items: 2,
    partialVisibilityGutter: 200,

  },
  desktop: {
    breakpoint: { max: 1439, min: 1261 },
    items: 2,
    partialVisibilityGutter: 120,
  },
  large: {
    breakpoint: { max: 1260, min: 1181 },
    items: 2,
    partialVisibilityGutter: 80,
  },
  mobile: {
    breakpoint: { max: 1180, min: 1077 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  small: {
    breakpoint: { max: 1076, min: 1024 },
    items: 2,
    partialVisibilityGutter: 20,
  },
};

const MenuCarousel = ({data}) => {
   
  const handleClick = () => {
    const targetSection = document.getElementById("visible-parts");
    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (
        targetSectionCoordinates.top >= 0 &&
        targetSectionCoordinates.top <= 20
      ) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 5);
    }, 2);
  };
   return (
    <div className="flex flex-col mx-auto">
      <div  className="text-2xl font-bold my-4 " style={{color:'#282C3F'}}>
        Top Picks
      </div>
      <div className="z-0">
        <Carousel
          responsive={responsive}
          draggable={true}
          showDots={true}
          focusOnSelect={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          partialVisible={true}
        >
         {data[0][0]?.card?.card?.carousel.map((item) => {
            return (
                <div
                  className="cursor-pointer mr-6"
                  key={item?.bannerId}
                  onClick={handleClick}
                >
                  <img
                    className=" rounded-2xl"
                    src={carouselImage + item?.dish?.info?.imageId}
                    alt=""
                  />
                  <div className=" p-2">
                    <div className="  text-lg font-bold" style={style.textColor}>
                      {item?.dish?.info?.category} 
                    </div>
                    <div className=" text-sm "style={style.textColor} >
                      {item?.dish?.info?.description}
                    </div>
                  </div>
                </div>  
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuCarousel;

const style = {
  color: {
    backgroundColor: "#f1f1f6",
  },
  textColor:{
    color:'#282C3F',

  }
};