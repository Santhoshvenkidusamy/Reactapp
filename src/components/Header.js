import { Link, NavLink } from "react-router-dom";
import appLogo from '../Images/logo.svg';
import  Offer  from "../Images/offers.svg";
import  Search  from "../Images/search.svg";
import cart from "../Images/cart2.svg";
import  SignIn  from "../Images/signin.svg";
import  EmptyCart  from "../Images/cart.svg";
import  NonEmptyCart  from "../Images/cart2.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../utils/store";


const Header =() =>{
 
    const userData = useSelector((store) => store.user.items[0])
     const user = JSON.parse(localStorage.getItem('user'))
     const loggedIn = JSON.parse(localStorage.getItem('login'))
  
  const cartItems = useSelector(store =>store.cart.items);
  // const totalItems = useSelector(store =>store.cart);
  const length = cartItems.reduce((acc, curr) => {
    acc = acc + curr.inStock;
    return acc;
  }, 0);
    return(
    <div className='flex justify-between shadow-lg w-full sticky top-0 z-20 bg-white'>
      <Link to='/'>
    <img  src={appLogo} alt="app" className='p-2 mt-2 ml-6 h-12 hover:scale-110 hover:duration-300'/>
    </Link>
    <div style={{ color: "#3D4152" }}
        className="flex items-center text-base font-medium">
      <ul className='flex py-6'>
      <li className='px-4 flex flex-row items-center'>
      <Link to='/search'>
        <div className='flex items-center'>
          <img src={Search} alt='Search' />
          <span className="ml-3">Search</span>
        </div>
      </Link>
      </li>
      <li className='px-4 flex flex-row items-center'>
      <Link to='/offers'>
        <div className='flex items-center'>
          <img src={Offer} alt='Offer' className="svg-class" />
          <span className="ml-3">Offer</span>
        </div>
      </Link>
      </li>
      <li className='px-4 flex flex-row items-center'>
  {loggedIn || userData?.loggedIn?
      <Link to='/profile'>
        <div className='flex items-center'>
          <img src={SignIn} alt='Signin' />
          <span className="ml-3">{userData?userData?.name:user?.name}</span>
        </div>
      </Link>
      :
      <Link to='/login'>
         <div className='flex items-center'>
          <img src={SignIn} alt='Signin' />
          <span className="ml-3">Login</span>
        </div>
      </Link>
}
      </li>
      <li className='px-4 flex flex-row items-center'>
      <Link to='/cart'>
      {length === 0 ?
        <div className='flex items-center'>
          <img src={EmptyCart} alt='Offer' />
          <span className="ml-3">Cart</span>
          <span
                    style={{ color: "#686b78" }}
                    className="flex justify-center items-center min-w-[18px]  text-sm text-center  relative -top-[1.5px] right-[62px]"
                  >
                    0
                  </span>
        </div>
        :
        <div className='flex items-center'>
          <img src={cart} alt='Offer' />
          <span className="ml-3">Cart</span>
          <span
                    // style={{ color: "#686b78" }}
                    className="flex justify-center items-center min-w-[18px]  text-sm text-center  relative -top-[1.5px] right-[62px]"
                  >
                    {length}
                  </span>
        </div>
}
      </Link>
      </li>

      </ul>
    </div>
  </div>
    )
}

export default Header;