import React, { Component } from 'react';
 export class NavigationBar extends Component{
  constructor(props){
    super(props)

    this.toggleNavbarIcon = this.toggleNavbarIcon.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = {
      collapsed:true,
      isMobile:false,
      windowWidth:null,
      windowHeight: null
    }
  }

    toggleNavbarIcon() {
      let x = document.getElementById("rootNav");
      if (x.className === "dynamicNav") {
        x.className += " responsive";
      } else {
        x.className = "dynamicNav";
      }
    }

    updateWindowDimensions(){
      this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
    }

    componentDidMount(){
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render(){
      return(
        <div class='dynamicNav' id="rootNav">
          <div className="dynamicNavIcon">
            <a href="javascript:void(0);" class="icon" onClick={this.toggleNavbarIcon}>
              &#9776;
            </a>
          </div>
          <div className="navbar">
            <span>
              <a href='#visual-intro'>Home</a>
              <a href='#intro-section'>Introduction</a>
              <a href='#about-section'>About</a>
              <a href='#work-section'>Work</a>
              <a href='#projects-section'>Projects</a>
              <a href='#contact-section'>Contact</a>
            </span>
          </div>
        </div>
      );
    }
 }

