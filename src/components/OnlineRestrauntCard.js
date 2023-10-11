
import {ImageSwiggy} from '../components/constants';
import star from '../Images/star.png'
const OnlineRestrauntCard = ({name, cuisines, costForTwo, cloudinaryImageId,avgRating,sla}) =>{
    return(
      <div className='w-72'>
         <img
         className='rounded-lg'
          src={
            ImageSwiggy +
            cloudinaryImageId
          }
          />
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

export default OnlineRestrauntCard;