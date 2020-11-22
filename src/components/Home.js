import React, { useState, useEffect } from "react";
import "./../index.css";
import man from "./../images/man.png";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import {VerticleButton as ScrollUpButton } from 'react-scroll-up-button';

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingTwo(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);

  return (
    <section className="home-container" id="home" name="home">

      
      <ScrollUpButton />
     
       
      
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h4 className="welcome-content">WELCOME TO MY DEVFOLIO</h4>
        <br />
        <h1 className="main-content">
          Hi, I’m Aftab
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.7 }}
          >
            <span role="img" aria-label="Hand waving">
              👋
              
            </span>
          </motion.span>{" "}
        </h1>
        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                PYTHON | DJANGO | FLASK | MICROSERVICE | React Js | POSTGRES | REDIS | DOCKER | AWS |DevOP'S |
              </motion.h2>
            )}
          </AnimatePresence>
         
          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
              HTML | CSS | JAVASCRIPT | JQUERY | Frontend Developer |
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        <h1>
          {" "}
          from India{" "}
          <span role="img" aria-label="India Flag">
          🇮🇳
          </span>
        
        </h1>
        
      
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://drive.google.com/file/d/16JLGtdNlMKlM463G10J1MPzSq8OmhaAQ/view?usp=sharing"  
        >
        <button className="button" onClick={() => scroll.scrollToBottom()}>
        See My Resume   

        </button>
        </a>
      
        
        
          
        
      </motion.div>
      

      <motion.div
        className="png-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="png" src={man} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;