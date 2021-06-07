import React, {Component} from "react";
   const mailIcon = require("..//static/icons/envelope.png");
   const globeIcon = require("..//static/icons/earth.png");
   const phoneIcon = require("..//static/icons/smartphone.png");


   export class Contact extends Component{
     render(){
       return(
         <div id="contact-section" className="Contact-Section">
           <div className="Contact-Heading">
               <h2 className="typewriter-left">Contact</h2>
               <img src={mailIcon} alt="Mail Icon" height="40" width="40"/>
           </div>
           <br/>
           <p>If you have any questions or would like to know more, please reach out.</p>
           <br/>
           {/* TODO: Just change these into icon links */}
           <div className="contact-links">
             <div className="contact-mail">
                <img src={mailIcon} alt="Mail Icon For Email Address" height="20" width="20"/>
                <a href="mailto:powerscameron@ymail.com">powerscameron@ymail.com</a>
             </div>
             <div className="contact-phone">
              <img src={phoneIcon} alt="Phone Icon" height="20" width="20"/>
              <a href="tel:+13072159505">1 (307) 215-9505</a>
             </div>
             <div className="contact-web">
              <img src={globeIcon} alt="Globe Icon" height="20" width="20"/>
              <a href="www.powers.us" target="new">www.powers.us</a>
             </div>
          </div>
        </div>
       );
     }
   }
