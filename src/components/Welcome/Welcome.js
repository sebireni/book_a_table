import React from "react";

import halfpizza from "../../assets/images/halfpizza.png";
import logo from "../../assets/images/pizza_logo.png";

import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <img className="halfPizza" src={halfpizza} alt="pizza" />

      <div className="textWrapper">
        <img src={logo} alt="logo" />
        <h1>Pizza Seekers'</h1>
      </div>
    </section>
  );
};

export default Welcome;
