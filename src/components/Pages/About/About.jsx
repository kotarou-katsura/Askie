import React from "react";
import "./About.css";
import icon_img from "../../../assets/katsura.jpg";
const About = () => {
  return (
    <div className="con-about">
      {/* <div className="icon_img"> */}
        <img className="icon_img" src={icon_img}></img>
      {/* </div> */}
      <div>
        <h1> Hey, I'm Katsura.</h1>
      <p>
        I am studying Computer Science at Kharazmi University in Karaj. I enjoy
        creating unique things and learning as well.
      </p>
      </div>
      
    </div>
  );
};

export default About;
