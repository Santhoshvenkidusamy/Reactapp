import { useState,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/FireBase";
import { useDispatch } from "react-redux";
const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const address = useRef(null)
    const [errorMessage,setErrorMessage] = useState('');
    const handleSubmit = (e) =>{
      e.preventDefault()
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
         const user = userCredential.user;
         updateProfile(user, {
          displayName: name.current.value,
          photoURL: address.current.value
        }).then(() => {
          const {displayName, photoURL, email} = auth.currentUser;
          dispatch(addUser({
            name:displayName,
            address:photoURL,
            email:email,
          }))
        }).catch((error) => {
         setErrorMessage(error)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage)
    })
  }
    return (
      <div className="w-full h-[90%] flex items-center justify-center mt-10">
        <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-4 mt-1 w-[50%] md:w-[50%] sm:w-[70%]  mx-auto">
          <div>
            <div style={{ color: "#282C3F" }} className="text-3xl font-bold">
              Sign Up
            </div>
            <div className="text-base mt-2">
              or &nbsp;
              <Link to="/login" style={{ color: "#FC8019" }}>
                already have an account
              </Link>
            </div>
          </div>
          <div>
            <img
              className="w-[100px] h-[105px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/Image-login_btpq7r"
              alt="cart"
            />
          </div>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="flex flex-col items-center">
          
            <input
             className="p-3 w-[50%] md:w-[50%] sm:w-[70%] mx-auto outline-none my-2 border rounded" 
             placeholder="Name"
             type='text'
             required
             
             ref={name}
             
             />
            <input 
            className="border w-[50%] md:w-[50%] sm:w-[70%]  mx-auto p-3 my-2 outline-none" 
            placeholder="Email"
            type='email'
            required
            
            ref={email}
           
            
            />
            <input
             className="border w-[50%] md:w-[50%] sm:w-[70%]  mx-auto p-3 my-2 outline-none" 
             placeholder="Password"
             type='password'
             required
             ref={password}
            
             />
            <input 
            className="border w-[50%] md:w-[50%] sm:w-[70%]  mx-auto p-3 my-2 outline-none"
            placeholder="Address"
            type='text'
            required
            ref={address}
             />
             <span className='text-red-700 font-bold'>{errorMessage}</span>
            <button style={{ backgroundColor: "#FC8019" }}
              className="text-white p-3 text-lg font-bold  w-[50%] md:w-[50%] sm:w-[70%] ">Sign Up</button>
              
              <p className="text-xs  mt-2">
              <span style={{ color: "#686B78" }}>
                By clicking on Signup, I accept the &nbsp;
              </span>
              Terms & Conditions & Privacy Policy
            </p>
          </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignIn;