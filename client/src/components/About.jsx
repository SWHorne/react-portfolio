import React from "react";
import "../App.css";
import * as ReactBootstrap from "react-bootstrap";

function About() {
  return (
    <div className="Container" id="aboutContainer">
      <ReactBootstrap.Row className="row" id="aboutHeadRow">
        <ReactBootstrap.Col className="col-md-12" id="aboutHeadCol1">
        <h1 id="about">About Me</h1>
        </ReactBootstrap.Col>
      </ReactBootstrap.Row>
      <ReactBootstrap.Row className="row" id="aboutheadRow">
        <ReactBootstrap.Col className="col-md-3" id="profilePicCol">
          <img
            id="profilePic"
            alt="Sam Horne"
            src={require("../Images/ProfilePic.png")}
          />
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-md-8" id="aboutheadCol2">
          
          <p>
            I'm a utah based full stack web developer.I have over five years
            experience working with APIs and databases. Most recently I've
            worked for InMoment, where I've worked closely with our clients to
            create and maintain customer and employee experience surveys and
            reporting. I've become the subject matter expert in creating
            integrated web surveys. I'm comfortable working with large data
            sets. I've helped numerous clients migrate their data from their
            previous CX platform into InMoment's.
          </p>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-md-1" id="emptyCol"><div></div></ReactBootstrap.Col>
      </ReactBootstrap.Row>
    </div>
  );
}

export default About;
