import React, { Component } from 'react';

export class WorkHistory extends Component {
    componentDidMount(){
      // Create the observer
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting && entry.target.classList.contains('work-line-animation')) {
            //Update url to work history section
            let pageState = document.getElementById("work-section").innerHTML,
              title = "Work Page",
              urlPath = window.location.href;

            let newUrlPath = urlPath.split("#")[0] + "#work-section";
            window.history.pushState({"html":pageState}, title, newUrlPath);
            entry.target.classList.add('line-animation-left');
          } else if(entry.isIntersecting && entry.target.classList.contains('work-text-animation'))
            entry.target.classList.add('typewriter-left');
        });
      });

      observer.observe(document.querySelector('.work-line-animation'));
      observer.observe(document.querySelector('.work-text-animation'));
    }

  render() {
    return (
        <div id="work-section">
            <div className="animation-responsive-container">
                <div className="work-line-animation animation-responsive-line"></div>
                <div className="animation-responsive-text">
                  <h2 className="work-text-animation">Work History</h2>
                </div>
            </div>
          <div>

          </div>
        </div>
    );
  }
}



