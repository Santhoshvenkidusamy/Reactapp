
import {ImageSwiggy} from '../components/constants';
import star from '../Images/star.png'
const OffersCard = ({name, cuisines, costForTwo, cloudinaryImageId,avgRating,sla,aggregatedDiscountInfoV3}) =>{
    return(
      <div className='p-1 m-1 w-72'>
        <div className='relative'>
         <img
         className='rounded-lg'
          src={
            ImageSwiggy +
            cloudinaryImageId
          }
          />
          <span className=' absolute z-1 font-bold text-xl text-white z-1  bottom-0 left-2'>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</span>
          </div>
  <h1 className='line-clamp-1 font-semibold'>{name}</h1>
  <div>
              {avgRating >= 4 ? (
            <p className=" bg-green-500  px-1 font-bold rounded-md text-center my-1 text-white flex justify-between items-center w-9">
              <span>
                <img className="w-2 h-2" src={star} alt="star" />
              </span>
              <span className="font-sans text-xs pr-[2px]">{avgRating}</span>
            </p>
          ) : (
            <p className=" bg-orange-400  px-1 font-bold rounded-md text-center my-1 text-white flex justify-between items-center w-9">
              <span>
                <img className="w-2 h-2" src={star} alt="star" />
              </span>
              <span className="font-sans text-xs pr-[2px]">{avgRating}</span>
            </p>
          )}
          </div>
  <h2 className='line-clamp-1 text-sm '>{cuisines?.join(", ")}</h2>
  <div className='flex flex-wrap'>
  <span className='text-sm'>{costForTwo} </span>
  <span className=" text-[24px] leading-none font-bold text-black/[0.7] relative top-[-8px] mx-1">
								.
	</span>
  <span className='text-sm'>{sla?.slaString}</span>
      </div>
      </div>
    )
  }

export default OffersCard;