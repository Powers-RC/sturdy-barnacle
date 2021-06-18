import React, { Component } from 'react';
import trout from '../static/photos/troutImage.jpg';
import portrait from "../static/photos/portrait.jpg";

export class Introduction extends Component {

  render() {
    return (
      <div id="intro-section" className="center-div">
        <div className="trout-intro">
          <img src={trout} alt="Trout Image" width="100%"/>
        </div>
        <div className="intro-container">
          <span>
            <h2 className="typewriter-left">Welcome</h2>
          </span>
          <br/>
          <div className="intro-content">
            <img className="self-portrait" src={portrait} alt="Self Portrait of Author"/>
            <div className="intro-welcome">
              <h3>Hey There!</h3>
              <p>
                My name is Cameron, I am a software engineer from the same place as "The Coldest Tasting Beer In The World", 
                that's right, Golden, Colorado. I am currently living in the hill of South Dakota, while working, and studying
                to get my masters in computer science. This site is currently under construction, more features to come! 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



