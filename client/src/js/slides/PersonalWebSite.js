import React from 'react';
import {Slide} from 'pure-react-carousel'

const githubIcon = require("../../static/icons/github.png");

export class PersonWebSiteSlide extends React.Component{

    render(){
        return(
            <Slide index={0}>
                <div className="project-container">
                    <div>
                        <h3 className="project-title">Fun Project Name</h3>
                        <h3>Strudy Barnicle</h3>
                        <div className="project-description">
                            <p>
                                Most of my work thus far has been strictly employer directed, 
                                so I made it a goal to change that and start creating tools and apps that I design 
                                from inspiration to creation. This site is the first step in displaying the works to
                                come.
                            </p>
                        </div>
                        <div className="project-depiction">
                            {/* <img src={} alt="Personal site project image"/> */}
                            <h4>Tools</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js</li>
                            </ul>
                            <a href="https://github.com/Powers-RC/sturdy-barnacle">
                                <img src={githubIcon} alt="Github Link To Personal Project" height="3%" width="3%"/>
                            </a>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}
