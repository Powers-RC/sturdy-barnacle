import React, {Component} from "react";
const copyrightIcon = require("../static/icons/copyright.png");
const twitterIcon = require("../static/icons/twitter-logo-button.png");
const instagramIcon = require("../static/icons/instagram-logo.png");
const linkedinIcon = require("../static/icons/linkedin.png");
const folderIcon = require("../static/icons/folder.png");


export class SiteFooter extends Component{
  render(){
    return(
      <div className="site-footer">
          <br/>
          <p className="Site-Footer-Copyright">&copy; Cameron Powers</p>
          <p className="Site-Footer-Cv">CV<a href="https://drive.google.com/open?id=1mR-IAjk5cQl0v2cEdhELT3u7oomp3H3J"><img src={folderIcon} alt="Resume/CV Icon" height="15" width="15"/></a></p>
          <p className="Site-Footer-Social-Media">
              <span>Follow me on social media:</span>
              <a href="https://www.linkedin.com/in/powerscameron/" ><img src={linkedinIcon} alt="Linkedin Icon" height="15" width="15"/></a>
              <a href="https://www.instagram.com/powers_rc/?hl=en"><img src={instagramIcon} alt="Instagram Icon" height="15" width="15"/></a>
              <a href="https://twitter.com/PowersCameron"><img src={twitterIcon} alt="Twitter Icon" height="15" width="15"/></a>
          </p>
      </div>
    );
  }
}
