import React, { useReducer } from "react";
import { useState, useRef, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

  
const Navbar = () => {
  return (
    <nav className="con-nav">
      <ul className="con-nav-item">
        <>
          <img className="logo" src={logo}></img>
        </>
        <Link to="/">
          <motion.button
            className="btn-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.button>
        </Link>
        <Link to="/about">
          <motion.button
            className="btn-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About me
          </motion.button>
        </Link>
        <Link to="/contact">
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            contact me
          </motion.button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;



