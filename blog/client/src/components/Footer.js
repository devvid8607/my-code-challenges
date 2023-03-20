import React from "react";
import { Card } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div
        className="text-center p-3"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
      >
        <a className="text-dark" href="https://mdbootstrap.com/">
          Developed using React, Node and SQL
        </a>
      </div>
    </footer>
  );
}

export default Footer;
