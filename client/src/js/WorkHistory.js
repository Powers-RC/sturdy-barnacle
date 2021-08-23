import React, { Component } from 'react';
import { GoldenWestJob } from './jobs/GoldenWestJob';
import { XentityJob } from './jobs/XentityJob';

export class WorkHistory extends Component {
    constructor(props){
      super(props);
      this.state = {selectedJob: "GWIS"};
      this.handleJobClick = this.handleJobClick.bind(this);
    }

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
    
    handleJobClick(event){
      console.log(event.target);
      this.setState({selectedJob: event.target.value});
    }


  render() {
    const selectedJob = this.state.selectedJob;
    let jobContent = <GoldenWestJob/>;
    if(selectedJob === "GWIS"){
      jobContent = <GoldenWestJob/>
    } else if(selectedJob === "CDOT"){
      jobContent = <XentityJob/>
    }
    return (
        <div id="work-section">
            <div className="animation-responsive-container">
                <div className="work-line-animation animation-responsive-line"></div>
                <div className="animation-responsive-text">
                  <h2 className="work-text-animation">Work History</h2>
                </div>
            </div>
            <div>
              <div className="work-history">
                <div className='work-radio-selection'>
                  <div className="work-buttons current-position">
                    <button className={selectedJob === "GWIS"? "work-button selection": "work-button"} 
                      type="button" id="gwis" name="jobs" value="GWIS" 
                      onClick={this.handleJobClick}>Golden West Technologies</button>
                  </div>
                  <div className="work-buttons">
                    <button className={selectedJob === "CDOT"? "work-button selection": "work-button"} 
                      id="cdot" name="jobs" value="CDOT"
                      onClick={this.handleJobClick}>Xentity</button>
                  </div>
                </div>
                {jobContent}
              </div>
            </div>
          <div>

          </div>
        </div>
    );
  }
}



