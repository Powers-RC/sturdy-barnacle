import React, {Component} from "react";
const fishIcon = require("../static/icons/fish.png");
const portrait = require("../static/photos/portrait.jpg");

export class About extends Component{

  render(){
    return(
      <div id="about-section" className="About-Section">
        <div className="about-title">
            <h2 className="typewriter-right">About</h2>
            <img  src={fishIcon} alt="Fish Icon" height="50" width="50"/>
        </div>
        <div className="portrait-block">
            <p>
                <img  src={portrait} alt="Self Portrait of Author" height="300" width="400" max-width="100%"/>
                Testing to see if the text I am writing will float around my portrait in the about section of my webpagae.
                <br/>
            </p>
        </div>
      </div>
    );
  }
}
