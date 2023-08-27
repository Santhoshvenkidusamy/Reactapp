import { Link } from "react-router-dom";
import appLogo from '../Images/appLogo.png';
import { useContext } from "react";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const HeaderComponent =() =>{
  const {user} = useContext(userContext);
  const cartItems = useSelector(store =>store.cart.items);
  const totalItems = useSelector(store =>store.cart);
    return(
    <div className='flex justify-between shadow-xl w-full'>
      <Link to='/'>
    <img  src={appLogo} alt="app" className='p-2 mt-4 h-24'/>
    </Link>
    <div className=''>
      <ul className='flex py-10'>
        <div>{user?.name}</div>
      <li className='px-2'><Link to='/'>Home</Link></li>
        <li className='px-2'><Link to='/about'>About</Link></li>
        <li className='px-2'><Link to='/contact'>Contact</Link></li>
        <li className='px-2'><Link to='/instamart'>Instamart</Link></li>
        <li className='px-2'><Link to='/cart'>Cart{cartItems.length}({totalItems?.totalItemsCount})</Link></li>
      </ul>
    </div>
  </div>
    )
}

export default HeaderComponent;