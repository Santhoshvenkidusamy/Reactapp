import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageSwiggy } from "./constants";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
    partialVisibilityGutter: 200,
  },
  desktop: {
    breakpoint: { max: 1439, min: 1261 },
    items: 4,
    partialVisibilityGutter: 120,
  },
  large: {
    breakpoint: { max: 1260, min: 1181 },
    items: 4,
    partialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: { max: 1180, min: 1025 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  mobile: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  smallMobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

const Carousell = ({data}) => {
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
      <div  className="text-2xl font-bold my-4 " style={{ color: "#020609eb" }}>
        Best offers for you
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
          {data?.map((item) => {
            return (
              <div className='cursor-pointer' key={item?.id} onClick={handleClick}>
               <img className="w-[27rem] h-64 rounded-2xl " src={ImageSwiggy + item?.imageId} alt="" />
             </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;