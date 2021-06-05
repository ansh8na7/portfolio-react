import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//react popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  //netflix
  const openPopupNetflix=(imgName,altText,demoLink)=>{
        const content = (
          <>
            <img
              className="portfolio-image-popup-box"
              src={imgName}
              alt={altText}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              asperiores odit harum saepe cum perferendis voluptates voluptate
              impedit dicta quas.
            </p>
            {demoLink != null ? (
              <>
                <b>Demo: </b>
                <a
                  className="hyper-link"
                  onClick={() =>
                    window.open(
                      {demoLink}
                    )
                  }
                >
                  https://github.com/ansh8na7/RealTime-Face-Recognition-system
                </a><br/>
              </>
            ) : (
              ""
            )}
            <b>Github: </b>
            <a
              className="hyper-link"
              onClick={() =>
                window.open("https://github.com/ansh8na7/To-Do-List")
              }
            >
              https://github.com/ansh8na7/To-Do-List
            </a>
          </>
        );
        PopupboxManager.open({ content })
      }
      const popupboxConfig = {
        titleBar: {
          enable: true,
          text: "Netflix clone project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      };


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper d-flex flex-row justify-content-center">
          <div
            className="portfolio-image-box"
            onClick={() =>
              openPopupNetflix(netflix, "nextflix clone project", null)
            }
          >
            <img
              className="portfolio-image"
              src={netflix}
              alt="nextflix clone project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() =>
              openPopupNetflix(cityGuide, "city guide project", null)
            }
          >
            <img
              className="portfolio-image"
              src={cityGuide}
              alt="city guide project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() =>
              openPopupNetflix(
                portfolio,
                "portfolio react project",
                "https://github.com/ansh8na7/RealTime-Face-Recognition-system"
              )
            }
          >
            <img
              className="portfolio-image"
              src={portfolio}
              alt="portfolio react project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() =>
              openPopupNetflix(
                taskManager,
                "task manager react project",
                "https://github.com/ansh8na7/RealTime-Face-Recognition-system"
              )
            }
          >
            <img
              className="portfolio-image"
              src={taskManager}
              alt="task manager react project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
