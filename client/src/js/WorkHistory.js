import React, { Component } from 'react';

export class WorkHistory extends Component {
    componentDidMount(){
      // Create the observer
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting && entry.target.classList.contains('work-line-animation')) {
            entry.target.classList.add('line-animation-left');
          } else if(entry.isIntersecting && entry.target.classList.contains('work-text-animation'))
            entry.target.classList.add('typewriter-left-work-history');
        });
      });

      observer.observe(document.querySelector('.work-text-animation'));
      observer.observe(document.querySelector('.work-line-animation'));
    }

  render() {
    return (
        <div id="work-section">
            <div className="animation-separator">
                <hr className="work-line-animation"/>
                <h2 className="work-text-animation">Work History</h2>
            </div>
          <div>

          </div>
        </div>
    );
  }
}



