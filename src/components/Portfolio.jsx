import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../App.css";

function Portfolio() {
  return (
    <div className="Container" id="portfolio">
      <div className="album py-5 bg-light" id="cardAlbum">
        <h1>Portfolio</h1>
      </div>

      <ReactBootstrap.Row className="row" id="portfolioRow">
        <ReactBootstrap.Col className="col-sm-4" id="portfolioCol">
          <ReactBootstrap.Card className="card mb-3 shadow-sm" id="profileCard githubCard">
            <a href="https://github.com/SWHorne" target="blank">
              <img
                id="cardImage"
                src={require("../Images/githubProfile.png")}
                alt="Github profile"
              />
            </a>
            <ReactBootstrap.Card.Body className="card-body">
              <ReactBootstrap.Card.Text className="card-text">
                <a href="https://github.com/SWHorne" target="blank" id="cardTextLink">
                  Click here
                </a>{" "}
                to see my projects and repositories.
              </ReactBootstrap.Card.Text>
            </ReactBootstrap.Card.Body>
          </ReactBootstrap.Card>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-sm-4" id="portfolioCol">
          <ReactBootstrap.Card className="card mb-3 shadow-sm" id="profileCard ResumeCard">
            <a href={require("./Resume.pdf")} target="blank">
              <img
                id="cardImage"
                src={require("../Images/Resume.png")}
                alt="Resume"
              />
            </a>
            <ReactBootstrap.Card.Body className="card-body">
              <ReactBootstrap.Card.Text className="card-text">
                To view my qualifications and work history, please{" "}
                <a href="./Resume.pdf" target="blank" id="cardTextLink">
                  click here.
                </a>
              </ReactBootstrap.Card.Text>
            </ReactBootstrap.Card.Body>
          </ReactBootstrap.Card>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-sm-4" id="portfolioCol">
          <ReactBootstrap.Card className="card mb-3 shadow-sm" id="profileCard linkedIncard">
            <a href="https://www.linkedin.com/in/samuelhorne/" target="blank">
              <img
                id="cardImage"
                src={require("../Images/LinkedInProfile.png")}
                alt="Linked profile"
              />
            </a>
            <ReactBootstrap.Card.Body className="card-body">
              <ReactBootstrap.Card.Text className="card-text">
                You can also find me on{" "}
                <a
                  href="https://www.linkedin.com/in/samuelhorne/"
                  target="blank" id="cardTextLink"
                >
                  LinkedIn.
                </a>
              </ReactBootstrap.Card.Text>
            </ReactBootstrap.Card.Body>
          </ReactBootstrap.Card>
        </ReactBootstrap.Col>
      </ReactBootstrap.Row>
    </div>
  );
}

export default Portfolio;
