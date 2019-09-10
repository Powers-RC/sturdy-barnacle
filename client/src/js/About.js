import React, {Component} from "react";
const fishIcon = require("..//static/icons/fish.png");

export class About extends Component{

  render(){
    return(
      <div id="about-section" className="About-Section">
        <img  src={fishIcon} alt="Fish Icon" height="50" width="50"/>
        <p>TESTING!!!!</p>
      </div>
    );
  }
}