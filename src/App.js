import React, { createContext, lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import  HeaderComponent  from "./components/Header";
import  Body  from "./components/Body";
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
import RestaurantMenu from "./components/RestrauntMenu";
import Footer from "./components/Footer";
// Composing Comopnentss
const About = lazy(()=>import('../src/components/About'))
// const RestaurantMenu = lazy(()=>import('./components/RestrauntMenu'))
const App = () => {
  return (
    <Provider store={store}>
      <HeaderComponent/>
      <Outlet/>
      {/* <Footer /> */}
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
        path:'',
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
        path:'restaurant/:id',
        element:<RestaurantMenu/>,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

