import React, { Component } from 'react';
import { NavigationBar } from './Navbar.js';
import { Route,  Switch} from "react-router-dom";
import { App } from "./App";
import { About } from "./About";
import { Contact } from "./Contact";
import { Content } from "./Content";
import { SiteFooter } from "./SiteFooter";



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
          <SiteFooter/>
        </div>
        <footer>
            <div className="Site-Footer">
              <p>I did not draw the art on this page! If you would like to see more of K. Clarke amazing work please visit his <a href="http://www.kenny-clarke.com/artwork/">page</a></p>
              <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
              <a href="https://www.vecteezy.com/free-vector/fly-fishing">Fly Fishing Vectors by Vecteezy</a>
            </div>
        </footer>
     </div>
    );
  }
}