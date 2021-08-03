import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { PersonWebSiteSlide } from './slides/PersonalWebSite';

const githubIcon = require("../static/icons/github.png")

export class Projects extends React.Component{
    componentDidMount(){
      // Create the observer
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          let projectLine = entry.target.querySelector('project-line-animation');
          let projectText = entry.target.querySelector('project-text-animation')
          // If the element is visible
          if (entry.isIntersecting && entry.target.classList.contains('project-line-animation')) {
            entry.target.classList.add('line-animation-right');
          } else if(entry.isIntersecting && entry.target.classList.contains('project-text-animation')) {
            entry.target.classList.add('typewriter-right');
          }
          //TODO: I think this needs to be in a component did update to remove class
          if(projectLine){
            projectLine.classList.remove('line-animation-right');
          }
          if(projectText){
            projectText.classList.remove('typewriter-right');
          }
        });
      });

      observer.observe(document.querySelector('.project-line-animation'));
      observer.observe(document.querySelector('.project-text-animation'));
    }

  render(){
    return(
      <div id="projects-section">
        <div className="animation-responsive-container-right">
            <div className="project-line-animation animation-responsive-line"></div>
            <div className="animation-responsive-text">
              <h2 className="project-text-animation">Projects</h2>
            </div>
        </div>
        <div>
          <CarouselProvider
            naturalSlideWidth={75}
            naturalSlideHeight={100}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>{PersonWebSiteSlide}</Slide>
              <Slide index={1}>
                <div className="projects-personal-website">
                  <div>
                      <div className="project-personal-site-info">
                          <h4>Fun Project Name</h4>
                          <h3>Strudy Barnicle</h3>
                          <p>
                              Most of my work thus far has been strictly employer directed, 
                              so I made it a goal to change that and start creating tools and apps that I design 
                              from inspiration to create. This site is the first step in displaying the works to
                              come.
                          </p>
                      </div>
                      <div>
                          {/* <img src={} alt="Personal site project image"/> */}
                          <h4>Tools</h4>
                          <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>React.js</li>
                          </ul>
                          <a href="https://github.com/Powers-RC/sturdy-barnacle">
                              <img src={githubIcon} alt="Github Link To Personal Project" height="3%" width="3%"/>
                          </a>
                      </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            </CarouselProvider> 
        </div>
      </div>
    )
  }

}
