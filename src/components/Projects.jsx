import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return (
      <div id="projects" className="projects">
        <h1 className="py-5">Projects</h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                  <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                  </div>
                  <h3>Project 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    rem
                  </p>
                </div>
              </div>
              {/* - */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                  <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                  </div>
                  <h3>Project 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    rem
                  </p>
                </div>
              </div>
              {/* - */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                  <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" />
                  </div>
                  <h3>Project 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    rem
                  </p>
                </div>
              </div>
              {/* - */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="box">
                  <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                  </div>
                  <h3>Project 4</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    rem
                  </p>
                </div>
              </div>
            </div>
          <div className="more-projects justify-content-center">more projects <a onClick={() => window.open("https://github.com/ansh8na7/")}> {"@ github.com/ansh8na7"}</a></div>
          </div>
      </div>
    );
}

export default Projects
