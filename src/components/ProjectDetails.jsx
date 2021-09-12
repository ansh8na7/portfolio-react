import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// popup box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const ProjectDetails = ({imgName,name,icon,desc,links}) => {
    let n = desc.length;
    let desc1 = desc.slice(0,70);
    if(desc1.length<n) desc1 = desc1+"...";

    const popupboxConfig = {
        titleBar: {
          enable: false,
          text: name,
        },
        fadeIn: true,
        fadeInSpeed: 500,
      };
      
    const openPopup = () => {

        const content = (
            <>
            <div className="container">
                
            
            <h3>{name}</h3>
                <img
                    className="portfolio-image-popup-box"
                    src={imgName}
                    alt={name+" image"}
                />
                <p>
                    {desc}
                </p>
                <p style={{textAlign:"left"}}>
                    {links.hosted!=null?(<>
                        <b>hosted at: </b>
                        <a className="hyper-link"
                            onClick={() =>
                                window.open(
                                    links.hosted
                                )
                            }>{links.hosted}</a>
                        </>
                    ):""}
                    <br />
                    <b>source code: </b>
                    <a className="hyper-link"
                        onClick={() =>
                            window.open(
                                links.github
                            )
                        }>{links.github}</a>
                </p>
                </div>
            </>
        );
        PopupboxManager.open({ content })
    }
    
    


    return (
        <div>
            <div className="box" title="click to view details" onClick={openPopup}>
                <div className="circle">
                    <FontAwesomeIcon className="icon" icon={icon} size="2x" />
                </div>
                <h3>{name}</h3>
                <p>
                    {desc1}
                </p>
                <p>
                    <u>click for more.</u>
                </p>
            </div>
            <PopupboxContainer {...popupboxConfig} />
        </div>
    )
}

export default ProjectDetails
