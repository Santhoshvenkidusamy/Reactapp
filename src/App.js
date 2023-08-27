import React, { createContext, lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import  HeaderComponent  from "./components/Header";
import  Body  from "./components/Body";
import  Footer  from "./components/Footer";
import Contact from "./components/Contact";
//import About from '../src/components/About'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Profile from '../src/components/Profile';
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
//import RestaurantMenu from "./components/RestrauntMenu";
// Composing Comopnentss
const About = lazy(()=>import('../src/components/About'))
const RestaurantMenu = lazy(()=>import('./components/RestrauntMenu'))
const App = () => {
  const[user,setUser]=useState({
    name:'demo',
    email:'santhosh.v@gmail.com',
});
  //const userContext = createContext(UserContext);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{
        user:user,
        setUser:setUser,
      }}
      >
      <HeaderComponent/>
      <Outlet/>
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<Body />,
      },
      {
        path:'/about',
        element:<Suspense><About /></Suspense>,
        children:[
          {
            path:'profile',
            element:<Profile />,
          }
        ]
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
        path:'/cart',
        element:<Cart />,
      },
      {
        path:'/restraunt/:id',
        element:<Suspense fallback={<Shimmer />}><RestaurantMenu/></Suspense>,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
