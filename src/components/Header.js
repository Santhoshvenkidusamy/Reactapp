import { Link, useNavigate } from "react-router-dom";
import appLogo from '../Images/logo.svg';
import  Offer  from "../Images/offers.svg";
import  Search  from "../Images/search.svg";
import cart from "../Images/cart2.svg";
import  SignIn  from "../Images/signin.svg";
import  EmptyCart  from "../Images/cart.svg";
import  NonEmptyCart  from "../Images/cart2.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../utils/store";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/FireBase'
import { addUser, removeUser } from "../utils/userSlice";

const Header =() =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
       const {photoURL, email, displayName } = user;
       dispatch(addUser({ email:email,name:displayName,address:photoURL }))
       navigate('/')
     } else {
       
       dispatch(removeUser());
       
     }
   });
  return () => unsubscribe();
  },[])
    const userData = useSelector((store) => store.user)
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
          <span className="ml-3  hidden md:block ">Search</span>
        </div>
      </Link>
      </li>
      <li className='px-4 flex flex-row items-center'>
      <Link to='/offers'>
        <div className='flex items-center'>
          <img src={Offer} alt='Offer' className="svg-class" />
          <span className="ml-3 hidden md:block">Offer</span>
        </div>
      </Link>
      </li>
      <li className='px-4 flex flex-row items-center'>
  {userData ?
      <Link to='/profile'>
        <div className='flex items-center'>
          <img src={SignIn} alt='Signin' />
          <span className="ml-3 hidden md:block">{userData?.name}</span>
        </div>
      </Link>
      :
      <Link to='/login'>
         <div className='flex items-center'>
          <img src={SignIn} alt='Signin' />
          <span className="ml-3 hidden md:block">Login</span>
        </div>
      </Link>
}
      </li>
      <li className='px-4 flex flex-row items-center'>
      <Link to='/cart'>
      {length === 0 ?
        <div className='flex items-center'>
          <img src={EmptyCart} alt='Offer' />
          <span className="ml-3 hidden md:block">Cart</span>
          <span
                    style={{ color: "#686b78" }}
                    className="flex justify-center items-center min-w-[18px]  text-sm text-center right-[18px] relative md:-top-[1.5px] md:right-[62px]"
                  >
                    0
                  </span>
        </div>
        :
        <div className='flex items-center'>
          <img src={cart} alt='Offer' />
          <span className="ml-3 hidden md:block">Cart</span>
          <span
                    // style={{ color: "#686b78" }}
                    className="flex justify-center items-center min-w-[18px]  text-sm text-center  right-[18px] relative md:-top-[1.5px] md:right-[62px]"
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