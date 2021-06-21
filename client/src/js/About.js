import React, {Component} from "react";
const fishIcon = require("../static/icons/fish.png");

export class About extends Component{

  render(){
    return(
      <div id="about-section" className="About-Section">
        <div className="about-title">
            <div className="animation-separator">
                <hr className="line-animation-right"/>
                <h2 className="typewriter-right">About</h2>
            </div>
        </div>
        <br/>
        <div className="portrait-block">
          <h3>A little more about me...</h3>
            <p>
              I have been working as a software engineer for the last two year 
              transitioning away from analytics... and boy to I love it! Most of my 
              time is spent getting that important frontend information to is
              safe location. API's! As of recently I have really developed a passion
              for mobile and frontend development as well. This is why I decided 
              to FINALLY build my own webpage.  
            </p>
        </div>
      </div>
    );
  }
}
