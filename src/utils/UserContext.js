import { createContext } from "react";

const UserContext = createContext({
    user:{
    name:'Dummy',
    email:'dummy'
}})

export default UserContext;