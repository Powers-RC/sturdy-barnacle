import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { PersonWebSiteSlide } from './slides/PersonalWebSite';
import "../static/css/Slide.css";

const githubIcon = require("../static/icons/github.png")

export class Projects extends React.Component {
  componentDidMount() {
    // Create the observer
    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        let projectLine = entry.target.querySelector('project-line-animation');
        let projectText = entry.target.querySelector('project-text-animation')
        // If the element is visible
        if (entry.isIntersecting && entry.target.classList.contains('project-line-animation')) {
            //Update url to projects section
            let pageState = document.getElementById("projects-section").innerHTML,
              title = "Projects Page",
              urlPath = window.location.href;

            let newUrlPath = urlPath.split("#")[0] + "#projects-section";
            window.history.pushState({"html":pageState}, title, newUrlPath);
          entry.target.classList.add('line-animation-right');
        } else if (entry.isIntersecting && entry.target.classList.contains('project-text-animation')) {
          entry.target.classList.add('typewriter-right');
        }
        //TODO: I think this needs to be in a component did update to remove class
        if (projectLine) {
          projectLine.classList.remove('line-animation-right');
        }
        if (projectText) {
          projectText.classList.remove('typewriter-right');
        }
      });
    });

    observer.observe(document.querySelector('.project-line-animation'));
    observer.observe(document.querySelector('.project-text-animation'));
  }

  render() {
    return (
      <div id="projects-section">
        <div className="animation-responsive-container-right">
          <div className="project-line-animation animation-responsive-line"></div>
          <div className="animation-responsive-text">
            <h2 className="project-text-animation">Projects</h2>
          </div>
        </div>
        <div>
          <CarouselProvider
            totalSlides={3}
            isIntrinsicHeight={true}
          >
            <Slider>
              <PersonWebSiteSlide />
              <Slide index={1}>
                <h1>This is a test for slide 2.</h1>
              </Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            <div className="carousel-buttons">
              <ButtonBack className="carousel-back-button">Back</ButtonBack>
              <ButtonNext className="carousel-next-button">Next</ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    );
  }

}
