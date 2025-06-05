import React, { useReducer } from "react";
import { useState, useRef, useEffect,forwardRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"
const Navbar =forwardRef( (props) => {
  return (
    <nav className="con-nav">
      <ul className="con-nav-item">
        <li><img className="logo" src={logo}></img></li>
        <li>Home</li>
        <li>About us</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
});

export default Navbar;

