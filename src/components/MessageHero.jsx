import React from "react";
import popular from "../assets/popular.svg";

const MessageHero = () => {
  return (
    <div>
      <img src={popular} className="w-48 lg:w-80 rounded-lg shadow-2.5xl" />
    </div>
  );
};

export default MessageHero;
