import {  useState } from "react"
import { useDispatch } from "react-redux";
import { addItem, removeItem} from '../utils/cartSlice';

const style = {
  color: {
    color: "#f1f1f6",
  },
  textColor:{
    color:'#282C3F',

  }
};
const RestaurantMenuItem = ({data}) =>{
   console.log(data);
    const [itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addItem(item)); // redux send action object to store {payload : item}
        setItemCount(itemCount + 1);
      };
      
      const handleRemove = (id) => {
        let updatedCount;
        dispatch(removeItem(id));
        updatedCount = itemCount > 0 ? itemCount - 1 : 0;
        setItemCount(updatedCount);
      }

    return(
        <div className='my-4 mx-2' style={style.textColor}>
            <div className="flex justify-between items-center">
              <div className=" w-4/5">
            {data?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
            <div className="border border-red-600 w-3 h-3 flex justify-center items-center">
              <div className="bg-red-600 w-2 h-2 rounded-[50%]"></div>
            </div>
          ) : (
            <div className="border border-green-600 w-3 h-3 flex justify-center items-center">
              <div className="bg-green-600 w-2 h-2 rounded-[50%]"></div>
            </div>
          )}
          <div className="text-md font-semibold">{ data?.card?.info?.name}</div>
          <div className="text-sm mt-2 font-semibold"> ₹
            {data?.card?.info?.price
              ? data.card.info?.price / 100
              : data?.card?.info?.defaultPrice / 100}</div>
          <div className="text-sm text-gray-500 mt-4">{ data?.card?.info?.description}</div>
          </div>
          <div>
          <img className="h-24 rounded-lg"
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    data?.card?.info?.imageId
                }
            />
          {/* <button className='bg-green-300 rounded-md mx-2 text-2xl' onClick={(()=>handleClick(data?.card))}>+</button>
          <div className="mx-1 text-2xl">{itemCount}</div>
          <button className='bg-blue-300 rounded-md mx-2 text-2xl' onClick={(()=>handleRemove(data?.id))}>-</button> */}
          </div>
          </div>
          </div>
     )
}

export default  RestaurantMenuItem;