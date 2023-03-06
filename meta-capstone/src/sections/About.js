import React from "react";
import "../App.css";

function About() {
  return (
    <section id="aboutUs" className="mt-2 mx-5 two-column">
      <h2 className="mt-4">About Us</h2>
      <div id="hero_details">
        <span>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p className="text-start">
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>
        </span>
      </div>
      <div className="mt-3">
        <img src="./assets/main1.png" id="hero_img" alt="test" />
      </div>
    </section>
  );
}

export default About;
