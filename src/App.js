// import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import MenuButton from "./components/MenuButton/MenuButton.js";
// import Menu from "./components/Menu/Menu.js";
import "./App.css";

// Start Importing Components
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer";
// import Switch from "react-bootstrap/esm/Switch";
import Download from "./components/Resume";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route path={["/", "/Home"]} component={Home} exact />
            <Route path="/About" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Resume" component={Download} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
