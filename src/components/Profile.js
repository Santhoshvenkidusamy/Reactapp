
import { signOut } from "firebase/auth";
import {auth} from '../utils/FireBase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Profile = () =>{
    const navigate = useNavigate()
    const userData = useSelector(store=>store.user)
    console.log(userData);

    useEffect(()=>{
      if(!userData){
        navigate('/')
      }
    },[userData])
    
const handleClick =()=>{
    signOut(auth).then(() => {
        dispatch(removeUser());
        navigate('/');
      }).catch((error) => {
        
      });
      
}
    return(
        <>
        <button
            onClick={handleClick}
            className="m-6 margin-left border p-2 border-red-400 rounded-md font-bold text-md"
          >
            LOGOUT
          </button>
        <div>My Profile</div>
       
        </>
    )
}
export default Profile;
