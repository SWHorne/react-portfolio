import React from "react";
import * as ReactBootstrap from "react-bootstrap";

import "../App.css";

function Footer() {
  return (
    <div className="Container" id="footerContainer">
      <ReactBootstrap.Navbar
        fixed="bottom"
        expand="md"
        bg="dark"
        variant="dark"
        id="Footer"
      >
        <ReactBootstrap.Nav className="mr-auto" id="mr-autoId">
          <ReactBootstrap.Nav.Link href="#" id="footerInvite">
            Please feel free to contact me.
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="tel:8012432261" id="FootLink">
            801-243-2261
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="tel:8012432261" id="footerIconLink">
            <img
              src={require("../Images/Phone.png")}
              alt="phone icon"
              id="footerLink"
            />
          </ReactBootstrap.Nav.Link>

          <ReactBootstrap.Nav.Link href="mailto: swhorne@gmail.com" id="FootLink">
            swhorne@gmail.com
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link
            href="mailto:swhorne@gmail.com"
            id="footerIconLink"
          >
            <img
              src={require("../Images/Mail_icon.png")}
              alt="email icon"
              id="footerLink"
            />
          </ReactBootstrap.Nav.Link>

          <ReactBootstrap.Nav.Link href="https://github.com/SWHorne" id="FootLink">
            GitHub
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="https://github.com/SWHorne" id="footerIconLink">
            <img
              src={require("../Images/GitHub.png")}
              alt="phone icon"
              id="footerLink"
            />
          </ReactBootstrap.Nav.Link>

          <ReactBootstrap.Nav.Link href="https://www.linkedin.com/in/samuelhorne/" id="FootLink">
            LinkedIn
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="https://www.linkedin.com/in/samuelhorne/" id="footerIconLink">
            <img
              src={require("../Images/LinkedIn.png")}
              alt="phone icon"
              id="footerLink"
            />
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="/Resume" id="FootLink">
            Resume
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="/Resume" id="footerIconLink">
            <img
              src={require("../Images/Document.png")}
              alt="phone icon"
              id="footerLink"
            />
          </ReactBootstrap.Nav.Link>


        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar>
    </div>

    /* <div className="Container" id="footerContainer">
        <footer className="'Footer mt-auto py-3 bg-dark text-white">
          <div className="container">Please feel free to contact me.</div>

          <div id="phoneDiv">
            <i>
              <a href="tel:8012432261" id="contactIconLink">
                <img
                  src={require("../Images/Phone.png")}
                  alt="phone icon"
                  id="contactIcons"
                />
              </a>
            </i>
            <a href="tel:8012432261" id="phone">
              801-243-2261
            </a>
          </div>

          <div id="emailDiv">
            <i>
              <a href="mailto:swhorne@gmail.com" id="contactIconLink">
                <img
                  src={require("../Images/Mail_icon.png")}
                  alt="mail icon"
                  id="contactIcons"
                />
              </a>
            </i>
            <a href="mailto: swhorne@gmail.com" id="email">
              swhorne@gmail.com
            </a>
          </div>
          </ReactBootstrap.Navbar>

        </footer>

        <ReactBootstrap.Row className="row" id="contactHeadRow">
          <ReactBootstrap.Col className="col-sm-3" id="contactHeadCol">
            <p>Contact</p>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row className="row">
          <ReactBootstrap.Col className="col-sm-3">
            <p className="section-title">
              Please feel free to reach out to me.
            </p>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col className="col-sm-3" id="phoneCol">
            <div id="phoneDiv">
              <i>
                <a href="tel:8012432261" id="contactIconLink">
                  <img
                    src={require("../Images/Phone.png")}
                    alt="phone icon"
                    id="contactIcons"
                  />
                </a>
              </i>
              <a href="tel:8012432261" id="phone">
                801-243-2261
              </a>
            </div>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col className="col-sm-3" id="emailCol">
            <div id="emailDiv">
              <i>
                <a href="mailto:swhorne@gmail.com" id="contactIconLink">
                  <img
                    src={require("../Images/Mail_icon.png")}
                    alt="mail icon"
                    id="contactIcons"
                  />
                </a>
              </i>
              <a href="mailto: swhorne@gmail.com" id="email">
                swhorne@gmail.com
              </a>
            </div>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col className="col-sm-3" id="emptyCol">
            <div></div>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </div>
    // </div>*/
  );
}

export default Footer;
