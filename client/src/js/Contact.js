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
            entry.target.classList.add('typewriter-left-contact');
        });
      });

      observer.observe(document.querySelector('.contact-text-animation'));
      observer.observe(document.querySelector('.contact-line-animation'));
    }
    
     render(){
       return(
         <div id="contact-section" className="Contact-Section">
            <div className="Contact-Heading">
                <div className="animation-separator">
                    <hr className="contact-line-animation"/>
                    <h2 className="contact-text-animation">Contact</h2>
                </div>
            </div>
            <br/>
            <p>If you have any questions or would like to know more, please reach out.</p>
            <br/>
            <div className="contact-links">
                <a href="mailto:powerscameron@ymail.com">
                  <img src={mailIcon} alt="Mail Icon For Email Address" height="20" width="20"/>
                </a>
              <a href="tel:+13072159505">
                <img src={phoneIcon} alt="Phone Icon" height="20" width="20"/>
              </a>
              <a href="www.powers.us" target="new">
                <img src={globeIcon} alt="Globe Icon" height="20" width="20"/>
              </a>
            </div>
        </div>
       );
     }
   }
