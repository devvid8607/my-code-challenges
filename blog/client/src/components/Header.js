import React, { useContext } from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../context/AuthContext";
import Logo from "../img/logo.png";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <nav>
      <Navbar>
        <Navbar.Brand as={Link} to="/" className="mx-5 px-5">
          {/* <Nav.Link as={Link} to="/"> */}
          <Image src={Logo} style={{ width: 150, height: 80 }}></Image>
          {/* </Nav.Link> */}
        </Navbar.Brand>
        <Navbar.Collapse className="ml-auto justify-content-end">
          <Nav className="ml-auto mx-2">
            <Nav.Link as={Link} to="/?cat=art">
              ART
            </Nav.Link>
            <Nav.Link as={Link} to="/?cat=science">
              SCIENCE
            </Nav.Link>
            <Nav.Link as={Link} to="/?cat=food">
              FOOD
            </Nav.Link>
            <Nav.Link as={Link} to="/?cat=tech">
              TECHNOLOGY
            </Nav.Link>
            <Nav.Link as={Link} to="/?cat=cinema">
              CINEMA
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/write">
              <button className="header-write">WRITE</button>
            </Nav.Link>
            <span className="mt-2 mx-2">{currentUser?.username}</span>
            {currentUser ? (
              <span
                className="mt-2 "
                style={{ color: "grey", cursor: "pointer" }}
                onClick={logout}
              >
                LOGOUT
              </span>
            ) : (
              <Nav.Link as={Link} to="/login">
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default Header;
