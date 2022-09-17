import React from "react";

import halfpizza from "../../media/halfpizza.png";
import logo from "../../media/pizza_logo.png";

import "./Welcome.css";

const Welcome = () => {
  return (
    <section id="welcome">
      <img id="halfPizza" src={halfpizza} alt="pizza" />

      <div id="textWrapper">
        <img src={logo} alt="logo" />
        <h1>Pizza Seekers'</h1>
      </div>
    </section>
  );
};

export default Welcome;
