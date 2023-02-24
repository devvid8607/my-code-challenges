import { Navbar as Navbarbs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";
export function Navbar() {
  const { openCart, closeCart, cartItems, cartQuantity } = useShoppingCart();
  return (
    <Navbarbs sticky="top" className="bg-white shadow-sm mb-3">
      <Nav className="ms-4">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={NavLink} to="/store">
          Store
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav>
      <Button
        onClick={openCart}
        variant="outline-primary"
        className="ms-auto me-5 rounded-circle"
        style={{ position: "relative" }}
      >
        <FaShoppingCart size={20} />
        <div
          className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%,25%)",
          }}
        >
          {cartQuantity}
        </div>
      </Button>
    </Navbarbs>
  );
}
