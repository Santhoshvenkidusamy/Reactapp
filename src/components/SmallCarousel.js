import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageSwiggy } from "./constants";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1440 },
    items: 3,
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

const SmallCarosuel = ({data}) => {
  const handleClick = () => {
    const targetSection = document.getElementById("visible-part");
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
    <div className="flex flex-col w-[90%] mx-auto">
      <div  className="text-2xl font-bold my-4 text-gray-600">
      What's on your mind?
      </div>
      <div className="z-0 h-24">
        <Carousel
          responsive={responsive}
          draggable={true}
          // showDots={true}
          focusOnSelect={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          infinite={true}
          partialVisible={true}
        >
          {data?.map((item) => {
            return (
              <div className='cursor-pointer  ml-14 w-28' key={item?.id} onClick={handleClick}>
               <img className=" w-28 h-28" src={ImageSwiggy + item?.imageId} alt="" />
               <div style={{ color: "#686B78" }} className="ml-6  text-[16px] font-medium">{item?.action?.text}</div>
             </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SmallCarosuel;