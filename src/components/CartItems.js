// import {ImageSwiggy} from '../components/constants';
import { useDispatch } from "react-redux";
import { addItem, removeItem} from '../utils/cartSlice';
import { useSelector } from "react-redux";
const CartItems = ({data}) =>{
  const cartItems = useSelector(store =>store.cart.items);
  const totalItems = useSelector(store =>store.cart);
  const dispatch = useDispatch();
    const handleClick=(data)=>{
        dispatch(addItem(data));
    };
    const handleRemove=(id)=>{
        dispatch(removeItem(id));
    };
    return(
            <div className='card rounded-lg p-2 m-2 shadow-lg w-56'>
               <img
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  data?.imageId
                }
                />
        <h1 className='font-bold'>{data?.name}</h1>
        <h3>Rupees: {data?.price/100}</h3>
        <h4>{data?.description}</h4>
        <div className="flex flex-wrap">
        <button className='bg-green-300' onClick={(()=>handleClick(data))}>Add</button>
        <div>{data?.quantity}</div>
        <button className='bg-blue-300' onClick={(()=>handleRemove(data?.id))}>Remove</button>
        </div>
            </div>
          )
        }
export default CartItems;