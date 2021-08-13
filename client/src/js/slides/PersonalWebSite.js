import React from 'react';
import {Slide} from 'pure-react-carousel'

const githubIcon = require("../../static/icons/github.png");
const personWebPagePhoto= require("../../static/photos/personalWebPage.png");


export class PersonWebSiteSlide extends React.Component{

    render(){
        return(
            <Slide index={0}>
                <div className="project-container">
                    <div className="project-title-container">
                        <h3 className="project-title">Project Name</h3>
                        <h2>Strudy Barnicle</h2>
                    </div>
                    <div className="project-details">
                        <div className="project-description">
                            <p>
                                Most of my work thus far has been strictly employer directed, 
                                so I made it a goal to change that and start creating tools and apps that I design 
                                from inspiration to creation. This site is the first step in displaying the works to
                                come.
                            </p>
                            <h4>Tools</h4>
                            <ul className="project-tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js</li>
                            </ul>
                            <div>
                                <a href="https://github.com/Powers-RC/sturdy-barnacle">
                                    <img src={githubIcon} alt="Github Link To Personal Project" height="3%" width="3%"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-depiction">
                            <img className="project-picture" src={personWebPagePhoto} alt="Personal site project"/>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}
