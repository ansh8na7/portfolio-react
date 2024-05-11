import React from 'react';
import author from "../me.jpeg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5 px-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="photo-wrap mb-4">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                        Hello! I am Anshuman. I'm currently working at Wells Fargo as a
                        Software Engineer. I'm Full-Stack Web Developer with experience in
                        Spring Boot, JEE, Python and MERN(MongoDB, Express, ReactJS and NodeJS).
                        I create responsive websites that are displayed on all devices desktops and
                        smartphones.
                        <br />
                        I've also learnt neural networks and I'm quite proeficient in
                        languages like  Java, python, javascript and c++.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe
