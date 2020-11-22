import { motion } from 'framer-motion'
import React from 'react';
import "./../index.css";
import { FaGithub,FaExternalLinkAlt } from 'react-icons/fa'


 const boxVariants = {
     hover : {
        scale: 1.06,
        transition: {
        type: "spring"
     }
    }
 };
function Portfolio() {
    return (
        <section
        data-aos="fade-up"
        className="portfolio-container"
        name="portfolio"
        id="portfolio"
        >
        <h1 className="heading">Projects I have Built</h1>
        <div className="projects-container">
        {/* project 1: Todo App */}
        <motion.div
        className="projects"
        whileHover="hover"
        variants={boxVariants}
        
        >
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://docslam.mobiloitte.com/"
        >
        <div className="projects-images" id="todoApp"></div>
        </a>

       <div className="project-links">
           <div className="text">
           <h3>Docslam book using django</h3>
           </div>
           <div className="text">
           <h2>PYTHON | DJANGO| HTML5 | CSS | AJAX | JAVASCRIPT | JQUERY | POSTGRES | </h2>
</div>        
   <div className="icons">
         
           
           <a
           rel="noopener noreferrer"
           target="_blank"
           href="https://docslam.mobiloitte.com/"
           >
           </a>
           </div>
       </div>
        </motion.div>

        <motion.div
        variants={boxVariants}
        whileHover="hover"
        className="projects"
         >
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.classicumbrella"
        >
        <div className="projects-images" id="stopWatch"></div>
        </a>

       <div className="project-links">
           <div className="text">
           <h3>Classic Umbrella</h3>
           </div>
           <div className="text">

           <h2>PYTHON | DJANGO | DRF | POSTGRES | </h2>

</div>           <div className="icons">
           <a
           rel="noopener noreferrer"
           target="_blank"
           href="https://play.google.com/store/apps/details?id=com.classicumbrella"
           >
           </a>
           </div>
       </div>
        </motion.div>

        {/* Project 3 - Snake Game */}
        {/* <motion.div
        variants={boxVariants}
        whileHover="hover"
        className="projects"
         >
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/UmairShah90/Snake-Game-Using-JavaScript"
        >
        <div className="projects-images" id="snakeGame"></div>
        </a>

       <div className="project-links">
           <div className="text">
           <h3>Snake Game Using JS</h3>
           </div>

           <div className="icons">
           <a
           rel="noopener noreferrer"
           target="_blank"
           href="https://umairshah90.github.io/Snake-Game-Using-JavaScript/"
           >
           <i>
           <FaExternalLinkAlt id="live" size={30}/>
           {" "}
            </i>
           </a>
           </div>
       </div>
        </motion.div> */}

      

        </div>
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/UmairShah90"
        className="button-links"
      >
        <button className="button">More Projects</button>
      </a>
            
        </section>
    )
}

export default Portfolio;
