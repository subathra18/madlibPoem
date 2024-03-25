import React from "react";
import heart from "../assets/heart.svg";

const Hero = () => {
  return (
    <>
      <img src={heart} className="w-48 lg:w-80 rounded-lg shadow-2.5xl" />
    </>
  );
};

export default Hero;
