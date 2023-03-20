import React from "react";
import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div className="mt-3 mx-5 my-5">
      <Hero />
      <Highlights />
      <Testimonial />
      <About />
    </div>
  );
}

export default Home;
