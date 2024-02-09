import React from "react";
import "./Navsidebar.css";

function Navsidebar() {
  return (
    <div className="navSideBar">
      <ul className="navbar">
        <div className="logoArea">
          <a href="#">
            <img src="assets\images\logo.png" alt="logo" />
          </a>
        </div>
        <li>Cart</li>
        <li className="active">Market</li>
        <li>Settings</li>
        <li>Logout</li>
        <div className="rectangle"></div>
      </ul>
    </div>
  );
}

export default Navsidebar;
