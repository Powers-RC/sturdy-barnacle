import React, {Component} from "react";
const fishIcon = require("../static/icons/fish.png");

export class About extends Component{
    componentDidMount(){
      // Create the observer
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting && entry.target.classList.contains('about-line-animation')) {
            //Update url to about section
            let pageState = document.getElementById("about-section").innerHTML,
              title = "About Page",
              urlPath = window.location.href;

            let newUrlPath = urlPath.split("#")[0] + "#about-section";
            window.history.pushState({"html":pageState}, title, newUrlPath);
            entry.target.classList.add('line-animation-right');
          } else if(entry.isIntersecting && entry.target.classList.contains('about-text-animation'))
            entry.target.classList.add('typewriter-right');
        });
      });

      observer.observe(document.querySelector('.about-line-animation'));
      observer.observe(document.querySelector('.about-text-animation'));
    }

  render(){
    return(
      <div id="about-section" className="About-Section">
        <div className="about-title">
            <div className="animation-responsive-container-right">
                <div className="about-line-animation animation-responsive-line"></div>
                <div className="animation-responsive-text">
                  <h2 className="about-text-animation">About</h2>
                </div>
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
