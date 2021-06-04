import React, { Component } from 'react';
import logo from '../static/logo.svg';
import trout from '../static/photos/troutImage.jpg';
import flyIcon from '../static/icons/fly-icon.png';
import '../static/App.css';

export class App extends Component {

  render() {
    console.log(process.env);
    return (
      <div className="center-div">
        <div className="trout-intro">
          <img src={trout} alt="Trout Image" width="100%"/>
        </div>
        <div className="intro-container">
          <h1 class="title-intro">Welcome</h1>
          <img class="title-icon" alt="fly icon" src={flyIcon}/>
        </div>
      </div>
    );
  }
}



