import React from 'react';

const githubIcon = require("../../static/icons/github.png");

export class PersonWebSiteSlide extends React.Component{

    render(){
        return(
            <div className="projects-personal-website">
                <div>
                    <div className="project-personal-site-info">
                        <h4>Fun Project Name</h4>
                        <h3>Strudy Barnicle</h3>
                        <p>
                            Most of my work thus far has been strictly employer directed, 
                            so I made it a goal to change that and start creating tools and apps that I design 
                            from inspiration to create. This site is the first step in displaying the works to
                            come.
                        </p>
                    </div>
                    <div>
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
        );
    }
}