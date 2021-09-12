import React from 'react';
import portfolioReact from "../images/portfolio-react.png";
import todolist from "../images/to-do-list.png";
import covid from '../images/covid.png';
import rtfrs from '../images/faceRecognition.jpg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait,faSmileBeam, faListAlt, faFileCode } from "@fortawesome/free-solid-svg-icons";
import ProjectDetails from './ProjectDetails';





const Projects = () => {
    const indProjects = [{
        imgName: portfolioReact,
        name:"Portfolio Website",
        icon: faPortrait,
        desc:"A freelancer Portfolio Website made using react 17, bootstrap 5 and css.",
        links:{
          github:"https://github.com/ansh8na7/portfolio-react",
          hosted:"https://ansh8na7.github.io/portfolio-react/"
        }
    },{
      imgName: covid,
      name: "Covid 19 Tracker India",
      icon: faFileCode,
      desc: "A python application made using tkinter to display the real time covid-19 data directly fetched from the website of mohfw, GOI using WebScrapping with beautiful soup 4 library.",
      links: {
        github: "https://github.com/ansh8na7/Covid19-Tracker-India",
        hosted: null
      }
    },{
      imgName: todolist,
      name: "To Do List",
      icon: faListAlt,
      desc: "A to do list website made using html, css, express js, node js and mongodb. It is a responsive website which stores data on mongodb hosted server which can be accessed from anywhere.",
      links:{
          github:"https://github.com/ansh8na7/To-Do-List",
          hosted:"https://stormy-gorge-09957.herokuapp.com"
        }
    },{
      imgName: rtfrs,
      name: "Real Time Face Detection System",
      icon: faSmileBeam,
      desc: "A face recognition system based on facenet. It uses opencv,tensorflow, mtcnn and svm to recognise faces in real time.",
      links:{
          github: "https://github.com/ansh8na7/RealTime-Face-Recognition-system",
          hosted: null
        }
    }]
    return (
      <div id="projects" className="projects">
        <h1 className="py-5">Projects</h1>
          <div className="container">
            <div className="row">
            {indProjects.map(project=>{
              return (<div className="col-lg-3 col-md-6 col-sm-6">
                <ProjectDetails imgName={project.imgName} name={project.name} icon={project.icon} desc={project.desc} links={project.links}/>
              </div>)
            })}
            </div>
          <div className="more-projects justify-content-center">more projects <a onClick={() => window.open("https://github.com/ansh8na7/")}> {"@ github.com/ansh8na7"}</a></div>
          </div>
      </div>
    );
}

export default Projects
