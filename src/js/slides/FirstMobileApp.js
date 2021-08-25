import React from 'react';
import {Slide} from 'pure-react-carousel'

const githubIcon = require("../../static/icons/github.png");
const mobileAppPhoto= require("../../static/photos/notebook.jpeg");


export class FirstMobileAppSlide extends React.Component{

    render(){
        return(
            <Slide index={0}>
                <div className="project-container">
                    <div className="project-title-container">
                        <h3 className="project-title">Project Name</h3>
                        <h2>Mootbox</h2>
                    </div>
                    <div className="project-details">
                        <div className="project-description">
                            <p>
                                I am developing my first mobile application. I hope to have the an alpha out
                                by the end of the year, and something in the app store by mid 2021.
                            </p>
                            <h3>Tools</h3>
                            <ul className="project-tech-stack">
                                <li>React-Native</li>
                                <li>Php</li>
                                <li>CSS</li>
                            </ul>
                            <div className="project-github-link">
                                <a href="https://github.com/Powers-RC/Mootbox">
                                    <img src={githubIcon} alt="Github Link To Personal Project" height="10%" width="10%"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-depiction">
                            <img className="project-picture" src={mobileAppPhoto} alt="notebook"/>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}
