import React, { Component } from "react";
import MenuButton from "./components/MenuButton/MenuButton.js";
import Menu from "./components/Menu/Menu.js";
import "./App.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
        <div id="home">
          <div className="row" id="aboutheadRow">
            <div className="col-md-3" id="aboutHeadCol1">
              <img
                id="profilePic"
                alt="Sam Horne"
                src={require("./Images/ProfilePic.png")}
              />
            </div>
            <div className="col-md-9" id="aboutheadCol2">
              {/* <h1 id="about">About Me</h1>
              <p>
                I'm a utah based full stack web developer.I have over five years
                experience working with APIs and databases. Most recently I've
                worked for InMoment, where I've worked closely with our clients
                to create and maintain customer and employee experience surveys
                and reporting. I've become the subject matter expert in creating
                integrated web surveys. I'm comfortable working with large data
                sets. I've helped numerous clients migrate their data from their
                previous CX platform into InMoment's.
              </p> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div id="portfolio">
                  {/* <div className="album py-5 bg-light">
                    <h1>Portfolio</h1>
                  </div>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card mb-3 shadow-sm" id="profileCard">
                        <a href="https://github.com/SWHorne" target="blank">
                          <img
                            id="cardImage"
                            src={require("./Images/githubProfile.png")}
                            alt="Github profile"
                          />
                        </a>
                        <div className="card-body">
                          <p className="card-text">
                            <a href="https://github.com/SWHorne" target="blank">
                              Click here
                            </a>{" "}
                            to see my projects and repositories.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card mb-3 shadow-sm" id="profileCard">
                        <a href={require("./Assets/Resume.pdf")} target="blank">
                          <img
                            id="cardImage"
                            src={require("./Images/Resume.png")}
                            alt="Resume"
                          />
                        </a>
                        <div className="card-body">
                          <p className="card-text">
                            To view my qualifications and work history, please{" "}
                            <a
                              href={require("./Assets/Resume.pdf")}
                              target="blank"
                            >
                              click here.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card mb-3 shadow-sm" id="profileCard">
                        <a
                          href="https://www.linkedin.com/in/samuelhorne/"
                          target="blank"
                        >
                          <img
                            id="cardImage"
                            src={require("./Images/LinkedInProfile.png")}
                            alt="Linked profile"
                          />
                        </a>
                        <div className="card-body">
                          <p className="card-text">
                            You can also find me on{" "}
                            <a
                              href="https://www.linkedin.com/in/samuelhorne/"
                              target="blank"
                            >
                              LinkedIn.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div id="contact">
            {/* <div className="container" id="contactContainer">
              <div className="row" id="contactHeadRow">
                <div className="col-md-12" id="contactHeadCol">
                  <h1>Contact</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="section-title">Please reach out to me.</h4>

                  <ul className="list-unstyled" id="contactInfo">
                    <li>
                      <i>
                        <img
                          src={require("./Images/Phone.png")}
                          alt="phone icon"
                          id="contactIcons"
                        />
                      </i>
                      <a href="tel:8012432261">801-243-2261</a>
                    </li>
                    <li>
                      <i>
                        <img
                          src={require("./Images/Mail_icon.png")}
                          alt="mail icon"
                          id="contactIcons"
                        />
                      </i>
                      <a href="mailto: swhorne@gmail.com">swhorne@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
