// import { useContext } from 'react';
import {ImageSwiggy} from '../components/constants';
// import userContext from '../utils/UserContext';

const RestrauntCard = ({name, cuisines, costForTwo, cloudinaryImageId,id}) =>{
  // const {user} = useContext(userContext);
    return(
      <div className='p-1 m-1 w-72'>
         <img
         className='rounded-lg'
          src={
            ImageSwiggy +
            cloudinaryImageId
          }
          />
  <h1 className='font-semibold'>{name}</h1>
  <h2 className='line-clamp-1 text-sm '>{cuisines?.join(", ")}</h2>
  <h3>{costForTwo}</h3>
      </div>
    )
  }

export default RestrauntCard;