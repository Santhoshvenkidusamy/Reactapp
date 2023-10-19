import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user.name);
    const handleClick = () =>{
    event.preventDefault();
    if(user){
   if(user.name !== name){
    console.log(user.name);
       toast.error('User Not Found . Please sign up again');
   }
   else if(user.password !== password){
    toast.error('Incorrect Password');
   }
   else if(user?.name === name && user?.password === password){
    toast.success('Login Successfull')
    navigate('/cart');
    localStorage.setItem('login',true);
   }
   else{
    toast.error('Something Went Wrong. Please Sign Up again!')
   }
}
   else{
    toast.error('No Credentials Found. Please Sign Up!')
    navigate('/signin');
   }
    }
    return (
      <div className="w-full h-[90%] flex items-center justify-center mt-10">
        <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-4 mt-1 w-[50%] md:w-[50%] sm:w-[70%]  mx-auto">
          <div>
            <div style={{ color: "#282C3F" }} className="text-3xl font-bold">
              Login
            </div>
            <div className="text-base mt-2">
              or &nbsp;
              <Link to="/signin" style={{ color: "#FC8019" }}>
                create an account
              </Link>
            </div>
          </div>
          <div>
            <img
              className="w-[100px] h-[105px]"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/Image-login_btpq7r"
              alt="cart"
            />
          </div>
        </div>
        <form onSubmit={handleClick}>
          <div className="flex flex-col items-center">
            <input 
            className="p-3 w-[50%] md:w-[50%] sm:w-[70%] mx-auto outline-none border rounded"
              type='text'
              placeholder="Name"
              value={name}
              required
              onChange={(e)=>setName(e.target.value)}
              />
            <input
             className="border w-[50%] md:w-[50%] sm:w-[70%]  mx-auto p-3 my-4 outline-none"
             type='password'
             placeholder="Password"
             value={password}
             required
             onChange={(e)=>setPassword(e.target.value)}
             />
            <button style={{ backgroundColor: "#FC8019" }}
              className="text-white p-3 text-lg font-bold  w-[50%] md:w-[50%] sm:w-[70%] ">Login</button>
              <p className="text-xs  mt-2">
              <span style={{ color: "#686B78" }}>
                By clicking on Login, I accept the &nbsp;
              </span>
              Terms & Conditions & Privacy Policy
            </p>
          </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;