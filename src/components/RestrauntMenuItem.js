import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseQuantity, increaseQuantity, removeItem} from '../utils/cartSlice';

const style = {
  color: {
    color: "#f1f1f6",
  },
  textColor:{
    color:'#282C3F',

  }
};
const RestaurantMenuItem = ({data}) =>{
  const [isAdded, setIsAdded] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const isPresentAt = cartItems.findIndex(
      (el) => el.card.info.id === data.card.info.id
    );
    setIsAdded(isPresentAt >= 0);
    setQuantity(cartItems?.[isPresentAt]?.inStock);
  }, [cartItems]);

  const dispatch = useDispatch();
  // Dispatch an action
  const handleAddItem = (item) => {
   
    dispatch(addItem({ ...item, inStock: 1 }));
  };
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
          <div className="relative">
            {data?.card?.info?.imageId?
          <img className="h-24 rounded-lg"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    data?.card?.info?.imageId
                }
            />
            :
            <img
              className="h-24 rounded-lg"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/77be09c11155f69ce5835185a5c5bbe2"}
              alt="item"
            />
              }
              <div className="absolute z-10 top-20 ml-9">
                {isAdded && quantity?
              <div className=" flex justify-between w-[78px] bg-white border shadow-2xl text-green-600 font-semibold rounded-md">
              <button className='w-6' onClick={()=>dispatch(decreaseQuantity(data.card.info.id))}>-</button>
          <div>{quantity}</div>
          <button className='w-6' onClick={()=>dispatch(increaseQuantity(data.card.info.id))}>+</button>
          </div>
          :(
            <button
                className="p-0 w-20 sm:w-20 rounded-lg bg-white border shadow-2xl text-green-600 font-semibold"
                onClick={()=>handleAddItem(data)}
              >
                ADD+
              </button>
          )}
          </div>
          </div>
          </div>
          </div>
     )
}

export default  RestaurantMenuItem;