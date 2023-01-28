import React from "react";
import BG from "./background.png";
const Hero = () => {
  return (
    <section
      className="h-screen"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
    ></section>
  );
};

export default Hero;
