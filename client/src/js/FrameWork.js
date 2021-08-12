import React, { Component } from 'react';
import { NavigationBar } from './Navbar.js';
import { Route,  Switch} from "react-router-dom";
import { Introduction } from "./Introduction";
import { About } from "./About";
import { WorkHistory } from "./WorkHistory";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { SiteFooter } from "./SiteFooter";
import "../static/css/General.css";
import "../static/css/ResponsiveLayout.css";
import "../static/css/Animation.css";



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
        <header className="App-Header">
          <NavigationBar />
        </header>
        <div id='main'>
          <Introduction/>
          <About/>
          <WorkHistory/>
          <Projects/>
          <Contact/>
        </div>
        <footer>
            <SiteFooter/>
            <div className="Site-Footer">
              <p>I did not draw the art on this page! If you would like to see more of K. Clarke amazing work please visit his <a href="http://www.kenny-clarke.com/artwork/">page</a></p>
              <div className="icon-disclaimer">Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
            </div>
        </footer>
     </div>
    );
  }
}
