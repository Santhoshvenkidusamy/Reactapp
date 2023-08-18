import React from "react";
import logo from "./Images/logo.png";
import userIcon from "./Images/user icon.png";

export const HeaderComponent = () =>(
  <div>
    <header className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit" >
            <i class="fa fa-search"></i>
            Submit
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </div>
)