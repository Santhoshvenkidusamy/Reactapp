import { Outlet } from "react-router-dom";
import { Component, useContext, useState } from "react";
import ProfileClass from "./ProfileClass";
import Profile from '../components/Profile';
import userContext from "../utils/UserContext";

const About = () =>{
    const {user,setUser} = useContext(userContext);
    setUser({
        name:'Santhosh',
        email:'santhosh.v@gmail.com',
    });
    // const abc = (data) =>{
    //     setData(data);
    // }

    return(
    <>
    <div>About Food App</div>
    {/* <Profile data={setData}/> */}
    {user.name}
    {/* <ProfileClass/> */}
    </>
)
}

export default About;