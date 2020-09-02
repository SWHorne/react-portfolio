import React from "react";
import { Link, useLocation } from "react-router-dom";

function MenuLinks() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={
            location.pathname === "/About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            location.pathname === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={
            location.pathname === "/Resume" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default MenuLinks;
