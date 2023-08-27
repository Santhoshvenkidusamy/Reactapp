import {  useState } from "react"
import { useDispatch } from "react-redux";
import { addItem, removeItem} from '../utils/cartSlice';
const RestaurantMenuItem = ({data}) =>{
   
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
        <div className='card rounded-lg p-2 m-2 shadow-lg mx-52'>
            <div className="flex justify-between">
          <div>{ data?.name}</div>
          <div>
          <img className="h-20"
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  data?.imageId
                }
            />
          <button className='bg-green-300 rounded-md mx-2 text-2xl' onClick={(()=>handleClick(data))}>+</button>
          <div className="mx-1 text-2xl">{itemCount}</div>
          <button className='bg-blue-300 rounded-md mx-2 text-2xl' onClick={(()=>handleRemove(data?.id))}>-</button>
          </div>
          </div>
          </div>
     )
}

export default  RestaurantMenuItem;