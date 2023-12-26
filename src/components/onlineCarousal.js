import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageSwiggy } from "./constants";
import RestrauntCard from "./RestrauntCard";
import { Link } from "react-router-dom";
import OnlineRestrauntCard from "./OnlineRestrauntCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
    partialVisibilityGutter: 200,

  },
  desktop: {
    breakpoint: { max: 1439, min: 1261 },
    items: 3,
    partialVisibilityGutter: 120,
  },
  large: {
    breakpoint: { max: 2000, min: 1181 },
    items: 3,
    partialVisibilityGutter: 80,
  },
  mobile: {
    breakpoint: { max: 1180, min: 1077 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  small: {
    breakpoint: { max: 1076, min: 1024 },
    items: 2,
    partialVisibilityGutter: 20,
  },
};

const OnlineCarousal = ({data}) => {
   return (
    <>
    <div className="flex flex-col w-[90%] mx-auto">
      <div  className="text-2xl font-bold my-8 " style={{ color: "#020609eb" }}>
      Restaurants with online food delivery 
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
          {data?.map((item,index) => {
            return (
              <div key={index}>
                <Link to={`restaurant/${item?.info?.id}`}>
                <OnlineRestrauntCard {...item?.info} key={item?.info?.id} />
              </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
    </>
  );
};

export default OnlineCarousal;