import React from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";

function Highlights() {
  return (
    <>
      <section id="highlight_heading">
        <div>
          <h2 className="mt-5 pt-5 px-4">Specials</h2>
        </div>
        <div className="mt-5 pt-5">
          <Button variant="secondary">Order Online</Button>
        </div>
      </section>

      <section id="highlights">
        <Card id="card">
          <Card.Img variant="top" src="./assets/main1.png" />
          <Card.Body>
            <Card.Title>Green Salad</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card id="card">
          <Card.Img variant="top" src="./assets/main2.png" />
          <Card.Body>
            <Card.Title>Green Salad</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card id="card">
          <Card.Img variant="top" src="./assets/main3.png" />
          <Card.Body>
            <Card.Title>Green Salad</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

export default Highlights;
