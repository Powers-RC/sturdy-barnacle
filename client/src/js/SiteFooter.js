import React, {Component} from "react";
const copyrightIcon = require("../static/icons/copyright.png");
const twitterIcon = require("../static/icons/twitter-logo-button.png");
const instagramIcon = require("../static/icons/instagram-logo.png");
const linkedinIcon = require("../static/icons/linkedin.png");
const folderIcon = require("../static/icons/folder.png");


export class SiteFooter extends Component{
  render(){
    return(
      <div className="Site-Footer">
          <p className="Site-Footer-Copyright">&copy; Cameron Powers</p>
          <p className="Site-Footer-Cv">CV<img src={folderIcon} alt="Resume/CV Icon" height="15" width="15"/></p>
          <p className="Site-Footer-Social-Media">
              <span>Follow me on social media:</span>
              <img src={linkedinIcon} alt="Linkedin Icon" height="15" width="15"/>
              <img src={instagramIcon} alt="Instagram Icon" height="15" width="15"/>
              <img src={twitterIcon} alt="Twitter Icon" height="15" width="15"/>
          </p>
      </div>
    );
  }
}