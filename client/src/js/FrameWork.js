import React, { Component } from 'react';
import { NavigationBar } from './Navbar.js';
import { Route,  Switch} from "react-router-dom";
import { App } from "./App";
import { About } from "./About";
import { Contact } from "./Contact";
import { Content } from "./Content";



export default class FrameWork extends Component{
  constructor(props){
    super(props);
    this.state = {
      atHome:true
    }
  }

  render(){
    return(
     <div className="root">
        <header className="App-header">
          <NavigationBar />
        </header>
        <div id='main'>
          <App/>
          <Content/>
          <About/>
          <Contact/>
        </div>
        <footer>
            <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
        </footer>
     </div>
    );
  }
}