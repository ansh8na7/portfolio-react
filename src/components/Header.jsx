import React from 'react';
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I am Anshuman!</h1>
                <Typed
                    className="typed-text"
                    strings={["Web design", "Web Development", "Machine learning"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} offset={-100} to="contacts" className="btn-main-offer">contact me</Link>
            </div>
        </div>
    )
}

export default Header;
