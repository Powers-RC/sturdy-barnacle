import React, { Component } from 'react';
import trout from '../static/photos/troutImage.jpg';
import portrait from "../static/photos/weddingPortrait.jpg";

export class Introduction extends Component {
  componentDidMount() {
    // Create the observer
    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting && entry.target.classList.contains('intro-line-animation')) {
          entry.target.classList.add('line-animation-left');
        } else if (entry.isIntersecting && entry.target.classList.contains('intro-text-animation'))
          entry.target.classList.add('typewriter-left');
      });
    });

    observer.observe(document.querySelector('.intro-line-animation'));
    observer.observe(document.querySelector('.intro-text-animation'));
  }

  render() {
    return (
      <div id="intro-section" className="center-div">
        <div className="trout-intro">
          <img src={trout} alt="Trout Image" width="100%" />
        </div>
        <div className="animation-responsive-container">
          <div className="intro-line-animation animation-responsive-line" ></div>
          <div className="animation-responsive-text">
            <h2 className="intro-text-animation">Introduction</h2>
          </div>
        </div>
        <br />
        <div className="intro-content">
          <img className="self-portrait" src={portrait} alt="Self Portrait of Author" />
          <div className="intro-welcome">
            <h3>Hey There!</h3>
            <p>
              My name is Cameron, I am a software engineer from the same place as "The Coldest Tasting Beer In The World",
              that's right, Golden, Colorado. I am currently living in the hill of South Dakota, while working, and studying
              to get my masters in computer science. This site is currently under construction, more features to come!
            </p>
          </div>
        </div>
      </div >
    );
  }
}



