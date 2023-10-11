import { Link } from "react-router-dom";
import appLogo from '../Images/swiggy.png';
import { useContext } from "react";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const HeaderComponent =() =>{
  // const {user} = useContext(userContext);
  const cartItems = useSelector(store =>store.cart.items);
  const totalItems = useSelector(store =>store.cart);
    return(
    <div className='flex justify-between shadow-xl w-full  z-50'>
      <Link to='/'>
    <img  src={appLogo} alt="app" className='p-2 mt-2 ml-6 h-12 hover:'/>
    </Link>
    <div className=''>
      <ul className='flex py-6'>
      <li className='px-2'><Link to='/'>Home</Link></li>
        <li className='px-2'><Link to='/about'>About</Link></li>
        <li className='px-2'><Link to='/contact'>Contact</Link></li>
        <li className='px-2'><Link to='/instamart'>Instamart</Link></li>
        <li className='px-2'><Link to='/cart'>Cart {totalItems?.totalItemsCount}</Link></li>
      </ul>
    </div>
  </div>
    )
}

export default HeaderComponent;