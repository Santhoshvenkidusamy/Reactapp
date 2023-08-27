import { useContext } from 'react';
import {ImageSwiggy} from '../components/constants';
import userContext from '../utils/UserContext';

const RestrauntCard = ({name, cuisines, costForTwo, cloudinaryImageId,id}) =>{
  const {user} = useContext(userContext);
    return(
      <div className='card rounded-lg p-2 m-2 shadow-lg w-56'>
         <img
          src={
            ImageSwiggy +
            cloudinaryImageId
          }
          />
  <h1 className='font-bold'>{name}</h1>
  <h2>{cuisines?.join(", ")}</h2>
  <h3>{costForTwo}</h3>
  <h4>{user?.name}</h4>
      </div>
    )
  }

export default RestrauntCard;