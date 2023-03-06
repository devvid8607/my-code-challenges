import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="hero" className="mt-4 two-column">
      <div id="hero_details">
        <span>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button className="btn btn-secondary my-2">Reserve a Table</Button>
        </span>
      </div>
      <div>
        <img src="./assets/hero.png" id="hero_img" alt="test" />
      </div>
      {/* </Stack> */}
    </section>
  );
}

export default Hero;
