import React from "react";
import ReactDOM from "react-dom/client";
import  HeaderComponent  from "./components/Header";
import  Body  from "./components/Body";
import  Footer  from "./components/Footer";
// Composing Comopnentss

const App = () => {
  return (
    <div>
      <HeaderComponent/>
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
