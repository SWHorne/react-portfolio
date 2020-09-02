// import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";

// import MenuButton from "./components/MenuButton/MenuButton.js";
// import Menu from "./components/Menu/Menu.js";
import "./App.css";

// Start Importing Components

import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
// import Resume from "./components/Resume/Resume";
// import Error from "./components/Error/Error";

function App() {
  return (
    <main>
      <Router>
        <div>
          <About />
          <Portfolio />
          <Contact />
        </div>
      </Router>
    </main>
  );
}

export default App;
