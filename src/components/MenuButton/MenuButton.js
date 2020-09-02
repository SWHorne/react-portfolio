import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button className="openbtn" id="roundButton"
              onMouseDown={this.props.handleMouseDown}>☰ MENU</button>
    );
  }
}
 
export default MenuButton;