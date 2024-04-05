import React from "react";
import "./style.css";

import Button from "../../../../../components/Button";
import metro from "../../../../../assets/images/home/metro.png";

const Hero = () => {
  return (
    <div className="flex align-center hero-container user-container">
      <img className="metro-image" src={metro} alt="metro" />
      <div className="flex column space-evenly hero-text">
        <h1>Uncover Urban Excitement: Welcome to Your Gateway to the City.</h1>

        <p>
          Welcome to our subway system, your gateway to effortless city
          exploration. Hop on board and experience the convenience of seamless
          travel to diverse destinations across town. From bustling markets to
          serene parks, our trains are your ticket to discovering the heart of
          the city. Let the adventure begin!
        </p>

        <a className="reg-btn bg-primary font-bold white" href="#map-container">Discover Now!</a>
      </div>
    </div>
  );
};

export default Hero;
