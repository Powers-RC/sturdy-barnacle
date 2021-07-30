import React, {Component} from "react";
   const mailIcon = require("..//static/icons/envelope.png");
   const globeIcon = require("..//static/icons/earth.png");
   const phoneIcon = require("..//static/icons/smartphone.png");

   export class Contact extends Component{

    componentDidMount(){
      // Create the observer
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting && entry.target.classList.contains('contact-line-animation')) {
            entry.target.classList.add('line-animation-left');
          } else if(entry.isIntersecting && entry.target.classList.contains('contact-text-animation'))
            entry.target.classList.add('typewriter-left');
        });
      });

      observer.observe(document.querySelector('.contact-text-animation'));
      observer.observe(document.querySelector('.contact-line-animation'));
    }
    
     render(){
       return(
         <div id="contact-section" className="Contact-Section">
            <div className="Contact-Heading">
                <div className="animation-responsive-container">
                    <div className="contact-line-animation animation-responsive-line"></div>
                    <div className="animation-responsive-text">
                      <h2 className="contact-text-animation">Contact</h2>
                    </div>
                </div>
            </div>
            <br/>
            <p>If you have any questions or would like to know more, please reach out.</p>
            <br/>
            <div className="contact-links">
              <div className="contact-triangle">
                <a href="mailto:powerscameron@ymail.com">
                  <img src={mailIcon} alt="Mail Icon For Email Address" height="20" width="20"/>
                </a>
              </div>
            </div>
        </div>
       );
     }
   }
