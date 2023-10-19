import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignIn = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [signingUp, setSigningUp] = useState(false);
    const handleSubmit = () =>{
        const user = {
            name: name,
            email: email,
            password: password,
            address: address,
          };
        
          // Convert the user object to a JSON string and store it in local storage
          localStorage.setItem("user", JSON.stringify(user));
        navigate('/login')
        toast.success('Credentials saved succesfully');
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
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/Image-login_btpq7r"
              alt="cart"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
          
            <input
             className="p-3 w-[50%] md:w-[50%] sm:w-[70%] mx-auto outline-none my-2 border rounded" 
             placeholder="Name"
             type='text'
             required
             onChange={(e)=>setName(e.target.value)}
             value={name}
             />
            <input 
            className="border w-[50%] md:w-[50%] sm:w-[70%]  mx-auto p-3 my-2 outline-none" 
            placeholder="Email"
            type='email'
            required
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            
            />
            <input
             className="border w-[50%] md:w-[50%] sm:w-[70%]  mx-auto p-3 my-2 outline-none" 
             placeholder="Password"
             type='password'
             required
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
             />
            <input 
            className="border w-[50%] md:w-[50%] sm:w-[70%]  mx-auto p-3 my-2 outline-none"
            placeholder="Address"
            type='text'
            required
            onChange={(e)=>setAddress(e.target.value)}
            value={address}
             />
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