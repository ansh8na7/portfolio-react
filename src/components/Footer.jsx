import React from 'react';
import { Link } from "react-scroll";
import { BrowserRouter, NavLink } from "react-router-dom";
import myPdf from '../resumeList/AnshumanResume_july23.pdf'
import { 
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    RedditIcon,
    LinkedinIcon,
} from "react-share";
const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Bengaluru, Karnataka.</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+919461291573">+91 9461291573</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:anshumanjf@gmail.com">anshumanjf@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link className="footer-nav" smooth={true} offset={-110} to="home">Home</Link><br />
                                <Link className="footer-nav" smooth={true} offset={-100} to="about">About Me</Link><br />
                                <Link className="footer-nav" smooth={true} offset={-100} to="projects">Projects</Link><br />
                            </div>
                            <div className="col">
                                <Link className="footer-nav" smooth={true} offset={-100} to="education">Education</Link><br />
                                <BrowserRouter><NavLink className="footer-nav" to={myPdf} target="_blank" download="Anshuman Resume.pdf">
                                    Résumé
                                </NavLink></BrowserRouter><br />
                                <Link className="footer-nav" smooth={true} offset={-100} to="contacts">Contact Me</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/ansh8na7"}
                                quote={"Fullstack developer"}
                                hashtag="#reactjs"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton url={"https://github.com/ansh8na7"}
                                quote={"Fullstack developer"}
                                hashtag="#reactjs">
                                     <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://github.com/ansh8na7"}
                                quote={"Fullstack developer"}
                                hashtag="#reactjs"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://github.com/ansh8na7"}
                                quote={"Fullstack developer"}
                                hashtag="#reactjs"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            copyright&copy;
                            {new Date().getFullYear()}&nbsp;Anshuman Narayan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
