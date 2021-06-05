import React from 'react';
import author from "../me.jpg";

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
              Hello! I am Anshuman. I'm a student of Information science and
              egineering at RNSIT Bangalore. I'm Full-Stack Web Developer.
              Technologies I use is MERN(MongoDB, Express, ReactJS and NodeJS).
              I can also use django for backend development.I create responsive
              websites that are displayed on all devices desktops and
              smartphones.
              <br />
              I've also learnt neural netorks and I'm quite proeficient in
              languages like python, javascript and c++.
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutMe
