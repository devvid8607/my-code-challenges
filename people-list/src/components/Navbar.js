import React from "react";
import { FaBars } from "react-icons/fa";

import logo from "./Image/logo.svg";
function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show container"></div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
}

export default Navbar;
