import {ImageSwiggy} from '../components/constants';
const RestrauntCard = ({name, cuisines, lastMileTravelString, cloudinaryImageId}) =>{
    return(
      <div className="card">
         <img
          src={
            ImageSwiggy +
            cloudinaryImageId
          }
          />
  <h1>{name}</h1>
  <h2>{cuisines.join(", ")}</h2>
  <h3>{lastMileTravelString} minutes</h3>
      </div>
    )
  }

export default RestrauntCard;