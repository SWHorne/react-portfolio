import React from "react";
import * as ReactBootstrap from "react-bootstrap";

import "../../App.css";

function Contact() {
  return (
    <div id="contact">
      <div className="Container" id="contactContainer">
        <ReactBootstrap.Row className="row" id="contactHeadRow">
          <ReactBootstrap.Col className="col-md-12" id="contactHeadCol">
            <h1>Contact</h1>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row className="row">
          <ReactBootstrap.Col className="col-md-12">
            <h4 className="section-title">
              Please feel free to reach out to me.
            </h4>
            <ReactBootstrap.Row className="Row" id="contactLinksRow">
              <ReactBootstrap.Col className="col-sm-3" id="emptyCol">
                <div></div>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="col-sm-3" id="phoneCol">
                <div id="phoneDiv">
                  <i>
                  <a href="tel:8012432261" id="contactIconLink">
                    <img
                      src={require("../../Images/Phone.png")}
                      alt="phone icon"
                      id="contactIcons"
                    />
                    </a>
                  </i>
                  <a href="tel:8012432261" id="phone">801-243-2261</a>
                </div>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="col-sm-3" id="emailCol">
                <div id="emailDiv">
                  <i>
                      <a href="mailto:swhorne@gmail.com" id="contactIconLink">

                    <img
                      src={require("../../Images/Mail_icon.png")}
                      alt="mail icon"
                      id="contactIcons"
                      />
                      </a>
                  </i>
                  <a href="mailto: swhorne@gmail.com" id="email">swhorne@gmail.com</a>
                </div>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="col-sm-3" id="emptyCol">
                <div></div>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <ul className="list-unstyled" id="contactInfo"></ul>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </div>
    </div>
  );
}

export default Contact;
