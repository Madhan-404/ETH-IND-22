/** @format */

import React from "react";
import "./style.module.css";
import animation from "./animation.json";
import Lottie from "react-lottie-player";
const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Lottie
        src={animation}
        background="transparent"
        style={{ width: 300, height: 300 }}
        loop
        autoPlay
      ></Lottie>
    </div>
  );
};

export default Home;
