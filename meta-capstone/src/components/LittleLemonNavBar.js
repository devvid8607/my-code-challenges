import React from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function LittleLemonNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="">
          <img
            src="./assets/headLogo.png"
            id="logo-img"
            alt="img"
            width="200"
            heigth="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="ml-auto justify-content-end"
        >
          <Nav className="ml-auto mx-2">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/reservations">
              Reservations
            </Nav.Link>
            <Nav.Link as={Link} to="/orderonline">
              Order Online
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LittleLemonNavBar;
