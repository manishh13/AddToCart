import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Nav() {
  const mySelector = useSelector((state) => state.storeReducer);
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">ToolKIt</h1>
        <ul>
          <NavLink to="/product">
            <li>Products</li>
          </NavLink>
          <NavLink to="/about">
            <li>About us</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact Us</li>
          </NavLink>
        </ul>
        <NavLink to="/cart">
          {" "}
          <h3>My Cart{mySelector.length}</h3>
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
