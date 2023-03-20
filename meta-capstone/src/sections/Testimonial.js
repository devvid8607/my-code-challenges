import React from "react";
import { Carousel } from "react-bootstrap";
import reviews from "../data/ReviewData";
import "../App.css";

function Testimonial() {
  return (
    <section id="testimonials" className="mt-2 pt-2">
      <h2 className="mt-2">Testimonials</h2>
      <Carousel variant="dark" interval={1000}>
        {reviews.map((c, index) => {
          return (
            <Carousel.Item
              key={index}
              interval={5000}
              style={{ color: "black" }}
            >
              <div
                style={{ height: 200, background: "#f8f9fa", color: "black" }}
              >
                <p>{c.text}</p>
              </div>
              <Carousel.Caption>
                <img src={c.image} alt="Avatar" class="avatar" />
                <p style={{ color: "black" }}>{c.name}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Testimonial;
