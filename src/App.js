import React, { createContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import  Body  from "./components/Body";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Profile from '../src/components/Profile';
import Instamart from "./components/Instamart";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestrauntMenu";
import Header from "./components/Header";
import Offers from "./components/Offers";
import Search from "./components/Search";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import SignIn from "./components/SignIn";
import { ToastContainer } from "react-toastify";
import Congrats from "./components/Congrats";
import { addUser, removeUser } from "./utils/userSlice";

const About = lazy(()=>import('../src/components/About'))
const App = () => {
  return (
    <>
    <Provider store={store}>
      <Header/>
      <Outlet/>
      {/* <Footer /> */}
    </Provider>
    <ToastContainer />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'',
        element:<Body />,
      },
      {
        path:'/about',
        element:<Suspense><About /></Suspense>,
      },
      {
        path:'/profile',
        element:<Profile />,
      },
      {
        path:'/contact',
        element:<Contact />,
      },
      {
        path:'/instamart',
        element:<Instamart />,
      },
      {
        path:'/offers',
        element:<Offers />,
      },
      {
        path:'/cart',
        element:<Cart />,
      },
      {
        path:'restaurant/:id',
        element:<RestaurantMenu/>,
      },
      {
        path:'search',
        element:<Search/>,
      },
      {
        path:'login',
        element:<Login/>,
      },
      {
        path:'signin',
        element:<SignIn/>,
      },
      {
        path:'success',
        element:<Congrats/>,
      },
      
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

