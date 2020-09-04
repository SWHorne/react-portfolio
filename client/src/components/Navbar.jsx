import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../App.css";

function Navbar() {
    return (
      <div>
        <ReactBootstrap.Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
          id="Header"
        >
          <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav" className="collapseMenu">
            <ReactBootstrap.Nav className="mr-auto" id="mr-autoId">
              <ReactBootstrap.Nav.Link href="/Home" id="navbarLink">
                Home
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/About" id="navbarLink">
                About
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Portfolio" id="navbarLink">
                Portfolio
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Resume" id="navbarLink">
                Resume
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </div>
    );
  }
  
  export default Navbar;