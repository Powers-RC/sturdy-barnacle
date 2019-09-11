import React, { Component } from 'react';
import logo from '../static/logo.svg';
import '../static/App.css';

export class App extends Component {

  render() {
    console.log(process.env);
    return (
        <div id="visual-intro" className="App">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
          </div>
    );
  }
}



