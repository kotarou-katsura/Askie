import React, { useReducer } from "react";
import { useState, useRef, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isWide, setIsWide] = useState(window.innerWidth > 480);
  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="con-nav">
      <>
        <img className="logo" src={logo}></img>
      </>
      <div onClick={() => setMenuIsOpen(!menuIsOpen)} className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="con-nav-item " style={isWide||menuIsOpen? {display:"flex"}:{display:"none"}}>
        <Link to="/Askie">
          <motion.button
            className="btn-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.button>
        </Link>
        <Link to="/Askie/about">
          <motion.button
            className="btn-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About me
          </motion.button>
        </Link>
        <Link to="/Askie/contact">
          <motion.button
            className="btn btn-nav"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact me
          </motion.button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
