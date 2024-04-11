import React from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
import { BrowserRouter, NavLink } from "react-router-dom";
import myPdf from '../resumeList/resume11April2024.pdf'

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} style={{ color: "#1EAE98" }} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <BrowserRouter>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link smooth={true} offset={-100} to="home" className="nav-link active" aria-current="page">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} offset={-100} to="about" className="nav-link">
                    {" "}
                    about me{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} offset={-100} to="experience" className="nav-link">
                    {" "}
                    Experience{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} offset={-100} to="projects" className="nav-link">
                    {" "}
                    projects{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} offset={-100} to="testimonials" className="nav-link">
                    {" "}
                    Certificates{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} offset={-100} to="contacts" className="nav-link">
                    {" "}
                    contact{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={myPdf} target="_blank" download="Anshuman Resume.pdf">
                    {" "}
                    Résumé{" "}
                  </NavLink>
                </li>
              </ul>
              </BrowserRouter>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;


