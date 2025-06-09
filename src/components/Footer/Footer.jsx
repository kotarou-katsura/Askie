import React from "react";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import telegram from "../../assets/telegram.png";
import "./Footer.css"


const Footer = () => {
  return (
    <div className="con-footer ">
        <p>© 2025 katsura</p>
      <ol className="con-icon">
        
        <li><a href="https://github.com/kotarou-katsura"><img className="footer-icon" src={github} alt="github"></img></a></li> 
        <li><a href="mailto:nargesAfzalidv@gmail.com"><img className="footer-icon"  src={email} alt="email"></img></a></li>
        <li><a href="https://t.me/afzalijx"><img className="footer-icon"  src={telegram} alt="telegram"></img></a></li>
      </ol>
    </div>
  );
};

export default Footer;
