import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavBar() {
  return (
    <nav>
      <Navbar className="bg-light">
        <Navbar.Brand as={Link} to="/" className="mx-5 px-5">
          Cocktail Pro
        </Navbar.Brand>
        <Navbar.Collapse className="ml-auto justify-content-end">
          <Nav className="ml-auto mx-2">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto mx-2">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default MyNavBar;
