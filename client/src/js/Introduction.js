import React, { Component } from 'react';
import logo from '../static/logo.svg';
import trout from '../static/photos/troutImage.jpg';
import flyIcon from '../static/icons/fly-icon.png';

export class Introduction extends Component {

  render() {
    return (
      <div id="intro-section" className="center-div">
        <div className="trout-intro">
          <img src={trout} alt="Trout Image" width="100%"/>
        </div>
        <div className="intro-container">
          <tr/>
          <h2 className="typewriter-left">Welcome</h2>
          <img class="title-icon" alt="fly icon" src={flyIcon}/>
        </div>
      </div>
    );
  }
}



