import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
            entry.target.classList.add('typewriter-right-projects');
          }
          //TODO: I think this needs to be in a component did update to remove class
          if(projectLine){
            projectLine.classList.remove('line-animation-right');
          }
          if(projectText){
            projectText.classList.remove('typewriter-right-projects');
          }
        });
      });

      observer.observe(document.querySelector('.project-text-animation'));
      observer.observe(document.querySelector('.project-line-animation'));
    }

  render(){
    return(
      <div id="projects-section">
        <div className="animation-separator">
            <hr className="project-line-animation"/>
          <h2 className="project-text-animation">Projects</h2>
        </div>
        <div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            </CarouselProvider> 
        </div>
      </div>
    )
  }

}
