import React from "react";
import logo from "./logo.svg";
import { social, links } from "./dataModalSidebar";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="{`sidebar show-sidebar`}">
      <div className="sidebar-header">
        <img src={logo} alt="" className="logo" />
        <button>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
