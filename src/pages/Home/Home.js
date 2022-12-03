/** @format */

import React from "react";
import "./style.module.css";
import animation from "./animation.json";
import Lottie from "react-lottie-player";
import Hero from "../../Components/Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Lottie
        src={animation}
        background="transparent"
        style={{ width: 300, height: 300 }}
        loop
        autoPlay
      ></Lottie> */}
    </div>
  );
};

export default Home;
