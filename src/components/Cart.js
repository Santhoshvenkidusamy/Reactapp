import { useSelector } from "react-redux";
import CartItems from '../components/CartItems';
const Cart = () =>{
    const cartdata = useSelector(store=>store.cart.items);
    return(
        <>
        <h1>Cart - {cartdata.length}</h1>
        <div className="flex flex-wrap">
        { cartdata.map((data,index)=>{
            return<CartItems key={index} data={data} />
            })
}
</div>
        </>
    )
}

export default Cart;